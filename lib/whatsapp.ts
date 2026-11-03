import { SITE } from "@/data/site";

export const getWhatsAppUrl = (message?: string): string => {
  const base = `https://wa.me/${SITE.whatsapp.e164}`;
  if (!message) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
};

export const getServiceBookingUrl = (
  template: string,
  serviceName: string,
): string => {
  return getWhatsAppUrl(template.replace("{service}", serviceName));
};
