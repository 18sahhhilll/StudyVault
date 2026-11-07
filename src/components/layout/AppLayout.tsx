import React, { useState } from 'react';
import {
  LayoutDashboard,
  Compass,
  HelpCircle,
  FileText,
  Search,
  Moon,
  Sun,
  Menu,
  X,
  RotateCcw,
  BookOpen,
  BrainCircuit,
  GraduationCap
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface AppLayoutProps {
  currentTab: 'dashboard' | 'subjects' | 'important' | 'revision';
  onSelectTab: (tab: 'dashboard' | 'subjects' | 'important' | 'revision') => void;
  onOpenSearch: () => void;
  completedCount: number;
  totalQuestions: number;
  overallPercentage: number;
  onResetProgress: () => void;
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  completedCount,
  totalQuestions,
  overallPercentage,
  onResetProgress,
  children,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'subjects', label: 'Subjects', icon: Compass },
    { id: 'important', label: 'Question Bank', icon: HelpCircle },
    { id: 'revision', label: 'Revision Mode', icon: FileText },
  ] as const;

  return (
    <div className="min-h-screen bg-academic-50 dark:bg-academic-950 text-academic-900 dark:text-academic-100 flex flex-col font-sans selection:bg-blue-500/20 selection:text-blue-700 dark:selection:text-blue-300">
      {/* Top Mobile Bar */}
      <header className="lg:hidden h-14 border-b border-academic-200 dark:border-academic-800 bg-white dark:bg-academic-900 px-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-academic-600 dark:text-academic-300 hover:bg-academic-100 dark:hover:bg-academic-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              SV
            </div>
            <span className="font-bold text-sm tracking-tight text-academic-900 dark:text-academic-50">
              StudyVault
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenSearch}
            className="p-1.5 rounded-lg text-academic-500 hover:text-academic-900 dark:hover:text-academic-100 hover:bg-academic-100 dark:hover:bg-academic-800"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg text-academic-500 hover:text-academic-900 dark:hover:text-academic-100 hover:bg-academic-100 dark:hover:bg-academic-800"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar / Mobile Drawer */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-academic-900 border-r border-academic-200 dark:border-academic-800 flex flex-col justify-between transition-transform duration-200 lg:static lg:translate-x-0 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Top Brand & Search */}
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="font-bold text-sm tracking-tight text-academic-900 dark:text-academic-50 leading-none">
                    StudyVault
                  </h1>
                  <span className="text-[10px] text-academic-500 font-medium">Academic Study Library</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="lg:hidden p-1 rounded text-academic-400 hover:text-academic-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Trigger Button */}
            <button
              onClick={() => {
                onOpenSearch();
                setMobileMenuOpen(false);
              }}
              className="w-full px-3 py-2 text-xs rounded-lg border border-academic-200 dark:border-academic-800 bg-academic-50 dark:bg-academic-950/60 text-academic-500 hover:text-academic-800 dark:hover:text-academic-200 hover:border-academic-300 dark:hover:border-academic-700 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-academic-400" />
                <span>Search library...</span>
              </div>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-academic-200/60 dark:bg-academic-800 text-academic-500 border border-academic-300 dark:border-academic-700">
                Ctrl K
              </kbd>
            </button>

            {/* Navigation Tabs */}
            <nav className="space-y-1 pt-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const active = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full px-3 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2.5 transition-colors ${
                      active
                        ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50'
                        : 'text-academic-600 dark:text-academic-400 hover:bg-academic-100/60 dark:hover:bg-academic-800/60 hover:text-academic-900 dark:hover:text-academic-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Sidebar: Progress & Settings */}
          <div className="p-4 border-t border-academic-200 dark:border-academic-800 space-y-4">
            {/* Real Progress Widget */}
            <div className="p-3 rounded-lg bg-academic-50 dark:bg-academic-950/60 border border-academic-200 dark:border-academic-800/80 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-academic-600 dark:text-academic-400">Library Progress</span>
                <span className="font-mono text-academic-900 dark:text-academic-100">{overallPercentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-academic-200 dark:bg-academic-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${overallPercentage}%` }}
                />
              </div>
              <div className="text-[11px] text-academic-500 flex items-center justify-between">
                <span>{completedCount} solved</span>
                <span>{totalQuestions - completedCount} pending</span>
              </div>
            </div>

            {/* Bottom Actions: Theme Toggle & Reset Progress */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-academic-500 hover:text-academic-800 dark:hover:text-academic-200 hover:bg-academic-100 dark:hover:bg-academic-800 transition-colors flex items-center gap-1.5 text-xs font-medium"
                title="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-academic-600" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setShowResetConfirm(true)}
                className="p-2 rounded-lg text-academic-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                title="Reset study progress"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Backdrop for mobile drawer */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto min-w-0 p-3.5 sm:p-6 lg:p-10 max-w-7xl mx-auto w-full pb-24 lg:pb-10">
          {children}
        </main>
      </div>

      {/* Floating Mobile Bottom Navigation Bar */}
      <nav aria-label="Mobile Navigation" className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 dark:bg-academic-900/95 backdrop-blur-md border-t border-academic-200 dark:border-academic-800 px-2 py-1.5 flex items-center justify-around shadow-lg">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-medium transition-all ${
                active
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-academic-500 hover:text-academic-800 dark:hover:text-academic-200'
              }`}
            >
              <div className={`p-1 rounded-md transition-colors ${active ? 'bg-blue-100/70 dark:bg-blue-950/70' : ''}`}>
                <Icon className={`w-4 h-4 ${active ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
              </div>
              <span className="mt-0.5 leading-none">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-sm p-6 bg-white dark:bg-academic-900 rounded-xl border border-academic-200 dark:border-academic-800 shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-academic-900 dark:text-academic-100">
                Reset All Progress?
              </h3>
              <p className="text-xs text-academic-500 mt-1 leading-relaxed">
                This will reset all your completed questions, bookmarks, and personal notes stored in your browser's local storage. This action cannot be undone.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-academic-200 dark:border-academic-700 text-academic-700 dark:text-academic-300 hover:bg-academic-100 dark:hover:bg-academic-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowResetConfirm(false);
                }}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Yes, Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
