// src/components/Footer/Footer.jsx
import React from 'react'
import {Link, useLocation} from "react-router-dom"

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    
    return (
        <footer className={`${isHomePage ? 'bg-gradient-to-br from-green-900 to-green-600' : 'bg-gray-800'} text-white py-12`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div>
                        <h4 className="text-2xl font-bold mb-4 font-rufina">PROPERTY RENTAL</h4>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, sed quae vel illo iste, amet adipisci ad dolorem voluptatem ea doloribus labore accusamus explicabo maiores minus, excepturi est dolorum ullam?
                        </p>
                        <ul className="flex flex-wrap gap-4">
                            <li>
                                <Link to={'/'} className="text-gray-300 hover:text-white transition-colors">Home</Link>    
                            </li>
                            <li>
                                <Link to={'/termsandconditions'} className="text-gray-300 hover:text-white transition-colors">Terms And Conditions</Link>    
                            </li>
                            <li>
                                <Link to={'/contact'} className="text-gray-300 hover:text-white transition-colors">Contact</Link>    
                            </li>    
                        </ul>    
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold mb-4 font-rufina">Connect with us</h4>
                        <p className="text-gray-300 mb-2">+91 000 000 0000</p>
                        <p className="text-gray-300 mb-2">rs@gmail.com</p>
                        <p className="text-gray-300 mt-6">All Rights Reserved By RS</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer