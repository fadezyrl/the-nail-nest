"use client";

import type { JSX } from "react";
import { SITE } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/Reveal/Reveal";
import { ContactMap } from "./ContactMap";
import "./contact.desktop.css";
import "./contact.mobile.css";

export const Contact = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { contact } = dictionary;

  return (
    <section className="contact" id="contact">
      <div className="wrap contact__grid">
        <div>
          <Reveal as="h2">{contact.title}</Reveal>
          <dl>
            <dt className="lbl">{contact.address}</dt>
            <dd>{SITE.address}</dd>
            <dt className="lbl">{contact.hours}</dt>
            <dd className="contact__hours">
              {SITE.hours.map((row) => {
                const hoursRow = contact.hoursRows[row.id];
                return (
                  <div key={row.id} className="contact__hours-row">
                    <span>{hoursRow.days}</span>
                    <span>{hoursRow.time}</span>
                  </div>
                );
              })}
            </dd>
            <dt className="lbl">{contact.instagram}</dt>
            <dd>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.instagramHandle}
              </a>
            </dd>
          </dl>
        </div>
        <ContactMap
          ariaLabel={contact.mapAria}
          openLabel={contact.openMap}
        />
      </div>
    </section>
  );
};
