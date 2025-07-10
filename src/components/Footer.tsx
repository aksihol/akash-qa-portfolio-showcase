
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-lg font-semibold">Akash Sihol</span>
            <span className="ml-2 text-gray-400">| Senior QA Engineer</span>
          </div>
          
          <div className="flex items-center text-gray-400">
            <Code className="w-4 h-4 mx-2 text-blue-500" />
            <span>© 2025 All rights reserved</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>Passionate about quality, committed to excellence in software testing and automation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
