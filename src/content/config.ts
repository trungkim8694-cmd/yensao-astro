import { defineCollection, z } from 'astro:content';

const productSchema = z.object({
  title: z.string(),
  category: z.string(),
  price: z.string(),
  image: z.string(),
  // các trường khác nếu có...
});

export const collections = {
  'products': defineCollection({ type: 'content', schema: productSchema }),
  'zh-products': defineCollection({ type: 'content', schema: productSchema }), // Phải có dòng này
  'blog': defineCollection({ type: 'content', schema: z.any() }),
  'zh-blog': defineCollection({ type: 'content', schema: z.any() }),
};