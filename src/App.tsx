import { useState } from 'react'
import { Menu, X, Zap, Shield, BarChart3, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-red-600">
              WebPage
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                Features
              </a>
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                Contact
              </a>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-200 pt-4 flex flex-col gap-4">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-6 py-2 rounded-lg text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-16">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.jpg"
              alt="Modern workspace with clean desk and natural light"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/1600x900/png'
              }}
            />
            <div className="absolute inset-0 bg-gray-900/60" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 md:py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Build Something
                <span className="text-red-400"> Amazing</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-200">
                A modern, clean starting point for your next project.
                Designed with performance, accessibility, and style in mind.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#features"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-lg text-center transition-colors"
                >
                  Explore Features
                </a>
                <a
                  href="#about"
                  className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-lg text-center transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-16 md:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Features
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to build a great web experience, right out of the box.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <img
                  src="/images/feature1.jpg"
                  alt="Analytics dashboard showing performance metrics"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/png'
                  }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Zap className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Lightning Fast</h3>
                </div>
                <p className="text-gray-600">
                  Built with Vite and React for blazing fast development and production performance.
                  Hot module replacement keeps your workflow smooth.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <img
                  src="/images/feature2.jpg"
                  alt="Team collaborating at a modern desk with laptops"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/png'
                  }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Shield className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Type Safe</h3>
                </div>
                <p className="text-gray-600">
                  TypeScript out of the box with strict type checking. Catch bugs before they
                  reach production and enjoy better IDE support.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <img
                  src="/images/feature3.jpg"
                  alt="People working together at a table with technology"
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/png'
                  }}
                />
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <BarChart3 className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Fully Responsive</h3>
                </div>
                <p className="text-gray-600">
                  Tailwind CSS utility classes make responsive design effortless. Looks great
                  on mobile, tablet, and desktop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-16 md:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <img
                  src="/images/about.jpg"
                  alt="Team collaborating in a bright modern office space"
                  className="w-full rounded-xl shadow-lg object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/png'
                  }}
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  About This Project
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  This is a modern, clean web page built with React, TypeScript, and Tailwind CSS.
                  It serves as a starting template that follows best practices for layout,
                  accessibility, and responsive design.
                </p>
                <p className="mt-4 text-gray-700">
                  The layout standards are documented in <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">layout.md</code>,
                  which defines the spacing, typography, color system, and component patterns
                  used throughout the site.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <Zap className="text-red-600 flex-shrink-0" size={20} />
                    Vite + React for fast development
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <Shield className="text-red-600 flex-shrink-0" size={20} />
                    TypeScript for type safety
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <BarChart3 className="text-red-600 flex-shrink-0" size={20} />
                    Tailwind CSS for responsive styling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-50 py-16 md:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get In Touch
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Have a question or want to work together? Reach out and let's connect.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert('Thank you for your message! This is a demo form.')
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">hello@example.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600 mt-1">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">WebPage</h3>
              <p className="text-sm text-gray-400">
                A modern, clean web page template built with React, TypeScript,
                and Tailwind CSS.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} WebPage. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
