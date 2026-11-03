"use client";

import type { JSX } from "react";
import { EXPERIENCE_PHOTOS } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { resolvePath } from "@/lib/resolve-path";
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import { Reveal } from "@/components/Reveal/Reveal";
import "./experience.desktop.css";
import "./experience.mobile.css";

export const Experience = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { experience } = dictionary;
  const dictRecord = dictionary as unknown as Record<string, unknown>;

  return (
    <section className="experience">
      <div className="wrap">
        <Reveal as="h2">{experience.title}</Reveal>
      </div>
      <div
        className="experience__rail"
        tabIndex={0}
        aria-label={experience.railAria}
      >
        {EXPERIENCE_PHOTOS.map((photo) => (
          <PlaceholderImage
            key={photo.id}
            className="experience__shot"
            label={resolvePath(dictRecord, photo.labelKey)}
            src={photo.src}
            tone={photo.tone ?? "default"}
            sizes="(max-width: 900px) 85vw, 46vw"
          />
        ))}
      </div>
    </section>
  );
};
