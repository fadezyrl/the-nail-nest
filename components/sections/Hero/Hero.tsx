"use client";

import type { JSX } from "react";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import { Reveal } from "@/components/Reveal/Reveal";
import "./hero.desktop.css";
import "./hero.mobile.css";

export const Hero = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { hero, booking } = dictionary;
  const bookingUrl = getWhatsAppUrl(booking.defaultText);

  return (
    <header className="hero" id="home">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1>
            <span className="hero__line">
              <b>{hero.line1}</b>
            </span>
            <span className="hero__line hero__line--em">
              <b>{hero.line2}</b>
            </span>
            <span className="hero__line hero__line--em">
              <b>{hero.line3}</b>
            </span>
          </h1>
          <Reveal as="p" className="hero__sub" delayMs={400}>
            {hero.sub}
          </Reveal>
          <Reveal className="ctas" delayMs={550}>
            <a
              className="bk bk--solid"
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {hero.cta}
            </a>
            <a className="tl" href="#nail-art">
              {hero.explore}
            </a>
          </Reveal>
        </div>
        <div className="hero__media">
          <PlaceholderImage
            className="hero__photo"
            label={hero.imageLabel}
            src={MEDIA.hero.src}
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
          />
          <div className="hero__loc lbl">
            <span>{hero.city}</span>
            <span>{hero.region}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
