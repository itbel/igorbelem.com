"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./NavBar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/#skills",
    label: "Skills",
  },
  { href: "/contact", label: "Contact" },
];
export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [glassy, setGlassy] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const isAnchor = (href: string) => {
    return href.includes("#");
  };

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      setGlassy(window.scrollY > 64);
    });
  }, []);
  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [pathname]);
  return (
    <nav className={`${styles.NavContainer} ${glassy ? styles.Glassy : ""}`}>
      <Link href="/">
        <Image src="/assets/logo.svg" alt="Logo" width={80} height={30} />
      </Link>
      {!isOpen ? (
        <ul>
          {navLinks.map(({ href, label }) => {
            const isActiveStyle = pathname?.includes(href)
              ? {
                  // textShadow: "0 0 1px #c33232",
                  // color: "#c33232",
                }
              : {};
            return (
              <li key={href}>
                {isAnchor(href) ? (
                  <a
                    className={styles.NavLink}
                    style={isActiveStyle}
                    href={href}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    className={styles.NavLink}
                    style={isActiveStyle}
                    href={href}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
      <div className={styles.HamburgerContainer}>
        <HamburgerButton isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
      </div>
      {isOpen ? (
        <ul
          style={{
            position: "absolute",
            top: 63,
            left: 0,
            backgroundColor: "white",
            zIndex: 10000,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "92vh",
            paddingLeft: "10vw",
            paddingTop: "10vw",
          }}
        >
          {navLinks.map(({ href, label }) => {
            const isActiveStyle = pathname?.includes(href)
              ? {
                  textShadow: "0 0 1px #c33232",
                  color: "#c33232",
                }
              : {};
            return (
              <li key={href}>
                <Link
                  onClick={() => setIsOpen(false)}
                  className={styles.NavLink}
                  style={isActiveStyle}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </nav>
  );
}
