
import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  image: string;
  sizes: string[];
  material: string;
  thickness: string;
  firmness: string;
  selected?: boolean;
}

interface ProductCardProps {
  product: Product;
  onCompare?: (id: number) => void;
  showCompare?: boolean;
  isCompared?: boolean;
}

const ProductCard = ({ product, onCompare, showCompare = true, isCompared = false }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`product-card group ${isCompared ? 'ring-2 ring-royalBlue' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick details on hover */}
        <div 
          className={`absolute inset-0 bg-royalBlue/80 p-6 flex flex-col justify-center items-center text-white transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-xl font-bold mb-3">{product.name}</h3>
          <ul className="space-y-1 text-sm mb-4">
            <li>Material: {product.material}</li>
            <li>Thickness: {product.thickness}</li>
            <li>Firmness: {product.firmness}</li>
          </ul>
          {showCompare && (
            <button 
              onClick={() => onCompare && onCompare(product.id)}
              className={`px-4 py-2 rounded ${
                isCompared 
                  ? 'bg-beige text-royalBlue font-medium flex items-center' 
                  : 'bg-white/20 hover:bg-white/30 transition-colors'
              }`}
            >
              {isCompared ? (
                <>
                  <Check size={16} className="mr-1" /> Added to Compare
                </>
              ) : (
                'Compare'
              )}
            </button>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-royalBlue">{product.name}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {product.sizes.map((size) => (
            <span 
              key={size} 
              className="bg-royalBlue/10 text-royalBlue text-xs font-medium py-1 px-2 rounded"
            >
              {size}
            </span>
          ))}
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Link 
            to={`/products/${product.id}`} 
            className="text-royalBlue font-medium text-sm flex items-center hover:underline"
          >
            View Details <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
