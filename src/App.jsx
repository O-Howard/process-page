import './App.css'
import banner from './assets/background-png.png'
import firstImg from './assets/process-icon-1.svg'
import secondImg from './assets/process-icon-2.svg'
import thirdImg from './assets/process-icon-3.svg'
import fourthImg from './assets/process-icon-4.svg'

function App() {
  return (
    <>
      <div className='page'>
          <img className='banner' src={banner} alt="banner"/>
          <div className='container'>
            <div className='data'>
              <p className='smallTitle'>Our process</p>
              <p className='bigTitle'>Easy And Perfect Solution For <br /> Your Business App</p>
              <div className='row'>
                <div className='section'>
                  <img src={firstImg} alt="icon" />
                  <p className='heading'>47+ Components</p>
                  <p className='text'>Save time and build products with <span>well-organized and customizable</span> desktop components for Figma.</p>
                </div>
                <div className='section'>
                  <img src={secondImg} alt="icon" />
                  <p className='heading'>Documentation</p>
                  <p className='text'>Developer handoff made easy. Component and style guide documentation for your team in <span>one place.</span></p>
                </div>
                <div className='section'>
                  <img src={thirdImg} alt="icon" />
                  <p className='heading'>Design faster</p>
                  <p className='text'>Stop wasting time on creating everything from scratch for <span>every new project you start.</span></p>
                </div>
                <div className='section'>
                  <img src={fourthImg} alt="icon" />
                  <p className='heading'>Customize</p>
                  <p className='text'>Easily apply your branding by changing font, color and <span>Component properties.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
