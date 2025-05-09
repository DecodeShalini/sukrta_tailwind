import { Mail, PhoneIcon } from "lucide-react";

export default function ContactHeader() {
return(
    <header className="w-full bg-gray-100  text-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          {/* Left Side - Tagline */} 
          <div className="mb-2 sm:mb-0 text-center sm:text-left">
            IT solutions that are designed to integrate multiple sectors
          </div>

          {/* Right Side - Contact Info + Language Dropdown */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
          <span className="flex items-center gap-1">
            <PhoneIcon className="w-4 h-4" />
            Phone <b>044 4853 5969</b>
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-4 h-4" />info@sukrtatech.com</span>

            <div className="relative">
              <select className="bg-gray-800 text-white border border-gray-700 rounded px-2 py-1 focus:outline-none">
                <option>EN</option>
                <option>FR</option>
                <option>DE</option>
                <option>ES</option>
              </select>
            </div>
          </div>
        </div>
      </header>
)
}