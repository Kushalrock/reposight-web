import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button, // Import Button component
  // Input,
  Image
} from "@nextui-org/react";
// import SearchIcon from "./SearchIcon";
import { navLinks } from "@/constants/nav-constants";
const AppBar: React.FC = () => {


  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      className="bg-transparent text-white "
      maxWidth="full"
    >
      <NavbarContent justify="end">
        <NavbarBrand className="mr-4">
          <Image
            src="reposight.svg"
            alt="Logo"
            width={200}
            height={40}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {/* Render navLinks using NavbarItem and Link */}
        {navLinks.map((nav, index) => (
          <NavbarItem key={nav.id}>
            <Link href={nav.href}><Button auto>{nav.title}</Button></Link>
          </NavbarItem>
        ))}
        {/* Button combined with navLinks */}

      </NavbarContent>
    </Navbar>
  );
};

export default AppBar;
