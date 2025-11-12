export type Project = {
  id: string;
  title: string;
  short: string;
  long?: string;
  tags?: string[];
  image?: string; // relative to /public or URL
  repo?: string;
  report?: string;
  demo?: string;
};
