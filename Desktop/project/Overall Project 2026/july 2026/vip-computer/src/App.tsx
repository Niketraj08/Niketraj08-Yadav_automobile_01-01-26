import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { CatalogView } from './components/CatalogView';
import { DetailView } from './components/DetailView';
import { PCBuilderView } from './components/PCBuilderView';
import { DashboardView } from './components/DashboardView';
import { Footer } from './components/Footer';
import { IntroSplash } from './components/IntroSplash';
import { INITIAL_PRODUCTS, INITIAL_ENQUIRIES } from './data';
import { Product, Enquiry } from './types';
import { ShieldAlert, X, Lock, Check, Star, FileDown } from 'lucide-react';
import { jsPDF } from 'jspdf';

export default function App() {
  const [isIntroActive, setIsIntroActive] = useState<boolean>(true);
  const [currentView, setView] = useState<'home' | 'catalog' | 'builder' | 'dashboard'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Automatically scroll to top whenever the page view or the selected product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedProductId]);
  
  // Data State
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(INITIAL_ENQUIRIES);
  
  // Product Comparison state
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [compareWarning, setCompareWarning] = useState<string | null>(null);

  const [shouldRenderCompare, setShouldRenderCompare] = useState<boolean>(false);
  const [isCompareVisible, setIsCompareVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isCompareModalOpen) {
      setShouldRenderCompare(true);
      const timer = setTimeout(() => setIsCompareVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsCompareVisible(false);
      const timer = setTimeout(() => setShouldRenderCompare(false), 250);
      return () => clearTimeout(timer);
    }
  }, [isCompareModalOpen]);

  // Handle adding/removing from compare
  const handleCompareToggle = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setCompareIds((prevIds) => {
      if (prevIds.includes(id)) {
        setCompareWarning(null);
        return prevIds.filter(cid => cid !== id);
      } else {
        if (prevIds.length >= 3) {
          setCompareWarning("Maximum of 3 products can be selected for comparison.");
          setTimeout(() => setCompareWarning(null), 3000);
          return prevIds;
        }
        setCompareWarning(null);
        return [...prevIds, id];
      }
    });
  };

  const comparedProducts = products.filter(p => compareIds.includes(p.id));

  // Generate and download a side-by-side comparison matrix as a premium PDF
  const handleDownloadReport = () => {
    try {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const margin = 15;
      const contentWidth = 267; // 297 - 30

      // Background color: Slate 950 (#020617)
      doc.setFillColor(2, 6, 23);
      doc.rect(0, 0, 297, 210, 'F');

      // Subtle Grid Accent Lines
      doc.setDrawColor(30, 41, 59); // slate-800
      doc.setLineWidth(0.15);
      doc.line(margin, 50, margin + contentWidth, 50);
      doc.line(margin, 100, margin + contentWidth, 100);
      doc.line(margin, 150, margin + contentWidth, 150);

      // Decorative Yellow Left Accent Stripe
      doc.setFillColor(234, 179, 8); // yellow-500
      doc.rect(margin, margin, 4, 12, 'F');

      // Title Block
      doc.setTextColor(255, 255, 255);
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(22);
      doc.text('VIP COMPUTER', margin + 8, margin + 8);

      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184); // Slate 400
      doc.text('PREMIUM HARDWARE ARCHITECTURE MATRIX', margin + 8, margin + 13);

      // Metadata Block (Right side)
      const rightAlignX = margin + contentWidth;
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(234, 179, 8); // yellow-500
      doc.text('AUTHORIZED DIAGNOSTICS DEPT', rightAlignX - 65, margin + 4);
      
      doc.setFont('Helvetica', 'normal');
      doc.setTextColor(148, 163, 184); // Slate 400
      doc.text(`DATE GENERATED: ${new Date().toLocaleDateString('en-IN')} ${new Date().toLocaleTimeString('en-IN')}`, rightAlignX - 65, margin + 8);
      doc.text('SYSTEM CLASSIFICATION: SECURE MATRIX', rightAlignX - 65, margin + 12);

      // Main horizontal separating line
      doc.setDrawColor(234, 179, 8); // yellow-500
      doc.setLineWidth(0.5);
      doc.line(margin, margin + 18, margin + contentWidth, margin + 18);

      // Grid details setup
      const labelColWidth = 55;
      const colWidth = (contentWidth - labelColWidth) / 3; // ~70.66mm each

      // Draw Column Headers row
      doc.setFillColor(15, 23, 42); // slate-900
      doc.rect(margin, margin + 22, contentWidth, 12, 'F');

      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(234, 179, 8); // yellow-500
      doc.text('SYSTEM SPECIFICATION', margin + 4, margin + 30);

      comparedProducts.forEach((p, idx) => {
        const xPos = margin + labelColWidth + (idx * colWidth);
        doc.setTextColor(255, 255, 255);
        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(8);
        
        const truncatedName = p.name.length > 32 ? p.name.substring(0, 29) + '...' : p.name;
        doc.text(truncatedName, xPos + 4, margin + 30);
      });

      // Draw thin line under header
      doc.setDrawColor(51, 65, 85); // slate-700
      doc.setLineWidth(0.3);
      doc.line(margin, margin + 34, margin + contentWidth, margin + 34);

      // Rows array
      const specsData = [
        { label: 'DEVICE BRAND', valFn: (p: Product) => p.brand.toUpperCase() },
        { label: 'PRICE (INR)', valFn: (p: Product) => `INR ${p.price.toLocaleString('en-IN')}` },
        { label: 'CATEGORY', valFn: (p: Product) => p.category },
        { label: 'AVAILABILITY', valFn: (p: Product) => p.inStock ? 'IN STOCK' : 'SOLD OUT' },
        { label: 'PROCESSOR / CPU', valFn: (p: Product) => p.processor || p.specs.split('/')[0] || 'N/A' },
        { label: 'RAM / SYSTEM MEMORY', valFn: (p: Product) => p.memory || p.specs.split('/')[1] || 'N/A' },
        { label: 'STORAGE CAPACITY', valFn: (p: Product) => p.storage || p.specs.split('/')[2] || 'N/A' },
        { label: 'DISPLAY PANEL', valFn: (p: Product) => p.display || 'N/A' },
        { label: 'WARRANTY TERMS', valFn: (p: Product) => p.warranty || 'N/A' },
        { 
          label: 'CORE FEATURES', 
          valFn: (p: Product) => {
            if (p.keyFeatures && p.keyFeatures.length > 0) {
              return p.keyFeatures.slice(0, 2).join(' | ');
            }
            return 'High Performance Hardware Matrix';
          } 
        }
      ];

      let currentY = margin + 34;
      const rowHeight = 12;

      specsData.forEach((row, rowIndex) => {
        if (rowIndex % 2 === 0) {
          doc.setFillColor(15, 23, 42); // slate-900
        } else {
          doc.setFillColor(9, 15, 30); // slate-950 tint
        }
        doc.rect(margin, currentY, contentWidth, rowHeight, 'F');

        doc.setDrawColor(30, 41, 59); // slate-800
        doc.setLineWidth(0.15);
        doc.line(margin, currentY + rowHeight, margin + contentWidth, currentY + rowHeight);

        doc.setFont('Helvetica', 'bold');
        doc.setFontSize(7.5);
        doc.setTextColor(148, 163, 184); // slate-400
        doc.text(row.label, margin + 4, currentY + 7.5);

        comparedProducts.forEach((p, idx) => {
          const xPos = margin + labelColWidth + (idx * colWidth);
          doc.setFont('Helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(241, 245, 249); // slate-100

          const rawValue = row.valFn(p);
          const displayValue = rawValue.length > 40 ? rawValue.substring(0, 37) + '...' : rawValue;
          
          if (row.label === 'PRICE (INR)') {
            doc.setTextColor(234, 179, 8); // yellow-400
            doc.setFont('Helvetica', 'bold');
          } else if (row.label === 'AVAILABILITY') {
            if (p.inStock) {
              doc.setTextColor(52, 211, 153); // emerald-400
            } else {
              doc.setTextColor(248, 113, 113); // red-400
            }
            doc.setFont('Helvetica', 'bold');
          }

          doc.text(displayValue, xPos + 4, currentY + 7.5);
        });

        currentY += rowHeight;
      });

      if (comparedProducts.length < 3) {
        for (let i = comparedProducts.length; i < 3; i++) {
          const xPos = margin + labelColWidth + (i * colWidth);
          doc.setFont('Helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(100, 116, 139); // slate-500
          doc.text('EMPTY MATRIX SLOT', xPos + 4, margin + 30);
          
          specsData.forEach((_, rowIndex) => {
            const rowY = margin + 34 + (rowIndex * rowHeight);
            doc.text('-', xPos + 4, rowY + 7.5);
          });
        }
      }

      const footerY = 210 - margin - 4;
      doc.setDrawColor(234, 179, 8); // yellow-500
      doc.setLineWidth(0.3);
      doc.line(margin, footerY - 4, margin + contentWidth, footerY - 4);

      doc.setTextColor(148, 163, 184); // slate-400
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(7);
      doc.text('© 2026 VIP Computer. All Rights Reserved. Designed & Developed by Niket Raj | Powered by AstraCognix Solutions', margin, footerY + 1);

      doc.setTextColor(100, 116, 139); // slate-500
      doc.setFont('Helvetica', 'bold');
      doc.text('COGNITIVE HARDWARE AUDIT REPORT v4.21', rightAlignX - 65, footerY + 1);

      doc.save(`VIP_Computer_Specification_Comparison_${Date.now()}.pdf`);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    }
  };

  // Authentication State
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Add Product to Catalog
  const addProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  };

  // Delete Product from Catalog
  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Add Enquiry/Lead
  const addEnquiry = (newEnquiry: Enquiry) => {
    setEnquiries([newEnquiry, ...enquiries]);
    console.log('Registered Enquiry:', newEnquiry);
  };

  // Resolve/Remove Enquiry
  const resolveEnquiry = (id: string) => {
    setEnquiries(enquiries.filter(e => e.id !== id));
  };

  // Handle Admin Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password.trim() === 'admin') {
      setIsAdmin(true);
      setIsLoginModalOpen(false);
      setLoginError('');
      setUsername('');
      setPassword('');
      setView('dashboard');
    } else {
      setLoginError('Invalid Administrator Username or Access Key.');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    if (currentView === 'dashboard') {
      setView('home');
    }
  };

  // Find selected product detail object
  const selectedProduct = products.find((p) => p.id === selectedProductId);

  // Render proper stage view
  const renderViewContent = () => {
    if (currentView === 'home') {
      return (
        <HomeView
          products={products}
          setView={setView}
          setSelectedProductId={setSelectedProductId}
          compareIds={compareIds}
          handleCompareToggle={handleCompareToggle}
        />
      );
    }

    if (currentView === 'catalog') {
      if (selectedProductId && selectedProduct) {
        return (
          <DetailView
            product={selectedProduct}
            onBack={() => setSelectedProductId(null)}
            addEnquiry={addEnquiry}
            compareIds={compareIds}
            handleCompareToggle={handleCompareToggle}
          />
        );
      }
      return (
        <CatalogView
          products={products}
          setSelectedProductId={setSelectedProductId}
          selectedProductId={selectedProductId}
          compareIds={compareIds}
          handleCompareToggle={handleCompareToggle}
          isCompareModalOpen={isCompareModalOpen}
          setIsCompareModalOpen={setIsCompareModalOpen}
          compareWarning={compareWarning}
        />
      );
    }

    if (currentView === 'builder') {
      return <PCBuilderView addEnquiry={addEnquiry} />;
    }

    if (currentView === 'dashboard') {
      if (!isAdmin) {
        return (
          <div className="max-w-md mx-auto my-20 p-8 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-4">
            <Lock className="w-12 h-12 text-yellow-500 mx-auto" />
            <h2 className="text-xl font-bold text-white">Administrator Access Required</h2>
            <p className="text-sm text-slate-400">Please sign in to view administrative inquiries and catalog management console.</p>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="px-6 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-xl transition-all"
            >
              Sign In Now
            </button>
          </div>
        );
      }
      return (
        <DashboardView
          products={products}
          enquiries={enquiries}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
          resolveEnquiry={resolveEnquiry}
        />
      );
    }

    return null;
  };

  if (isIntroActive) {
    return <IntroSplash onComplete={() => setIsIntroActive(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col justify-between selection:bg-yellow-500/30 selection:text-yellow-400">
      
      {/* Top sticky navigation header */}
      <Header
        currentView={currentView}
        setView={setView}
        setSelectedProductId={setSelectedProductId}
        enquiriesCount={enquiries.length}
        isAdmin={isAdmin}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Container Stage */}
      <main className="flex-1 bg-slate-950">
        {renderViewContent()}
      </main>

      {/* Structured Footer */}
      <Footer
        setView={setView}
        isAdmin={isAdmin}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onReplayIntro={() => {
          setIsIntroActive(true);
          setView('home');
        }}
      />

      {/* Floating Compare Tray */}
      {compareIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-3xl bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono">Product Comparison Tray</h4>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">Select up to 3 products to compare specs side-by-side.</p>
            </div>

            {/* Selected items miniature view */}
            <div className="flex items-center gap-2">
              {comparedProducts.map(p => (
                <div key={p.id} className="relative group bg-slate-950 border border-slate-800 rounded-lg p-1.5 flex items-center gap-2 max-w-[150px]">
                  <img src={p.image} alt={p.name} className="w-6 h-6 object-contain" referrerPolicy="no-referrer" />
                  <span className="text-[9px] text-slate-300 truncate max-w-[85px] font-medium">{p.name}</span>
                  <button
                    type="button"
                    onClick={(e) => handleCompareToggle(p.id, e)}
                    className="p-0.5 text-slate-500 hover:text-red-400 rounded transition-colors cursor-pointer"
                    title="Remove"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              {/* Empty spots to make it intuitive */}
              {Array.from({ length: Math.max(0, 3 - comparedProducts.length) }).map((_, i) => (
                <div key={i} className="border border-dashed border-slate-800/60 rounded-lg p-1.5 flex items-center justify-center w-28 h-9 text-[9px] text-slate-600 font-mono">
                  + Add Item
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {compareWarning && (
              <span className="text-[10px] text-orange-400 font-mono animate-pulse mr-2 max-w-[180px] text-right leading-none hidden sm:inline">
                {compareWarning}
              </span>
            )}
            
            <button
              type="button"
              onClick={() => setCompareIds([])}
              className="text-[10px] text-slate-500 hover:text-slate-300 font-mono uppercase tracking-wider underline cursor-pointer"
            >
              Clear
            </button>

            <button
              type="button"
              id="btn-trigger-compare-modal"
              onClick={() => setIsCompareModalOpen(true)}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-yellow-500/10 flex items-center gap-1.5 cursor-pointer"
            >
              Compare Now ({compareIds.length}/3)
            </button>
          </div>

        </div>
      )}

      {/* Compare Modal */}
      {shouldRenderCompare && (
        <div
          className={`fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 transition-all duration-300 ease-out ${
            isCompareVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform ${
              isCompareVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'
            }`}
          >
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-850 flex items-center justify-between bg-slate-950/40">
              <div className="text-left space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-0.5 rounded font-mono text-[9px] font-bold uppercase tracking-wider text-left">Side-By-Side Spec Matrix</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white text-left">Compare Hardware Specifications</h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  id="btn-download-compare-pdf-header"
                  onClick={handleDownloadReport}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-yellow-500/10 cursor-pointer"
                  title="Download PDF specification report"
                >
                  <FileDown className="w-4 h-4" />
                  Download Report
                </button>
                <button
                  type="button"
                  id="btn-close-compare-modal"
                  onClick={() => setIsCompareModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content - Table Matrix */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-850">
                      {/* Empty cell for row labels */}
                      <th className="py-4 pr-4 text-slate-500 font-mono uppercase text-[10px] tracking-wider w-40 shrink-0">Specification</th>
                      
                      {comparedProducts.map(p => (
                        <th key={p.id} className="py-4 px-4 align-top min-w-[220px]">
                          <div className="space-y-4">
                            <div className="relative aspect-[4/3] bg-slate-950 rounded-xl p-3 flex items-center justify-center border border-slate-800">
                              <img src={p.image} alt={p.name} className="max-h-24 max-w-full object-contain" referrerPolicy="no-referrer" />
                              <button
                                type="button"
                                onClick={() => handleCompareToggle(p.id)}
                                className="absolute top-2 right-2 p-1 bg-slate-900/80 hover:bg-red-500/15 hover:text-red-400 rounded-md border border-slate-800 transition-colors cursor-pointer"
                                title="Remove product"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <div className="space-y-1">
                              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider text-left block">{p.brand}</span>
                              <h4 className="font-semibold text-white text-sm line-clamp-2 leading-snug text-left">{p.name}</h4>
                              <p className="text-yellow-400 font-mono font-bold text-sm mt-1 text-left">₹{p.price.toLocaleString('en-IN')}</p>
                            </div>
                          </div>
                        </th>
                      ))}

                      {/* Empty filler columns if fewer than 3 products */}
                      {Array.from({ length: Math.max(0, 3 - comparedProducts.length) }).map((_, i) => (
                        <th key={i} className="py-4 px-4 align-top opacity-30 select-none min-w-[220px]">
                          <div className="border border-dashed border-slate-800 rounded-2xl h-48 flex flex-col items-center justify-center text-slate-600 gap-2 font-mono text-center px-4">
                            <span>Empty Slot</span>
                            <span className="text-[9px]">Select another catalog item to fill this block</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  
                  <tbody className="divide-y divide-slate-850/40 text-slate-300 font-medium">
                    {/* Category Row */}
                    <tr className="hover:bg-slate-900/20">
                      <td className="py-3.5 pr-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider">Category</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} className="py-3.5 px-4 font-mono text-xs">{p.category}</td>
                      ))}
                      {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => <td key={i} className="py-3.5 px-4">-</td>)}
                    </tr>

                    {/* Stock Status Row */}
                    <tr className="hover:bg-slate-900/20">
                      <td className="py-3.5 pr-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider">Availability</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} className="py-3.5 px-4">
                          {p.inStock ? (
                            <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">In Stock</span>
                          ) : (
                            <span className="text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">Sold Out</span>
                          )}
                        </td>
                      ))}
                      {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => <td key={i} className="py-3.5 px-4">-</td>)}
                    </tr>

                    {/* Processor Row */}
                    <tr className="hover:bg-slate-900/20">
                      <td className="py-3.5 pr-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider">Processor / Controller</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} className="py-3.5 px-4 text-white font-mono text-xs">{p.processor || p.specs.split('/')[0] || 'N/A'}</td>
                      ))}
                      {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => <td key={i} className="py-3.5 px-4">-</td>)}
                    </tr>

                    {/* Memory Row */}
                    <tr className="hover:bg-slate-900/20">
                      <td className="py-3.5 pr-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider">RAM / System Memory</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} className="py-3.5 px-4 text-xs">{p.memory || p.specs.split('/')[1] || 'N/A'}</td>
                      ))}
                      {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => <td key={i} className="py-3.5 px-4">-</td>)}
                    </tr>

                    {/* Storage Row */}
                    <tr className="hover:bg-slate-900/20">
                      <td className="py-3.5 pr-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider">Storage Capacity</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} className="py-3.5 px-4 text-xs">{p.storage || p.specs.split('/')[2] || 'N/A'}</td>
                      ))}
                      {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => <td key={i} className="py-3.5 px-4">-</td>)}
                    </tr>

                    {/* Display Row */}
                    <tr className="hover:bg-slate-900/20">
                      <td className="py-3.5 pr-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider">Display Panel</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} className="py-3.5 px-4 text-xs">{p.display || 'N/A'}</td>
                      ))}
                      {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => <td key={i} className="py-3.5 px-4">-</td>)}
                    </tr>

                    {/* Warranty Row */}
                    <tr className="hover:bg-slate-900/20">
                      <td className="py-3.5 pr-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider">Warranty Terms</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} className="py-3.5 px-4 text-xs font-mono text-slate-400">{p.warranty || 'N/A'}</td>
                      ))}
                      {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => <td key={i} className="py-3.5 px-4">-</td>)}
                    </tr>

                    {/* Key Features Row */}
                    <tr className="hover:bg-slate-900/20">
                      <td className="py-3.5 pr-4 text-slate-500 font-mono text-[9px] uppercase tracking-wider">Core Features</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} className="py-3.5 px-4 text-left">
                          <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px] leading-relaxed">
                            {p.keyFeatures?.map((f, index) => (
                              <li key={index}>{f}</li>
                            )) || <li>High durability, enterprise level certification</li>}
                          </ul>
                        </td>
                      ))}
                      {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => <td key={i} className="py-3.5 px-4">-</td>)}
                    </tr>

                    {/* View details CTA Row */}
                    <tr className="bg-slate-950/20">
                      <td className="py-4 pr-4"></td>
                      {comparedProducts.map(p => (
                        <td key={p.id} className="py-4 px-4">
                          <button
                            type="button"
                            id={`btn-open-detail-from-compare-${p.id}`}
                            onClick={() => {
                              setSelectedProductId(p.id);
                              setView('catalog');
                              setIsCompareModalOpen(false);
                            }}
                            className="w-full py-2 bg-slate-800 hover:bg-yellow-500 hover:text-slate-950 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-700 hover:border-transparent transition-all cursor-pointer"
                          >
                            Explore Device
                          </button>
                        </td>
                      ))}
                      {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => <td key={i} className="py-4 px-4"></td>)}
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-850 bg-slate-950/40 flex items-center justify-between gap-4 flex-col sm:flex-row">
              <p className="text-[10px] text-slate-500 font-mono text-center sm:text-left">AUTHORIZED COMPILATION DESK • NOIDA EXECUTIVE BLOCK</p>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  id="btn-download-compare-pdf-footer"
                  onClick={handleDownloadReport}
                  className="flex items-center gap-2 px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-yellow-500/10 cursor-pointer w-full sm:w-auto justify-center"
                >
                  <FileDown className="w-4 h-4" />
                  Download Spec Report
                </button>
                <button
                  type="button"
                  onClick={() => setIsCompareModalOpen(false)}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer w-full sm:w-auto"
                >
                  Close Matrix
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Minimal Admin Access Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-sm w-full relative space-y-4">
            <button
              onClick={() => {
                setIsLoginModalOpen(false);
                setLoginError('');
              }}
              className="absolute top-4 right-4 text-slate-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mx-auto border border-yellow-500/20">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Console Access Login</h3>
              <p className="text-xs text-slate-500">Sign in with standard admin access parameters.</p>
            </div>

            {loginError && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2 text-xs text-red-400">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block text-left">Username</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-yellow-500 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block text-left">Access Key / Password</label>
                <input
                  type="password"
                  required
                  placeholder="e.g. admin"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-yellow-500 font-mono"
                />
              </div>

              <button
                type="submit"
                id="btn-admin-login-submit"
                className="w-full py-2.5 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all uppercase tracking-wider"
              >
                Authenticate & Boot
              </button>
            </form>
            <div className="text-center pt-2">
              <p className="text-[10px] text-slate-600 font-mono">Demo Credentials: admin / admin</p>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
