"use client";

import type { JSX } from "react";
import { MEDIA } from "@/data/media";
import { useLocale } from "@/context/LocaleContext";
import { PlaceholderImage } from "@/components/PlaceholderImage/PlaceholderImage";
import { Reveal } from "@/components/Reveal/Reveal";
import "./story.desktop.css";
import "./story.mobile.css";

export const Story = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { story } = dictionary;

  return (
    <section className="story" id="story">
      <div className="wrap story__grid">
        <div className="story__mark" aria-hidden="true">
          “
        </div>
        <Reveal as="h2">{story.title}</Reveal>
        <PlaceholderImage
          className="story__photo"
          label={story.imageLabel}
          src={MEDIA.philosophy.src}
          tone={MEDIA.philosophy.tone}
          sizes="(max-width: 900px) 100vw, 28vw"
        />
        <Reveal as="p">{story.body}</Reveal>
      </div>
    </section>
  );
};
