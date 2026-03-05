'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { BookOpen, Users, CalendarDays, Quote, Wifi, GraduationCap, Baby, Newspaper } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 bg-white border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display text-primary-900 mb-3">More Than a Library</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A hub for reading, learning, and connection for every age group in our community.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: 'Digital Collections', text: 'eBooks, audiobooks, and online research tools available 24/7.' },
              { icon: Users, title: 'Community Programs', text: 'Storytime, career workshops, language classes, and public events.' },
              { icon: CalendarDays, title: 'Room Reservations', text: 'Book study rooms and meeting spaces for groups and organizations.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#faf8f5] border border-primary-100 rounded-xl p-6">
                <item.icon className="w-6 h-6 text-primary-700 mb-3" />
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-primary-300 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-display text-primary-900 leading-relaxed mb-6">
            &ldquo;This library changed my life. The career workshop helped me rewrite my resume, and within a month I had three interviews. It&apos;s so much more than books &mdash; it&apos;s a launchpad for the whole community.&rdquo;
          </blockquote>
          <div className="text-gray-600">
            <p className="font-semibold text-primary-800">David Chen</p>
            <p className="text-sm">Library patron and volunteer</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display text-primary-900 mb-3">Resources for Everyone</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Free access to tools, technology, and programs that empower learners of all ages.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Wifi, title: 'Free Wi-Fi & Computers', text: 'High-speed internet, public workstations, and laptop lending for in-library use.' },
              { icon: GraduationCap, title: 'Homework Help', text: 'After-school tutoring, STEM kits, and quiet study zones for students K-12.' },
              { icon: Baby, title: 'Early Literacy', text: 'Storytime sessions, play-and-learn areas, and take-home reading packs for toddlers.' },
              { icon: Newspaper, title: 'Local History Archive', text: 'Digitized newspapers, genealogy databases, and a curated special collections room.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-[#f5f2ee] text-gray-800 pt-16 pb-8 border-t border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display text-primary-900 mb-4">Community Collective</h3>
              <p className="text-gray-600">Thoughtful programs, trusted service, and a welcoming experience for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/programs" className="hover:text-primary-800 transition-colors">Programs</Link></li>
                <li><Link href="/events" className="hover:text-primary-800 transition-colors">Events</Link></li>
                <li><Link href="/about" className="hover:text-primary-800 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-primary-800 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>123 Main Street</li>
                <li>Anytown, USA 12345</li>
                <li>info@example.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Community Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
