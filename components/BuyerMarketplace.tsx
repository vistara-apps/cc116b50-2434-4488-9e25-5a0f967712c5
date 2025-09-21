'use client';

import { useState } from 'react';
import { Search, Star, MapPin, MessageCircle, Shield, Filter } from 'lucide-react';
import { SAMPLE_BUYERS, MICRO_TRANSACTION_FEES } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';
import { BuyerProfileCard } from './BuyerProfileCard';

export function BuyerMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBuyers = SAMPLE_BUYERS.filter(buyer => {
    const matchesSearch = buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         buyer.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !selectedLocation || buyer.location.includes(selectedLocation);
    const matchesCrop = !selectedCrop || buyer.cropsSourced.includes(selectedCrop);
    
    return matchesSearch && matchesLocation && matchesCrop;
  });

  const locations = [...new Set(SAMPLE_BUYERS.map(buyer => buyer.location.split(',')[1]?.trim()))].filter(Boolean);
  const crops = [...new Set(SAMPLE_BUYERS.flatMap(buyer => buyer.cropsSourced))];

  return (
    <section id="buyers" className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Direct Buyer Marketplace</h2>
        <p className="text-muted-foreground">
          Connect directly with verified buyers and eliminate middlemen
        </p>
      </div>

      <div className="card p-6 space-y-6">
        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search buyers by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="btn-secondary flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg animate-slide-up">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="input"
                >
                  <option value="">All locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Crop Interest</label>
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="input"
                >
                  <option value="">All crops</option>
                  {crops.map((crop) => (
                    <option key={crop} value={crop}>
                      {crop.charAt(0).toUpperCase() + crop.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Connection Fee Info */}
        <div className="bg-muted/50 rounded-md p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Buyer connection fee: {formatPrice(MICRO_TRANSACTION_FEES.BUYER_CONNECTION)}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">Secure transactions on Base</span>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filteredBuyers.length} verified buyer{filteredBuyers.length !== 1 ? 's' : ''} found
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-3 h-3" />
            All buyers verified
          </div>
        </div>

        {/* Buyer Cards */}
        <div className="space-y-4">
          {filteredBuyers.length > 0 ? (
            filteredBuyers.map((buyer) => (
              <BuyerProfileCard key={buyer.buyerId} buyer={buyer} />
            ))
          ) : (
            <div className="text-center py-8 space-y-2">
              <p className="text-muted-foreground">No buyers found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLocation('');
                  setSelectedCrop('');
                }}
                className="btn-secondary"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Marketplace Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-primary">{SAMPLE_BUYERS.length}</div>
          <div className="text-sm text-muted-foreground">Verified Buyers</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-primary">
            {(SAMPLE_BUYERS.reduce((acc, buyer) => acc + (buyer.rating || 0), 0) / SAMPLE_BUYERS.length).toFixed(1)}
          </div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-primary">{crops.length}</div>
          <div className="text-sm text-muted-foreground">Crop Types</div>
        </div>
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-primary">{locations.length}</div>
          <div className="text-sm text-muted-foreground">Regions</div>
        </div>
      </div>
    </section>
  );
}
