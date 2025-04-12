
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import CompareModal from '../components/CompareModal';
import products from '../data/products';
import TestimonialCard from '../components/TestimonialCard';
import testimonials from '../data/testimonials';
import { Filter, X } from 'lucide-react';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [compareProducts, setCompareProducts] = useState<number[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [filters, setFilters] = useState({
    size: '',
    material: '',
    thickness: '',
    firmness: '',
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter products when filters change
  useEffect(() => {
    let result = products;
    
    if (filters.size) {
      result = result.filter(product => product.sizes.includes(filters.size));
    }
    
    if (filters.material) {
      result = result.filter(product => product.material.toLowerCase().includes(filters.material.toLowerCase()));
    }
    
    if (filters.thickness) {
      result = result.filter(product => product.thickness.toLowerCase().includes(filters.thickness.toLowerCase()));
    }
    
    if (filters.firmness) {
      result = result.filter(product => product.firmness.toLowerCase().includes(filters.firmness.toLowerCase()));
    }
    
    setFilteredProducts(result);
  }, [filters]);

  const toggleCompare = (id: number) => {
    if (compareProducts.includes(id)) {
      setCompareProducts(compareProducts.filter(productId => productId !== id));
    } else {
      if (compareProducts.length < 4) {
        setCompareProducts([...compareProducts, id]);
      } else {
        alert('You can compare up to 4 products at a time');
      }
    }
  };

  const handleOpenCompare = () => {
    if (compareProducts.length > 0) {
      setShowCompareModal(true);
    } else {
      alert('Please select at least one product to compare');
    }
  };

  const handleRemoveCompare = (id: number) => {
    setCompareProducts(compareProducts.filter(productId => productId !== id));
    if (compareProducts.length <= 1) {
      setShowCompareModal(false);
    }
  };

  const resetFilters = () => {
    setFilters({
      size: '',
      material: '',
      thickness: '',
      firmness: '',
    });
  };

  const allSizes = [...new Set(products.flatMap(product => product.sizes))].sort();
  const allMaterials = [...new Set(products.map(product => product.material))];
  const allThicknesses = [...new Set(products.map(product => product.thickness))];
  const allFirmness = [...new Set(products.map(product => product.firmness))];

  // Get product-related testimonials
  const productTestimonials = testimonials.slice(0, 3);

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="bg-royalBlue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Premium Export Quality Mattresses</h1>
          <p className="text-beige max-w-2xl mx-auto">
            Explore our collection of expertly crafted mattresses designed for global standards
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap -mx-4">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-full lg:w-1/4 px-4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-royalBlue">Filters</h2>
                {(filters.size || filters.material || filters.thickness || filters.firmness) && (
                  <button 
                    onClick={resetFilters}
                    className="text-sm text-royalBlue hover:text-royalBlue/80"
                  >
                    Reset All
                  </button>
                )}
              </div>
              
              {/* Size Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="space-y-2">
                  {allSizes.map(size => (
                    <label key={size} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        checked={filters.size === size}
                        onChange={() => setFilters({...filters, size})}
                        className="mr-2"
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                  {filters.size && (
                    <button 
                      onClick={() => setFilters({...filters, size: ''})}
                      className="text-xs text-royalBlue hover:underline"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
              
              {/* Material Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Material</h3>
                <select
                  value={filters.material}
                  onChange={(e) => setFilters({...filters, material: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">All Materials</option>
                  {allMaterials.map(material => (
                    <option key={material} value={material}>{material}</option>
                  ))}
                </select>
              </div>
              
              {/* Thickness Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Thickness</h3>
                <select
                  value={filters.thickness}
                  onChange={(e) => setFilters({...filters, thickness: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">All Thicknesses</option>
                  {allThicknesses.map(thickness => (
                    <option key={thickness} value={thickness}>{thickness}</option>
                  ))}
                </select>
              </div>
              
              {/* Firmness Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Firmness</h3>
                <select
                  value={filters.firmness}
                  onChange={(e) => setFilters({...filters, firmness: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">All Firmness Levels</option>
                  {allFirmness.map(firmness => (
                    <option key={firmness} value={firmness}>{firmness}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="w-full lg:w-3/4 px-4">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden flex justify-between items-center mb-6">
              <button 
                onClick={() => setMobileFiltersOpen(true)}
                className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center text-royalBlue"
              >
                <Filter size={18} className="mr-2" /> Filters
              </button>
              
              {compareProducts.length > 0 && (
                <button 
                  onClick={handleOpenCompare}
                  className="bg-royalBlue text-white rounded-md px-4 py-2"
                >
                  Compare ({compareProducts.length})
                </button>
              )}
            </div>

            {/* Active Filters Display */}
            {(filters.size || filters.material || filters.thickness || filters.firmness) && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600">Active Filters:</span>
                {filters.size && (
                  <span className="bg-royalBlue/10 text-royalBlue text-sm py-1 px-3 rounded-full flex items-center">
                    Size: {filters.size}
                    <button 
                      onClick={() => setFilters({...filters, size: ''})}
                      className="ml-2"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                {filters.material && (
                  <span className="bg-royalBlue/10 text-royalBlue text-sm py-1 px-3 rounded-full flex items-center">
                    Material: {filters.material}
                    <button 
                      onClick={() => setFilters({...filters, material: ''})}
                      className="ml-2"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                {filters.thickness && (
                  <span className="bg-royalBlue/10 text-royalBlue text-sm py-1 px-3 rounded-full flex items-center">
                    Thickness: {filters.thickness}
                    <button 
                      onClick={() => setFilters({...filters, thickness: ''})}
                      className="ml-2"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                {filters.firmness && (
                  <span className="bg-royalBlue/10 text-royalBlue text-sm py-1 px-3 rounded-full flex items-center">
                    Firmness: {filters.firmness}
                    <button 
                      onClick={() => setFilters({...filters, firmness: ''})}
                      className="ml-2"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                <button 
                  onClick={resetFilters}
                  className="text-sm text-royalBlue hover:underline"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Compare Button (Desktop) */}
            <div className="hidden lg:block mb-6">
              {compareProducts.length > 0 && (
                <button 
                  onClick={handleOpenCompare}
                  className="btn-primary"
                >
                  Compare Selected ({compareProducts.length})
                </button>
              )}
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onCompare={toggleCompare}
                    isCompared={compareProducts.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-beige/50 border border-royalBlue/20 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-royalBlue mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-4">
                  Try changing your filter criteria to find products.
                </p>
                <button 
                  onClick={resetFilters}
                  className="btn-secondary"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filters Drawer */}
        <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)}></div>
          <div className={`absolute top-0 left-0 bottom-0 w-3/4 max-w-sm bg-white transform transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          } overflow-y-auto`}>
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-royalBlue">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              {/* Filter Content (same as desktop) */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="space-y-2">
                  {allSizes.map(size => (
                    <label key={size} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="size-mobile"
                        checked={filters.size === size}
                        onChange={() => setFilters({...filters, size})}
                        className="mr-2"
                      />
                      <span>{size}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Material</h3>
                <select
                  value={filters.material}
                  onChange={(e) => setFilters({...filters, material: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">All Materials</option>
                  {allMaterials.map(material => (
                    <option key={material} value={material}>{material}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Thickness</h3>
                <select
                  value={filters.thickness}
                  onChange={(e) => setFilters({...filters, thickness: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">All Thicknesses</option>
                  {allThicknesses.map(thickness => (
                    <option key={thickness} value={thickness}>{thickness}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Firmness</h3>
                <select
                  value={filters.firmness}
                  onChange={(e) => setFilters({...filters, firmness: e.target.value})}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">All Firmness Levels</option>
                  {allFirmness.map(firmness => (
                    <option key={firmness} value={firmness}>{firmness}</option>
                  ))}
                </select>
              </div>
              
              <div className="mt-8 flex space-x-4">
                <button 
                  onClick={() => {
                    resetFilters();
                    setMobileFiltersOpen(false);
                  }}
                  className="w-1/2 py-2 text-royalBlue border border-royalBlue rounded-md"
                >
                  Reset
                </button>
                <button 
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-1/2 py-2 bg-royalBlue text-white rounded-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h2 className="section-title">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Compare Modal */}
      {showCompareModal && (
        <CompareModal
          products={products.filter(product => compareProducts.includes(product.id))}
          onClose={() => setShowCompareModal(false)}
          onRemove={handleRemoveCompare}
        />
      )}
    </div>
  );
};

export default Products;


