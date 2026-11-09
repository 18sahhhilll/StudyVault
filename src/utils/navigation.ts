import { getSubjectById, getUnitById, getQuestionById } from '@/data';

export type TabType = 'dashboard' | 'subjects' | 'papers' | 'important' | 'revision';

export interface AppRoute {
  tab: TabType;
  subjectId?: string | null;
  unitId?: string | null;
  questionId?: string | null;
}

export interface BreadcrumbItem {
  label: string;
  route: AppRoute;
  path: string;
  isCurrent: boolean;
}

/**
 * Converts an AppRoute state object into a clean standard URL pathname.
 */
export function routeToPath(route: AppRoute): string {
  if (route.tab === 'dashboard') {
    return '/';
  }

  if (route.tab === 'subjects') {
    if (route.subjectId && route.unitId && route.questionId) {
      return `/subjects/${encodeURIComponent(route.subjectId)}/${encodeURIComponent(route.unitId)}/${encodeURIComponent(route.questionId)}`;
    }
    if (route.subjectId && route.unitId) {
      return `/subjects/${encodeURIComponent(route.subjectId)}/${encodeURIComponent(route.unitId)}`;
    }
    if (route.subjectId) {
      return `/subjects/${encodeURIComponent(route.subjectId)}`;
    }
    return '/subjects';
  }

  if (route.tab === 'papers') {
    return '/papers';
  }

  if (route.tab === 'important') {
    return '/important';
  }

  if (route.tab === 'revision') {
    return '/revision';
  }

  return '/';
}

/**
 * Parses current window location (pathname, hash, search) into a validated AppRoute.
 * Handles edge cases like direct URL entry, refreshes, hash routing fallback, and missing resources.
 */
export function parseCurrentLocation(): AppRoute {
  if (typeof window === 'undefined') {
    return { tab: 'dashboard' };
  }

  let rawPath = window.location.pathname;

  // Check if hash has route e.g. #/subjects/machine-learning
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    rawPath = hash.slice(1);
  }

  // Also support search params fallback e.g. ?tab=subjects&subject=...
  const searchParams = new URLSearchParams(window.location.search);
  const paramTab = searchParams.get('tab') as TabType | null;

  // Clean trailing and double slashes
  const cleanPath = rawPath.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length === 0 || cleanPath === '/' || cleanPath === '/dashboard') {
    if (paramTab && ['dashboard', 'subjects', 'papers', 'important', 'revision'].includes(paramTab)) {
      return parseParamsFallback(paramTab, searchParams);
    }
    return { tab: 'dashboard' };
  }

  const first = segments[0]?.toLowerCase();

  // Route: /papers
  if (first === 'papers' || first === 'solved-pyqs') {
    return { tab: 'papers' };
  }

  // Route: /important or /question-bank
  if (first === 'important' || first === 'question-bank' || first === 'questions') {
    return { tab: 'important' };
  }

  // Route: /revision
  if (first === 'revision' || first === 'revision-mode') {
    return { tab: 'revision' };
  }

  // Route: /subjects ...
  if (first === 'subjects') {
    const subjectId = segments[1] ? decodeURIComponent(segments[1]) : null;
    const unitId = segments[2] ? decodeURIComponent(segments[2]) : null;
    const questionId = segments[3] ? decodeURIComponent(segments[3]) : null;

    if (!subjectId) {
      return { tab: 'subjects' };
    }

    // Validate subject exists
    const subject = getSubjectById(subjectId);
    if (!subject) {
      return { tab: 'subjects' };
    }

    if (!unitId) {
      return { tab: 'subjects', subjectId };
    }

    // Validate unit exists
    const unit = getUnitById(subjectId, unitId);
    if (!unit) {
      return { tab: 'subjects', subjectId };
    }

    if (!questionId) {
      // Pick first question in unit if available
      const firstQ = unit.questions[0]?.id;
      return {
        tab: 'subjects',
        subjectId,
        unitId,
        questionId: firstQ || null,
      };
    }

    // Validate question exists
    const question = getQuestionById(subjectId, unitId, questionId);
    if (!question) {
      const firstQ = unit.questions[0]?.id;
      return {
        tab: 'subjects',
        subjectId,
        unitId,
        questionId: firstQ || null,
      };
    }

    return {
      tab: 'subjects',
      subjectId,
      unitId,
      questionId,
    };
  }

  // Fallback check query params
  if (paramTab && ['dashboard', 'subjects', 'papers', 'important', 'revision'].includes(paramTab)) {
    return parseParamsFallback(paramTab, searchParams);
  }

  return { tab: 'dashboard' };
}

function parseParamsFallback(tab: TabType, params: URLSearchParams): AppRoute {
  if (tab === 'subjects') {
    const subjectId = params.get('subject') || params.get('subjectId');
    const unitId = params.get('unit') || params.get('unitId');
    const questionId = params.get('question') || params.get('questionId');

    if (subjectId && getSubjectById(subjectId)) {
      if (unitId && getUnitById(subjectId, unitId)) {
        if (questionId && getQuestionById(subjectId, unitId, questionId)) {
          return { tab, subjectId, unitId, questionId };
        }
        return { tab, subjectId, unitId };
      }
      return { tab, subjectId };
    }
    return { tab: 'subjects' };
  }
  return { tab };
}

