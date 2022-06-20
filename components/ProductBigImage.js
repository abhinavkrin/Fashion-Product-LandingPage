/* eslint-disable @next/next/no-img-element */
import gsap from 'gsap';
import {useEffect} from 'react';

export default function ProductBigImage({src,alt,isDetailedView, imageRef}){
	useEffect(() => {
		if(imageRef){
			gsap.fromTo(imageRef.current, {
				x: 100,
				opacity: 0.01,
			},{
				x:0,
				opacity: 1,
				duration: 0.2
			})
		}
	},[src,imageRef])
	return (
		<div className="w-full h-full relative flex flex-col">
			<div style={{position: "absolute", top: (isDetailedView?"50%":"25%"), left: "45%", transform: "translate(-55%, -25%)", zIndex: 1, width: (isDetailedView?"100%":"700px")}} className="flex justify-end pt-30 2xl:pt-32">
				<svg className='w-4/6 2xl:w-11/12 2xl:mt-10' viewBox="0 0 295 299" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="175.5" cy="119.5" r="119.5" fill="#C4EAB2" fillOpacity="0.24"/>
					<circle cx="119.5" cy="179.5" r="119.5" fill="#C4EAB2" fillOpacity="0.24"/>
					<circle cx="149.5" cy="147.5" r="128.5" fill="#D7F2DF"/>
				</svg>
			</div>
			<img ref={imageRef} data-bigUrl={src} src={src} alt={alt} className="relative w-64 2xl:w-96 pt-30 2xl:pt-32 h-auto m-auto z-10 "/>
		</div>
	)
}