import { getSiteUrl } from "@/lib/site-url";

export const site = {
  name: "Ahmad Online Quran",
  tagline: "Learn Quran · Understand Quran · Live by Quran",
  description:
    "Online one-to-one Quran classes for learners worldwide. Nazra, Tajweed, and Quran Tilawah — taught by Hafez Mawlana Mufti Saiful Islam in Bangladesh.",
  url: getSiteUrl(),
  teacher: {
    name: "Hafez Mawlana Mufti Saiful Islam",
    nameBn: "হাফেজ মাওলানা মুফতি সাইফুল ইসলাম",
    phone: "+8801760427383",
    phoneDisplay: "+880 1760-427383",
    location: "Dhaka, Bangladesh",
    locationBn: "ঢাকা বাংলাদেশ",
  },
  social: {
    facebook: "https://www.facebook.com/ahmadonlinequran",
    facebookLabel: "facebook.com/ahmadonlinequran",
    whatsapp: "https://wa.me/8801760427383",
  },
  zoomUrl: process.env.NEXT_PUBLIC_ZOOM_URL ?? null,
  meetUrl: process.env.NEXT_PUBLIC_GOOGLE_MEET_URL ?? null,
} as const;

export type Site = typeof site;
