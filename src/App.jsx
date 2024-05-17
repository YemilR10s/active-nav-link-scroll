
import './App.css'

function App() {


  return (
    <>
      <div className="navContainer">
      <ul>
        <li>
          <a href="#home" className='item active'>home</a>
        </li>
        <li>
          <a href="#services" className='item'>services</a>
        </li>
        <li>
          <a href="#galeri"className='item'>galeri</a>
        </li>
        <li>
          <a href="#contact"className='item'>contact</a>
        </li>
      </ul>
      </div>

      <div className="home" id='home'>
        <p>Home</p>
      </div>
      
      <div className="services" id='services'>
        <p>services</p>
      </div>

      <div className="galeri" id='galeri'>
        <p>pagos</p>
      </div>

      <div className="contact" id='contact'>
        <p>contact</p>
      </div>
    </>
  )
}

export default App
