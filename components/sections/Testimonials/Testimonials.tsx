"use client";

import {
  useEffect,
  useRef,
  useState,
  type JSX,
  type TouchEvent,
  type FocusEvent,
} from "react";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import "./testimonials.desktop.css";
import "./testimonials.mobile.css";

const AUTO_ADVANCE_MS = 6500;

export const Testimonials = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { testimonials } = dictionary;
  const items = testimonials.items;
  const total = items.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const axis = useRef<"x" | "y" | null>(null);

  const goTo = (next: number): void => {
    setIndex(((next % total) + total) % total);
  };

  const goPrev = (): void => goTo(index - 1);
  const goNext = (): void => goTo(index + 1);

  useEffect(() => {
    if (paused || total < 2) {
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [paused, total, index]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>): void => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    axis.current = null;
    setPaused(true);
  };

  const onTouchMove = (event: TouchEvent<HTMLDivElement>): void => {
    const touch = event.touches[0];
    if (!touch || axis.current) {
      return;
    }
    const dx = Math.abs(touch.clientX - touchStartX.current);
    const dy = Math.abs(touch.clientY - touchStartY.current);
    if (dx < 10 && dy < 10) {
      return;
    }
    axis.current = dx > dy ? "x" : "y";
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>): void => {
    if (axis.current === "x") {
      const touch = event.changedTouches[0];
      if (touch) {
        const dx = touch.clientX - touchStartX.current;
        if (Math.abs(dx) > 48) {
          if (dx < 0) {
            goNext();
          } else {
            goPrev();
          }
        }
      }
    }
    axis.current = null;
    window.setTimeout(() => setPaused(false), 1800);
  };

  return (
    <section
      className="testimonials"
      aria-roledescription="carousel"
      aria-label={testimonials.label}
    >
      <div className="wrap">
        <Reveal as="h2">{testimonials.title}</Reveal>

        <div
          className="testimonials__stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event: FocusEvent<HTMLDivElement>) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setPaused(false);
            }
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="testimonials__viewport" aria-live="polite">
            <div
              className="testimonials__track"
              style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
            >
              {items.map((item, i) => (
                <figure
                  key={item.id}
                  className={`testimonials__slide${i === index ? " is-active" : ""}`}
                  aria-hidden={i !== index}
                >
                  <div className="testimonials__mark" aria-hidden="true">
                    “
                  </div>
                  <blockquote>{item.quote}</blockquote>
                  <figcaption className="testimonials__attr">
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div
            className={`testimonials__progress${paused ? " is-paused" : ""}`}
            aria-hidden="true"
          >
            <span key={index} />
          </div>

          <div className="testimonials__controls">
            <div className="testimonials__arrows">
              <button
                type="button"
                aria-label={testimonials.prevAria}
                onClick={goPrev}
              >
                ←
              </button>
              <button
                type="button"
                aria-label={testimonials.nextAria}
                onClick={goNext}
              >
                →
              </button>
            </div>

            <div
              className="testimonials__dots"
              role="tablist"
              aria-label={testimonials.label}
            >
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${i + 1} / ${total}`}
                  className={i === index ? "is-active" : undefined}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <span className="testimonials__count lbl" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
              <i>/</i>
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
