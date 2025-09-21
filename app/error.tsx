'use client';

import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <AlertTriangle className="h-16 w-16 text-red-500" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Something went wrong!
          </h2>
          <p className="text-muted-foreground">
            We encountered an error while loading AgroChain Connect. Please try again.
          </p>
        </div>

        <button
          onClick={reset}
          className="btn-primary inline-flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>

        {error.digest && (
          <p className="text-xs text-muted-foreground">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
