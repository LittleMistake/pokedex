
import CardsLayout from './components/CardsLayout.jsx'
import SearchBar from './components/SearchBar.jsx'
import './App.css'

function App() {

  return (
      <>
          <div className="mt-6 mx-10">
              <SearchBar/>
          </div>
          <div>
              <CardsLayout/>
          </div>
      </>
  )
}

export default App
