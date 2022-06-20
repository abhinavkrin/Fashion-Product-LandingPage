import gsap from "gsap";
import Image from "next/image";
import { useCallback } from "react";
export default function ProductThumbnails({product,onThumbnailClick, imageRef}){
	const onImageClick = useCallback((image) => {
		console.log(imageRef.current)
		if(image.big === imageRef.current?.getAttribute('data-bigUrl'))
			return;
		if(imageRef){
			gsap.fromTo(imageRef.current,{
				x:0,
				opacity: 1,
			}, {
				x: 100,
				opacity: 0.01,
				duration: 0.2,
				onComplete: () => onThumbnailClick(image)
			})
		}
	}, [imageRef, onThumbnailClick]);
	return (
		<div className="flex flex-row space-x-2 z-50">
			{product.images.map(image => (
				<div key={image.thumb} onClick={() => onImageClick(image)}>
					<Image src={image.thumb} alt={image.thumb} height={160} width={120} id={image.thumb} className="hover:scale-110 hover:drop-shadow-2xl transition cursor-pointer"/>
				</div>
			))}
		</div>
	)
}