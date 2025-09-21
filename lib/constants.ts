// Sample data for the MVP
export const SAMPLE_CROPS: Array<{ id: string; name: string; unit: string }> = [
  { id: 'tomatoes', name: 'Tomatoes', unit: 'per lb' },
  { id: 'corn', name: 'Corn', unit: 'per bushel' },
  { id: 'wheat', name: 'Wheat', unit: 'per bushel' },
  { id: 'soybeans', name: 'Soybeans', unit: 'per bushel' },
  { id: 'potatoes', name: 'Potatoes', unit: 'per cwt' },
  { id: 'apples', name: 'Apples', unit: 'per lb' },
];

export const SAMPLE_MARKETS: Array<{ id: string; name: string; region: string }> = [
  { id: 'midwest', name: 'Chicago Mercantile', region: 'Midwest' },
  { id: 'california', name: 'California Central Valley', region: 'West Coast' },
  { id: 'southeast', name: 'Atlanta Regional', region: 'Southeast' },
  { id: 'northeast', name: 'New York Terminal', region: 'Northeast' },
  { id: 'southwest', name: 'Texas Gulf Coast', region: 'Southwest' },
];

export const SAMPLE_BUYERS = [
  {
    buyerId: 'buyer-1',
    name: 'Fresh Valley Distributors',
    contactInfo: 'contact@freshvalley.com',
    verified: true,
    location: 'Chicago, IL',
    cropsSourced: ['tomatoes', 'corn', 'potatoes'],
    rating: 4.8,
    description: 'Leading distributor serving Midwest restaurants and retailers.',
  },
  {
    buyerId: 'buyer-2',
    name: 'Green Harvest Co-op',
    contactInfo: 'buyers@greenharvest.org',
    verified: true,
    location: 'Sacramento, CA',
    cropsSourced: ['apples', 'tomatoes', 'wheat'],
    rating: 4.6,
    description: 'Organic-focused cooperative supporting sustainable farming.',
  },
  {
    buyerId: 'buyer-3',
    name: 'Metro Food Services',
    contactInfo: 'procurement@metrofood.com',
    verified: true,
    location: 'Atlanta, GA',
    cropsSourced: ['corn', 'soybeans', 'potatoes'],
    rating: 4.7,
    description: 'Large-scale food service provider for institutional clients.',
  },
];

export const MICRO_TRANSACTION_FEES = {
  PRICE_LOOKUP: 0.01,
  BUYER_CONNECTION: 0.05,
  PREMIUM_ACCESS: 0.10,
} as const;

export const SUPPLY_CHAIN_DATA = {
  tomatoes: {
    crop: 'Tomatoes',
    farmGatePrice: 1.20,
    retailPrice: 3.50,
    steps: [
      { step: 'Farm Gate', markup: 0, description: 'Direct from farmer' },
      { step: 'Packing House', markup: 15, description: 'Cleaning, sorting, packaging' },
      { step: 'Distributor', markup: 25, description: 'Transportation and logistics' },
      { step: 'Retailer', markup: 45, description: 'Store operations and profit' },
    ],
  },
  corn: {
    crop: 'Corn',
    farmGatePrice: 4.50,
    retailPrice: 6.80,
    steps: [
      { step: 'Farm Gate', markup: 0, description: 'Direct from farmer' },
      { step: 'Grain Elevator', markup: 8, description: 'Storage and handling' },
      { step: 'Processor', markup: 20, description: 'Processing and packaging' },
      { step: 'Distributor', markup: 18, description: 'Transportation' },
      { step: 'Retailer', markup: 25, description: 'Store operations' },
    ],
  },
};
