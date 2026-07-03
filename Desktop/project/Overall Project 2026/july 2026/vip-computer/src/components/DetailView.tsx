import React, { useState } from 'react';
import { Product, Enquiry } from '../types';
import { 
  ArrowLeft, 
  Shield, 
  CheckCircle, 
  MessageSquare, 
  FileDown, 
  Phone, 
  Star, 
  ShoppingCart, 
  Info, 
  ListRestart, 
  Clock, 
  Send,
  TrendingUp
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';

interface DetailViewProps {
  product: Product;
  onBack: () => void;
  addEnquiry: (enquiry: Enquiry) => void;
  compareIds: string[];
  handleCompareToggle: (id: string, e?: React.MouseEvent) => void;
}

export const DetailView: React.FC<DetailViewProps> = ({
  product,
  onBack,
  addEnquiry,
  compareIds,
  handleCompareToggle,
}) => {
  // Gallery Active Image
  const allImages = product.images && product.images.length > 0 
    ? [product.image, ...product.images] 
    : [product.image];
  const [activeImage, setActiveImage] = useState(allImages[0]);

  // Tab Menu Selection
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'warranty'>('overview');

  // Generate stable 6-month historical price trend data relative to current date
  const priceTrendData = React.useMemo(() => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonthIdx = new Date().getMonth();
    const trend = [];
    
    const startPrice = product.originalPrice || Math.round(product.price * 1.12);
    const endPrice = product.price;
    
    for (let i = 5; i >= 0; i--) {
      const idx = (currentMonthIdx - i + 12) % 12;
      const monthLabel = monthNames[idx];
      
      // Interpolate with slight variation, ending exactly at product.price
      let p = startPrice - ((startPrice - endPrice) * (5 - i) / 5);
      if (i > 0 && i < 5) {
        // Add minor realistic fluctuation (+/- 1.5%) using a simple sin wave based on index & product id
        const hash = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        p = p * (1 + (Math.sin(i + hash) * 0.015));
      }
      if (i === 0) {
        p = endPrice; // Exact current price at the end
      }
      
      trend.push({
        month: monthLabel,
        price: Math.round(p)
      });
    }
    return trend;
  }, [product.id, product.price, product.originalPrice]);

  // Enquiry Form State
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerMsg, setBuyerMsg] = useState(`Hi VIP Computer, I am interested in purchasing the ${product.name}. Please confirm the stock availability and any corporate discount plans.`);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName.trim()) return;

    const newEnquiry: Enquiry = {
      id: `enq-${Math.floor(Math.random() * 10000)}`,
      name: buyerName,
      phone: buyerPhone,
      type: 'Build',
      subject: `Enquiry: ${product.name}`,
      message: buyerMsg,
      status: 'High Priority',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    addEnquiry(newEnquiry);
    setFormSubmitted(true);
    // Reset Name/Phone
    setBuyerName('');
    setBuyerPhone('');
  };

  // Interactive high-fidelity print to PDF layout
  const handleDownloadBrochure = () => {
    // Create professional print container
    const printContainer = document.createElement('div');
    printContainer.id = 'vip-print-container';
    
    // Injected styles to clean and target print styles safely within the React app
    const style = document.createElement('style');
    style.id = 'vip-print-styles';
    style.innerHTML = `
      @media print {
        body {
          background-color: white !important;
          color: #0f172a !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        #root, header, footer {
          display: none !important;
        }
        #vip-print-container {
          display: block !important;
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          width: 100% !important;
          padding: 40px !important;
          background-color: white !important;
        }
      }
    `;

    // Beautiful corporate hardware spec sheet
    printContainer.innerHTML = `
      <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
        <!-- Corporate Header Banner -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #f1f5f9; padding-bottom: 24px; margin-bottom: 32px;">
          <div>
            <h1 style="font-size: 28px; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.03em; text-transform: uppercase;">VIP COMPUTER</h1>
            <p style="font-size: 11px; color: #64748b; font-family: monospace; margin: 6px 0 0 0; text-transform: uppercase; letter-spacing: 0.1em;">Official Hardware Integration Partner Spec-Sheet</p>
          </div>
          <div style="text-align: right; font-size: 12px; color: #475569;">
            <p style="font-weight: 800; color: #d97706; font-size: 14px; margin: 0; letter-spacing: -0.01em;">ASTRACONGNIX SOLUTION PVT LTD</p>
            <p style="margin: 4px 0 0 0; color: #64748b;">Noida, Sector 62, Uttar Pradesh, India</p>
            <p style="margin: 2px 0 0 0; color: #94a3b8; font-size: 10px; font-family: monospace;">STAMP: INTEGRATION-VIP-IND</p>
          </div>
        </div>

        <!-- Product Overview Panel -->
        <div style="margin-bottom: 32px; background-color: #f8fafc; border-left: 4px solid #d97706; padding: 20px; border-radius: 0 12px 12px 0;">
          <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #d97706; font-family: monospace;">Product Specifications Profile</span>
          <h2 style="font-size: 22px; font-weight: 800; color: #0f172a; margin: 4px 0 10px 0; letter-spacing: -0.02em;">${product.name}</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 24px; font-size: 12px; color: #64748b; font-family: monospace; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 14px;">
            <span><strong>BRAND:</strong> ${product.brand.toUpperCase()}</span>
            <span><strong>CATEGORY:</strong> ${product.category.toUpperCase()}</span>
            <span><strong>SKU ID:</strong> ${product.brand.substring(0,3).toUpperCase()}-${product.id.toUpperCase().substring(0,6)}</span>
          </div>
          <p style="font-size: 13px; color: #334155; margin: 0; leading-relaxed: 1.6;">
            ${product.description || `The high-performance ${product.name} offers peak responsiveness and incredible computing speeds for software developers, multi-media creators, and design studios.`}
          </p>
        </div>

        <!-- Technical Specification Breakdown Table -->
        <div style="margin-bottom: 32px;">
          <h3 style="font-size: 13px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px;">Technical Configuration Profile</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <th style="padding: 12px 0; font-weight: 600; color: #475569; width: 35%;">Processor (CPU)</th>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 500;">${product.processor || 'Core system chipset'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <th style="padding: 12px 0; font-weight: 600; color: #475569;">System Memory (RAM)</th>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 500;">${product.memory || 'High-capacity dual-channel RAM'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <th style="padding: 12px 0; font-weight: 600; color: #475569;">Storage (NVMe SSD)</th>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 500;">${product.storage || 'Solid State Drive NVMe Gen 4'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <th style="padding: 12px 0; font-weight: 600; color: #475569;">Display Resolution</th>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 500;">${product.display || 'Full High Definition LED'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <th style="padding: 12px 0; font-weight: 600; color: #475569;">Warranty Tier</th>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 500;">${product.warranty || '3 Years Comprehensive'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #0f172a; background-color: #fafaf9;">
              <th style="padding: 14px 10px; font-weight: 700; color: #0f172a;">Direct Store Price (Inc. GST)</th>
              <td style="padding: 14px 10px; font-weight: 900; color: #d97706; font-size: 16px;">₹${product.price.toLocaleString('en-IN')}</td>
            </tr>
          </table>
        </div>

        <!-- Highlights Bullet List -->
        ${product.keyFeatures && product.keyFeatures.length > 0 ? `
        <div style="margin-bottom: 40px;">
          <h3 style="font-size: 13px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px;">Engineering Highlights</h3>
          <ul style="margin: 0; padding-left: 20px; font-size: 12px; color: #334155; line-height: 1.8;">
            ${product.keyFeatures.map(feat => `<li style="margin-bottom: 8px;">${feat}</li>`).join('')}
          </ul>
        </div>
        ` : ''}

        <!-- Footer Stamp & Copyright -->
        <div style="margin-top: 60px; border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 10px; color: #94a3b8; display: flex; justify-content: space-between; align-items: center; font-family: monospace;">
          <span>DESIGNED & DEVELOPED BY NIKET</span>
          <span>© ${new Date().getFullYear()} ASTRACONGNIX SOLUTION PVT LTD</span>
          <span>SUPPORT: sales@vipcomputer.com</span>
        </div>
      </div>
    `;

    document.body.appendChild(style);
    document.body.appendChild(printContainer);
    
    // Call the browser's high quality PDF printing dialog
    window.print();
    
    // Clean up temporary DOM layout changes
    setTimeout(() => {
      if (document.getElementById('vip-print-container')) {
        document.body.removeChild(printContainer);
      }
      if (document.getElementById('vip-print-styles')) {
        document.body.removeChild(style);
      }
    }, 1500);
  };

  // WhatsApp Hotline action
  const handleWhatsAppAction = () => {
    const textMsg = `Hello VIP Computer, I'm interested in purchasing the ${product.name} listed at ₹${product.price.toLocaleString('en-IN')}. Please guide me on payment options.`;
    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
  };

  const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0;
  const discountPct = product.originalPrice ? Math.round((discountAmount / product.originalPrice) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left animate-fade-in" id="product-detail-wrapper">
      
      {/* Back Button / Navigation Breadcrumb */}
      <div className="flex items-center gap-2 mb-8">
        <button
          id="btn-back-to-catalog"
          onClick={onBack}
          className="p-2 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-850 hover:text-yellow-400 text-slate-300 transition-all flex items-center gap-1.5 text-xs font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Store Catalog
        </button>
        <span className="text-slate-600 font-mono text-xs">/</span>
        <span className="text-slate-500 font-mono text-xs">{product.category}</span>
        <span className="text-slate-600 font-mono text-xs">/</span>
        <span className="text-slate-400 font-mono text-xs line-clamp-1">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Premium Image Galleries */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-950 rounded-2xl border border-slate-850 aspect-[4/3] flex items-center justify-center p-6 relative overflow-hidden group shadow-lg">
            {/* Soft Ambient Radial Background */}
            <div className="absolute inset-0 bg-radial-gradient from-yellow-500/5 via-transparent to-transparent"></div>
            
            <img 
              src={activeImage} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain relative z-10 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />

            {/* In Stock Badge floating */}
            <div className="absolute top-4 left-4">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold border ${
                product.inStock 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                  : 'bg-red-500/10 text-red-400 border-red-500/20'
              }`}>
                <span className={`h-1.5 w-1.5 rounded-full ${product.inStock ? 'bg-emerald-400 animate-ping' : 'bg-red-400'}`} />
                {product.inStock ? 'In Stock (Ready)' : 'Sold Out'}
              </span>
            </div>
          </div>

          {/* Galleries Slider Row */}
          {allImages.length > 1 && (
            <div className="grid grid-cols-5 gap-3" id="detail-gallery-thumbnails">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  id={`gallery-thumb-${idx}`}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square bg-slate-950 border rounded-xl overflow-hidden p-2 flex items-center justify-center transition-all ${
                    activeImage === img 
                      ? 'border-yellow-500 ring-2 ring-yellow-500/20 scale-[1.03]' 
                      : 'border-slate-800 hover:border-slate-600'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="max-h-full object-contain" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}

          {/* Quick Specifications Highlights Card */}
          <div className="bg-slate-900/40 border border-slate-850 rounded-2xl p-6 space-y-4">
            <h4 className="text-white font-semibold text-sm flex items-center gap-2">
              <Info className="w-4 h-4 text-yellow-400" /> Key Engineering Elements
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl space-y-1">
                <span className="text-slate-500 font-mono">PROCESSOR</span>
                <p className="text-white font-medium line-clamp-1">{product.processor || 'Not Applicable'}</p>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl space-y-1">
                <span className="text-slate-500 font-mono">MEMORY CONFIG</span>
                <p className="text-white font-medium line-clamp-1">{product.memory || 'Not Applicable'}</p>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl space-y-1">
                <span className="text-slate-500 font-mono">SOLID-STATE STORAGE</span>
                <p className="text-white font-medium line-clamp-1">{product.storage || 'Not Applicable'}</p>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl space-y-1">
                <span className="text-slate-500 font-mono">SCREEN / DISPLAY</span>
                <p className="text-white font-medium line-clamp-1">{product.display || 'Not Applicable'}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Title, Prices, Tabs & Enquiries */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Main Info Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono tracking-wider">
              <span className="text-slate-400 uppercase">{product.brand}</span>
              <div className="flex items-center gap-1 bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                <span className="flex items-center text-amber-500 font-bold"><Star className="w-3.5 h-3.5 fill-amber-500 mr-1" /> 4.9</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400">48 customer reviews</span>
              </div>
            </div>
            
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              {product.name}
            </h1>
            
            <p className="text-slate-400 text-sm leading-relaxed font-mono">
              SKU: {product.brand.substring(0,3).toUpperCase()}-{product.id.toUpperCase().substring(0,6)}
            </p>
          </div>

          {/* Pricing Box Panel */}
          <div className="p-5 bg-slate-900/60 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 font-mono">Special Direct Store Rate</span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-3xl font-extrabold text-white">₹{product.price.toLocaleString('en-IN')}</span>
                {product.originalPrice && (
                  <span className="text-base text-slate-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                )}
              </div>
            </div>

            {discountAmount > 0 && (
              <div className="text-right">
                <span className="inline-block bg-red-500/15 border border-red-500/20 text-red-400 text-xs font-semibold px-3 py-1.5 rounded-lg">
                  Save ₹{discountAmount.toLocaleString('en-IN')} ({discountPct}% Off)
                </span>
                <p className="text-[10px] text-slate-500 font-mono mt-1">GST & Shipping Included</p>
              </div>
            )}
          </div>

          {/* Recent Price Trend Sparkline Chart */}
          <div className="p-4 bg-slate-900/40 border border-slate-850 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Market Intelligence</span>
                <h4 className="text-white font-semibold text-xs flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Recent Price Trend (6-Month Sparkline)
                </h4>
              </div>
              <div className="text-right">
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-mono font-bold px-1.5 py-0.5 rounded border border-emerald-500/20">
                  Lowest Price Detected
                </span>
              </div>
            </div>
            
            {/* Sparkline Chart Container */}
            <div className="h-16 w-full" id="price-trend-sparkline">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceTrendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EAB308" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#EAB308" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" hide />
                  <YAxis domain={['dataMin - 1000', 'dataMax + 1000']} hide />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-slate-950/95 border border-slate-850 px-2.5 py-1.5 rounded-xl text-[10px] font-mono shadow-xl text-left border-slate-800">
                            <p className="text-slate-400">{payload[0].payload.month}: <span className="text-yellow-400 font-bold">₹{Number(payload[0].value).toLocaleString('en-IN')}</span></p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#EAB308" 
                    strokeWidth={1.5} 
                    fillOpacity={1} 
                    fill="url(#colorPrice)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono pt-2.5 border-t border-slate-850/50">
              <span>{priceTrendData[0]?.month} (₹{priceTrendData[0]?.price.toLocaleString('en-IN')})</span>
              <span>Overall trend (-{priceTrendData[0]?.price && Math.round(((priceTrendData[0]?.price - product.price) / priceTrendData[0]?.price) * 100)}%)</span>
              <span>Current (₹{product.price.toLocaleString('en-IN')})</span>
            </div>
          </div>

          {/* Interactive Information Tab System */}
          <div className="border-b border-slate-850">
            <div className="flex gap-6 -mb-px">
              {(['overview', 'specs', 'warranty'] as const).map((tab) => (
                <button
                  key={tab}
                  id={`tab-btn-${tab}`}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-semibold tracking-wide transition-all uppercase font-mono relative ${
                    activeTab === tab 
                      ? 'text-yellow-400 border-b-2 border-yellow-400' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[160px]">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {product.description || `The high-performance ${product.name} offers peak responsiveness and incredible computing speeds for software developers, multi-media creators, and design studios.`}
                </p>
                {product.keyFeatures && product.keyFeatures.length > 0 && (
                  <div className="space-y-2.5 pt-2">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Engineering Highlights</h5>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {product.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-2">
                <table className="w-full text-xs text-left text-slate-400 border-collapse">
                  <tbody>
                    <tr className="border-b border-slate-900/60">
                      <td className="py-2.5 font-semibold text-white w-1/3">Processor</td>
                      <td className="py-2.5 text-slate-300">{product.processor || 'Core system chipset'}</td>
                    </tr>
                    <tr className="border-b border-slate-900/60">
                      <td className="py-2.5 font-semibold text-white">Installed Memory</td>
                      <td className="py-2.5 text-slate-300">{product.memory || 'High-capacity dual-channel RAM'}</td>
                    </tr>
                    <tr className="border-b border-slate-900/60">
                      <td className="py-2.5 font-semibold text-white">Storage Capacity</td>
                      <td className="py-2.5 text-slate-300">{product.storage || 'Solid State Drive NVMe Gen 4'}</td>
                    </tr>
                    <tr className="border-b border-slate-900/60">
                      <td className="py-2.5 font-semibold text-white">Screen Layout</td>
                      <td className="py-2.5 text-slate-300">{product.display || 'Full High Definition LED'}</td>
                    </tr>
                    <tr className="border-b border-slate-900/60">
                      <td className="py-2.5 font-semibold text-white">Chassis Classification</td>
                      <td className="py-2.5 text-slate-300">{product.category} Systems</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-semibold text-white">Warranty Label</td>
                      <td className="py-2.5 text-slate-300">{product.warranty || '3 Years Comprehensive'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="space-y-3.5 text-xs text-slate-300">
                <p>
                  Every purchase includes an official <strong className="text-white">{product.warranty || '1 Year Brand Warranty'}</strong> card with support stamps valid across all authorized retail service desks in India.
                </p>
                <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800 space-y-2">
                  <h6 className="font-semibold text-white flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-yellow-400" /> VIP Protection Shield Included
                  </h6>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Includes 6 Months of free thermal cleaning, heat-sink re-pasting, and rapid malware scans at our Sector 62 Noida workshop.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Enquiry Action Form */}
          <div className="p-6 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold text-white text-base">Instant Sales Enquiry</h3>
                <p className="text-xs text-slate-500 mt-0.5">Submit details to request a callback or official business invoice.</p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button 
                  onClick={handleDownloadBrochure}
                  className="flex items-center gap-1 text-[11px] font-mono text-yellow-400 hover:text-yellow-300 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                  id="btn-dl-specs"
                >
                  <FileDown className="w-3.5 h-3.5" /> Specs PDF
                </button>
                <button 
                  onClick={(e) => handleCompareToggle(product.id, e)}
                  className={`flex items-center gap-1 text-[11px] font-mono px-2.5 py-1.5 rounded-lg transition-colors border cursor-pointer ${
                    compareIds.includes(product.id)
                      ? 'bg-yellow-500 text-slate-950 border-yellow-400 font-semibold shadow-md shadow-yellow-500/10'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                  id="btn-compare-detail"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${compareIds.includes(product.id) ? 'bg-slate-950' : 'bg-yellow-400'}`} />
                  {compareIds.includes(product.id) ? 'Comparing' : 'Compare'}
                </button>
              </div>
            </div>

            {formSubmitted ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl space-y-2 text-center">
                <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-semibold text-white text-sm">Enquiry Registered Successfully</h4>
                <p className="text-xs text-slate-400">
                  Our system engineers have logged your request. We will reach you shortly on WhatsApp/Phone.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-yellow-400 underline mt-1 block mx-auto hover:text-yellow-300"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitEnquiry} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-yellow-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone/WhatsApp *"
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <textarea
                  rows={2}
                  required
                  value={buyerMsg}
                  onChange={(e) => setBuyerMsg(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-yellow-500 resize-none"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    id="submit-enquiry-form-btn"
                    className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" /> Submit Enquiry Desk
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppAction}
                    id="whatsapp-hotline-btn"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 animate-pulse" /> WhatsApp Hotline
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
