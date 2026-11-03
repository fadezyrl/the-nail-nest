"use client";

import type { JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import "./footer.desktop.css";
import "./footer.mobile.css";

export const Footer = (): JSX.Element => {
  const { dictionary } = useLocale();
  const bookingUrl = getWhatsAppUrl(dictionary.booking.defaultText);

  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="site-footer__tagline">{dictionary.footer.tagline}</p>
        <div className="site-footer__row">
          <nav aria-label="Footer">
            <a href="#story">{dictionary.nav.story}</a>
            <a href="#services">{dictionary.nav.services}</a>
            <a href="#nail-art">{dictionary.nav.nailArt}</a>
            <a href="#contact">{dictionary.nav.contact}</a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dictionary.footer.instagram}
            </a>
          </nav>
          <a
            className="bk bk--fill"
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary.nav.book}
          </a>
        </div>
        <div className="site-footer__copy">
          {dictionary.footer.copyright}
        </div>
        <p className="site-footer__credit">
          {dictionary.footer.developedBy}{" "}
          <a
            href={SITE.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={dictionary.footer.developerAria}
          >
            {SITE.developerName}
          </a>
        </p>
      </div>
    </footer>
  );
};
