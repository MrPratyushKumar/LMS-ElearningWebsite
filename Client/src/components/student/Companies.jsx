import React from 'react'
import { assets } from '../../assets/assets'

function Companies() {
  return (
    <section className="pt-16 text-center">
      <p className="text-base text-gray-500">
        Trusted by learners from
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 mt-6 md:mt-10">
        <img
          src={assets.microsoft_logo}
          alt="Microsoft"
          className="w-20 md:w-28 opacity-70 hover:opacity-100 transition"
        />
        <img
          src={assets.walmart_logo}
          alt="Walmart"
          className="w-20 md:w-28 opacity-70 hover:opacity-100 transition"
        />
        <img
          src={assets.accenture_logo}
          alt="Accenture"
          className="w-20 md:w-28 opacity-70 hover:opacity-100 transition"
        />
        <img
          src={assets.adobe_logo}
          alt="Adobe"
          className="w-20 md:w-28 opacity-70 hover:opacity-100 transition"
        />
        <img
          src={assets.paypal_logo}
          alt="Paypal"
          className="w-20 md:w-28 opacity-70 hover:opacity-100 transition"
        />
      </div>
    </section>
  )
}

export default Companies
