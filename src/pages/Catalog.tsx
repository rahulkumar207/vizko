
// import React, { useState } from 'react';
// import { Download, FileText, Filter, X } from 'lucide-react';
// import products from '../data/products';
// import CompareModal from '../components/CompareModal';

// const Catalog = () => {
//   const [compareProducts, setCompareProducts] = useState<number[]>([]);
//   const [showCompareModal, setShowCompareModal] = useState(false);
//   const [activeTab, setActiveTab] = useState<string>('all');
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

//   // Group products by size
//   const productsBySize: Record<string, typeof products> = {};
  
//   products.forEach(product => {
//     product.sizes.forEach(size => {
//       if (!productsBySize[size]) {
//         productsBySize[size] = [];
//       }
//       productsBySize[size].push({...product});
//     });
//   });

//   const allSizes = Object.keys(productsBySize).sort();
  
//   const filteredProducts = activeTab === 'all' 
//     ? products 
//     : productsBySize[activeTab] || [];

//   const toggleCompare = (id: number) => {
//     if (compareProducts.includes(id)) {
//       setCompareProducts(compareProducts.filter(productId => productId !== id));
//     } else {
//       if (compareProducts.length < 4) {
//         setCompareProducts([...compareProducts, id]);
//       } else {
//         alert('You can compare up to 4 products at a time');
//       }
//     }
//   };

//   const handleOpenCompare = () => {
//     if (compareProducts.length > 0) {
//       setShowCompareModal(true);
//     } else {
//       alert('Please select at least one product to compare');
//     }
//   };

//   const handleRemoveCompare = (id: number) => {
//     setCompareProducts(compareProducts.filter(productId => productId !== id));
//     if (compareProducts.length <= 1) {
//       setShowCompareModal(false);
//     }
//   };

//   return (
//     <div className="pt-20">
//       {/* Header Banner */}
//       <div className="bg-royalBlue text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">Complete Product Catalog</h1>
//           <p className="text-beige max-w-2xl mx-auto">
//             Browse our extensive catalog of export-quality mattresses
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-10">
//         <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
//           {/* Filter Tabs */}
//           <div className="hidden md:flex space-x-2 overflow-x-auto pb-2">
//             <button
//               onClick={() => setActiveTab('all')}
//               className={`px-4 py-2 rounded-md ${
//                 activeTab === 'all' 
//                   ? 'bg-royalBlue text-white' 
//                   : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
//               }`}
//             >
//               All
//             </button>
//             {allSizes.map(size => (
//               <button
//                 key={size}
//                 onClick={() => setActiveTab(size)}
//                 className={`px-4 py-2 rounded-md whitespace-nowrap ${
//                   activeTab === size 
//                     ? 'bg-royalBlue text-white' 
//                     : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>

//           {/* Mobile Filter Button */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setMobileFiltersOpen(true)}
//               className="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center text-royalBlue"
//             >
//               <Filter size={18} className="mr-2" /> Filter by Size
//             </button>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex space-x-4">
//             {compareProducts.length > 0 && (
//               <button 
//                 onClick={handleOpenCompare}
//                 className="btn-primary flex items-center"
//               >
//                 Compare ({compareProducts.length})
//               </button>
//             )}
//             <a 
//               href="#" 
//               className="btn-secondary flex items-center"
//               onClick={(e) => {
//                 e.preventDefault();
//                 alert('Download feature will be implemented soon');
//               }}
//             >
//               <Download size={18} className="mr-2" /> Download Catalog
//             </a>
//           </div>
//         </div>

//         {/* Catalog Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map(product => (
//             <div 
//               key={product.id} 
//               className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
//                 compareProducts.includes(product.id) ? 'ring-2 ring-royalBlue' : ''
//               }`}
//             >
//               <div className="relative">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="absolute top-2 right-2 space-y-2">
//                   {product.sizes.map(size => (
//                     <span 
//                       key={size}
//                       className="inline-block bg-royalBlue text-white text-xs font-bold py-1 px-2 rounded"
//                     >
//                       {size}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-royalBlue">{product.name}</h3>
//                 <div className="mt-2 text-sm text-gray-600">
//                   <p><span className="font-medium">Material:</span> {product.material}</p>
//                   <p><span className="font-medium">Thickness:</span> {product.thickness}</p>
//                   <p><span className="font-medium">Firmness:</span> {product.firmness}</p>
//                 </div>
//                 <div className="mt-4 flex justify-between items-center">
//                   <button 
//                     onClick={() => toggleCompare(product.id)}
//                     className={`px-3 py-1 rounded text-sm ${
//                       compareProducts.includes(product.id)
//                         ? 'bg-royalBlue text-white'
//                         : 'border border-royalBlue text-royalBlue hover:bg-royalBlue/10'
//                     }`}
//                   >
//                     {compareProducts.includes(product.id) ? 'Selected' : 'Compare'}
//                   </button>
//                   <button 
//                     className="text-royalBlue hover:text-royalBlue/80 flex items-center text-sm"
//                     onClick={() => alert('Product inquiry feature will be implemented soon')}
//                   >
//                     <FileText size={16} className="mr-1" /> Inquire
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Price Sheet Request */}
//         <div className="mt-16 bg-beige/50 border border-royalBlue/20 rounded-lg p-8 text-center">
//           <h3 className="text-2xl font-bold text-royalBlue mb-3">Need More Information?</h3>
//           <p className="text-gray-700 mb-6 max-w-xl mx-auto">
//             Request our detailed price sheet with export specifications, bulk order details, and customization options.
//           </p>
//           <button 
//             className="btn-primary"
//             onClick={() => alert('Price sheet request feature will be implemented soon')}
//           >
//             Request Price Sheet
//           </button>
//         </div>
//       </div>

//       {/* Mobile Size Filter Drawer */}
//       <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
//         mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
//       }`}>
//         <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)}></div>
//         <div className={`absolute top-0 left-0 bottom-0 w-3/4 max-w-sm bg-white transform transition-transform duration-300 ${
//           mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
//         } overflow-y-auto`}>
//           <div className="p-4 border-b flex justify-between items-center">
//             <h2 className="text-xl font-bold text-royalBlue">Filter by Size</h2>
//             <button onClick={() => setMobileFiltersOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>
//           <div className="p-4">
//             <div className="space-y-2">
//               <button
//                 onClick={() => {
//                   setActiveTab('all');
//                   setMobileFiltersOpen(false);
//                 }}
//                 className={`w-full text-left px-4 py-3 rounded-md ${
//                   activeTab === 'all' 
//                     ? 'bg-royalBlue text-white' 
//                     : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
//                 }`}
//               >
//                 All Sizes
//               </button>
//               {allSizes.map(size => (
//                 <button
//                   key={size}
//                   onClick={() => {
//                     setActiveTab(size);
//                     setMobileFiltersOpen(false);
//                   }}
//                   className={`w-full text-left px-4 py-3 rounded-md ${
//                     activeTab === size 
//                       ? 'bg-royalBlue text-white' 
//                       : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Compare Modal */}
//       {showCompareModal && (
//         <CompareModal
//           products={products.filter(product => compareProducts.includes(product.id))}
//           onClose={() => setShowCompareModal(false)}
//           onRemove={handleRemoveCompare}
//         />
//       )}
//     </div>
//   );
// };

// export default Catalog;

import React from 'react'

const Catalog = () => {
  return (
    <div>Catalog</div>
  )
}

export default Catalog