import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'



function Footer() {
  return (
 <section className="relative overflow-hidden py-10 bg-white dark:bg-neutral-900 border-t-2 border-t-black dark:border-t-white transition-colors duration-300">
  <div className="relative z-10 mx-auto max-w-7xl px-4">
    <div className="-m-6 flex flex-wrap">
      {/* Branding */}
      <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        <div className="flex h-full flex-col justify-between">
          <div className="mb-4 inline-flex items-center">
            <Logo width="100px" />
          </div>
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              &copy; {new Date().getFullYear()} BlogVerse. Crafted by Shahroz.
            </p>
          </div>
        </div>
      </div>

      {/* Company Links */}
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <h3 className="mb-6 text-xs font-semibold uppercase text-neutral-500 tracking-wider">
          Company
        </h3>
        <ul className="space-y-3">
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Features</Link></li>
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</Link></li>
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Affiliate</Link></li>
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Press Kit</Link></li>
        </ul>
      </div>

      {/* Support Links */}
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <h3 className="mb-6 text-xs font-semibold uppercase text-neutral-500 tracking-wider">
          Support
        </h3>
        <ul className="space-y-3">
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Account</Link></li>
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Help</Link></li>
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Us</Link></li>
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Customer Support</Link></li>
        </ul>
      </div>

      {/* Legal Links */}
      <div className="w-full p-6 md:w-1/2 lg:w-3/12">
        <h3 className="mb-6 text-xs font-semibold uppercase text-neutral-500 tracking-wider">
          Legal
        </h3>
        <ul className="space-y-3">
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms &amp; Conditions</Link></li>
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
          <li><Link to="/" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Licensing</Link></li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
}
export default Footer