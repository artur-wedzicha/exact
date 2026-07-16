import React from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
import Button from '@/components/button/button';
import Typography from '@/components/Typography/typography';

const ContactForm = () => {
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
          />
          {errors.message && (
            <span className="error">{errors.message.message}</span>
          )}
        </div>

        <div className="form-actions">
          <Button>Wyślij</Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
