"use client";

import type { JSX } from "react";
import { NAIL_ART_ITEMS } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { resolvePath } from "@/lib/resolve-path";
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import { Reveal } from "@/components/Reveal/Reveal";
import "./nail-art.desktop.css";
import "./nail-art.mobile.css";

export const NailArt = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { nailArt } = dictionary;
  const dictRecord = dictionary as unknown as Record<string, unknown>;

  return (
    <section className="nail-art" id="nail-art">
      <div className="wrap">
        <div className="nail-art__header">
          <Reveal as="h2">
            {nailArt.titleLine1}
            <br />
            {nailArt.titleLine2}
          </Reveal>
          <Reveal as="p">{nailArt.sub}</Reveal>
        </div>
        <div className="nail-art__grid">
          {NAIL_ART_ITEMS.map((item) => (
            <PlaceholderImage
              key={item.id}
              className={`nail-art__item nail-art__item--${item.id}`}
              label={resolvePath(dictRecord, item.labelKey)}
              src={item.src}
              tone={item.tone ?? "default"}
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
