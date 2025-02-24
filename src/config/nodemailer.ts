import { env } from './env.config';
import nodemailer from 'nodemailer';

// Inicializar o transporte apenas se não for o ambiente Storybook
export const transport =
  typeof window === 'undefined' || process.env.STORYBOOK_ENV !== 'true'
    ? nodemailer.createTransport({
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        secure: false,
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      })
    : null;
