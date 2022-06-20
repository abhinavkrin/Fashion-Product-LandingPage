import Image from "next/image";

export default function ProductThumbnails({product,onThumbnailClick}){
	return (
		<div className="flex flex-row space-x-2 z-50">
			{product.images.map(image => (
				<div key={image.thumb} onClick={() => onThumbnailClick(image)}>
					<Image src={image.thumb} alt={image.thumb} height={160} width={120}/>
				</div>
			))}
		</div>
	)
}