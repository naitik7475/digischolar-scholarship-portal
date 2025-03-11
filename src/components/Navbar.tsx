import { DarkThemeToggle, Navbar, Button } from "flowbite-react";
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onLoginClick: () => void;
  onContactClick: () => void; // Add this line
}

function MyNavbar({ onLoginClick, onContactClick }: NavbarProps) {
  const location = useLocation();

  return (
    <Navbar 
      fluid 
      className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <Navbar.Brand as={Link} to="/" className="!text-gray-800 dark:!text-white">
      <img src="/logo.png" className="mr-3 h-6 rounded-full sm:h-9" alt="DigischolarLogo" />
        <span className="self-center whitespace-nowrap text-xl font-bold">
          DIGISCHOLAR
        </span>
      </Navbar.Brand>
      
      <div className="flex md:order-2">
        <Button 
          className="mr-2"
          onClick={onLoginClick}
        >
          Login
        </Button>
        <DarkThemeToggle className="text-gray-600 dark:text-gray-400" />
        <Navbar.Toggle className="text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700" />
      </div>

      <Navbar.Collapse className="!text-gray-700 dark:!text-gray-300">
        <Navbar.Link 
          as={Link} 
          to="/" 
          active={location.pathname === '/'}
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="#" className="hover:text-blue-600 dark:hover:text-blue-400">
          About
        </Navbar.Link>
        <Navbar.Link 
          as={Link} 
          to="/check-status" 
          active={location.pathname === '/check-status'}
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Check Status
        </Navbar.Link>
        <Navbar.Link 
          as={Link} 
          to="/how-to-apply" 
          active={location.pathname === '/how-to-apply'}
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          How to apply
        </Navbar.Link>
        <Navbar.Link 
          onClick={onContactClick} 
          className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;