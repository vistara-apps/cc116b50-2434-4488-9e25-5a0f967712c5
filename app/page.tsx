import { AppShell } from '@/components/AppShell';
import { PriceDiscovery } from '@/components/PriceDiscovery';
import { SupplyChainInsights } from '@/components/SupplyChainInsights';
import { BuyerMarketplace } from '@/components/BuyerMarketplace';
import { HeroSection } from '@/components/HeroSection';

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
