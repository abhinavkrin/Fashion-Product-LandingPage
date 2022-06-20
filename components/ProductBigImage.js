/* eslint-disable @next/next/no-img-element */
export default function ProductBigImage({src,alt,isDetailedView}){
	return (
		<div className="w-full h-full relative">
			<div style={{position: "absolute", top: (isDetailedView?"45%":"25%"), left: "45%", transform: "translate(-55%, -40%)", zIndex: 1, width: (isDetailedView?"100%":"700px")}} className="flex justify-end">
				<svg width="80%" height="auto" viewBox="0 0 295 299" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="175.5" cy="119.5" r="119.5" fill="#C4EAB2" fillOpacity="0.24"/>
					<circle cx="119.5" cy="179.5" r="119.5" fill="#C4EAB2" fillOpacity="0.24"/>
					<circle cx="149.5" cy="147.5" r="128.5" fill="#D7F2DF"/>
				</svg>
			</div>
			<img src={src} alt={alt} className="w-96 h-auto m-auto z-10 relative"/>
		</div>
	)
}