'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [isSpecialPage, setIsSpecialPage] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('dashboard') || path.includes('login') || path.includes('register')) {
      setIsSpecialPage(true);
    } else {
      setIsSpecialPage(false);
    }
  }, []);

  if (isSpecialPage) {
    return null;
  }

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          {/* Column 1: Logo & About */}
          <div>
            <img 
              src="/fulllogo_transparent_nobuffer.png" 
              alt="Ymer's Grill Logo" 
              className="h-16 mb-4"
            />
            <p className="text-sm text-neutral-200">
            Shërbejmë fast food-in më të mirë në qytet! Përbërës të freskët, shije e shkëlqyer dhe shërbim i shpejtë.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Linqe të shpejta</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">Kryefaqja</Link></li>
              <li><Link href="/menu" className="hover:text-white transition">Menu</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Termat dhe Kushtet</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Politika e Privatësisë</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Na kontaktoni</h3>
            <p><strong>Phone:</strong>069 546 7048</p>
            <p><strong>Phone:</strong>069 788 8617</p>
            <p><strong>Adresa:</strong> Mbikalimi Shkozetit Durres</p>
            
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ymer&apos;s Grill. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/p/Ymers-Grill-100076894081816/" target="_blank" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/ymersgrill/" target="_blank" className="hover:text-white"><FaInstagram size={20} /></a>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
