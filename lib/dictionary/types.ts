export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    homeAria: string;
    primaryAria: string;
    menu: string;
    close: string;
    home: string;
    story: string;
    services: string;
    nailArt: string;
    contact: string;
    book: string;
    langEn: string;
    langUr: string;
    langSwitchAria: string;
  };
  hero: {
    line1: string;
    line2: string;
    line3: string;
    sub: string;
    cta: string;
    explore: string;
    imageLabel: string;
    city: string;
    region: string;
  };
  story: {
    title: string;
    body: string;
    imageLabel: string;
  };
  services: {
    label: string;
    title: string;
    pricesNote: string;
    book: string;
    note: string;
    categories: {
      acrylics: string;
      builderGel: string;
      hardGel: string;
      toes: string;
      extras: string;
    };
    items: {
      plainAcrylics: string;
      fullColourAcrylics: string;
      frenchTipAcrylics: string;
      acrylicsTier1: string;
      acrylicsTier2: string;
      acrylicSoakOff: string;
      plainBuilderGel: string;
      fullColourBuilderGel: string;
      frenchTipBuilderGel: string;
      builderTier1: string;
      builderTier2: string;
      builderSoakOff: string;
      builderWithGelColour: string;
      plainHardGel: string;
      frenchTipHardGel: string;
      hardGelTier1: string;
      hardGelTier2: string;
      hardGelExtensions: string;
      hardGelExtensionsArt: string;
      fullColourGelToes: string;
      frenchTipBuilderToes: string;
      gems: string;
      toeSoakOff: string;
      toeExtension: string;
    };
  };
  nailArt: {
    titleLine1: string;
    titleLine2: string;
    sub: string;
    items: {
      french: string;
      burgundy: string;
      nudePink: string;
      florals: string;
      colour: string;
      chocolate: string;
      details: string;
    };
  };
  artist: {
    years: string;
    yearsLabel: string;
    title: string;
    body: string;
    imageLabel: string;
  };
  experience: {
    title: string;
    railAria: string;
    photos: {
      studio: string;
      preparation: string;
      detail: string;
      finished: string;
      clientSet: string;
      finishDetail: string;
      studioLight: string;
      workClose: string;
      finalLook: string;
    };
  };
  testimonials: {
    title: string;
    label: string;
    prevAria: string;
    nextAria: string;
    items: Array<{
      id: string;
      quote: string;
      name: string;
      detail: string;
    }>;
  };
  booking: {
    title: string;
    body: string;
    cta: string;
    message: string;
    note: string;
    defaultText: string;
    serviceText: string;
  };
  contact: {
    title: string;
    address: string;
    hours: string;
    hoursRows: {
      weekday: { days: string; time: string };
      saturday: { days: string; time: string };
      sunday: { days: string; time: string };
    };
    instagram: string;
    mapAria: string;
    openMap: string;
  };
  footer: {
    tagline: string;
    instagram: string;
    copyright: string;
    developedBy: string;
    developerAria: string;
  };
};
