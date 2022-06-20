export default function ProductSize({product}){
	return (
		<div>
			<div className="mb-2">SELECT SIZE</div>
			<div className="flex flex-row space-x-2 mb-5">
				{product.sizes.map(size => (
					<span key={size} className="flex justify-center items-center border rounded-full w-6 h-6 font-light">{size}</span>
				))}
				<span className="flex justify-center items-center text-sm text-gray-500">
					SIZE GUIDE
				</span>
			</div>
		</div>
	)
}