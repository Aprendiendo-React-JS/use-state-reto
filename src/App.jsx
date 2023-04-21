import bravoLogo from './assets/bravo.png'
import './App.css'
import { EjercicioComponente } from './components/EjercicioComponente'

function App() {


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={bravoLogo} className="logo react" alt="React logo" />
        </a>
      </div>   
      <h3>
        Master React JS - props, events and state
      </h3>

      <EjercicioComponente
        year={2023}
      />
      
    </>
  )
}

export default App
