import { AppShell } from '@/components/AppShell';
import { PriceDiscovery } from '@/components/PriceDiscovery';
import { SupplyChainInsights } from '@/components/SupplyChainInsights';
import { BuyerMarketplace } from '@/components/BuyerMarketplace';
import { HeroSection } from '@/components/HeroSection';

export const metadata = {
  title: 'AgroChain Connect',
  description: 'Transparent pricing and direct markets for farmers, powered by Base.',
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/og`,
    'fc:frame:button:1': 'Get Started',
    'fc:frame:button:1:action': 'post',
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/frame`,
  },
};

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <HeroSection />
        <PriceDiscovery />
        <SupplyChainInsights />
        <BuyerMarketplace />
      </div>
    </AppShell>
  );
}
