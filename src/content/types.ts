import type { LocalizedText } from "@/lib/i18n";

export type ProjectType = "exhibition" | "feria" | "event" | "research" | "collaboration";

export type Work = {
  id: string;
  artistId: string;
  title: string;
  year: number;
  technique: LocalizedText;
  dimensions: string;
  image: string;
  caption?: LocalizedText;
};

export type Artist = {
  id: string;
  name: string;
  birthYear: number;
  city: LocalizedText;
  practice: LocalizedText;
  media: LocalizedText;
  website?: string;
  instagram?: string;
  portrait: string;
  short: LocalizedText;
  bio: LocalizedText;
  statement: LocalizedText;
};

export type Project = {
  id: string;
  title: string;
  year: number;
  type: ProjectType;
  location: LocalizedText;
  dates: LocalizedText;
  curator?: string;
  cover: string;
  intro: LocalizedText;
  description: LocalizedText;
  artistIds: string[];
  workIds: string[];
  catalog?: boolean;
};

export type Publication = {
  id: string;
  title: LocalizedText;
  year: number;
  author: string;
  kind: LocalizedText;
  cover: string;
  excerpt: LocalizedText;
  body: LocalizedText;
  projectId?: string;
};

export type PressItem = {
  id: string;
  title: LocalizedText;
  outlet: string;
  date: string;
  url: string;
  image: string;
  projectId?: string;
};
