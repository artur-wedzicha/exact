import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ArrowRight,
  HardHat,
  Mail,
  Phone,
  ShieldCheck,
  SquarePen,
  User,
} from 'lucide-react';
import './form.css';
import Button from '@/components/button/button';
import Typography from '@/components/Typography/typography';

const ContactForm = ({ variant = 'default' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // TODO: send to API
    reset();
  };

  const isRealizationsVariant = variant === 'realizations';

  if (isRealizationsVariant) {
    const fieldClassName =
      'h-16 rounded-[var(--button-border-radius)] border border-[var(--color-form-border)]m pl-14 pr-4 text-[15px] text-[var(--color-primary-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none';

    return (
      <div>
        <Typography
          variant="text"
          className="mb-4 text-[14px] font-extrabold uppercase leading-none text-[var(--color-primary)]"
        >
          Skontaktuj się z nami
        </Typography>

        <Typography
          variant="h1"
          className="mb-6 max-w-[620px] text-[52px] font-extrabold leading-[0.98] text-[var(--color-primary-text)] md:text-[72px]"
        >
          Masz projekt? Porozmawiajmy.
        </Typography>

        <div className="mb-10 max-w-[520px]">
          <Typography
            variant="text"
            className="text-[18px] leading-[1.65] text-[var(--color-primary-text)]"
          >
            Opowiedz nam o swojej inwestycji, a przygotujemy wycenę dopasowaną
            do Twoich potrzeb.
          </Typography>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-[var(--color-muted-text)]">
                  <User size={20} strokeWidth={1.9} />
                </div>
              <input
                id="name"
                type="text"
                aria-label="Imię i nazwisko"
                placeholder="Imię i nazwisko"
                  className={fieldClassName}
                {...register('name', {
                  required: 'To pole jest wymagane',
                  minLength: {
                    value: 3,
                    message: 'Imię i nazwisko musi mieć co najmniej 3 znaki',
                  },
                })}
              />
              </div>
              {errors.name && (
                <span className="mt-1 text-[12px] text-[var(--color-error)]">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-[var(--color-muted-text)]">
                  <Phone size={20} strokeWidth={1.9} />
                </div>
                <input
                  id="phone"
                  type="tel"
                  aria-label="Telefon"
                  placeholder="Telefon"
                  className={fieldClassName}
                  {...register('phone', {
                    required: 'Numer telefonu jest wymagany',
                    pattern: {
                      value: /^\+?[0-9\s\-]{7,15}$/,
                      message: 'Niepoprawny numer telefonu',
                    },
                  })}
                />
              </div>
              {errors.phone && (
                <span className="mt-1 text-[12px] text-[var(--color-error)]">
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-[var(--color-muted-text)]">
                  <Mail size={20} strokeWidth={1.9} />
                </div>
              <input
                id="email"
                type="email"
                aria-label="Adres email"
                placeholder="E-mail"
                  className={fieldClassName}
                {...register('email', {
                  required: 'Email jest wymagany',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Niepoprawny adres email',
                  },
                })}
              />
              </div>
              {errors.email && (
                <span className="mt-1 text-[12px] text-[var(--color-error)]">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-col">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-5 flex items-center text-[var(--color-muted-text)]">
                <HardHat size={20} strokeWidth={1.9} />
              </div>
              <select
                id="subject"
                aria-label="Rodzaj usługi"
                className={`${fieldClassName} appearance-none pr-14`}
                {...register('subject', {
                  required: 'Wybór tematu jest wymagany',
                  validate: (value) => value !== '' || 'Wybierz temat',
                })}
              >
                <option value="">Rodzaj usługi</option>
                <option value="uslugi">Usługi</option>
                <option value="realizacje">Realizacje</option>
                <option value="wycena">Wycena</option>
                <option value="inne">Inne</option>
              </select>
            </div>
            {errors.subject && (
              <span className="mt-1 text-[12px] text-[var(--color-error)]">
                {errors.subject.message}
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-col">
            <div className="relative">
              <div className="pointer-events-none absolute left-5 top-5 text-[var(--color-muted-text)]">
                <SquarePen size={20} strokeWidth={1.9} />
              </div>
              <textarea
                id="message"
                rows={4}
                aria-label="Treść wiadomości"
                placeholder="Napisz o swoim projekcie"
                className="min-h-[140px] w-full rounded-[var(--button-border-radius)] border border-[var(--color-form-border)] bg-[var(--color-white)] pl-14 pr-4 pt-5 text-[15px] text-[var(--color-primary-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none"
                {...register('message')}
              />
            </div>
            {errors.message && (
              <span className="mt-1 text-[12px] text-[var(--color-error)]">
                {errors.message.message}
              </span>
            )}
          </div>

          <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <Button type="submit" className="min-w-0 gap-5 px-7">
              <span>Wyślij zapytanie</span>
              <ArrowRight size={18} strokeWidth={2.2} />
            </Button>

            <div className="flex items-center gap-3 text-[var(--color-muted-text)]">
              <div className="flex size-10 items-center justify-center rounded-full border border-[var(--color-form-border)] text-[var(--color-primary)]">
                <ShieldCheck size={18} strokeWidth={2} />
              </div>
              <Typography
                variant="text"
                className="text-[15px] leading-[1.4] text-[var(--color-muted-text)]"
              >
                Odpowiadamy zazwyczaj w ciągu 24h
              </Typography>
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group">
          <Typography variant="label" htmlFor="name">
            Imię i nazwisko *
          </Typography>
          <input
            id="name"
            type="text"
            {...register('name', {
              required: 'To pole jest wymagane',
              minLength: {
                value: 3,
                message: 'Imię i nazwisko musi mieć co najmniej 3 znaki',
              },
            })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="form-group">
          <Typography variant="label" htmlFor="email">
            Adres email *
          </Typography>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email jest wymagany',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Niepoprawny adres email',
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>

        <div className="form-group">
          <Typography variant="label" htmlFor="phone">
            Telefon *
          </Typography>
          <input
            id="phone"
            type="tel"
            {...register('phone', {
              required: 'Numer telefonu jest wymagany',
              pattern: {
                value: /^\+?[0-9\s\-]{7,15}$/,
                message: 'Niepoprawny numer telefonu',
              },
            })}
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>

        <div className="form-group">
          <Typography variant="label" htmlFor="subject">
            Temat *
          </Typography>
          <select
            id="subject"
            {...register('subject', {
              required: 'Wybór tematu jest wymagany',
              validate: (value) => value !== '' || 'Wybierz temat',
            })}
          >
            <option value="">-- Wybierz temat --</option>
            <option value="uslugi">Usługi</option>
            <option value="realizacje">Realizacje</option>
            <option value="wycena">Wycena</option>
            <option value="inne">Inne</option>
          </select>
          {errors.subject && (
            <span className="error">{errors.subject.message}</span>
          )}
        </div>

        <div className="form-group">
          <Typography variant="label" htmlFor="message">
            Treść wiadomości
          </Typography>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
          />
          {errors.message && (
            <span className="error">{errors.message.message}</span>
          )}
        </div>

        <div className="form-actions">
          <Button type="submit">Wyślij</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
