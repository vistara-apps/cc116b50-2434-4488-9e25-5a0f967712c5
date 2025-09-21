'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info, TrendingUp } from 'lucide-react';
import { SUPPLY_CHAIN_DATA } from '@/lib/constants';
import { formatPrice } from '@/lib/utils';

export function SupplyChainInsights() {
  const [selectedCrop, setSelectedCrop] = useState<keyof typeof SUPPLY_CHAIN_DATA>('tomatoes');
  
  const data = SUPPLY_CHAIN_DATA[selectedCrop];
  
  // Prepare chart data
  const chartData = data.steps.map((step, index) => {
    const previousPrice = index === 0 
      ? data.farmGatePrice 
      : data.farmGatePrice * (1 + data.steps.slice(0, index).reduce((acc, s) => acc + s.markup, 0) / 100);
    
    const currentPrice = index === 0 
      ? data.farmGatePrice 
      : data.farmGatePrice * (1 + data.steps.slice(0, index + 1).reduce((acc, s) => acc + s.markup, 0) / 100);

    return {
      step: step.step,
      price: currentPrice,
      markup: step.markup,
      description: step.description,
    };
  });

  return (
    <section id="supply-chain" className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Supply Chain Transparency</h2>
        <p className="text-muted-foreground">
          Understand how your produce is priced through the supply chain
        </p>
      </div>

      <div className="card p-6 space-y-6">
        {/* Crop Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Select Crop</label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value as keyof typeof SUPPLY_CHAIN_DATA)}
            className="input max-w-xs"
          >
            {Object.entries(SUPPLY_CHAIN_DATA).map(([key, value]) => (
              <option key={key} value={key}>
                {value.crop}
              </option>
            ))}
          </select>
        </div>

        {/* Price Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-sm text-green-700 font-medium">Farm Gate Price</div>
            <div className="text-2xl font-bold text-green-800">
              {formatPrice(data.farmGatePrice)}
            </div>
            <div className="text-xs text-green-600">Your starting price</div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="text-sm text-red-700 font-medium">Retail Price</div>
            <div className="text-2xl font-bold text-red-800">
              {formatPrice(data.retailPrice)}
            </div>
            <div className="text-xs text-red-600">Final consumer price</div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm text-blue-700 font-medium">Total Markup</div>
            <div className="text-2xl font-bold text-blue-800">
              {(((data.retailPrice - data.farmGatePrice) / data.farmGatePrice) * 100).toFixed(0)}%
            </div>
            <div className="text-xs text-blue-600">From farm to store</div>
          </div>
        </div>

        {/* Supply Chain Visualization */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <BarChart className="w-5 h-5" />
            Price Breakdown by Stage
          </h3>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="step" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `$${value.toFixed(2)}`}
                />
                <Tooltip 
                  formatter={(value: number) => [formatPrice(value), 'Price']}
                  labelFormatter={(label) => `Stage: ${label}`}
                />
                <Bar dataKey="price" fill="hsl(142, 70%, 40%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Stage Details</h3>
          <div className="space-y-3">
            {data.steps.map((step, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="space-y-1">
                  <div className="font-medium">{step.step}</div>
                  <div className="text-sm text-muted-foreground">{step.description}</div>
                </div>
                <div className="text-right space-y-1">
                  <div className="font-semibold">
                    {step.markup > 0 ? `+${step.markup}%` : 'Base Price'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formatPrice(chartData[index].price)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-medium text-blue-900">Key Insights</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• The largest markup typically occurs at the retail level</li>
                <li>• Direct-to-consumer sales can capture more value for farmers</li>
                <li>• Processing and packaging add significant costs but also value</li>
                <li>• Transportation costs vary by distance and logistics efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
