import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Trash2 } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: '',
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error?.message || 'Unknown error' };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleClearStorageAndReload = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (e) {
      console.error('Failed to clear storage:', e);
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-amber-50/50 flex items-center justify-center p-4 font-sans text-stone-900">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-stone-200 p-6 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-bold text-stone-900">
                কিছু সমস্যা হয়েছে / Something went wrong
              </h2>
              <p className="text-xs text-stone-500">
                অ্যাপ্লিকেশনটি পুনরায় লোড করুন অথবা লোকাল ক্যাশ সাফ করুন।
              </p>
            </div>

            {this.state.errorMessage && (
              <div className="p-3 bg-stone-100 rounded-xl text-[11px] text-stone-600 font-mono break-words text-left max-h-24 overflow-y-auto">
                {this.state.errorMessage}
              </div>
            )}

            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={this.handleReload}
                className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition shadow-sm"
              >
                <RefreshCw className="w-4 h-4" />
                <span>রিলোড করুন / Reload App</span>
              </button>

              <button
                onClick={this.handleClearStorageAndReload}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 active:scale-[0.98] text-stone-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition"
              >
                <Trash2 className="w-4 h-4 text-stone-500" />
                <span>ক্যাশ রিসেট ও রিলোড / Clear Saved Data & Reload</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
