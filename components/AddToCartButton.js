import gsap from "gsap";
import { useEffect, useRef } from "react"
export default function AddToCartButton({className, ...props}){
	const btnRef = useRef();
	useEffect(() => {
		gsap.fromTo(btnRef.current,{
			scale: 0.1,
			opacity: 0.01
		},{
			scale: 1,
			opacity: 1,
			delay: 0.2,
		})
	},[])
	return (
		<button
		ref={btnRef}
		className={(className || '') + 'text-white 2xl:text-2xl rounded-full h-28 w-28 2xl:h-40 2xl:w-40 bg-red-500 z-5 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 z-50'} 
		{...props}>
			ADD
		</button>
	)
}