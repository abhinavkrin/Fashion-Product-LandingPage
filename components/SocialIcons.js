import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
export default function SocialIcons(){
	return (
		<div className='flex flex-row space-x-3 p-3'>
			{[FaFacebookF, FaInstagram, FaTwitter].map( Icon => (
				<div key={Icon.name} className="border rounded-md p-1">
					<Icon size="20"/>
				</div>	
			))}
		</div>
	)
}