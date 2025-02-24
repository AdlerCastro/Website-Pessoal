'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormSchemaType } from '@/schemas/form.schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import Input from '../ui/input';
import { ContactAction } from '@/actions/send-email/route';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Textarea } from '../ui/textarea';
import { useMask } from '@/hooks/use-mask';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { cn } from '@/lib/utils';

interface FormInteractsStorybook {
  isLoading?: boolean;
}

export default function FormContact({
  isLoading: handleSelect = false,
}: FormInteractsStorybook) {
  const { maskPhone } = useMask();
  const [isLoading, setIsLoading] = useState<boolean>(handleSelect);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      number: '',
      message: '',
    },
  });

  useEffect(() => {
    setIsLoading(handleSelect);
  }, [handleSelect]);

  const [isVisible, setIsVisible] = useState<boolean[]>(Array(1).fill(false));

  const animatedElementsRef = useRef<(AnimatedElementsTypes | null)[]>(
    Array(1).fill(null),
  );

  HandleObserver({
    setIsVisible,
    isVisible,
    animatedElementsRef,
  });

  async function onSubmit(values: FormSchemaType) {
    try {
      setIsLoading(true);

      const response = await ContactAction(values).finally(() => {
        setIsLoading(false);
      });

      if (response.success) {
        toast('Formulário enviado com sucesso!', {
          description: 'Sua mensagem foi recebida. Em breve retornaremos!',
        });
        setIsLoading(false);
        form.reset();
      } else {
        toast('Erro ao enviar formulário', {
          description: `Falha no envio. Por favor, entre em contato diretamente. ${response.message}`,
        });
        setIsLoading(false);
      }
    } catch (error) {
      toast('Erro ao enviar formulário', {
        description: `Erro ao enviar formulário. Exceção: ${error}`,
      });
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        ref={(el) => {
          animatedElementsRef.current[0] = el;
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          'flex w-fit flex-col items-center gap-6 rounded-lg border border-white/20 bg-white/5 p-6 transition-all duration-300 ease-in-out',
          isVisible[0]
            ? 'translate-y-0 opacity-100'
            : '-translate-y-10 opacity-0',
        )}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  required
                  id='name'
                  {...field}
                  placeholder='Insira seu nome aqui'
                  label='Nome'
                  hasError={!!form.formState.errors.name}
                  disabled={isLoading}
                  onInvalid={(e) => {
                    (e.target as HTMLInputElement).setCustomValidity(
                      'Inserir o nome é obrigatório',
                    );
                  }}
                  onInput={(e) => {
                    (e.target as HTMLInputElement).setCustomValidity('');
                  }}
                />
              </FormControl>
              <FormMessage className='font-Roboto italic' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  required
                  id='email'
                  {...field}
                  placeholder='Insira seu email aqui'
                  label='Email'
                  hasError={!!form.formState.errors.email}
                  disabled={isLoading}
                  onInvalid={(e) => {
                    (e.target as HTMLInputElement).setCustomValidity(
                      'Inserir o email é obrigatório',
                    );
                  }}
                  onInput={(e) => {
                    (e.target as HTMLInputElement).setCustomValidity('');
                  }}
                />
              </FormControl>
              <FormMessage className='font-Roboto italic' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='number'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input
                  required
                  id='number'
                  type='tel'
                  {...field}
                  placeholder='Insira seu número aqui'
                  label='Número'
                  hasError={!!form.formState.errors.number}
                  disabled={isLoading}
                  onInvalid={(e) => {
                    (e.target as HTMLInputElement).setCustomValidity(
                      'Inserir o número é obrigatório',
                    );
                  }}
                  onInput={(e) => {
                    (e.target as HTMLInputElement).setCustomValidity('');
                  }}
                  onChange={(e) => {
                    const maskedValue = maskPhone(e.target.value);
                    field.onChange(maskedValue);
                  }}
                />
              </FormControl>
              <FormMessage className='font-Roboto italic' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Textarea
                  required
                  id='message'
                  {...field}
                  label='Mensagem'
                  error={!!form.formState.errors.message}
                  placeholder='Insira sua mensagem aqui'
                  disabled={isLoading}
                  onInvalid={(e) => {
                    (e.target as HTMLInputElement).setCustomValidity(
                      'Inserir a mensagem é obrigatório',
                    );
                  }}
                  onInput={(e) => {
                    (e.target as HTMLInputElement).setCustomValidity('');
                  }}
                />
              </FormControl>
              <FormMessage className='font-Roboto italic' />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          disabled={
            isLoading ||
            form.getValues().email === '' ||
            form.getValues().message === '' ||
            form.getValues().name === ''
          }
          variant={isLoading ? 'loading' : 'default'}
          className='bg-white text-black hover:bg-white/80 active:bg-zinc-400 disabled:bg-white/60'
        >
          Enviar formulário
        </Button>
      </form>
    </Form>
  );
}
