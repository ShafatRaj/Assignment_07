import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter an email address');
      return;
    }
    
    localStorage.setItem('subscribedEmail', email);
    toast.success('Successfully subscribed to newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-[#07012C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white text-sm">Home</a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white text-sm">Services</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white text-sm">About</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-md bg-white text-gray-800 flex-grow"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-400 rounded-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

   
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>©2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;