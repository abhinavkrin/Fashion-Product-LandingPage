export default function ProductInfo({product,isDetailedView = false}){
	if(isDetailedView){
		return (
			<div className="w-8/12 space-y-3 mb-5">
				<h1 className="text-4xl">{product.name}</h1>
				<div className="text-3xl font-thin">{product.price.currency+' '+product.price.amount}</div>
				<div className="text-gray-400 text-sm whitespace-normal">{product.description}</div>
			</div>
		)
	}
	return (
		<div className="h-full flex items-center space-y-3 mb-5">
			<h1 className="text-4xl flex-auto">{product.name}</h1>
		</div>
	)
}