import React, { useState } from 'react'
import { Apple, XCircle, CheckCircle, Leaf, AlertCircle } from 'lucide-react'

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('avoid')

  const avoidFoods = [
    {
      name: 'Sugars',
      reason: 'Cancer cells feed off sugar. Avoid all sweets and added sugars. Use pure maple syrup or raw honey sparingly if needed.'
    },
    {
      name: 'Ultra-Processed Foods',
      reason: 'Contain additives, preservatives, and artificial flavors. Examples: sodas, energy drinks, cereals, chips, cookies, frozen pizzas, instant noodles, processed meats.'
    },
    {
      name: 'Seed Oils',
      reason: 'Cause massive inflammation. Safe alternatives: grassfed butter, ghee, beef tallow, coconut oil, extra virgin olive oil, avocado oil.'
    },
    {
      name: 'Lunch Meats',
      reason: 'Loaded with preservatives and carcinogenic chemicals.'
    },
    {
      name: 'Artificial Dyes',
      reason: 'Linked to cancer and other health issues.'
    },
    {
      name: 'Plastic Water Bottles & Food Containers',
      reason: 'Contain microplastics and PFAS (forever chemicals) linked to cancer and hormone disruption.'
    },
    {
      name: 'Aluminum Foil',
      reason: 'Can leach into food, especially acidic foods.'
    },
    {
      name: 'The Dirty Dozen',
      reason: 'Highest sprayed/most toxic produce. Buy organic or avoid: spinach, strawberries, kale, grapes, peaches, cherries, nectarines, pears, apples, blackberries, blueberries, potatoes.'
    }
  ]

  const superFoods = [
    {
      category: 'Cancer Stem Cell Destroyers',
      foods: ['Purple potatoes', 'Walnuts', 'Green tea and matcha tea', 'Extra Virgin Olive Oil', 'Coffee']
    },
    {
      category: 'Stem Cell Generation',
      foods: ['Cacao powder', 'Cruciferous vegetables', 'Berries', 'Turmeric', 'Dark leafy greens', 'Nuts and seeds']
    }
  ]

  const eatFoods = [
    {
      category: 'Eggs',
      description: 'Organic, pasture-raised eggs are best! From local farmers or your own backyard.'
    },
    {
      category: 'Meats',
      description: 'Organic, grassfed beef / organic pastured turkey / organic pastured chicken. Best from farmers markets.'
    },
    {
      category: 'Dairy',
      description: 'Raw milk and dairy from local farmers is best! Organic, grassfed products are next best.'
    },
    {
      category: 'Bread',
      description: 'Sourdough or whole grains. Bake yourself if possible.'
    },
    {
      category: 'Fermented Foods',
      description: 'Sauerkraut, kimchi, yogurt, kefir, kombucha - probiotic rich!'
    },
    {
      category: 'Seeds & Nuts',
      description: 'Chia, flax, hemp, pumpkin, sunflower seeds. Walnuts, brazil nuts, almonds, pecans.'
    },
    {
      category: 'Berries',
      description: 'Blueberries, raspberries, strawberries, cherries, blackberries.'
    },
    {
      category: 'Cruciferous Vegetables',
      description: 'Broccoli, cauliflower, cabbage, brussels sprouts.'
    },
    {
      category: 'Leafy Greens',
      description: 'Spinach, kale, arugula, collard greens, romaine.'
    },
    {
      category: 'Colorful Produce',
      description: 'Sweet potatoes, carrots, squashes, citrus fruits, pineapple, purple potatoes.'
    }
  ]

  return (
    <section id="nutrition" className="bg-gray-50">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Apple className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              You Are What You Eat
            </h2>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              What you put in your body will either give you the vitality and strength your body needs to 
              fight and recover or it will increase your toxic overload and hinder your body from fighting cancer.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Taking charge of what you put into your body is one of the major ways you are actively engaging 
              in the fight to overcome cancer. You cannot be passive with your diet.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveTab('avoid')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                activeTab === 'avoid'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                <span>Foods to Avoid</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('superfoods')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                activeTab === 'superfoods'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                <span>Super Foods</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('eat')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                activeTab === 'eat'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Foods to Eat</span>
              </div>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'avoid' && (
            <div>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-lg font-semibold text-gray-900">
                    Avoid these foods as if your life depends upon it, because it truly does!
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {avoidFoods.map((food, index) => (
                  <div key={index} className="card border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{food.name}</h3>
                    <p className="text-gray-700">{food.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'superfoods' && (
            <div className="space-y-8">
              {superFoods.map((section, index) => (
                <div key={index} className="card bg-gradient-to-br from-primary-50 to-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.category}</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {section.foods.map((food, foodIndex) => (
                      <div key={foodIndex} className="bg-white rounded-lg p-3 shadow-sm">
                        <p className="text-gray-700 font-medium">{food}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">Habits for Stem Cell Generation:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Sufficient Sleep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Movement: 30-45 minutes per day of low intensity exercise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Reduce stress levels</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'eat' && (
            <div>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-6">
                <p className="text-gray-700">
                  <strong>Fresh is best!</strong> Single and simple ingredients. When given the opportunity, 
                  eat organic foods as often as possible. By eating organic, you are reducing the toxic load 
                  put into your body.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {eatFoods.map((food, index) => (
                  <div key={index} className="card border-l-4 border-primary-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{food.category}</h3>
                    <p className="text-gray-700">{food.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 card bg-gradient-to-br from-primary-50 to-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Where to Shop</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {['Farmers Markets', 'Whole Foods', 'Costco', 'Azure Standard', 'Sprouts', 'Trader Joe\'s'].map((store, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-gray-700 font-medium">{store}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Nutrition
