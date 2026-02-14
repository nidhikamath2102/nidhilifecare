import { colors } from '@/styles/colors';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full"
                 style={{ backgroundColor: colors.logo.maroon }}>
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight"
                  style={{ color: colors.logo.maroon }}>
                Nidhi Life Care
              </h1>
              <p className="text-sm" style={{ color: colors.business.darkBlue }}>
                G. S. Kamath
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about"
               className="hover:opacity-80 transition-opacity font-medium"
               style={{ color: colors.business.darkBlue }}>
              About Us
            </a>
            <a href="#distributors"
               className="hover:opacity-80 transition-opacity font-medium"
               style={{ color: colors.business.darkBlue }}>
              Authorized Distributors
            </a>
            <a href="#contact"
               className="hover:opacity-80 transition-opacity font-medium"
               style={{ color: colors.business.darkBlue }}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
