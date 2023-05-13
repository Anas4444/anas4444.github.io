import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Extracurricular, Hero, Navbar, Tech, Works, StarsCanvas, SocialMedia } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{backgroundColor: "#050816"}} className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover 
        bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Tech />
        <Extracurricular />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <SocialMedia />
      </div>
    </BrowserRouter>
  )
}

export default App