
import React from 'react';
import { Quote } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  company?: string;
  rating: number;
  text: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-beige border border-royalBlue/20 rounded-lg p-6 shadow-md h-full flex flex-col">
      <div className="mb-4 text-royalBlue flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={i < testimonial.rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        ))}
      </div>
      
      <div className="relative flex-grow">
        <Quote size={48} className="absolute -top-1 -left-2 text-royalBlue/10" />
        <p className="text-gray-800 mb-4 relative z-10 italic">"{testimonial.text}"</p>
      </div>
      
      <div className="mt-auto">
        <p className="font-semibold text-royalBlue">
          {testimonial.name}
          {testimonial.company && `, ${testimonial.company}`}
        </p>
        <p className="text-sm text-gray-600">{testimonial.location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
