"use client";

import type { JSX } from "react";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import { Reveal } from "@/components/Reveal/Reveal";
import "./artist.desktop.css";
import "./artist.mobile.css";

export const Artist = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { artist } = dictionary;

  return (
    <section className="artist" id="about">
      <div className="wrap artist__grid">
        <PlaceholderImage
          label={artist.imageLabel}
          src={MEDIA.isabella.src}
          tone={MEDIA.isabella.tone}
          sizes="(max-width: 900px) 100vw, 40vw"
        />
        <div>
          <div className="artist__years">{artist.years}</div>
          <div className="lbl">{artist.yearsLabel}</div>
          <Reveal as="h2">{artist.title}</Reveal>
          <Reveal as="p">{artist.body}</Reveal>
        </div>
      </div>
    </section>
  );
};
