
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import testimonials from '../data/testimonials';

const About = () => {
  const location = useLocation();

  // Handle hash links for navigation to specific sections
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-royalBlue flex items-center">
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 35, 102, 0.8), rgba(0, 35, 102, 0.8)), url(https://images.unsplash.com/photo-1577416412292-101b303c0e52?q=80&w=1920&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building Comfort, Delivering Globally
          </h1>
          <p className="text-xl text-beige max-w-3xl mx-auto">
            Connecting India to the world through quality mattresses
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Our Story</h2>
          <p className="text-lg mb-8 leading-relaxed">
            Connecting India to the world through quality mattresses, our experienced team 
            blends military discipline, engineering expertise, and entrepreneurial spirit 
            to create a global network. At Vizko Global Exports, we're not just manufacturing 
            mattresses; we're engineering comfort and exporting trust.
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            Our journey began with a simple yet powerful vision: to showcase Indian manufacturing 
            excellence on the global stage. With our team's diverse expertise combining manufacturing 
            precision, quality control, and international business acumen, we've established ourselves 
            as a trusted name in mattress exports across multiple continents.
          </p>
          <p className="text-lg leading-relaxed">
            Each mattress that leaves our facility meets exacting standards, designed to 
            provide the perfect balance of support, comfort, and durability. Our commitment 
            to quality has allowed us to build lasting relationships with clients worldwide, 
            from luxury hotels to major retailers.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-royalBlue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-beige text-5xl font-bold mb-2">150+</div>
              <div className="text-xl">Premium Mattress Designs</div>
            </div>
            <div className="p-6">
              <div className="text-beige text-5xl font-bold mb-2">15+</div>
              <div className="text-xl">Export Destinations</div>
            </div>
            <div className="p-6">
              <div className="text-beige text-5xl font-bold mb-2">5+</div>
              <div className="text-xl">Years of Experience</div>
            </div>
            <div className="p-6">
              <div className="text-beige text-5xl font-bold mb-2">200+</div>
              <div className="text-xl">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="section-container">
        <h2 className="section-title text-center">Our Manufacturing Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1544139609-33992fbcbad5?q=80&w=800&auto=format&fit=crop" 
              alt="Close-up of crafted mattress" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-beige">
              <h3 className="font-semibold text-royalBlue">Craftsmanship</h3>
              <p className="text-gray-700">Precision in every stitch and detail</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
              alt="Factory production" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-beige">
              <h3 className="font-semibold text-royalBlue">Manufacturing</h3>
              <p className="text-gray-700">State-of-the-art production facilities</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop" 
              alt="Logistics and packing" 
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-beige">
              <h3 className="font-semibold text-royalBlue">Logistics</h3>
              <p className="text-gray-700">Export-ready packaging and shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

