import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-700 dark:bg-slate-200 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-10">
        <section>
          <img
            width={60}
            src="https://www.rehbarpost.com/assets/img/logo/ShipeezLogo.png"
            alt="Rehbar Post Logo"
            className="mb-4 w-24"
          />
          <h1 className="text-xl font-bold mb-2">Rehbar Post</h1>
          <p className="text-sm leading-relaxed">
            Zazna, Ganderba, <br />
            Jammu & Kashmir, India - 191131
          </p>
        </section>

        <section>
          <h1 className="text-xl font-bold mb-4">Services</h1>
          <ul className="space-y-2">
            <li className="hover:text-sky-600">NDR Management</li>
            <li className="hover:text-sky-600">Shipment Tracking</li>
            <li className="hover:text-sky-600">Channel Integrations</li>
            <li className="hover:text-sky-600">Early COD Remittance</li>
            <li className="hover:text-sky-600">24*7 Customer Support</li>
          </ul>
        </section>

        <section>
          <h1 className="text-xl font-bold mb-4">Quick Links</h1>
          <ul className="space-y-2">
            <li className="hover:text-sky-600">Our Service</li>
            <li className="hover:text-sky-600">Team</li>
          </ul>
        </section>

        <section>
          <h1 className="text-xl font-bold mb-4">Follow Us</h1>
          <ul className="flex space-x-4">
            <li className="hover:text-sky-600 cursor-pointer">
              <FaFacebook size={40} />
            </li>
            <li className="hover:text-red-600 cursor-pointer">
              <FaInstagram size={40} />
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              <FaLinkedin size={40} />
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-8 text-center text-sm  border-t border-gray-300 pt-4">
        &copy; {new Date().getFullYear()} Rehbar Post. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
