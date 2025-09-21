import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse mx-auto"></div>
        </div>
        <p className="text-muted-foreground">Loading AgroChain Connect...</p>
      </div>
    </div>
  );
}
