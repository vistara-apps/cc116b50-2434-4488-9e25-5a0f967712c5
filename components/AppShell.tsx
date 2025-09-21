'use client';

import { useState } from 'react';
import { Sprout, Menu, X, Home, TrendingUp, Users, BarChart3 } from 'lucide-react';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Prices', href: '#prices', icon: TrendingUp },
    { name: 'Supply Chain', href: '#supply-chain', icon: BarChart3 },
    { name: 'Buyers', href: '#buyers', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface border-b border-gray-200 sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">
                AgroChain
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 animate-slide-up">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-gray-200 mt-12">
        <div className="container py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Sprout className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">AgroChain Connect</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transparent pricing and direct markets for farmers, powered by Base.
            </p>
            <div className="flex justify-center gap-4 text-xs text-muted-foreground">
              <span>Built on Base</span>
              <span>•</span>
              <span>Powered by OnchainKit</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
