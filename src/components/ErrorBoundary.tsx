import React from 'react';

type ErrorBoundaryState = { hasError: boolean; error?: Error };

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
          <div className="max-w-xl w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-2">Something went wrong</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Please check the console for details.</p>
            {this.state.error && (
              <pre className="text-left text-sm text-red-700 dark:text-red-300 whitespace-pre-wrap overflow-auto max-h-60">
                {String(this.state.error)}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}


