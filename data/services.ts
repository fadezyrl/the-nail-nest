export type ServiceItem = {
  id: string;
  nameKey: string;
  price: string;
};

export type ServiceCategory = {
  id: string;
  titleKey: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "acrylics",
    titleKey: "services.categories.acrylics",
    items: [
      {
        id: "plain-acrylics",
        nameKey: "services.items.plainAcrylics",
        price: "£35",
      },
      {
        id: "full-colour-acrylics",
        nameKey: "services.items.fullColourAcrylics",
        price: "£37",
      },
      {
        id: "french-tip-acrylics",
        nameKey: "services.items.frenchTipAcrylics",
        price: "£40",
      },
      {
        id: "acrylics-tier-1",
        nameKey: "services.items.acrylicsTier1",
        price: "£42",
      },
      {
        id: "acrylics-tier-2",
        nameKey: "services.items.acrylicsTier2",
        price: "£44",
      },
      {
        id: "acrylic-soak-off",
        nameKey: "services.items.acrylicSoakOff",
        price: "£15",
      },
    ],
  },
  {
    id: "builder-gel",
    titleKey: "services.categories.builderGel",
    items: [
      {
        id: "plain-builder-gel",
        nameKey: "services.items.plainBuilderGel",
        price: "£33",
      },
      {
        id: "full-colour-builder-gel",
        nameKey: "services.items.fullColourBuilderGel",
        price: "£35",
      },
      {
        id: "french-tip-builder-gel",
        nameKey: "services.items.frenchTipBuilderGel",
        price: "£37",
      },
      {
        id: "builder-tier-1",
        nameKey: "services.items.builderTier1",
        price: "£40",
      },
      {
        id: "builder-tier-2",
        nameKey: "services.items.builderTier2",
        price: "£42",
      },
      {
        id: "builder-soak-off",
        nameKey: "services.items.builderSoakOff",
        price: "£10",
      },
      {
        id: "builder-with-gel-colour",
        nameKey: "services.items.builderWithGelColour",
        price: "£25",
      },
    ],
  },
  {
    id: "hard-gel",
    titleKey: "services.categories.hardGel",
    items: [
      {
        id: "plain-hard-gel",
        nameKey: "services.items.plainHardGel",
        price: "£35",
      },
      {
        id: "french-tip-hard-gel",
        nameKey: "services.items.frenchTipHardGel",
        price: "£40",
      },
      {
        id: "hard-gel-tier-1",
        nameKey: "services.items.hardGelTier1",
        price: "£40",
      },
      {
        id: "hard-gel-tier-2",
        nameKey: "services.items.hardGelTier2",
        price: "£42",
      },
      {
        id: "hard-gel-extensions",
        nameKey: "services.items.hardGelExtensions",
        price: "£40",
      },
      {
        id: "hard-gel-extensions-art",
        nameKey: "services.items.hardGelExtensionsArt",
        price: "£42",
      },
    ],
  },
  {
    id: "toes",
    titleKey: "services.categories.toes",
    items: [
      {
        id: "full-colour-gel-toes",
        nameKey: "services.items.fullColourGelToes",
        price: "£20",
      },
      {
        id: "french-tip-builder-toes",
        nameKey: "services.items.frenchTipBuilderToes",
        price: "£28",
      },
    ],
  },
  {
    id: "extras",
    titleKey: "services.categories.extras",
    items: [
      {
        id: "gems",
        nameKey: "services.items.gems",
        price: "£2",
      },
      {
        id: "toe-soak-off",
        nameKey: "services.items.toeSoakOff",
        price: "£5",
      },
      {
        id: "toe-extension",
        nameKey: "services.items.toeExtension",
        price: "£2.50",
      },
    ],
  },
];
