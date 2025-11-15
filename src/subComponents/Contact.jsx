import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine } from "react-icons/ri";

const SubContact = () => {
  return (
    <section id="contact_Mini" className="w-full py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-rufina text-green-800">Let's connect</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-green-800">Phone</p>
                <span className="text-gray-700">+91 000 000 0000</span>
              </div>
              <div>
                <p className="font-semibold text-green-800">Email</p>
                <span className="text-gray-700">rs@gmail.com</span>
              </div>
              <div>
                <p className="font-semibold text-green-800">Address</p>
                <span className="text-gray-700">House No.123 Sector A-1</span>
              </div>
            </div>
            <ul className="flex space-x-4">
              <Link to={"/facebook"} target="_blank" className="text-green-900 hover:text-green-800 text-2xl transition-colors">
                <RiFacebookBoxLine />
              </Link>
              <Link to={"/facebook"} target="_blank" className="text-green-900 hover:text-green-800 text-2xl transition-colors">
                <RiFacebookBoxLine />
              </Link>
              <Link to={"/facebook"} target="_blank" className="text-green-900 hover:text-green-800 text-2xl transition-colors">
                <RiFacebookBoxLine />
              </Link>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl lg:text-3xl font-rufina text-green-800 mb-6">We'd love to hear from you</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <textarea 
                rows="4" 
                placeholder="Your Message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button 
                type="submit" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubContact;