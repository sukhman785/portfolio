import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App: React.FC = () => {
    return (
        <>
            <div className="noise-overlay"></div>
            <div className="grid-background"></div>
            <div className="ambient-glow">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
        </>
    )
}

export default App
