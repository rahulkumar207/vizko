
import React from 'react';
import { X, Check, Download, Share2 } from 'lucide-react';
import { Product } from './ProductCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface CompareModalProps {
  products: Product[];
  onClose: () => void;
  onRemove: (id: number) => void;
}

const CompareModal = ({ products, onClose, onRemove }: CompareModalProps) => {
  if (products.length === 0) return null;

  const handleDownloadComparison = () => {
    alert('Download comparison feature will be implemented soon');
  };

  const handleShareComparison = () => {
    alert('Share comparison feature will be implemented soon');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 flex justify-between items-center p-4 border-b bg-white z-10">
          <h2 className="text-xl font-bold text-royalBlue">Compare Mattresses ({products.length})</h2>
          <div className="flex items-center space-x-3">
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-gray-600 hover:text-royalBlue flex items-center">
                  <Share2 size={18} className="mr-1" />
                  <span className="text-sm">Share</span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-3">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Share Comparison</p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={handleShareComparison}
                      className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={handleShareComparison}
                      className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={handleShareComparison}
                      className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <button 
              onClick={handleDownloadComparison}
              className="text-gray-600 hover:text-royalBlue flex items-center"
            >
              <Download size={18} className="mr-1" />
              <span className="text-sm">PDF</span>
            </button>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="p-6 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/5 font-medium text-gray-600">Features</TableHead>
                {products.map((product) => (
                  <TableHead key={product.id} className="text-center relative min-w-[200px] font-normal">
                    <div className="flex flex-col items-center">
                      <div className="relative w-full h-48 mb-3">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover rounded"
                        />
                        <button 
                          onClick={() => onRemove(product.id)}
                          className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <h3 className="font-bold text-royalBlue">{product.name}</h3>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-gray-600">Available Sizes</TableCell>
                {products.map((product) => (
                  <TableCell key={product.id} className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {product.sizes.map(size => (
                        <span key={size} className="bg-royalBlue/10 text-royalBlue text-xs py-1 px-2 rounded">
                          {size}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-600">Material</TableCell>
                {products.map((product) => (
                  <TableCell key={product.id} className="text-center">{product.material}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-600">Thickness</TableCell>
                {products.map((product) => (
                  <TableCell key={product.id} className="text-center">{product.thickness}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-600">Firmness</TableCell>
                {products.map((product) => (
                  <TableCell key={product.id} className="text-center">{product.firmness}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-600">Export Compatibility</TableCell>
                {products.map((product) => (
                  <TableCell key={product.id} className="text-center">
                    <Check size={20} className="text-green-500 mx-auto" />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-600">Compression Packed</TableCell>
                {products.map((product) => (
                  <TableCell key={product.id} className="text-center">
                    <Check size={20} className="text-green-500 mx-auto" />
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-gray-600">Warranty</TableCell>
                {products.map((product) => (
                  <TableCell key={product.id} className="text-center">
                    {product.id % 2 === 0 ? "5 Years" : "3 Years"}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div className="p-4 border-t flex justify-end">
          <button 
            onClick={onClose}
            className="btn-primary"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
