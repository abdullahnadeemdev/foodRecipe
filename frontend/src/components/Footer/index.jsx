import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand/About Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-emerald-600">
              Food<span className="text-gray-800">Blog</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sharing the joy of cooking with simple, delicious recipes for
              every occasion. Join our community and start your culinary journey
              today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                Browse Recipes
              </li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                Submit a Recipe
              </li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Social/Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {/* These can be replaced with actual social icons later */}
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 cursor-pointer hover:bg-emerald-500 hover:text-white transition-all">
                f
              </div>
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 cursor-pointer hover:bg-emerald-500 hover:text-white transition-all">
                i
              </div>
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 cursor-pointer hover:bg-emerald-500 hover:text-white transition-all">
                t
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Food Blog. Built with the MERN
            Stack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
