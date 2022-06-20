import { FiPlus } from "react-icons/fi";

export default function OpenDetailedViewButton({className,...props}){
	return (
		<button className={(className || '') + 
			"text-white bg-zinc-900 rounded-full h-12 w-12 2xl:h-24 2xl:w-24 flex justify-center items-center z-50"} {...props} >
			<span><FiPlus size="36"/></span>
		</button>
	)
}