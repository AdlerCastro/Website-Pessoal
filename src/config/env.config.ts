import z from 'zod';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['production', 'development', 'test'])
    .default('development'),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.coerce.number(),
  SMTP_USER: z.string(),
  SMTP_PASSWORD: z.string(),
  EMAIL_PRODUCTION: z.string().email(),
  EMAIL_DEVELOPMENT: z.string().email(),
});

export const env = envSchema.parse(process.env);
