import ContactForm from '@/components/ContactForm';
import React from 'react';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: 'url(bg-3.jpg) ' }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center "
    >
      <div
        style={{ backgroundImage: 'url(atombg-comp.webp) ' }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white flex justify-center md:justify-start items-center "
      >
        {/* left-20 */}
        <div className=" bottom-16 w-[70%] md:w-[55%]  md:ml-8 text-center  ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
