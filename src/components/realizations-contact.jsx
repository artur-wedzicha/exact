import * as React from 'react';
import ContactForm from './form/form';

const RealizationsContact = ({
  imageSrc = '/images/contact.png',
  imageAlt = 'Koparka Exact podczas prac ziemnych',
}) => {
  return (
    <section className="mb-32 mt-24 overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
        <div className="order-2 lg:order-1">
          <ContactForm variant="realizations" />
        </div>

      </div>
    </section>
  );
};

export default RealizationsContact;
