import { defineCollection, z } from "astro:content";

const productSchema = z.object({
  title: z.string(),
  category: z.string(),
  price: z.string(),
  image: z.string(),
  // các trường khác nếu có...
  // THÊM CÁC DÒNG DƯỚI ĐÂY:
  weight: z.string().optional(), // Trọng lượng
  certification: z.string().optional(), // Chứng nhận
  ingredients: z.string().optional(), // Thành phần
  usage: z.string().optional(), // Hướng dẫn sử dụng
  rating: z.number().default(5), // Chuyển từ z.string() sang z.number()
});

export const collections = {
  products: defineCollection({ type: "content", schema: productSchema }),
  "zh-products": defineCollection({ type: "content", schema: productSchema }), // Phải có dòng này
  blog: defineCollection({ type: "content", schema: z.any() }),
  "zh-blog": defineCollection({ type: "content", schema: z.any() }),
};
