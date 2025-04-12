
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import CompareModal from '../components/CompareModal';
import { ChevronRight } from 'lucide-react';
import products from '../data/products';
import testimonials from '../data/testimonials';

const Home = () => {
  const [compareProducts, setCompareProducts] = useState<number[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

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

  const topProducts = products.slice(0, 4);
  const catalogPreview = products.slice(0, 8);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Top Products Section */}
      <section className="section-container">
        <h2 className="section-title">Top Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onCompare={toggleCompare}
              isCompared={compareProducts.includes(product.id)}
            />
          ))}
        </div>
        {compareProducts.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button onClick={handleOpenCompare} className="btn-primary">
              Compare Selected ({compareProducts.length})
            </button>
          </div>
        )}
      </section>

      {/* Catalog Preview Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title mb-0">Catalog Preview</h2>
            <Link to="/catalog" className="text-royalBlue hover:text-royalBlue/80 font-medium flex items-center">
              View Full Catalog <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {catalogPreview.map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-royalBlue">{product.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.sizes.map(size => (
                      <span 
                        key={size} 
                        className="bg-royalBlue/10 text-royalBlue text-xs py-1 px-2 rounded"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/catalog" className="btn-primary">
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTestimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/about#testimonials" className="btn-secondary">
            View All Testimonials
          </Link>
        </div>
      </section>

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

export default Home;
