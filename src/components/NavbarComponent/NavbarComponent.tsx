
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";


export  default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="">
        <img src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_hybrid&w=740&q=80" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Smart Watch</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active className="text-2xl">
          Home
        </NavbarLink>
        <NavbarLink href="#" className="text-2xl">About</NavbarLink>
        <NavbarLink href="#" className="text-2xl">Services</NavbarLink>
        <NavbarLink href="#" className="text-2xl">Services</NavbarLink>
        <NavbarLink href="#" className="text-2xl">Services</NavbarLink>
        <NavbarLink href="#"className="text-2xl">Pricing</NavbarLink>
        <NavbarLink href="#"className="text-2xl">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
