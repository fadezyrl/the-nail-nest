"use client";

import type { JSX } from "react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { useLocale } from "@/context/LocaleContext";
import { resolvePath } from "@/lib/resolve-path";
import { getServiceBookingUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal/Reveal";
import "./services.desktop.css";
import "./services.mobile.css";

export const Services = (): JSX.Element => {
  const { dictionary } = useLocale();
  const { services, booking } = dictionary;
  const dictRecord = dictionary as unknown as Record<string, unknown>;

  const indexedCategories = (() => {
    let index = 0;
    return SERVICE_CATEGORIES.map((category) => ({
      ...category,
      items: category.items.map((item) => {
        index += 1;
        return {
          ...item,
          index: String(index).padStart(2, "0"),
        };
      }),
    }));
  })();

  return (
    <section className="svc" id="services">
      <div className="wrap">
        <header className="svc__header">
          <div>
            <p className="lbl">{services.label}</p>
            <Reveal as="h2">{services.title}</Reveal>
          </div>
          <p className="lbl svc__prices-note">{services.pricesNote}</p>
        </header>

        {indexedCategories.map((category) => (
          <div key={category.id} className="svc__category">
            <Reveal as="h3" className="svc__category-title">
              {resolvePath(dictRecord, category.titleKey)}
            </Reveal>

            <div>
              {category.items.map((item) => {
                const name = resolvePath(dictRecord, item.nameKey);

                return (
                  <Reveal key={item.id} className="svc__row">
                    <span className="lbl svc__num">{item.index}</span>
                    <h4>{name}</h4>
                    <span className="svc__price">{item.price}</span>
                    <a
                      className="svc__book"
                      href={getServiceBookingUrl(
                        booking.serviceText,
                        name,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {services.book}
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}

        <p className="svc__note">{services.note}</p>
      </div>
    </section>
  );
};
