import React from "react";
import appLogo from "../../../assets/appLogo.png"
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { LuLinkedin, LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 ">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* 1st grid */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={appLogo} className="w-36 md:w-44" alt="" />

            </div>
            <p className="text-slate-400 leading-relaxed mb-6">Empowering dreams through accessible micro-finance. We bridge the gap between ambition and opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all">
                <FaXTwitter />
              </a>
              <a href="" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all">
                <SlSocialFacebook />
              </a>
              <a href="" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all">
                <LuLinkedin />
              </a>
            </div>
          </div>

          {/* 2nd grid */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-amber-500 inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a className="text-slate-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2" href="">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2" href="">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  All Loans
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2" href="">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2" href="">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Contract Support
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2" href="">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd grid */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-amber-500 inline-block pb-1">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <LuMapPin size={24} color="#F5AF35"/>
                <span>123 Finance District, Innovation Tower, Floor 4, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <BsTelephone size={16} color="#F5AF35"/>
                {/* <LuMapPin size={24} color="#F5AF35"/> */}
                <span>01247368420</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MdMailOutline size={18} color="#F5AF35"/>
                {/* <LuMapPin size={24} color="#F5AF35"/> */}
                <span>support@loanlink.com</span>
              </li>
            </ul>
          </div>

          {/* 4th grid */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-amber-500 inline-block pb-1">
            Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get the latest updates on interest rates.
            </p>
            <form className="flex flex-col gap-2">
              <input className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded focus:outline-none focus:border-amber-500" type="email" placeholder="Your Email" />
              <button className="bg-amber-500 text-slate-900 font-bold py-2 rounded hover:bg-amber-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
         </div>

         {/* Copyright */}
         <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 LoanLink Microfinance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="" className="hover:text-white">Terms</a>
            <a href="" className="hover:text-white">Privacy</a>
            <a href="" className="hover:text-white">Cookies</a>
          </div>

         </div>

      </div>
    </footer>
  );
};

export default Footer;
