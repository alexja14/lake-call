import './App.css'
import Hero from './components/Hero'
import AgentGrid from './components/AgentGrid'
import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/60 backdrop-blur-sm'}`}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-display font-bold gradient-text">Lake Call</div>
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Agents', 'Contact'].map((item) => (
              <a key={item} href="#" className="nav-link font-medium text-gray-700 hover:text-primary-600">
                {item}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      
      <main>
        <Hero />
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Discover Our <span className="gradient-text">Intelligent Assistants</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our collection of specialized agents designed to make your life easier and more productive.</p>
          </div>
          <AgentGrid />
        </section>
        
        <section className="py-16 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to dive in?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">Experience the next generation of intelligent assistance with Lake Call's innovative technology.</p>
            <button className="btn-modern bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Lake Call</h3>
              <p className="text-gray-400">Your gateway to intelligent assistance and seamless support</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Agents', 'Contact', 'Privacy Policy'].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((platform) => (
                  <a key={platform} href="#" className="text-gray-400 hover:text-white transition-colors">{platform}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lake Call. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
