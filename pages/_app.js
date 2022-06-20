import {createContext} from 'react';
import collections from '../data/collections.json'
import products from '../data/dresses.json'
import '../styles/globals.css'

export const CollectionsContext = createContext();
export const ProductsContext = createContext();

function MyApp({ Component, pageProps }) {
  return (
    <CollectionsContext.Provider value={collections}>
      <ProductsContext.Provider value={products}>
        <Component {...pageProps} />
      </ProductsContext.Provider>
    </CollectionsContext.Provider>
  )
}

export default MyApp
