import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h4 className="text-burgundy font-bold uppercase tracking-wider mb-2">Latest Updates</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">From Our Blog</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center font-semibold text-burgundy hover:text-burgundy-light mt-4 md:mt-0">
            Read All Articles &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-burgundy flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-burgundy transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-sm font-bold text-burgundy group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center font-semibold text-burgundy hover:text-burgundy-light">
            Read All Articles &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;