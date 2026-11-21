export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  status: "available" | "in-progress";
  blurb: string;
  url?: string;
  urlLabel?: string;
}

export const books: Book[] = [
  {
    slug: "zen-divers",
    title: "Zen Divers",
    subtitle: "Skills · Focus · Control · Performance",
    status: "available",
    blurb:
      "A field guide to advanced scuba skills from a PADI Master Scuba Diver Trainer: buoyancy, trim, propulsion and the calm, deliberate habits that make a diver safe and in control underwater.",
    url: "https://www.amazon.com/dp/B0FH59XXYM",
    urlLabel: "Get it on Amazon",
  },
  {
    slug: "the-lost-art-of-being-an-asshole",
    title: "The Lost Art of Being an Asshole",
    status: "in-progress",
    blurb:
      "Currently being expanded for its print edition. Details when it's ready.",
  },
];
