import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0  rounded-lg shadow md:m-4  m-2">
      <div className="flex items-center md:justify-between justify-evenly">
        <div className="hidden md:block">
          <span className="block text-sm text-gray-400 sm:text-center  ">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Reposight™
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center  text-sm font-medium   sm:mb-0 text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
