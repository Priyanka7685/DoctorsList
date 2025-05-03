'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10 mt-1 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 ">
        <p className='pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione impedit nihil quibusdam in corporis necessitatibus sint cupiditate perferendis soluta commodi, dolor nulla praesentium cum saepe aspernatur quod accusantium culpa inventore ullam aliquid temporibus facilis. Accusamus amet adipisci voluptas veniam ipsam. Numquam inventore maxime neque ut dolor ad ratione consequatur? Voluptatem ipsa veniam labore? Eum rerum magni quam quos nisi id tempora hic eaque blanditiis quae assumenda unde deleniti, quisquam illum soluta nemo obcaecati ratione. Ex praesentium, nulla cum modi error soluta voluptatibus at dolorem esse blanditiis accusantium, ullam ut sequi quia impedit libero quod velit ipsam neque voluptatum. Sunt, inventore.</p>
        {/* Footer top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Press</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400">Support</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400">Forum</a></li>
              <li><a href="#" className="hover:text-blue-400">Events</a></li>
              <li><a href="#" className="hover:text-blue-400">Slack</a></li>
              <li><a href="#" className="hover:text-blue-400">GitHub</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                Github
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
