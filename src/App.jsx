import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Disclaimer from './components/Disclaimer'
import Protocol from './components/Protocol'
import Supplements from './components/Supplements'
import DailySchedule from './components/DailySchedule'
import Nutrition from './components/Nutrition'
import MealPlan from './components/MealPlan'
import DitchThat from './components/DitchThat'
import Resources from './components/Resources'
import Footer from './components/Footer'
import FloatingDonationButton from './components/FloatingDonationButton'
import PasswordProtection from './components/PasswordProtection'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <PasswordProtection>
      <div className="min-h-screen">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <Hero />
        <Introduction />
        <Disclaimer />
        <Protocol />
        <DailySchedule />
        <Supplements />
        <Nutrition />
        <MealPlan />
        <DitchThat />
        <Resources />
        <Footer />
        <FloatingDonationButton />
      </div>
    </PasswordProtection>
  )
}

export default App
