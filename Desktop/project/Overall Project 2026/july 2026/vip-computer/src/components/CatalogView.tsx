import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES, BRANDS } from '../data';
import { Search, SlidersHorizontal, ArrowUpDown, RefreshCw, Star, X, Check, Laptop, Tag } from 'lucide-react';

interface CatalogViewProps {
  products: Product[];
  setSelectedProductId: (id: string | null) => void;
  selectedProductId: string | null;
  compareIds: string[];
  handleCompareToggle: (id: string, e?: React.MouseEvent) => void;
  isCompareModalOpen: boolean;
  setIsCompareModalOpen: (open: boolean) => void;
  compareWarning: string | null;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  setSelectedProductId,
  selectedProductId,
  compareIds,
  handleCompareToggle,
  isCompareModalOpen,
  setIsCompareModalOpen,
  compareWarning,
}) => {
  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(450000); // Max cap
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Toggle brand selections
  const handleBrandToggle = (brandName: string) => {
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedBrands([]);
    setPriceRange(450000);
    setInStockOnly(false);
    setSortBy('relevance');
  };

  // Compute filtered & sorted product list
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Search Query filter
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchesName = p.name.toLowerCase().includes(q);
          const matchesSpecs = p.specs.toLowerCase().includes(q);
          const matchesBrand = p.brand.toLowerCase().includes(q);
          const matchesCategory = p.category.toLowerCase().includes(q);
          if (!matchesName && !matchesSpecs && !matchesBrand && !matchesCategory) {
            return false;
          }
        }

        // Category filter
        if (selectedCategory !== 'All' && p.category !== selectedCategory) {
          return false;
        }

        // Brand filter (OR relationship between multiple brands)
        if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
          return false;
        }

        // Price filter
        if (p.price > priceRange) {
          return false;
        }

        // In Stock filter
        if (inStockOnly && !p.inStock) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        return 0; // Relevance / unsorted
      });
  }, [products, searchQuery, selectedCategory, selectedBrands, priceRange, inStockOnly, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in" id="catalog-view-container">
      
      {/* Top Banner and Search Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="text-left space-y-1">
          <h1 className="font-display font-bold text-3xl text-white">VIP Hardware Store</h1>
          <p className="text-sm text-slate-400">
            {filteredProducts.length === products.length 
              ? `Showing all ${products.length} computer systems & devices.` 
              : `Found ${filteredProducts.length} matching items out of ${products.length} in catalog.`}
          </p>
        </div>

        {/* Global Search and Control buttons */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              id="catalog-search-input"
              placeholder="Search specs, i9, RTX, 16GB..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-yellow-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle */}
          <button
            id="mobile-filters-btn"
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm font-medium text-slate-300"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block md:col-span-3 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-8 sticky top-28 text-left">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-850">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-yellow-400" /> Catalog Filters
            </h3>
            <button
              id="sidebar-reset-btn"
              onClick={handleResetFilters}
              className="text-xs text-slate-500 hover:text-yellow-400 flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3 animate-spin-hover" /> Reset All
            </button>
          </div>

          {/* Categories Block */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Device Category</h4>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === 'All'
                    ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                All Categories ({products.length})
              </button>
              {CATEGORIES.map((cat) => {
                const count = products.filter(p => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brands Block */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Brand Partners</h4>
            <div className="space-y-2">
              {BRANDS.map((brand) => {
                const isChecked = selectedBrands.includes(brand);
                return (
                  <label 
                    key={brand} 
                    className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white cursor-pointer select-none transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleBrandToggle(brand)}
                      className="rounded border-slate-800 bg-slate-950 text-yellow-500 focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5"
                    />
                    <span>{brand}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <h4 className="font-semibold uppercase tracking-wider">Maximum Price</h4>
              <span className="font-mono text-yellow-400 font-semibold">₹{priceRange.toLocaleString('en-IN')}</span>
            </div>
            <input
              type="range"
              min="40000"
              max="450000"
              step="5000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>₹40k</span>
              <span>₹2.5L</span>
              <span>₹4.5L</span>
            </div>
          </div>

          {/* In Stock Toggle */}
          <div className="space-y-2 pt-2 border-t border-slate-850">
            <label className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white cursor-pointer select-none transition-colors">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded border-slate-800 bg-slate-950 text-yellow-500 focus:ring-0 w-3.5 h-3.5"
              />
              <span>In Stock Only</span>
            </label>
          </div>

        </aside>

        {/* Main Grid Content Area */}
        <section className="col-span-12 md:col-span-9 space-y-6">
          
          {/* Sorting / Status Bar */}
          <div className="flex items-center justify-between bg-slate-900/20 border border-slate-850 p-4 rounded-xl text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span>Selected Filters:</span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCategory !== 'All' && (
                  <span className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                    {selectedCategory}
                    <X className="w-3 h-3 text-slate-500 hover:text-white cursor-pointer" onClick={() => setSelectedCategory('All')} />
                  </span>
                )}
                {selectedBrands.map(b => (
                  <span key={b} className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                    {b}
                    <X className="w-3 h-3 text-slate-500 hover:text-white cursor-pointer" onClick={() => handleBrandToggle(b)} />
                  </span>
                ))}
                {inStockOnly && (
                  <span className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                    In Stock
                    <X className="w-3 h-3 text-slate-500 hover:text-white cursor-pointer" onClick={() => setInStockOnly(false)} />
                  </span>
                )}
                {!searchQuery && selectedCategory === 'All' && selectedBrands.length === 0 && !inStockOnly && (
                  <span className="text-slate-500 italic font-mono">None (Showing all)</span>
                )}
              </div>
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <select
                id="catalog-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-950 text-xs text-slate-300 border border-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-yellow-500 cursor-pointer"
              >
                <option value="relevance">Sort: Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A - Z</option>
              </select>
            </div>
          </div>

          {/* Grid of items */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => {
                const discountPercent = p.originalPrice 
                  ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) 
                  : 0;

                return (
                  <div
                    key={p.id}
                    id={`product-card-${p.id}`}
                    onClick={() => setSelectedProductId(p.id)}
                    className="group bg-slate-900/30 rounded-2xl border border-slate-800/80 overflow-hidden hover:border-slate-700 hover:bg-slate-900/50 transition-all duration-300 flex flex-col justify-between cursor-pointer h-full text-left"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] bg-slate-950 flex items-center justify-center p-4">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Compare float button */}
                      <button
                        type="button"
                        id={`btn-compare-${p.id}`}
                        onClick={(e) => handleCompareToggle(p.id, e)}
                        className={`absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[9px] font-mono font-bold tracking-wide transition-all border ${
                          compareIds.includes(p.id)
                            ? 'bg-yellow-500 text-slate-950 border-yellow-400 font-bold shadow-lg shadow-yellow-500/10'
                            : 'bg-slate-900/90 text-slate-300 border-slate-850 hover:border-slate-700 hover:bg-slate-800'
                        }`}
                        title="Add to compare list"
                      >
                        <span className={`w-1 h-1 rounded-full ${compareIds.includes(p.id) ? 'bg-slate-950' : 'bg-yellow-400'}`} />
                        {compareIds.includes(p.id) ? 'Comparing' : 'Compare'}
                      </button>
                      
                      {/* Interactive Flags */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        {p.isNew && (
                          <span className="text-[8px] font-bold bg-yellow-500 text-slate-950 px-2 py-0.5 rounded font-mono uppercase tracking-wider border border-yellow-400/10">
                            NEW
                          </span>
                        )}
                        {p.isHot && (
                          <span className="text-[8px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded font-mono uppercase tracking-wider">
                            HOT
                          </span>
                        )}
                        {discountPercent > 0 && (
                          <span className="text-[8px] font-bold bg-red-600 text-white px-2 py-0.5 rounded font-mono uppercase tracking-wider flex items-center gap-0.5">
                            <Tag className="w-2.5 h-2.5" /> SAVE {discountPercent}%
                          </span>
                        )}
                      </div>

                      {/* Stock Check */}
                      {!p.inStock && (
                        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-2 text-center">
                          <span className="text-xs bg-slate-900/90 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-lg font-mono font-medium">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Area */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          <span>{p.brand}</span>
                          <span className="flex items-center gap-0.5 text-amber-500">
                            <Star className="w-2.5 h-2.5 fill-amber-500" /> {p.rating || '4.9'}
                          </span>
                        </div>
                        <h3 className="font-semibold text-white text-base group-hover:text-yellow-400 transition-colors line-clamp-1">{p.name}</h3>
                        <p className="text-xs text-slate-400 line-clamp-2 font-mono h-8 leading-snug">{p.specs}</p>
                      </div>

                      <div className="flex items-end justify-between pt-2 border-t border-slate-900">
                        <div>
                          <p className="text-[10px] text-slate-500 font-mono">Special Store Price</p>
                          <div className="flex items-center gap-1.5">
                            <span className="text-base font-bold text-white">₹{p.price.toLocaleString('en-IN')}</span>
                            {p.originalPrice && (
                              <span className="text-xs text-slate-500 line-through">₹{p.originalPrice.toLocaleString('en-IN')}</span>
                            )}
                          </div>
                        </div>
                        <button
                          id={`btn-view-${p.id}`}
                          className="px-3.5 py-1.5 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold rounded-lg border border-slate-700 transition-colors"
                        >
                          Details
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // No results placeholder
            <div className="bg-slate-900/20 border border-slate-850 rounded-2xl p-16 text-center space-y-4 max-w-xl mx-auto">
              <div className="w-12 h-12 bg-slate-900 text-slate-500 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white text-lg">No Matching Hardware Found</h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                We couldn't find any laptops or system components matching your exact filters. Try adjusting your brand checkboxes or relaxing your price range.
              </p>
              <button
                id="reset-filter-btn-empty"
                onClick={handleResetFilters}
                className="px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-medium text-xs rounded-xl transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </section>
      </div>

      {/* Mobile Drawer Slide Out */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          
          <div className="absolute inset-y-0 right-0 max-w-xs w-full bg-slate-900 border-l border-slate-800 flex flex-col justify-between shadow-2xl p-6">
            
            <div className="space-y-6 overflow-y-auto pb-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h3 className="font-semibold text-white text-sm uppercase">Catalog Filters</h3>
                <button onClick={() => setMobileFiltersOpen(false)}>
                  <X className="w-5 h-5 text-slate-400 hover:text-white" />
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <h4 className="text-[11px] font-semibold text-slate-400 uppercase">Device Category</h4>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => { setSelectedCategory('All'); setMobileFiltersOpen(false); }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                      selectedCategory === 'All' ? 'bg-yellow-500/10 text-yellow-400' : 'text-slate-400'
                    }`}
                  >
                    All Categories
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setMobileFiltersOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                        selectedCategory === cat ? 'bg-yellow-500/10 text-yellow-400' : 'text-slate-400'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="space-y-2.5">
                <h4 className="text-[11px] font-semibold text-slate-400 uppercase">Brand Partners</h4>
                <div className="flex flex-col gap-2">
                  {BRANDS.map((brand) => {
                    const isChecked = selectedBrands.includes(brand);
                    return (
                      <label key={brand} className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleBrandToggle(brand)}
                          className="rounded border-slate-800 bg-slate-950 text-yellow-500 focus:ring-0 w-3.5 h-3.5"
                        />
                        <span>{brand}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <h4 className="uppercase font-semibold">Max Price</h4>
                  <span className="font-mono text-yellow-400">₹{priceRange.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="40000"
                  max="450000"
                  step="5000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
              </div>

              {/* Stock Toggle */}
              <div className="pt-2 border-t border-slate-800">
                <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="rounded border-slate-800 bg-slate-950 text-yellow-500 focus:ring-0 w-3.5 h-3.5"
                  />
                  <span>In Stock Only</span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-3">
              <button
                onClick={() => { handleResetFilters(); setMobileFiltersOpen(false); }}
                className="flex-1 py-2.5 border border-slate-800 text-slate-400 text-xs rounded-xl hover:bg-slate-850"
              >
                Clear All
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-2.5 bg-yellow-500 text-slate-950 text-xs font-semibold rounded-xl"
              >
                Apply Filters
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
