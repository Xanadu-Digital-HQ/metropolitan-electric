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
  },
});
