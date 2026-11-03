"use client";

import {
  useEffect,
  useRef,
  type JSX,
} from "react";
import type { Map as LeafletMap } from "leaflet";
import { SITE } from "@/data/site";
import "leaflet/dist/leaflet.css";

type ContactMapProps = {
  ariaLabel: string;
  openLabel: string;
};

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.map.query)}`;

export const ContactMap = ({
  ariaLabel,
  openLabel,
}: ContactMapProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let cancelled = false;

    const initMap = async (): Promise<void> => {
      const L = await import("leaflet");
      if (cancelled || !containerRef.current || mapRef.current) {
        return;
      }

      const map = L.map(containerRef.current, {
        center: [SITE.map.lat, SITE.map.lng],
        zoom: SITE.map.zoom,
        scrollWheelZoom: false,
        zoomControl: false,
        attributionControl: true,
      });

      L.control.zoom({ position: "topright" }).addTo(map);

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            'Tiles &copy; <a href="https://www.esri.com/">Esri</a>',
          maxZoom: 16,
        },
      ).addTo(map);

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 16,
          opacity: 0.85,
        },
      ).addTo(map);

      const icon = L.divIcon({
        className: "contact-map__marker",
        html: '<span class="contact-map__pin" aria-hidden="true"></span>',
        iconSize: [22, 32],
        iconAnchor: [11, 32],
      });

      L.marker([SITE.map.lat, SITE.map.lng], { icon }).addTo(map);

      mapRef.current = map;

      requestAnimationFrame(() => {
        map.invalidateSize();
      });
    };

    void initMap();

    const onResize = (): void => {
      mapRef.current?.invalidateSize();
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="contact-map" role="region" aria-label={ariaLabel}>
      <div ref={containerRef} className="contact-map__canvas" />
      <div className="contact-map__veil" aria-hidden="true" />
      <div className="contact-map__meta">
        <p className="contact-map__place">{SITE.map.label}</p>
        <a
          className="contact-map__open"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {openLabel}
        </a>
      </div>
    </div>
  );
};
