'use client';

import { useState } from 'react';
import { Search, DollarSign, Clock, MapPin } from 'lucide-react';
import { SAMPLE_CROPS, SAMPLE_MARKETS, MICRO_TRANSACTION_FEES } from '@/lib/constants';
import { formatPrice, generateMockPrice } from '@/lib/utils';
import { MarketPriceCard } from './MarketPriceCard';


export function PriceDiscovery() {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedMarket, setSelectedMarket] = useState('');
  const [priceData, setPriceData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePriceCheck = async () => {
    if (!selectedCrop || !selectedMarket) return;

    setIsLoading(true);

    // Simulate micro-transaction and API call
    setTimeout(() => {
      const crop = SAMPLE_CROPS.find(c => c.id === selectedCrop);
      const market = SAMPLE_MARKETS.find(m => m.id === selectedMarket);

      // Generate mock price data
      const basePrice = Math.random() * 5 + 1; // $1-6 base price
      const currentPrice = generateMockPrice(basePrice);
      const yesterdayPrice = generateMockPrice(basePrice);
      const change = ((currentPrice - yesterdayPrice) / yesterdayPrice) * 100;

      setPriceData({
        crop: crop?.name,
        market: market?.name,
        region: market?.region,
        currentPrice,
        yesterdayPrice,
        change,
        unit: crop?.unit,
        lastUpdated: new Date().toISOString(),
        source: 'Market Data Aggregator',
      });

      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="prices" className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Real-time Price Discovery</h2>
        <p className="text-muted-foreground">
          Get live market prices for your crops with transparent micro-transaction fees
        </p>
      </div>

      <div className="card p-6 space-y-6">
        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Select Crop</label>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="input"
            >
              <option value="">Choose a crop...</option>
              {SAMPLE_CROPS.map((crop) => (
                <option key={crop.id} value={crop.id}>
                  {crop.name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Select Market</label>
            <select
              value={selectedMarket}
              onChange={(e) => setSelectedMarket(e.target.value)}
              className="input"
            >
              <option value="">Choose a market...</option>
              {SAMPLE_MARKETS.map((market) => (
                <option key={market.id} value={market.id}>
                  {market.name} ({market.region})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Transaction Fee Info */}
        <div className="bg-muted/50 rounded-md p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Price lookup fee: {formatPrice(MICRO_TRANSACTION_FEES.PRICE_LOOKUP)}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">Powered by Base</span>
        </div>

        {/* Search Button */}
        <button
          onClick={handlePriceCheck}
          disabled={!selectedCrop || !selectedMarket || isLoading}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              Get Price ({formatPrice(MICRO_TRANSACTION_FEES.PRICE_LOOKUP)})
            </>
          )}
        </button>

        {/* Price Results */}
        {priceData && (
          <div className="animate-fade-in">
            <MarketPriceCard data={priceData} />
          </div>
        )}
      </div>

      {/* Recent Searches */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold mb-4">Popular Price Checks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { crop: 'Tomatoes', market: 'Chicago Mercantile', price: 2.45, change: 3.2 },
            { crop: 'Corn', market: 'California Central Valley', price: 5.12, change: -1.8 },
            { crop: 'Wheat', market: 'Atlanta Regional', price: 6.78, change: 0.5 },
            { crop: 'Soybeans', market: 'New York Terminal', price: 12.34, change: 2.1 },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
              <div className="space-y-1">
                <div className="font-medium text-sm">{item.crop}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {item.market}
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="font-semibold">{formatPrice(item.price)}</div>
                <div className={`text-xs flex items-center gap-1 ${
                  item.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  <Clock className="w-3 h-3" />
                  {item.change >= 0 ? '+' : ''}{item.change}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
