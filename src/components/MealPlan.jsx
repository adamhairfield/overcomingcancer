import React, { useState } from 'react'
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react'

const MealPlan = () => {
  const [expandedDay, setExpandedDay] = useState(null)

  const mealPlan = [
    {
      day: 'Monday',
      breakfast: 'Plain yogurt (unsweetened or lightly sweetened with maple syrup/honey) with fresh or frozen fruit. Optional: top with 1 tbsp flax seed, hemp seed, or soaked chia seeds.',
      lunch: 'Leftovers, salad, smoothies, or cottage cheese with fruit and nuts',
      snacks: 'Fresh fruit or vegetables, cheese slices, nuts',
      dinner: 'Pasta with homemade tomato sauce and grassfed ground beef'
    },
    {
      day: 'Tuesday',
      breakfast: 'Eggs, fresh fruit, and sourdough toast with grassfed butter',
      lunch: 'Leftovers, salad, smoothies, or cottage cheese with fruit and nuts',
      snacks: 'Fresh fruit or vegetables, cheese slices, nuts',
      dinner: 'Tacos (chicken or beef) with tortillas or shells, rice, beans, sour cream, avocado/guacamole, cheese'
    },
    {
      day: 'Wednesday',
      breakfast: 'Oatmeal or overnight oats served with fresh fruit',
      lunch: 'Leftovers, salad, smoothies, or cottage cheese with fruit and nuts',
      snacks: 'Fresh fruit or vegetables, cheese slices, nuts',
      dinner: 'Baked or grilled chicken thighs, rice, veggie or salad'
    },
    {
      day: 'Thursday',
      breakfast: 'Plain yogurt (unsweetened or lightly sweetened with maple syrup/honey) with fresh or frozen fruit. Optional: top with 1 tbsp flax seed, hemp seed, or soaked chia seeds.',
      lunch: 'Leftovers, salad, smoothies, or cottage cheese with fruit and nuts',
      snacks: 'Fresh fruit or vegetables, cheese slices, nuts',
      dinner: 'Chili with cornbread'
    },
    {
      day: 'Friday',
      breakfast: 'Eggs, fresh fruit, and sourdough toast with grassfed butter',
      lunch: 'Leftovers, salad, smoothies, or cottage cheese with fruit and nuts',
      snacks: 'Fresh fruit or vegetables, cheese slices, nuts',
      dinner: 'Burgers and fries'
    },
    {
      day: 'Saturday',
      breakfast: 'Crustless quiche and fresh fruit',
      lunch: 'Leftovers, salad, smoothies, or cottage cheese with fruit and nuts',
      snacks: 'Fresh fruit or vegetables, cheese slices, nuts',
      dinner: 'Baked whole chicken, baked or mashed potatoes/sweet potatoes, veggie or salad'
    },
    {
      day: 'Sunday',
      breakfast: 'Oatmeal or overnight oats served with fresh fruit',
      lunch: 'Leftovers, salad, smoothies, or cottage cheese with fruit and nuts',
      snacks: 'Fresh fruit or vegetables, cheese slices, nuts',
      dinner: 'Soup, salad, and sourdough (optional)'
    }
  ]

  return (
    <section id="meal-plan" className="bg-white">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sample Meal Plan
            </h2>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <h3 className="font-bold text-gray-900 mb-3">Important Notes:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Use organic or as many organic ingredients as possible</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Meal planning takes the guesswork out and helps you stay on track</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Prioritize healthy fats and proteins over carbohydrates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>When eating carbs, always pair them with protein or fat to stabilize blood sugar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold mt-1">•</span>
                <span>Remember: sugar is the number one food source for cancer</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            {mealPlan.map((day, index) => (
              <div key={index} className="card">
                <button
                  onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                  className="w-full flex items-center justify-between"
                >
                  <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                  {expandedDay === index ? (
                    <ChevronUp className="w-6 h-6 text-primary-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary-600" />
                  )}
                </button>

                {expandedDay === index && (
                  <div className="mt-4 space-y-4">
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Breakfast</h4>
                      <p className="text-gray-700">{day.breakfast}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Lunch</h4>
                      <p className="text-gray-700">{day.lunch}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Snacks</h4>
                      <p className="text-gray-700">{day.snacks}</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Dinner</h4>
                      <p className="text-gray-700">{day.dinner}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MealPlan
