'use client';
import React from 'react';

// const ContactForm = () => {
//   return (
//     <form>
//       <h2 className="text-2xl font-bold mb-5 text-white ">Contact me</h2>
//       <div className="mb-3">
//         <input
//           type="text"
//           placeholder="Your name"
//           name="name"
//           className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow "
//         />
//       </div>

//       <div className="mb-3">
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow "
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           placeholder="Your message"
//           name="message"
//           className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow "
//         />
//       </div>
//       <button className="px-6 mb-5 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 ">
//         Send a message
//       </button>
//     </form>
//   );
// };

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xwkdjqer');

  if (state.succeeded) {
    return <p className="text-white">Email Envoyé !</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold  text-white ">Me contacter</h2>
      <div className=" ">
        <label htmlFor="email" className="text-white  "></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className=" h-8 w-full text-md text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="h-32 ">
        <textarea
          id="message"
          name="message"
          placeholder="Vôtre message"
          className=" w-full h-[90%] text-md text-black placeholder-gray-400 bg-white border-0 rounded shadow "
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400"
      >
        Submit
      </button>
      <ValidationError className="text-white" errors={state.errors} />
    </form>
  );
}
