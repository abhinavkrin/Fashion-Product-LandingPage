/* eslint-disable @next/next/no-img-element */
import {useState, useCallback, useContext, useRef} from 'react';
import Image from "next/image";
import ProductBigImage from "./ProductBigImage";
import ProductInfo from './ProductInfo';
import ProductSize from './ProductSize';
import ProductThumbnails from './ProductThumbnails';
import AddToCartButton from './AddToCartButton';
import SocialIcons from './SocialIcons';
import OpenDetailedViewButton from './OpenDetailedViewButton';
import { CollectionsContext } from '../pages/_app';
import CollectionCard from './CollectionCard';
import { FiArrowRightCircle, FiChevronRight } from 'react-icons/fi';

export default function ProductDisplay({product}){
	const imageRef = useRef();
	const [currentImage,setCurrentImage] = useState(() => product.images[0]);
	const [isDetailedView, setDetailedView] = useState(false);
	const collections = useContext(CollectionsContext);
	const collection = collections[product.collection];
	const onDetailView = useCallback(() => {
		setDetailedView(true);
	},[setDetailedView]);

	if(isDetailedView){		
		return (
			<div className="w-full h-full flex flex-row p-14">
				<div className="w-5/12 flex-1 pt-2 pb-10">
					<ProductInfo isDetailedView={isDetailedView} product={product} /> 
					<ProductSize product={product}/>
					<ProductThumbnails product={product} onThumbnailClick={setCurrentImage} imageRef={imageRef}/>
				</div>
				<div className="w-2/12 p-5 flex justify-center items-center">
					<AddToCartButton/>
				</div>
				<div className="w-5/12 flex flex-1">
					<ProductBigImage src={currentImage.big} alt={product.name} imageRef={imageRef}/>
				</div>
			</div>
		)
	}
	return (
		<div className="w-full h-full flex flex-row pl-14">
			<div className='w-9/12 flex flex-row relative'>
				<div className="w-5/12 flex-1 pt-12 pb-10 pl-10 pr-10 text-right z-10">
					<ProductInfo isDetailedView={isDetailedView} product={product} /> 
				</div>
				<div className="w-2/12 p-5 flex justify-center items-center z-10">
					<OpenDetailedViewButton onClick={onDetailView}/>	
				</div>
				<div className="w-5/12 p-5 flex flex-col justify-center items-center z-10 space-y-5 ">
					{product.recommendations.map(r=> (
						<div key={r.name} className="flex flex-row w-56 h-36 bg-white rounded-lg drop-shadow-2xl overflow-hidden">
							<div className='flex flex-col flex-auto h-full justify-between p-5'>
								<div className='text-gray-500'>{r.name}</div>
								<div>{r.price.currency+' '+r.price.amount}</div>
							</div>
							<div className='flex flex-col translate-y-12 translate-x-4'>
								<Image src={r.image} alt={r.name} height="150" width="150"/>
							</div>
						</div>
					))}
				</div>
				<div className="w-auto flex flex-1 absolute left-1/2 -translate-x-1/2 z-0 p-1">
					<ProductBigImage src={currentImage.big} alt={product.name} isDetailedView={isDetailedView}/>
				</div>
			</div>
			<div className='relative w-3/12 flex flex-row border-l'>
				<div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-14 w-14 flex items-center justify-center text-2xl text-pink-700 border border-pink-700 rounded-full z-50 bg-white'>
					<FiChevronRight/>
				</div>
				<div style={{
					writingMode: "vertical-lr", 
					textAlign: "center", 
					transform: "translateX(75%)",
					WebkitTextStrokeWidth: "2px",
					WebkitTextStrokeColor: "rgba(0,0,0,0.8)",
				}}
				className='text-5xl text-transparent z-10 ml-10'
				>
					{collection.name}
				</div>
				<img 
					src={collection.image}
					alt={collection.name}
					className='max-w-full h-auto z-0 overflow-hidden pt-10 pb-10 ml-auto'/>
			</div>
			<div className='fixed bottom-6 left-10'>
				<SocialIcons/>
			</div> 
		</div>
	)
}