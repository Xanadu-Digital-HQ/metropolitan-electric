import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        content: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        date: z.string(),
        minutesRead: z.number(),
      }),
    }),
    mediaCenter: defineCollection({
      type: "page",
      source: "media-center/**/*.md",
      schema: z.object({
        content: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        date: z.string().optional(),
        minutesRead: z.number().optional(),
      }),
    }),
  },
});
