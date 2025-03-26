import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ closeMenu }) => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a 
                        href={href} 
                        className="text-neutral-400 hover:text-white transition-colors"
                        onClick={closeMenu} // Close menu on click
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
  // Toggling between the menu and close
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-ul hover:text-white transition-colors">
            Akhil Shetty M
          </a>

          {/* Button for responsive hamburger menu */}
          <button 
            onClick={toggleMenu} 
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" 
            aria-label="Toggle menu"
          >
            <img 
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
                alt="toggle menu" 
                className="w-6 h-6"
            />
          </button>

          {/* Desktop navigation */}
          <nav className="sm:flex hidden">
            <NavItems closeMenu={() => {}} />
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 w-full h-screen bg-black/90 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} overflow-hidden sm:hidden`}>
        <nav className="p-5">
          <NavItems closeMenu={() => setIsOpen(false)} />
        </nav>
      </div>

    </header>
  );
};

export default Navbar;