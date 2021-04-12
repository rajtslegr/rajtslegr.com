import { NextPage } from 'next';
import Head from 'next/head';
import ContactForm from '../components/ContactFrom';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Petr Rajtslegr | Countact</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
