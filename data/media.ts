export type MediaSlot = {
  id: string;
  labelKey: string;
  src: string;
  tone?: "default" | "champ" | "taupe" | "burgundy" | "black";
};

export const MEDIA = {
  hero: {
    id: "hero",
    labelKey: "hero.imageLabel",
    src: "/assets/gallery-06.jpg",
    tone: "default",
  },
  philosophy: {
    id: "philosophy",
    labelKey: "story.imageLabel",
    src: "/assets/gallery-05.jpg",
    tone: "taupe",
  },
  isabella: {
    id: "isabella",
    labelKey: "artist.imageLabel",
    src: "/assets/gallery-14.jpg",
    tone: "taupe",
  },
} as const satisfies Record<string, MediaSlot>;

export const NAIL_ART_ITEMS: MediaSlot[] = [
  {
    id: "j1",
    labelKey: "nailArt.items.french",
    src: "/assets/gallery-02.jpg",
    tone: "taupe",
  },
  {
    id: "j2",
    labelKey: "nailArt.items.burgundy",
    src: "/assets/gallery-07.jpg",
    tone: "burgundy",
  },
  {
    id: "j3",
    labelKey: "nailArt.items.nudePink",
    src: "/assets/gallery-03.jpg",
    tone: "champ",
  },
  {
    id: "j4",
    labelKey: "nailArt.items.florals",
    src: "/assets/gallery-11.jpg",
    tone: "default",
  },
  {
    id: "j5",
    labelKey: "nailArt.items.colour",
    src: "/assets/gallery-01.jpg",
    tone: "burgundy",
  },
  {
    id: "j6",
    labelKey: "nailArt.items.chocolate",
    src: "/assets/gallery-16.jpg",
    tone: "taupe",
  },
  {
    id: "j7",
    labelKey: "nailArt.items.details",
    src: "/assets/gallery-12.jpg",
    tone: "champ",
  },
];

export const EXPERIENCE_PHOTOS: MediaSlot[] = [
  {
    id: "e1",
    labelKey: "experience.photos.studio",
    src: "/assets/gallery-04.jpg",
    tone: "black",
  },
  {
    id: "e2",
    labelKey: "experience.photos.preparation",
    src: "/assets/gallery-08.jpg",
    tone: "taupe",
  },
  {
    id: "e3",
    labelKey: "experience.photos.detail",
    src: "/assets/gallery-09.jpg",
    tone: "burgundy",
  },
  {
    id: "e4",
    labelKey: "experience.photos.finished",
    src: "/assets/gallery-10.jpg",
    tone: "champ",
  },
  {
    id: "e5",
    labelKey: "experience.photos.clientSet",
    src: "/assets/gallery-13.jpg",
    tone: "taupe",
  },
  {
    id: "e6",
    labelKey: "experience.photos.finishDetail",
    src: "/assets/gallery-15.jpg",
    tone: "champ",
  },
  {
    id: "e7",
    labelKey: "experience.photos.studioLight",
    src: "/assets/gallery-17.jpg",
    tone: "black",
  },
  {
    id: "e8",
    labelKey: "experience.photos.workClose",
    src: "/assets/gallery-18.jpg",
    tone: "burgundy",
  },
  {
    id: "e9",
    labelKey: "experience.photos.finalLook",
    src: "/assets/gallery-19.jpg",
    tone: "taupe",
  },
];
