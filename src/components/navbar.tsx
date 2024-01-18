import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={"_self"}
        variant="small"
        className="font-medium"
        placeholder="YourPlaceholderValue"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder="YourPlaceholderValue"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          target="_blank"
          variant="h5"
          color={isScrolling ? "gray" : "white"}
          className="ml-2"
          placeholder="YourPlaceholderValue"
        >
          <div className="flex items-center">
            <img src="/icon.png" alt="Icon" className="w-14 h-14"/>
            <span>Medpaideia</span>
          </div>
        </Typography>

        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem onClick={() => window.scrollTo(0, 0)}>Home</NavItem>
          <NavItem>Gallery</NavItem>
          <NavItem>StudyMaterials</NavItem>
          <NavItem href="#Footer">About Us</NavItem>
          <NavItem href="#Footer">Contact Us</NavItem>

          {/* <NavItem href="https://www.material-tailwind.com/docs/react/installation">
            Docs
          </NavItem> */}
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <a href="https://x.com/Med_Paidea" target="_blank">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
              placeholder="YourPlaceholderValue"
            >
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
          </a>
          <a href="https://www.youtube.com/@MedPaideia" target="_blank">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
              placeholder="YourPlaceholderValue"
            >
              <i className="fa-brands fa-youtube text-base" />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61555600858138"
            target="_blank"
          >
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
              placeholder="YourPlaceholderValue"
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/med_paideia" target="_blank">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
              placeholder="YourPlaceholderValue"
            >
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </a>
          <a
            href="https://www.whatsapp.com/channel/0029VaI4PgV35fLrtVHqNM2a"
            target="_blank"
          >
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
              placeholder="YourPlaceholderValue"
            >
              <i className="fa-brands fa-whatsapp text-base" />
            </IconButton>
          </a>
          {/* <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              Blocks
            </Button>
          </a> */}
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          placeholder="YourPlaceholderValue"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem onClick={() => window.scrollTo(0, 0)}>Home</NavItem>
            <NavItem>Gallery</NavItem>
            <NavItem>StudyMaterials</NavItem>
            <NavItem href="#Footer">About Us</NavItem>
            <NavItem href="#Footer">Contact Us</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a href="https://x.com/Med_Paidea" target="_blank">
              <IconButton
                variant="text"
                size="sm"
                placeholder="YourPlaceholderValue"
              >
                <i className="fa-brands  fa-twitter text-base" />
              </IconButton>
            </a>
            <a href="https://www.youtube.com/@MedPaideia" target="_blank">
              <IconButton
                variant="text"
                size="sm"
                placeholder="YourPlaceholderValue"
              >
                <i className="fa-brands fa-youtube text-base" />
              </IconButton>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555600858138"
              target="_blank"
            >
              <IconButton
                variant="text"
                color="gray"
                size="sm"
                placeholder="YourPlaceholderValue"
              >
                <i className="fa-brands fa-facebook text-base" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/med_paideia" target="_blank">
              <IconButton
                variant="text"
                color="gray"
                size="sm"
                placeholder="YourPlaceholderValue"
              >
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </a>
            <a
              href="https://www.whatsapp.com/channel/0029VaI4PgV35fLrtVHqNM2a"
              target="_blank"
            >
              <IconButton
                variant="text"
                color="gray"
                size="sm"
                placeholder="YourPlaceholderValue"
              >
                <i className="fa-brands fa-whatsapp text-base" />
              </IconButton>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
