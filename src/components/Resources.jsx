import React from 'react'
import { BookOpen, Users, Headphones, ExternalLink } from 'lucide-react'

const Resources = () => {
  const articles = [
    'Dr William Makis Ivermectin Dosage',
    'Differences between Fenbendazole and Mebendazole',
    'Peer Reviewed Cancer Treatment: A Hybrid Orthomolecular Protocol',
    'Cancer Fighting Foods',
    'Foods That Kill Cancer Stem Cells',
    'Chris Beat Cancer Site',
    'One Day MD site - excellent source for science backed articles, videos, research',
    'Dr Axe: Top 12 Most Misunderstood Supplements & Therapies (That Actually Work)'
  ]

  const facebookGroups = [
    'DIY Cancer Protocols',
    'Ivermectin and Fenbendazole Protocols'
  ]

  const peopleToFollow = [
    'Dr Josh Axe',
    'Jordan Rubin',
    'Gary Breka',
    'The Ultimate Human',
    'Dr Pompa',
    'Dr William Makis',
    'Chris Beat Cancer'
  ]

  const podcasts = [
    'The Ultimate Human with Gary Breka',
    'The Dr Josh Axe Show',
    'Joe Rogan #2060 ft Gary Breka',
    'Shawn Ryan Show #163 ft Gary Breka',
    'How My Mom Reversed Cancer Naturally (After Chemo Failed) - Josh Axe',
    'I Was Given 90 Days to Live / How Jordan Rubin Survived',
    'Sea Salt Benefits'
  ]

  const books = [
    'The Biblio Diet by Jordan Rubin',
    'Nourishing Traditions Cookbook'
  ]

  return (
    <section id="resources" className="bg-white">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-primary-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Resources for Deeper Study
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Articles & Sites */}
            <div className="card">
              <div className="flex items-center gap-2 mb-4">
                <ExternalLink className="w-6 h-6 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">Articles & Sites</h3>
              </div>
              <ul className="space-y-2">
                {articles.map((article, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold mt-1">•</span>
                    <span>{article}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facebook Groups */}
            <div className="card">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">Facebook Groups</h3>
              </div>
              <ul className="space-y-2 mb-6">
                {facebookGroups.map((group, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold mt-1">•</span>
                    <span>{group}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3">People to Follow</h4>
              <ul className="space-y-2">
                {peopleToFollow.map((person, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold mt-1">•</span>
                    <span>{person}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Podcasts */}
            <div className="card">
              <div className="flex items-center gap-2 mb-4">
                <Headphones className="w-6 h-6 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">Recommended Podcasts</h3>
              </div>
              <ul className="space-y-2">
                {podcasts.map((podcast, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold mt-1">•</span>
                    <span>{podcast}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Books */}
            <div className="card">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">Recommended Books</h3>
              </div>
              <ul className="space-y-2">
                {books.map((book, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold mt-1">•</span>
                    <span>{book}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Terms to Know */}
          <div className="mt-8 card bg-gradient-to-br from-primary-50 to-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Terms to Know</h3>
            <p className="text-gray-700 mb-4">
              Understanding these key terms will help you navigate cancer research and treatment options:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Antioxidants',
                'Stem Cells',
                'Carcinogenic',
                'Free Radicals',
                'Oxidative Stress',
                'Metastasis',
                'Angiogenesis',
                'Ultra Processed Foods',
                'Seed Oils',
                'Autophagy',
                'Cancer Stem Cells (CSCs)',
                'PFAS (Forever Chemicals)'
              ].map((term, index) => (
                <div key={index} className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-gray-700 font-medium">{term}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
