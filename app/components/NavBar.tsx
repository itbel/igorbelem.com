"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";
import Image from "next/image";
import { useState } from "react";
import HamburgerButton from "./HamburgerButton";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
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
  {
    href: "/blog",
    label: "Blog",
  },
  { href: "/contact", label: "Contact" },
];
export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isAnchor = (href: string) => {
    return href.includes("#");
  };
  return (
    <nav className={styles.NavContainer}>
      <Link href="/">
        <Image src="/assets/logo.svg" alt="Logo" width={80} height={30} />
      </Link>
      <ul>
        {navLinks.map(({ href, label }) => {
          const isActiveStyle =
            pathname === href
              ? {
                  textShadow: "0 0 1px #c33232",
                  color: "#c33232",
                }
              : {};
          return (
            <li key={href}>
              {isAnchor(href) ? (
                <a href={href} className={styles.NavLink} style={isActiveStyle}>
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
      <div className={styles.HamburgerContainer}>
        <HamburgerButton isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
      </div>
    </nav>
  );
}
