import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import ProductsSection from './sections/ProductsSection'
import Steps from './components/Steps'
import PricingSection from './sections/PricingSection'
import CTASection from './sections/CTASection'
import Footer from './components/Footer'


const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const getPricing = async () => {
  const res = await fetch("/pricing.json");
  return res.json();
};

const pricingPromise = getPricing();
const productPromise = getProducts();



function App() {
  const [carts, setCarts] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className=''>
      <Navbar carts={carts} setActiveTab={setActiveTab} />
      <Banner />
      <Stats />

      <ProductsSection carts={carts} setCarts={setCarts} productPromise={productPromise} activeTab={activeTab}
        setActiveTab={setActiveTab} />
      <Steps />
      <PricingSection pricingPromise={pricingPromise} />
      <CTASection />
      <Footer />


    </div>
  )
}

export default App
