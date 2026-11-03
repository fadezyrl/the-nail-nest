import { en } from "./en";
import { ur } from "./ur";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale };

export const dictionaries: Record<Locale, Dictionary> = {
  EN: en,
  UR: ur,
};

export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale];
};
