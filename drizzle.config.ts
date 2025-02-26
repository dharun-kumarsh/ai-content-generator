import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials: {
    url: 'postgresql://Dharun%20Kumar:npg_9AVrtOZgv8li@ep-billowing-mud-a5whxrhn.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require'
  }
});
