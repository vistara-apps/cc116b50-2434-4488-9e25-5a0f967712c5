'use client';

import { TrendingUp, Shield, Users } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="text-center space-y-8 py-8">
      {/* Hero Content */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Asir AgroChain
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Blockchain farming platform
        </p>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">
          Integrate pricing, farming, real-time supply agriculture.
          The rate handling struggle on most supply chains.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="btn-primary text-lg px-8 py-3 agricultural-gradient border-0 hover:opacity-90">
          Get in Today
        </button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="card p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Real-time Pricing</h3>
          <p className="text-muted-foreground text-sm">
            Get live market prices for your crops across different regions
          </p>
        </div>

        <div className="card p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-lg font-semibold">Supply Chain Transparency</h3>
          <p className="text-muted-foreground text-sm">
            Understand markups and costs throughout the supply chain
          </p>
        </div>

        <div className="card p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-agricultural-green/10 rounded-full flex items-center justify-center mx-auto">
            <Users className="w-6 h-6 text-agricultural-green" />
          </div>
          <h3 className="text-lg font-semibold">Direct Buyer Access</h3>
          <p className="text-muted-foreground text-sm">
            Connect directly with verified buyers and cut out middlemen
          </p>
        </div>
      </div>
    </section>
  );
}
