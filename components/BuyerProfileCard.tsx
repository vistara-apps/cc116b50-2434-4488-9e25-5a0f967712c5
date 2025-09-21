'use client';

import { useState } from 'react';
import { Star, MapPin, MessageCircle, Shield, Package, Loader2 } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { MICRO_TRANSACTION_FEES } from '@/lib/constants';
import type { Buyer } from '@/lib/types';

interface BuyerProfileCardProps {
  buyer: Buyer;
}

export function BuyerProfileCard({ buyer }: BuyerProfileCardProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Simulate micro-transaction and connection process
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
    }, 2000);
  };

  return (
    <div className="card p-6 space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-foreground">{buyer.name}</h3>
            {buyer.verified && (
              <Shield className="w-4 h-4 text-green-600" />
            )}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {buyer.location}
            </div>
            
            {buyer.rating && (
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {buyer.rating.toFixed(1)}
              </div>
            )}
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-muted-foreground">Connection Fee</div>
          <div className="font-semibold text-primary">
            {formatPrice(MICRO_TRANSACTION_FEES.BUYER_CONNECTION)}
          </div>
        </div>
      </div>

      {/* Description */}
      {buyer.description && (
        <p className="text-muted-foreground text-sm">{buyer.description}</p>
      )}

      {/* Crops Sourced */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Package className="w-4 h-4" />
          Crops Sourced
        </div>
        <div className="flex flex-wrap gap-2">
          {buyer.cropsSourced.map((crop) => (
            <span
              key={crop}
              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
            >
              {crop.charAt(0).toUpperCase() + crop.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Contact: {buyer.contactInfo}
          </div>
          
          {isConnected ? (
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <MessageCircle className="w-4 h-4" />
              Connected
            </div>
          ) : (
            <button
              onClick={handleConnect}
              disabled={isConnecting}
              className="btn-primary flex items-center gap-2 disabled:opacity-50"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4" />
                  Connect ({formatPrice(MICRO_TRANSACTION_FEES.BUYER_CONNECTION)})
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
