import gsap from "gsap"
import { useEffect } from "react"

export default function ProductInfo({product,isDetailedView = false, productNameRef}){
	useEffect(() => {
		if(!isDetailedView)
			return;
		gsap.fromTo('.animate-item',{
			y: 50,
			opacity: 0.01
		},{
			y: 0,
			opacity: 1,
			delay: 0.2,
			stagger: 0.2,
		})
	},[isDetailedView])
	if(isDetailedView){
		return (
			<div className="w-8/12 2xl:w-full space-y-3 mb-5">
				<h1 className="animate-item text-4xl 2xl:text-7xl" ref={productNameRef}>{product.name}</h1>
				<div className="animate-item text-3xl 2xl:text-6xl font-thin">{product.price.currency+' '+product.price.amount}</div>
				<div className="animate-item text-sm 2xl:text-2xl text-gray-400 whitespace-normal">{product.description}</div>
			</div>
		)
	}
	return (
		<div className="h-full flex items-center space-y-3 mb-5">
			<h1 className="text-4xl 2xl:text-7xl flex-auto" ref={productNameRef}>{product.name}</h1>
		</div>
	)
}