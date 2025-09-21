'use client';

import { TrendingUp, TrendingDown, Clock, MapPin, Database } from 'lucide-react';
import { formatPrice, formatTimestamp } from '@/lib/utils';

interface MarketPriceCardProps {
  data: {
    crop: string;
    market: string;
    region: string;
    currentPrice: number;
    yesterdayPrice: number;
    change: number;
    unit: string;
    lastUpdated: string;
    source: string;
  };
}

export function MarketPriceCard({ data }: MarketPriceCardProps) {
  const isPositive = data.change >= 0;

  return (
    <div className="card p-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-foreground">{data.crop}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{data.market} • {data.region}</span>
          </div>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
          isPositive 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          {isPositive ? '+' : ''}{data.change.toFixed(2)}%
        </div>
      </div>

      {/* Price Display */}
      <div className="space-y-2">
        <div className="text-3xl font-bold text-foreground">
          {formatPrice(data.currentPrice)}
          <span className="text-base font-normal text-muted-foreground ml-2">
            {data.unit}
          </span>
        </div>
        <div className="text-sm text-muted-foreground">
          Yesterday: {formatPrice(data.yesterdayPrice)} {data.unit}
        </div>
      </div>

      {/* Metadata */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="w-3 h-3" />
          Updated {formatTimestamp(data.lastUpdated)}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Database className="w-3 h-3" />
          {data.source}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button className="btn-secondary flex-1 text-sm">
          Set Price Alert
        </button>
        <button className="btn-primary flex-1 text-sm">
          Find Buyers
        </button>
      </div>
    </div>
  );
}
