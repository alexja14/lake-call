import './App.css'
import Hero from './components/Hero'
import AgentGrid from './components/AgentGrid'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">Lake Call</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Agents</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </nav>
      </header>
      
      <main>
        <Hero />
        <AgentGrid />
      </main>
      
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Lake Call. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
