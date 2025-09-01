
import './App.css'

function App() {


  return (
    <>
    <nav className="h-16 md:h-20 text-white flex bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 justify-between items-center text-lg md:text-2xl font-bold rounded-2xl md:rounded-3xl mx-4 md:mx-6 mt-4 md:mt-6 px-6 md:px-8 py-3 md:py-4 shadow-2xl border border-white/20 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-black text-sm md:text-base font-extrabold">H</span>
        </div>
        <p className='text-yellow-300 text-lg md:text-xl font-extrabold tracking-wider'>HyperVeda</p>
      </div>
      
      <ul className="flex gap-4 md:gap-6 lg:gap-8 items-center">
        <li className="relative group">
          <span className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer flex items-center space-x-1 hover:scale-105 transform">
            <span>📞</span>
            <span className="text-sm md:text-base">Contact</span>
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
        </li>
        
        <li className="relative group">
          <span className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 cursor-pointer flex items-center space-x-1 hover:scale-105 transform">
            <span>ℹ️</span>
            <span className="text-sm md:text-base">About</span>
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
        </li>
        
        <li className="relative group">
          <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition-all duration-300 cursor-pointer flex items-center space-x-1 hover:scale-105 transform shadow-lg">
            <span>🔐</span>
            <span className="text-sm md:text-base">Login</span>
          </span>
        </li>
      </ul>
    </nav>
    
    <div className='firstpage bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 h-48 md:h-64 lg:h-80 w-full flex flex-col justify-center items-center p-4 text-center'>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">Welcome to HyperVeda</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 max-w-2xl">Your Gateway to Modern Web Development & Innovation</p>
      <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        Get Started Today
      </button>
    </div>
    
    <div className="secondpage h-auto min-h-48 md:min-h-64 lg:min-h-80 w-full bg-gradient-to-r from-amber-100 to-orange-100 p-4 md:p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
        <div className="left w-full lg:w-1/2 h-32 md:h-40 lg:h-48 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl shadow-xl flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl md:text-6xl mb-2">🚀</div>
            <h3 className="text-lg md:text-xl font-bold">Fast & Efficient</h3>
            <p className="text-sm md:text-base opacity-90">Lightning-fast performance</p>
          </div>
        </div>
        
        <div className="right w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">Why Choose HyperVeda?</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Modern Technology Stack</h4>
                <p className="text-gray-600 text-sm">Built with the latest React, Tailwind CSS, and modern web standards</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Responsive Design</h4>
                <p className="text-gray-600 text-sm">Perfect experience across all devices and screen sizes</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Beautiful UI/UX</h4>
                <p className="text-gray-600 text-sm">Stunning visuals with smooth animations and interactions</p>
              </div>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Learn More →
          </button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