/**
 * Returns the sensible parent route to navigate to when there is no previous internal history.
 * Guarantees the user is NEVER kicked out to an external website.
 */
export function getParentRoute(route: AppRoute): AppRoute | null {
  // If reading a question: parent is the Subject Detail page
  if (route.tab === 'subjects' && route.subjectId && route.questionId) {
    return {
      tab: 'subjects',
      subjectId: route.subjectId,
    };
  }

  // If viewing a unit: parent is the Subject Detail page
  if (route.tab === 'subjects' && route.subjectId && route.unitId) {
    return {
      tab: 'subjects',
      subjectId: route.subjectId,
    };
  }

  // If viewing a subject: parent is the Subjects Listing
  if (route.tab === 'subjects' && route.subjectId) {
    return {
      tab: 'subjects',
    };
  }

  // If on Subjects list, Papers, Important, or Revision: parent is Dashboard
  if (route.tab !== 'dashboard') {
    return {
      tab: 'dashboard',
    };
  }

  // On Dashboard: root level, no parent
  return null;
}

/**
 * Generates an interactive breadcrumb trail for the active route.
 */
export function getRouteBreadcrumbs(route: AppRoute): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [
    {
      label: 'Dashboard',
      route: { tab: 'dashboard' },
      path: '/',
      isCurrent: route.tab === 'dashboard',
    },
  ];

  if (route.tab === 'dashboard') {
    return crumbs;
  }

  if (route.tab === 'papers') {
    crumbs.push({
      label: 'Solved PYQs',
      route: { tab: 'papers' },
      path: '/papers',
      isCurrent: true,
    });
    return crumbs;
  }

  if (route.tab === 'important') {
    crumbs.push({
      label: 'Question Bank',
      route: { tab: 'important' },
      path: '/important',
      isCurrent: true,
    });
    return crumbs;
  }

  if (route.tab === 'revision') {
    crumbs.push({
      label: 'Revision Mode',
      route: { tab: 'revision' },
      path: '/revision',
      isCurrent: true,
    });
    return crumbs;
  }

  if (route.tab === 'subjects') {
    crumbs.push({
      label: 'Subjects',
      route: { tab: 'subjects' },
      path: '/subjects',
      isCurrent: !route.subjectId,
    });

    if (route.subjectId) {
      const subject = getSubjectById(route.subjectId);
      const subjectName = subject ? subject.name : route.subjectId;
      crumbs.push({
        label: subjectName,
        route: { tab: 'subjects', subjectId: route.subjectId },
        path: `/subjects/${encodeURIComponent(route.subjectId)}`,
        isCurrent: !route.unitId && !route.questionId,
      });

      if (route.unitId) {
        const unit = getUnitById(route.subjectId, route.unitId);
        const unitLabel = unit ? `Unit ${unit.unitNumber}` : route.unitId;

        if (route.questionId) {
          crumbs.push({
            label: unitLabel,
            route: { tab: 'subjects', subjectId: route.subjectId, unitId: route.unitId },
            path: `/subjects/${encodeURIComponent(route.subjectId)}/${encodeURIComponent(route.unitId)}`,
            isCurrent: false,
          });

          const question = getQuestionById(route.subjectId, route.unitId, route.questionId);
          const qText = question ? `Q${question.qNumber}` : 'Question';
          crumbs.push({
            label: qText,
            route,
            path: routeToPath(route),
            isCurrent: true,
          });
        } else {
          crumbs.push({
            label: unitLabel,
            route,
            path: routeToPath(route),
            isCurrent: true,
          });
        }
      }
    }
  }

  return crumbs;
}

/**
 * Returns dynamic document page title for the active route.
 */
export function getRouteTitle(route: AppRoute): string {
  if (route.tab === 'dashboard') {
    return 'StudyVault — Academic Study Library & Exam Prep';
  }
  if (route.tab === 'papers') {
    return 'Solved University Question Papers — StudyVault';
  }
  if (route.tab === 'important') {
    return 'Question Bank & High Frequency Questions — StudyVault';
  }
  if (route.tab === 'revision') {
    return 'Fast Revision Mode — StudyVault';
  }
  if (route.tab === 'subjects') {
    if (route.subjectId && route.unitId && route.questionId) {
      const q = getQuestionById(route.subjectId, route.unitId, route.questionId);
      const s = getSubjectById(route.subjectId);
      if (q && s) {
        return `Q${q.qNumber}: ${q.shortTitle || q.title} — ${s.name} | StudyVault`;
      }
    }
    if (route.subjectId) {
      const s = getSubjectById(route.subjectId);
      if (s) {
        return `${s.name} (${s.code}) — StudyVault`;
      }
    }
    return 'All Engineering Subjects — StudyVault';
  }
  return 'StudyVault — Academic Study Library';
}
