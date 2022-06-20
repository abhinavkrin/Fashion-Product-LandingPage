export default function AddToCartButton({className,...props}){
	return (
		<button className={(className || '') + 'text-white rounded-full h-28 w-28 bg-red-500 z-50'} {...props}>ADD</button>
	)
}