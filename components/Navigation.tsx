"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header header-two header-three tw-transition-all tw-z-99 position-relative">
      <div className="container tw-container-1800-px">
        <nav className="d-flex align-items-center justify-content-between position-relative">
          <div className="header-three-logo tw-rounded-md">
            <a href="/" className="link">
              <img
                src="/assets/images/logo/logo-secendary.png"
                alt="Shan Logo"
                className="max-w-200-px"
              />
            </a>
          </div>

          <div className="header-three-social d-none d-lg-block">
            <ul className="d-flex tw-gap-205">
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="#"
                >
                  <i className="ph-bold ph-facebook-logo" />
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="#"
                >
                  <i className="ph-bold ph-x-logo" />
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="#"
                >
                  <i className="ph-bold ph-instagram-logo" />
                </a>
              </li>
              <li>
                <a
                  className="tw-w-13 tw-h-13 lh-1 d-inline-flex justify-content-center align-items-center text-heading tw-text-xl tw-rounded-md"
                  href="#"
                >
                  <i className="ph-bold ph-dribbble-logo" />
                </a>
              </li>
            </ul>
          </div>

          <div className="header-menu d-none">
            <div className="main-menu">
              <nav className="tw-main-menu-content">
                <ul>
                  <li className="p-static has-dropdown">
                    <a className="color-active" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Pages</a>
                    <ul className="submenu tw-submenu">
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/education">Education</a></li>
                      <li><a href="/works">Works</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="header-right d-flex align-items-center tw-gap-705">
            <div className="header-three-button d-none d-md-block">
              <a
                className="tw-hover-btn bg-black text-white fw-bold tw-py-4 tw-px-10 d-inline-block hover-text-white text-uppercase tw-rounded-md"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>

          <button
            className="d-block d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="32.621"
                height="1.00918"
                transform="matrix(0.704882 0.709325 -0.704882 0.709325 1.0061 0)"
                fill="currentColor"
              />
              <rect
                width="32.621"
                height="1.00918"
                transform="matrix(0.704882 -0.709325 0.704882 0.709325 0 23.2842)"
                fill="currentColor"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}
