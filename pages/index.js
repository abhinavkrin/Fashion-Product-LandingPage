import { useContext } from 'react'
import Header from '../components/Header'
import ProductDisplay from '../components/ProductDisplay'
import { ProductsContext } from './_app'
export default function Home() {
  const products = useContext(ProductsContext);
  return (
    <div className='flex flex-col h-screen bg-zinc-50'>
      <div className='flex-initial'>
        <Header/>
      </div>
      <div className='flex-auto overflow-y-hidden'>
        <ProductDisplay product={products[0]}/>
      </div>
    </div>
  )
}
