import React from 'react'
import { Clock, Sunrise, Sun, Sunset, Moon } from 'lucide-react'

const DailySchedule = () => {
  const schedule = [
    {
      time: 'Before Breakfast / Empty Stomach',
      icon: Sunrise,
      items: [
        'Pinch of mineral salt with 6-10 oz filtered water',
        '1 Probiotic capsule',
        '1 Ivermectin/Mebendazole capsule'
      ]
    },
    {
      time: 'After Breakfast / With Food',
      icon: Sun,
      items: [
        'Methylated Multivitamin',
        '3 Beef Liver Capsules',
        '3 Alfalfa Pills',
        '1 Milk Thistle (250mg)',
        '1 Curcumin capsule (300mg)'
      ]
    },
    {
      time: 'After Lunch / With Food',
      icon: Sun,
      items: [
        'Methylated Multivitamin',
        '1 Vitamin D3/K2 (2500IU)',
        '3 Beef Liver Capsules',
        '3 Alfalfa Pills',
        '1 Milk Thistle (250mg)',
        '1 Curcumin capsule (300mg)'
      ]
    },
    {
      time: 'After Dinner',
      icon: Sunset,
      items: [
        '1 Ivermectin/Mebendazole capsule'
      ]
    },
    {
      time: 'Before Bed',
      icon: Moon,
      items: [
        'Pinch of mineral salt with 6-10 oz filtered water'
      ]
    }
  ]

  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Daily Medications & Supplements Schedule
            </h2>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-gray-700">
            The protocol below was created for my mother as she recovered from her final round of Folfiri chemo and fighting stage 4 colon cancer. The Folfiri chemo destroyed her hemoglobin, red blood cells and bone marrow as well as inhibited the production of new blood cells and stem cells. The beef liver and alfalfa supplements were incorporated to help her hemoglobin and red blood cell counts rise and stabilize after the damaging effects of Folfiri.
            </p>
          </div>

          <div className="space-y-6">
            {schedule.map((timeSlot, index) => {
              const IconComponent = timeSlot.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" />
                    <h3 className="text-xl font-bold text-gray-900">{timeSlot.time}</h3>
                  </div>
                  <ul className="space-y-2">
                    {timeSlot.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600 font-bold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DailySchedule
