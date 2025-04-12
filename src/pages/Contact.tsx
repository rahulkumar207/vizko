
// import React, { useState } from 'react';
// import { Mail, MapPin, Phone, Send, Linkedin, Instagram } from 'lucide-react';
// import { toast } from 'sonner';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       toast.success('Your message has been sent successfully! We will get back to you soon.');
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         message: '',
//       });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <div className="pt-20">
//       {/* Header Banner */}
//       <div className="bg-royalBlue text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
//           <p className="text-beige max-w-2xl mx-auto">
//             Reach out to our team for inquiries, orders, or collaborations
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div>
//             <h2 className="text-2xl font-bold text-royalBlue mb-6">Send Us a Message</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//                   Your Name*
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royalBlue"
//                   placeholder="Enter your full name"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                   Email Address*
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royalBlue"
//                   placeholder="Enter your email"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royalBlue"
//                   placeholder="Enter your phone number"
//                 />
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
//                   Message*
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-royalBlue"
//                   placeholder="What would you like to discuss?"
//                 ></textarea>
//               </div>
              
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="btn-primary w-full flex items-center justify-center"
//               >
//                 {isSubmitting ? (
//                   <span>Sending...</span>
//                 ) : (
//                   <>
//                     <Send size={18} className="mr-2" /> Send Message
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
          
//           {/* Contact Information */}
//           <div>
//             <h2 className="text-2xl font-bold text-royalBlue mb-6">Contact Information</h2>
            
//             <div className="bg-beige/50 border border-royalBlue/20 rounded-lg p-8 mb-8">
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <MapPin size={24} className="text-royalBlue mr-4 mt-1" />
//                   <div>
//                     <h3 className="font-semibold text-royalBlue">Our Address</h3>
//                     <p className="text-gray-700 mt-1">
//                       123 Export Avenue, Industrial Area,<br />
//                       Mumbai, Maharashtra 400001, India
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <Phone size={24} className="text-royalBlue mr-4 mt-1" />
//                   <div>
//                     <h3 className="font-semibold text-royalBlue">Phone</h3>
//                     <p className="text-gray-700 mt-1">
//                       <a href="tel:+911234567890" className="hover:text-royalBlue">
//                         +91 12345 67890
//                       </a>
//                     </p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-start">
//                   <Mail size={24} className="text-royalBlue mr-4 mt-1" />
//                   <div>
//                     <h3 className="font-semibold text-royalBlue">Email</h3>
//                     <p className="text-gray-700 mt-1">
//                       <a href="mailto:info@vizkoexports.com" className="hover:text-royalBlue">
//                         info@vizkoexports.com
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mt-8 pt-6 border-t border-royalBlue/20">
//                 <h3 className="font-semibold text-royalBlue mb-3">Connect With Us</h3>
//                 <div className="flex space-x-4">
//                   <a
//                     href="https://linkedin.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-royalBlue text-white p-3 rounded-full hover:bg-royalBlue/90 transition-colors"
//                   >
//                     <Linkedin size={20} />
//                   </a>
//                   <a
//                     href="https://instagram.com"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-royalBlue text-white p-3 rounded-full hover:bg-royalBlue/90 transition-colors"
//                   >
//                     <Instagram size={20} />
//                   </a>
//                   <a
//                     href="https://wa.me/1234567890"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-royalBlue text-white p-3 rounded-full hover:bg-royalBlue/90 transition-colors"
//                   >
//                     <Phone size={20} />
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             {/* Google Map */}
//             <div className="rounded-lg overflow-hidden shadow-md h-[300px] bg-gray-200">
//               <iframe
//                 title="Vizko Global Exports Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.71401554325247!3d19.08240351412126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649949954062!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from 'react'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact