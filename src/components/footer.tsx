"use client";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS: string[] = [];
// ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="Footer"className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-1 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
            >
              About Us
            </Typography>
           
            <Typography color="white" className="mb-5 font-normal ">
              MedPedia Team <br />
              Ph: +91 9562424032 <br />
              Email: medpaideia.edu@gmail.com <br />

            </Typography>
            {/* <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <i
              className="fa fa-heart pulse text-red-700
            "
            ></i>{" "}
            for MedPedia Team by <a href="https://www.instagram.com/m_r.coder/" target="_blank" className="text-white italic"
            >Mahesh Babu</a>
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
