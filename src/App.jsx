import './App.css'
import LineCharts from './components/lineChart/LineCharts'
// import DaisyNav from './components/daisyNav/DaisyNav'
import Nav from './components/nav/Nav'
import PriceLists from './components/nav/priceList/PriceLists'
import Phones from './components/phones/Phones'

function App() {


  return (
    <>
    <Nav />
    {/* <DaisyNav /> */}
    <PriceLists />
    <LineCharts />
    <Phones />
    </>
  )
}

export default App
