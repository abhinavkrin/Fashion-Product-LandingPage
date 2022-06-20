import {createContext, useState} from 'react';
import collectionsData from '../data/collections.json';
import dressesData from '../data/dresses.json';
const DataContext = createContext();

export const useData = () => {
	const [collections,] = useState(collectionsData);
	const [dresses,] = useState(dressesData);
	const [dress,setActiveDress] = useState(dressesData[0]);

	return {
		getCollection: collectionName => collections[collectionName],
		products: dresses,
		setActiveProduct: setActiveDress,
		activeProduct: dress,
		activeCollection: dress.collection
	}
}

export default DataContext.Provider