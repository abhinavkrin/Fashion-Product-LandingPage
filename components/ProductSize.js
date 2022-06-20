import gsap from 'gsap';
import {useState, useEffect} from 'react';
export default function ProductSize({product}){
	const [currentSize,setCurrentSize] = useState(product.sizes[0])
	useEffect(() => {
		gsap.fromTo('.animate-item-size',{
			y: 50,
			opacity: 0.01
		},{
			y: 0,
			opacity: 1,
			delay: 0.2,
			stagger: 0.2,
		})
	},[])
	return (
		<div className='animate-item-size'>
			<div className="mb-2 2xl:mb-4">SELECT SIZE</div>
			<div className="flex flex-row space-x-2 2xl:space-6 mb-5 2xl:text-xl">
				{product.sizes.map(size => (
					<span 
						onClick={() => setCurrentSize(size)}
						key={size} 
						className={`flex justify-center items-center border rounded-full w-6 h-6 2xl:w-8 2xl:h-8 font-light hover:bg-black hover:text-white hover:border-none transition cursor-pointer ${size === currentSize ? 'bg-black text-white border-none' : ''}`}
						>
						{size}
					</span>
				))}
				<button className="flex justify-center items-center text-base text-gray-500">
					SIZE GUIDE
				</button>
			</div>
		</div>
	)
}