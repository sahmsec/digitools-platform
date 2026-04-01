import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import ProductsSection from './sections/ProductsSection'

function App() {
  const [carts, setCarts] = useState([]);

  return (
    <div className=''>
      <Navbar />
      <Banner />
      <Stats />

      <ProductsSection carts={carts} setCarts={setCarts} />


    </div>
  )
}

export default App
