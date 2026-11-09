import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  AppRoute,
  TabType,
  routeToPath,
  parseCurrentLocation,
  getParentRoute,
  getRouteBreadcrumbs,
  getRouteTitle,
  BreadcrumbItem,
} from '@/utils/navigation';
import { getSubjectById, getUnitById } from '@/data';

const INTERNAL_NAV_KEY = 'sv_internal_nav_count';

export interface NavigationRouter {
  currentRoute: AppRoute;
  currentPath: string;
  breadcrumbs: BreadcrumbItem[];
  parentRoute: AppRoute | null;
  hasParentRoute: boolean;
  canNavigateBack: boolean;
  navigateTo: (nextRoute: AppRoute, options?: { replace?: boolean }) => void;
  navigateBack: () => void;
  openSubject: (subjectId: string) => void;
  openUnit: (subjectId: string, unitId: string) => void;
  openQuestion: (subjectId: string, unitId: string, questionId: string) => void;
  selectTab: (tab: TabType) => void;
}

export function useNavigationRouter(): NavigationRouter {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => parseCurrentLocation());

  // Track internal navigation depth in memory & session
  const [internalDepth, setInternalDepth] = useState<number>(() => {
    if (typeof window === 'undefined') return 0;
    const historyIdx = window.history.state?.idx;
    if (typeof historyIdx === 'number') {
      return historyIdx;
    }
    const sessionCount = parseInt(sessionStorage.getItem(INTERNAL_NAV_KEY) || '0', 10);
    return isNaN(sessionCount) ? 0 : sessionCount;
  });

  // Keep document title and initial history state synchronized on mount
  useEffect(() => {
    const initialRoute = parseCurrentLocation();
    const initialPath = routeToPath(initialRoute);

    // If initial entry does not have an idx in history state, establish idx: 0
    if (typeof window.history.state?.idx !== 'number') {
      window.history.replaceState({ idx: 0, route: initialRoute }, '', initialPath);
      sessionStorage.setItem(INTERNAL_NAV_KEY, '0');
      setInternalDepth(0);
    } else {
      setInternalDepth(window.history.state.idx);
    }

    document.title = getRouteTitle(initialRoute);
  }, []);

  // Listen to browser Back and Forward buttons (popstate)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const parsed = parseCurrentLocation();
      setCurrentRoute(parsed);
      document.title = getRouteTitle(parsed);

      const stateIdx = event.state?.idx;
      if (typeof stateIdx === 'number') {
        setInternalDepth(stateIdx);
        sessionStorage.setItem(INTERNAL_NAV_KEY, String(stateIdx));
      } else {
        // Fallback decrement if no state idx
        setInternalDepth((prev) => Math.max(0, prev - 1));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Internal navigation execution
  const navigateTo = useCallback(
    (nextRoute: AppRoute, options: { replace?: boolean } = {}) => {
      const targetPath = routeToPath(nextRoute);
      const currentPath = routeToPath(currentRoute);

      if (targetPath === currentPath && !options.replace) {
        return;
      }

      if (options.replace) {
        window.history.replaceState({ idx: internalDepth, route: nextRoute }, '', targetPath);
      } else {
        const nextDepth = internalDepth + 1;
        window.history.pushState({ idx: nextDepth, route: nextRoute }, '', targetPath);
        setInternalDepth(nextDepth);
        sessionStorage.setItem(INTERNAL_NAV_KEY, String(nextDepth));
      }

      setCurrentRoute(nextRoute);
      document.title = getRouteTitle(nextRoute);

      // Smoothly reset scroll on route transition
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [currentRoute, internalDepth]
  );

  // Smart Back button logic: works whether entered directly or internally
  const navigateBack = useCallback(() => {
    // 1. If we have genuine internal navigation history entries in this tab:
    if (internalDepth > 0) {
      window.history.back();
      return;
    }

    // 2. If entered directly (e.g. from Google or new tab):
    // Fall back to the sensible parent route, NEVER exiting to an external search engine!
    const parent = getParentRoute(currentRoute);
    if (parent) {
      navigateTo(parent, { replace: true });
    }
  }, [internalDepth, currentRoute, navigateTo]);

  // Convenience navigation shortcuts
  const openSubject = useCallback(
    (subjectId: string) => {
      navigateTo({
        tab: 'subjects',
        subjectId,
        unitId: null,
        questionId: null,
      });
    },
    [navigateTo]
  );

  const openUnit = useCallback(
    (subjectId: string, unitId: string) => {
      const subject = getSubjectById(subjectId);
      const unit = getUnitById(subjectId, unitId);
      const firstQ = unit?.questions[0]?.id;

      navigateTo({
        tab: 'subjects',
        subjectId,
        unitId,
        questionId: firstQ || null,
      });
    },
    [navigateTo]
  );

  const openQuestion = useCallback(
    (subjectId: string, unitId: string, questionId: string) => {
      navigateTo({
        tab: 'subjects',
        subjectId,
        unitId,
        questionId,
      });
    },
    [navigateTo]
  );

  const selectTab = useCallback(
    (tab: TabType) => {
      // Switching major tabs resets sub-selections
      navigateTo({
        tab,
        subjectId: null,
        unitId: null,
        questionId: null,
      });
    },
    [navigateTo]
  );

  const breadcrumbs = useMemo(() => getRouteBreadcrumbs(currentRoute), [currentRoute]);
  const parentRoute = useMemo(() => getParentRoute(currentRoute), [currentRoute]);
  const hasParentRoute = parentRoute !== null;
  const canNavigateBack = hasParentRoute || internalDepth > 0;
  const currentPath = useMemo(() => routeToPath(currentRoute), [currentRoute]);

  return {
    currentRoute,
    currentPath,
    breadcrumbs,
    parentRoute,
    hasParentRoute,
    canNavigateBack,
    navigateTo,
    navigateBack,
    openSubject,
    openUnit,
    openQuestion,
    selectTab,
  };
}
