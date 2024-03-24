import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { navLinks } from "@/constants/nav-constants";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar isBordered shouldHideOnScroll className="bg-black text-white" maxWidth="full">
      <NavbarContent justify="start" className="sm:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} onClick={toggleMenu} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src="reposight.svg" alt="Logo" width={200} height={40} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <Image src="reposight.svg" alt="Logo" width={200} height={40} />
        </NavbarBrand>
        {navLinks.map((nav) => (
          <NavbarItem key={nav.id}>
            <Link href={nav.href} className="text-white bg-black p-3 rounded-lg text-2xl">
              {nav.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu isOpen={isMenuOpen} className="bg-black">
        {navLinks.map((nav) => (
          <NavbarMenuItem key={nav.id}>
            <Link
              className="text-white bg-black p-3 rounded-lg text-1.5xl"
              href={nav.href}
              size="lg"
            >
              {nav.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default AppBar;
