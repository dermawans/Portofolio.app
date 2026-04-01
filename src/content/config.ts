import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { projects };
