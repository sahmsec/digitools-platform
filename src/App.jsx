import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import ProductsSection from './sections/ProductsSection'


const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productPromise=getProducts();

function App() {
  const [carts, setCarts] = useState([]);

  return (
    <div className=''>
      <Navbar />
      <Banner />
      <Stats />

      <ProductsSection carts={carts} setCarts={setCarts} productPromise={productPromise}/>


    </div>
  )
}

export default App
