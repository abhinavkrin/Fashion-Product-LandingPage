import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
export default function SocialIcons(){
	return (
		<div className='flex flex-row space-x-3 p-3 2xl:p-6 2xl:space-x-6'>
			{[FaFacebookF, FaInstagram, FaTwitter].map( Icon => (
				<div key={Icon.name} className="border rounded-md p-1 2xl:p-3">
					<Icon size="24"/>
				</div>	
			))}
		</div>
	)
}