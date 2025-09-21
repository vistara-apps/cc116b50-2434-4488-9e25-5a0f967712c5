# AgroChain Connect

A blockchain-powered platform for farmers to discover real-time produce prices, understand supply chain markups, and connect directly with buyers, built for the Base ecosystem.

## 🚀 Features

### Core Features
- **Real-time Price Discovery**: Query live aggregated pricing data for crops in various regional markets
- **Supply Chain Transparency**: Visualize cost breakdowns and markups by intermediaries
- **Direct Buyer Marketplace**: Curated list of verified wholesale buyers and retailers
- **Micro-transaction Model**: Pay small fees ($0.01-$0.05) per price lookup or buyer connection

### Technical Features
- **Base Mini App**: Fully functional Farcaster Frame integration
- **Web App**: Responsive Next.js application with modern UI/UX
- **Blockchain Integration**: Built on Base network with micro-transactions
- **Real-time Data**: Mock data simulation with realistic pricing fluctuations

## 🛠️ Tech Stack

- **Framework**: Next.js 15.0.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Blockchain**: Base network via OnchainKit
- **Frames**: Farcaster Frames via frames.js
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Coinbase Developer Platform account (for OnchainKit API key)
- Neynar account (for Frame validation)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/vistara-apps/cc116b50-2434-4488-9e25-5a0f967712c5.git
   cd cc116b50-2434-4488-9e25-5a0f967712c5
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your API keys:
   ```
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
   NEYNAR_API_KEY=your_neynar_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/frame/         # Farcaster Frame API routes
│   ├── og/                # Open Graph image generation
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── providers.tsx      # Context providers
├── components/            # React components
│   ├── AppShell.tsx       # Main app layout
│   ├── HeroSection.tsx    # Landing section
│   ├── PriceDiscovery.tsx # Price lookup interface
│   ├── SupplyChainInsights.tsx # Markup visualization
│   ├── BuyerMarketplace.tsx    # Buyer listing
│   └── BuyerProfileCard.tsx    # Individual buyer cards
├── lib/                   # Utilities and constants
│   ├── constants.ts       # App constants and mock data
│   ├── types.ts           # TypeScript type definitions
│   └── utils.ts           # Helper functions
└── public/                # Static assets
```

## 🎯 User Flows

### Farmer Onboarding & Price Check
1. User clicks MiniApp Frame
2. Brief intro to AgroChain Connect
3. Wallet connection prompt
4. Crop and market selection
5. Price display with micro-transaction fee
6. Optional buyer connection

### Buyer Discovery
1. Navigate to Buyers tab
2. Filter buyers by location and crops
3. View buyer profiles
4. Initiate contact with micro-transaction

## 🔧 API Documentation

### Frame API (`/api/frame`)
Handles Farcaster Frame interactions for the Base Mini App.

**Endpoint**: `POST /api/frame`

**Request Body**:
```json
{
  "untrustedData": {
    "fid": 123,
    "buttonIndex": 1,
    "state": "{\"page\":\"home\"}"
  },
  "trustedData": {
    "messageBytes": "..."
  }
}
```

**Response**:
```json
{
  "image": "https://example.com/og-image.png",
  "buttons": [
    {
      "label": "Get Started",
      "action": "post"
    }
  ],
  "state": "{\"page\":\"price-discovery\"}"
}
```

### OG Image API (`/og`)
Generates dynamic Open Graph images for social sharing.

**Endpoint**: `GET /og`

**Response**: PNG image (1200x630)

## 🎨 Design System

### Colors
- **Background**: `hsl(0, 0%, 96%)`
- **Primary**: `hsl(142, 70%, 40%)`
- **Accent**: `hsl(200, 50%, 50%)`
- **Surface**: `hsl(0, 0%, 100%)`

### Typography
- **Display**: `text-3xl font-bold`
- **Heading**: `text-xl font-semibold`
- **Body**: `text-base font-normal`
- **Caption**: `text-sm font-normal`

### Layout
- **Grid**: 12-column fluid with 16px gutter
- **Container**: `max-w-screen-sm px-4`
- **Spacing**: 8px (sm), 16px (md), 24px (lg)

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
```env
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_production_api_key
NEYNAR_API_KEY=your_production_neynar_key
```

## 🔒 Security Considerations

- All micro-transactions use burn addresses for demo purposes
- In production, implement proper smart contracts for fee collection
- Validate all user inputs and API responses
- Use HTTPS in production environments

## 📊 Business Model

### Revenue Streams
- **Micro-transactions**: $0.01 per price lookup, $0.05 per buyer connection
- **Premium Features**: Advanced analytics and historical data
- **Subscription Model**: Monthly access for power users

### Target Users
- Small to medium-sized farmers
- Agricultural cooperatives
- Wholesale buyers and retailers
- Agricultural technology enthusiasts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [OnchainKit](https://onchainkit.xyz/) by Coinbase
- Frame functionality powered by [frames.js](https://framesjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the development team
- Check the [Base documentation](https://docs.base.org/) for blockchain-related questions

