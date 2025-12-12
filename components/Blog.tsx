import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-12 gap-4">
          <div className="max-w-2xl">
            <h4 className="text-burgundy font-bold uppercase tracking-wider mb-2 text-xs sm:text-sm">Latest Updates</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900">From Our Blog</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center font-semibold text-burgundy hover:text-burgundy-light text-sm lg:text-base">
            Read All Articles &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-bold text-burgundy flex items-center gap-1 sm:gap-2">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-burgundy transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-xs sm:text-sm font-bold text-burgundy group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center font-semibold text-burgundy hover:text-burgundy-light text-sm sm:text-base">
            Read All Articles &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;