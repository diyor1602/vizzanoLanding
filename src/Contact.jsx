import React from "react";

const Contact = () => {
  return (
    <form className="w-[90vw] max-w-2xl mx-auto p-6 rounded-md shadow-2xl relative bg-black/70">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white/90">
            Ismingiz
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-white/10 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:border-white/40"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-white/90">
            Telefon raqamingiz
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="bg-white/10 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:border-white/40"
            required
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="address" className="text-white/90">
            Yashash joyingiz
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="bg-white/10 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:border-white/40"
            required
          />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="comment" className="text-white/90">
            Izoh
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            className="bg-white/10 border border-white/20 rounded-md p-2 text-white focus:outline-none focus:border-white/40 resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-md transition-colors duration-300"
        >
          Yuborish
        </button>
      </div>
    </form>
  );
};

export default Contact;
