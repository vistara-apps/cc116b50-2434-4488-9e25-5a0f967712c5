# AgroChain Connect

A blockchain-powered platform for farmers to discover real-time produce prices, understand supply chain markups, and connect directly with buyers, built for the Base ecosystem.

## Features

- **Real-time Price Discovery**: Get live aggregated pricing data for crops across regional markets
- **Supply Chain Transparency**: Visualize cost breakdowns and markups through the supply chain
- **Direct Buyer Marketplace**: Connect with verified wholesale buyers, restaurants, and retailers
- **Micro-transaction Model**: Pay small fees for price lookups and buyer connections using Base

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agrochain-connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/):
   ```
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # MiniKit and OnchainKit providers
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AppShell.tsx       # Main app layout
│   ├── HeroSection.tsx    # Landing hero section
│   ├── PriceDiscovery.tsx # Price lookup feature
│   ├── SupplyChainInsights.tsx # Supply chain visualization
│   ├── BuyerMarketplace.tsx    # Buyer directory
│   └── ...
├── lib/                   # Utilities and types
│   ├── types.ts          # TypeScript type definitions
│   ├── constants.ts      # App constants and sample data
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Core Features

### 1. Price Discovery
- Select crop and market region
- Pay micro-transaction fee (e.g., $0.01) for real-time price data
- View current prices, historical changes, and market trends
- Set price alerts for specific crops

### 2. Supply Chain Transparency
- Interactive charts showing price markups at each stage
- Detailed breakdown from farm gate to retail
- Educational insights about supply chain dynamics
- Compare different crops and their markup patterns

### 3. Buyer Marketplace
- Browse verified buyers by location and crop interest
- View buyer profiles with ratings and descriptions
- Connect directly with buyers via micro-transaction
- Filter and search functionality

## Business Model

- **Micro-transactions**: Small fees for price lookups ($0.01) and buyer connections ($0.05)
- **Base Integration**: Leverages Base's low-cost L2 for affordable transactions
- **Scalable**: Low-friction payment model that grows with usage

## Development

### Adding New Features

1. **Data Models**: Update types in `lib/types.ts`
2. **Sample Data**: Add test data in `lib/constants.ts`
3. **Components**: Create new components in `components/`
4. **Styling**: Use Tailwind classes following the design system

### Design System

- **Colors**: Agricultural theme with greens and earth tones
- **Typography**: Clean, readable fonts optimized for mobile
- **Components**: Consistent card-based layout with proper spacing
- **Animations**: Subtle transitions for better UX

## Deployment

The app is optimized for deployment on Vercel:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions or support, please open an issue on GitHub or contact the development team.
