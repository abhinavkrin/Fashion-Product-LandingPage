/* eslint-disable @next/next/no-img-element */
import {useState, useCallback, useEffect, useRef} from 'react';
import ProductBigImage from "./ProductBigImage";
import ProductInfo from './ProductInfo';
import ProductSize from './ProductSize';
import ProductThumbnails from './ProductThumbnails';
import AddToCartButton from './AddToCartButton';
import SocialIcons from './SocialIcons';
import OpenDetailedViewButton from './OpenDetailedViewButton';
import { FiChevronRight } from 'react-icons/fi';
import { useData } from './DataProvider';
import gsap from 'gsap';

export default function ProductDisplay({product}){
	const [currentImage,setCurrentImage] = useState(() => product.images[0]);
	const [isDetailedView, setDetailedView] = useState(false);
	
	const collection = useData().getCollection(product.collection);

	const imageRef = useRef();
	const productNameRef = useRef();
	const addButtonRef = useRef();
	const openDetailButtonRef = useRef();
	const productDetailContainerRef = useRef();
	const collectionContainerRef = useRef();
	const onDetailView = useCallback(() => {
		// exit animations
		gsap.fromTo('.recommendation-box', {
			y: 0,
			opacity: 1,
			delay: 0.5,
			stagger: 0.2
		},{
			y: 100,
			opacity: 0.01
		});
		if(productNameRef.current){
			gsap.fromTo(productNameRef.current,{
				y: 0,
				opacity: 1,
				delay: 0.5,
				stagger: 0.2
			},{
				y: 100,
				opacity: 0.01
			})
		}
		if(openDetailButtonRef){
			gsap.fromTo(openDetailButtonRef.current,{
				scale: 1,
				opacity: 1,
				delay: 0.5,
			},{
				opacity: 0.01,
				scale: 0.1
			})
		}
		if(collectionContainerRef){
			gsap.fromTo(collectionContainerRef.current,{
				x: 0,
				opacity: 1,
				delay: 0.5,
			},{
				x: 100,
				opacity: 0.01
			})
		}
		if(imageRef){
			gsap.fromTo(imageRef.current,{
				x: 0,
				opacity: 1,
				delay: 0.5,
			},{
				opacity: 0.01,
				x: -100,
				onComplete: () => setDetailedView(true)
			})
		}
	},[setDetailedView]);

	useEffect(() => {
		// Entry animations
		gsap.fromTo('.recommendation-box', {
			y: 100,
			opacity: 0.01
		},{
			y: 0,
			opacity: 1,
			delay: 0.5,
			stagger: 0.2
		});
		if(productNameRef.current){
			gsap.fromTo(productNameRef.current,{
				y: 100,
				opacity: 0.01
			},{
				y: 0,
				opacity: 1,
				delay: 0.5,
				stagger: 0.2
			})
		}
		if(openDetailButtonRef){
			gsap.fromTo(openDetailButtonRef.current,{
				opacity: 0.01,
				scale: 0.1
			},{
				scale: 1,
				opacity: 1,
				delay: 0.5,
			})
		}
		if(imageRef){
			gsap.fromTo(imageRef.current,{
				opacity: 0.01,
				x: -100
			},{
				x: 0,
				opacity: 1,
				delay: 0.5,
			})
		}
		if(collectionContainerRef){
			gsap.fromTo(collectionContainerRef.current,{
				x: 100,
				opacity: 0.01
			},{
				x: 0,
				opacity: 1,
				delay: 0.5,
			})
		}
	},[])

	if(isDetailedView){		
		return (
			<div className="w-full h-full flex flex-row p-14 2xl:p-32 items-center overflow-x-hidden" ref={productDetailContainerRef}>
				<div className="w-5/12 flex-1 pb-10">
					<ProductInfo isDetailedView={isDetailedView} product={product}/> 
					<ProductSize product={product}/>
					<ProductThumbnails product={product} onThumbnailClick={setCurrentImage} imageRef={imageRef}/>
				</div>
				<div className="w-2/12 p-5 flex justify-center items-center">
					<AddToCartButton/>
				</div>
				<div className="w-5/12 flex flex-1">
					<ProductBigImage src={currentImage.big} alt={product.name} imageRef={imageRef} isDetailedView={isDetailedView}/>
				</div>
			</div>
		)
	}
	return (
		<div className="w-full h-full flex flex-row pl-14 overflow-x-hidden" ref={productDetailContainerRef}>
			<div className='w-9/12 flex flex-row relative'>
				<div className="w-5/12 flex-1 pt-12 pb-10 pl-10 pr-10 text-right z-10">
					<ProductInfo 
						productNameRef={productNameRef}
						isDetailedView={isDetailedView} 
						product={product}/> 
				</div>
				<div className="w-2/12 p-5 flex justify-center items-center z-10">
					<OpenDetailedViewButton onClick={onDetailView} buttonRef={openDetailButtonRef}/>	
				</div>
				<div className="w-5/12 p-5 flex flex-col justify-center items-center z-10 space-y-5 ">
					{product.recommendations.map(r=> (
						<div key={r.name} className="recommendation-box flex flex-row w-56 2xl:w-80 h-36 2xl:h-52 bg-white rounded-lg drop-shadow-2xl overflow-hidden">
							<div className='flex flex-col flex-auto h-full justify-between p-5 2xl:p-7'>
								<div className='text-gray-500 2xl:text-xl'>{r.name}</div>
								<div className='2xl:text-xl'>{r.price.currency+' '+r.price.amount}</div>
							</div>
							<div className='flex flex-col translate-y-14 translate-x-4'>
								<img src={r.image} alt={r.name} className="w-40 h-40 2xl:w-44 2xl:h-42"/>
							</div>
						</div>
					))}
				</div>
				<div className="w-auto flex flex-1 absolute left-1/2 -translate-x-1/2 z-0 p-1">
					<ProductBigImage src={currentImage.big} alt={product.name} isDetailedView={isDetailedView} imageRef={imageRef}/>
				</div>
			</div>
			<div className='relative w-3/12 flex flex-row border-l 2xl:border-l-2' ref={collectionContainerRef}>
				<div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-14 w-14 flex items-center justify-center text-2xl text-pink-700 border border-pink-700 rounded-full z-50 bg-white'>
					<FiChevronRight/>
				</div>
				<div style={{
					writingMode: "vertical-lr", 
					textAlign: "center", 
					transform: "translateX(50%)",
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
					className='max-w-full w-full h-auto z-0 overflow-hidden pt-10 pb-10 ml-auto'/>
			</div>
			<div className='fixed bottom-6 left-10 z-50'>
				<SocialIcons/>
			</div> 
		</div>
	)
}