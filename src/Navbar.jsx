import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-20 items-center px-10 md:px-20 bg-black">
      <a
        className="md:text-5xl text-3xl font-bold uppercase hover:opacity-70 transition-all duration-300"
        href="/"
      >
        Vizzano
      </a>
    </div>
  );
};

export default Navbar;
