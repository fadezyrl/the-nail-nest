"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal/Reveal";
import "./booking.desktop.css";
import "./booking.mobile.css";

export const Booking = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { booking } = dictionary;
  const bookingUrl = getWhatsAppUrl(booking.defaultText);

  return (
    <section className="booking" id="book">
      <div className="wrap">
        <Reveal as="h2">{booking.title}</Reveal>
        <Reveal as="p">{booking.body}</Reveal>
        <div className="ctas">
          <a
            className="bk bk--fill"
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {booking.cta}
          </a>
          <a
            className="tl"
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {booking.message}
          </a>
        </div>
        <small>{booking.note}</small>
      </div>
    </section>
  );
};
