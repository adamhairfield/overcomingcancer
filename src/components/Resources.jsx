import React from 'react'
import { BookOpen, Users, Headphones, ExternalLink } from 'lucide-react'

const Resources = () => {
  const articles = [
    { name: 'Dr William Makis Ivermectin Dosage', link: 'https://diamondz.substack.com/p/dr-william-makiss-ivermectin-dosages?utm_source=multiple-personal-recommendations-email&utm_medium=email&triedRedirect=true' },
    { name: 'Differences between Fenbendazole and Mebendazole', link: 'https://www.onedaymd.com/2023/12/fenbendazole-vs-mebendazole-what-is.html' },
    { name: 'Peer Reviewed Cancer Treatment: A Hybrid Orthomolecular Protocol', link: 'https://therealtruthnetworkcom.wordpress.com/2024/10/13/ivermectin-for-cancer/' },
    { name: 'Cancer Fighting Foods', link: 'https://draxe.com/nutrition/cancer-fighting-foods/' },
    { name: 'Foods That Kill Cancer Stem Cells', link: 'https://draxe.com/health/cancer-stem-cell-killing-foods/' },
    { name: 'Chris Beat Cancer Site', link: 'https://www.chrisbeatcancer.com/' },
    { name: 'One Day MD site - excellent source for science backed articles, videos, research', link: 'https://www.onedaymd.com/' },
    { name: 'Dr Axe: Top 12 Most Misunderstood Supplements & Therapies (That Actually Work)', link: 'https://youtu.be/FcPI0t2GCc0?si=cwXvySv2RWcqJu9W' }
  ]

  const facebookGroups = [
    { name: 'DIY Cancer Protocols', link: 'https://www.facebook.com/share/g/179MSKvvJA/?mibextid=wwXIfr' },
    { name: 'Ivermectin and Fenbendazole Protocols', link: 'https://www.facebook.com/share/g/19YjRxrZcs/?mibextid=wwXIfr' }
  ]

  const peopleToFollow = [
    { name: 'Dr Josh Axe', link: 'https://www.instagram.com/drjoshaxe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'Jordan Rubin', link: 'https://www.instagram.com/jordansrubin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'Gary Breka', link: 'https://www.instagram.com/garybrecka?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'The Ultimate Human', link: 'https://www.instagram.com/theultimatehuman?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'Dr Pompa', link: 'https://www.instagram.com/drpompa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'Dr William Makis', link: 'https://x.com/MakisMedicine' },
    { name: 'Chris Beat Cancer', link: 'https://www.instagram.com/chrisbeatcancer?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' }
  ]

  const podcasts = [
    { name: 'The Ultimate Human with Gary Breka', link: 'https://open.spotify.com/show/5Faf5ecAnYW7AzGdblqd6R?si=18019fb275d64731' },
    { name: 'The Dr Josh Axe Show', link: 'https://open.spotify.com/show/3RXCARRXA4KZEOIj8bCRee?si=0331a1ddcd844344' },
    { name: 'Joe Rogan #2060 ft Gary Breka', link: 'https://open.spotify.com/episode/3IPGysPyS1rrQDZD9pl2zG?si=wAskZN8PSHedUxHSh1EMlA' },
    { name: 'Shawn Ryan Show #163 ft Gary Breka', link: 'https://open.spotify.com/episode/4E3J0JGHEC4G72YcrdF3E4?si=92Ge6dxJTmmUHd6kUKjwig' },
    { name: 'How My Mom Reversed Cancer Naturally (After Chemo Failed) - Josh Axe', link: 'https://open.spotify.com/episode/3NUThLf5jRqH8A3kzTneKu?si=cx1n_HXuTn6whBd4sUoIxA' },
    { name: 'I Was Given 90 Days to Live / How Jordan Rubin Survived', link: 'https://open.spotify.com/episode/2GCtiiMO9I3Z0lhBmbu8o3?si=XV8pxgOGTMa8GSfKc3S7oQ' },
    { name: 'Sea Salt Benefits', link: 'https://open.spotify.com/episode/74t7gX2Q0NA6c2DCgo4X6E?si=HVZaXnkgRhSZcIDPnmyfNg' }
  ]

  const books = [
    { name: 'The Biblio Diet by Jordan Rubin', link: 'https://amzn.to/4pRIPkw' },
    { name: 'Nourishing Traditions Cookbook', link: 'https://amzn.to/48d8ZI5' }
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
                    {article.link ? (
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-1"
                      >
                        {article.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>{article.name}</span>
                    )}
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
                    {group.link ? (
                      <a
                        href={group.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-1"
                      >
                        {group.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>{group.name}</span>
                    )}
                  </li>
                ))}
              </ul>

              <h4 className="text-xl font-bold text-gray-900 mb-3">People to Follow</h4>
              <ul className="space-y-2">
                {peopleToFollow.map((person, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-600 font-bold mt-1">•</span>
                    {person.link ? (
                      <a
                        href={person.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-1"
                      >
                        {person.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>{person.name}</span>
                    )}
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
                    {podcast.link ? (
                      <a
                        href={podcast.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-1"
                      >
                        {podcast.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>{podcast.name}</span>
                    )}
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
                    {book.link ? (
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-1"
                      >
                        {book.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>{book.name}</span>
                    )}
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
