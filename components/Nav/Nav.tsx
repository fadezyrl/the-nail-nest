"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import "./nav.css";

const MOBILE_MAX = 900;

export const Nav = (): JSX.Element => {
  const { dictionary } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = (): void => {
      const currentY = window.scrollY;
      const previousY = lastScrollY.current;
      const delta = currentY - previousY;

      setScrolled(currentY > 40);

      if (currentY <= 40) {
        setNavHidden(false);
      } else if (delta > 6) {
        setNavHidden(true);
      } else if (delta < -6) {
        setNavHidden(false);
      }

      lastScrollY.current = currentY;
    };

    const onResize = (): void => {
      const mobile = window.innerWidth <= MOBILE_MAX;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
    };

    onScroll();
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const node = linksRef.current;
    if (!node || !isMobile) {
      return;
    }

    if (menuOpen) {
      node.removeAttribute("inert");
      node.setAttribute("aria-hidden", "false");
      return;
    }

    node.setAttribute("inert", "");
    node.setAttribute("aria-hidden", "true");
  }, [menuOpen, isMobile]);

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const bookingUrl = getWhatsAppUrl(dictionary.booking.defaultText);

  return (
    <nav
      className={`site-nav${scrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}${navHidden && !menuOpen ? " is-hidden" : ""}`}
      aria-label={dictionary.nav.primaryAria}
    >
      <div className="wrap site-nav__bar">
        <a
          className="site-nav__logo"
          href="#home"
          aria-label={dictionary.nav.homeAria}
          onClick={closeMenu}
        >
          {SITE.brand} <i>{SITE.brandEm}</i>
        </a>

        <button
          type="button"
          className="site-nav__burger"
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
          onClick={() => {
            if (window.innerWidth > MOBILE_MAX) {
              return;
            }
            setMenuOpen((open) => !open);
          }}
        >
          {menuOpen ? dictionary.nav.close : dictionary.nav.menu}
        </button>

        <div
          id="site-nav-links"
          ref={linksRef}
          className={`site-nav__links${menuOpen ? " is-open" : ""}`}
          hidden={isMobile && !menuOpen}
        >
          <a href="#home" onClick={closeMenu}>
            {dictionary.nav.home}
          </a>
          <a href="#story" onClick={closeMenu}>
            {dictionary.nav.story}
          </a>
          <a href="#services" onClick={closeMenu}>
            {dictionary.nav.services}
          </a>
          <a href="#nail-art" onClick={closeMenu}>
            {dictionary.nav.nailArt}
          </a>
          <a href="#contact" onClick={closeMenu}>
            {dictionary.nav.contact}
          </a>
          <a
            className="bk"
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {dictionary.nav.book}
          </a>
        </div>
      </div>
    </nav>
  );
};
