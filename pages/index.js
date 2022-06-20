import { useState} from 'react'
import { useData } from '../components/DataProvider';
import Header from '../components/Header'
import ProductDisplay from '../components/ProductDisplay'
export default function Home() {
  const {products} = useData();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='flex flex-col h-full bg-zinc-50'>
      <div className='flex-initial'>
        <Header isOpen={isOpen}/>
      </div>
      <div className='flex-auto overflow-y-hidden'>
        <ProductDisplay product={products[0]} onProductOpen={() => setIsOpen(true)}/>
      </div>
    </div>
  )
}
