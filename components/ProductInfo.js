export default function ProductInfo({product,isDetailedView = false}){
	if(isDetailedView){
		return (
			<div className="w-8/12 2xl:w-full space-y-3 mb-5">
				<h1 className="text-4xl 2xl:text-7xl">{product.name}</h1>
				<div className="text-3xl 2xl:text-6xl font-thin">{product.price.currency+' '+product.price.amount}</div>
				<div className="text-sm 2xl:text-2xl text-gray-400 whitespace-normal">{product.description}</div>
			</div>
		)
	}
	return (
		<div className="h-full flex items-center space-y-3 mb-5">
			<h1 className="text-4xl 2xl:text-7xl flex-auto">{product.name}</h1>
		</div>
	)
}