'use server';

import { env } from '@/config/env.config';
import { transport } from '@/config/nodemailer';
import EmailTemplate from '@/emails/template';
import { FormSchema, FormSchemaType } from '@/schemas/form.schema';
import { render } from '@react-email/components';

export async function ContactAction(
  formData: FormSchemaType,
): Promise<{ success: boolean; message: string }> {
  try {
    const result = FormSchema.safeParse(formData);
    const newFormData = result.data!;
    const parsedData: FormSchemaType = {
      email: newFormData.email,
      name: newFormData.name,
      number: newFormData.number,
      message: newFormData.message,
    };

    if (!transport) {
      throw new Error('Transport is not configured');
    }
    await transport.sendMail({
      from: env.SMTP_USER,
      to:
        env.NODE_ENV === 'production'
          ? env.EMAIL_PRODUCTION
          : env.EMAIL_DEVELOPMENT,
      subject: 'Formulário de Contato',
      html: await render(EmailTemplate({ ...parsedData }), {
        pretty: true,
      }),
    });

    return { success: true, message: 'Formulário enviado com sucesso!' };
  } catch (error) {
    return {
      success: false,
      message: 'Erro ao enviar formulário. Exceção: ' + error,
    };
  }
}
