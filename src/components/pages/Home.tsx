import React from 'react'
import Hero from '../sections/Hero'
import Brands from '../sections/Brands'
import LiveOffers from '../sections/LiveOffers'
import Products from '../sections/Products'
import EquityShares from '../sections/EquityShares'
import ResourcesSection from '../sections/Resources'
import HowItWorksSection from '../sections/HowItWorks'
import RaiseFunds from '../sections/RaiseFunds'

const HomePage = () => {
  return (
    <div>
        <section>
            <Hero />
            <Brands />
        </section>
        <section>
            <LiveOffers />
        </section>
        <section>
            <Products />
        </section>
        <section>
            <EquityShares />
        </section>
        <section>
            <HowItWorksSection />
        </section>
        <section>
            <ResourcesSection />
        </section>
        <section>
            <RaiseFunds />
        </section>
    </div>
  )
}

export default HomePage