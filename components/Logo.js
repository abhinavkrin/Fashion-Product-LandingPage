export default function Logo({width = 18,height = 18, className}){
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 157 121" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M80.5 120.5C80.5 76.0411 44.4589 41 0 41" strokeWidth="18"/>
			<path d="M80 120.5C80 76.0411 112.541 40 157 40" strokeWidth="18"/>
			<circle cx="80" cy="24" r="24" fill="black"/>
		</svg>

	)
}