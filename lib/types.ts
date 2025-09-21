// Core data model types
export interface Farmer {
  farmerId: string;
  walletAddress: string;
  location: string;
  preferredCrops: string[];
}

export interface Crop {
  cropId: string;
  name: string;
  unitOfMeasure: string;
}

export interface Market {
  marketId: string;
  name: string;
  region: string;
}

export interface PriceDataPoint {
  dataPointId: string;
  cropId: string;
  marketId: string;
  timestamp: string;
  pricePerUnit: number;
  source: string;
}

export interface Buyer {
  buyerId: string;
  name: string;
  contactInfo: string;
  verified: boolean;
  location: string;
  cropsSourced: string[];
  rating?: number;
  description?: string;
}

export interface BuyerConnectionRequest {
  requestId: string;
  farmerId: string;
  buyerId: string;
  timestamp: string;
  status: 'pending' | 'accepted' | 'declined';
}

// Supply chain data types
export interface SupplyChainStep {
  step: string;
  markup: number;
  description: string;
}

export interface SupplyChainData {
  crop: string;
  farmGatePrice: number;
  retailPrice: number;
  steps: SupplyChainStep[];
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// Transaction types
export interface MicroTransaction {
  id: string;
  amount: number;
  type: 'price_lookup' | 'buyer_connection' | 'premium_access';
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
}
