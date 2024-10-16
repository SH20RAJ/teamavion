import Link from 'next/link';

const Navbar = () => {
  return (
    <nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold">Team Aveon</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/#about">
              <span className="">About</span>
            </Link>
            <Link href="/#achievements">
              <span className="">Achievements</span>
            </Link>
            <Link href="/#gallery">
              <span className="">Gallery</span>
            </Link>
            <Link href="/#contact">
              <span className="">Contact</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className=""
              aria-label="Toggle Menu"
            >
              {/* Add a mobile menu toggle button */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
