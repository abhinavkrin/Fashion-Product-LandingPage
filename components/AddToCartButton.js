export default function AddToCartButton({className,...props}){
	return (
		<button className={(className || '') + 'text-white 2xl:text-2xl rounded-full h-28 w-28 2xl:h-40 2xl:w-40 bg-red-500 z-5 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 z-50'} {...props}>ADD</button>
	)
}