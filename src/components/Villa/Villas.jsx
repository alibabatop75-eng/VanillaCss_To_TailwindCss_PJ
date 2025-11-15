// src/components/Villa/Villas.jsx
import React from 'react'
import {villas} from '../../villas';
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Villas = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 px-4" id='allVillas'>
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-rufina text-green-900 mb-4">ALL VILLAS</h1>
          <p className="text-gray-600 text-lg">{villas.length} Properties</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villas.map((element) => {
            return (
              <Link 
                to={`/villa/${element.id}`} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2" 
                key={element.id}
              >
                <img 
                  src={element.image} 
                  alt={element.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <span>{element.location}</span>
                    <RxDot />
                    <span>{element.category}</span>
                  </div>
                  <div className="text-xl font-rufina text-gray-800 mb-4">{element.name}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col items-center text-center">
                      <IoIosPeople className="text-green-900 text-xl mb-1" />
                      <span className="font-semibold">{element.guests}</span>
                      <span className="text-xs text-gray-500">Guests</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaBed className="text-green-900 text-xl mb-1" />
                      <span className="font-semibold">{element.bedrooms}</span>
                      <span className="text-xs text-gray-500">Bedrooms</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <BiArea className="text-green-900 text-xl mb-1" />
                      <span className="font-semibold">{element.squareMeter}</span>
                      <span className="text-xs text-gray-500">Area</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaBath className="text-green-900 text-xl mb-1" />
                      <span className="font-semibold">{element.bathrooms}</span>
                      <span className="text-xs text-gray-500">Bathrooms</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-600 text-white text-center py-3 rounded">
                    From <span className="font-bold">Rs.{element.dailyRent} / Day</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Villas