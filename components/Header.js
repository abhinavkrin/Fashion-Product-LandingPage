import {FiHeart, FiMenu, FiShoppingBag, FiUser} from 'react-icons/fi';

import Logo from './Logo';
export default function Header(){
	return (
		<div className='flex flex-row items-center w-full'>
			<div className='h-20 p-6 flex flex-row items-center border-r border-b'>
				<FiMenu size={20}/>
			</div>
			<div className='h-20 p-6 flex flex-row items-center border-r border-b'>
				<Logo width={24} height={24} className='cursor-pointer'/>
			</div>
			<div className='h-20 px-6 flex items-stretch flex-auto border-r border-b'>
				<nav className='flex items-stretch'>
					<ul className='flex flex-row items-stretch'>
						{
							['NEW','SALE','MEN','WOMEN'].map( (item,i) => (
								<li key={item+i} className='flex items-center cursor-pointer p-6'>{item}</li>
							))
						}
					</ul>
				</nav>
			</div>
			<div className='h-20 p-6 flex flex-row items-center border-r border-b space-x-6 px-20'>
				<div>
					<FiHeart/>
				</div>
				<div>
					SEARCH
				</div>
			</div>
			<div className='h-20 p-6 flex flex-row items-center border-b space-x-6 px-10'>
				<div><FiShoppingBag size={20}/></div>
				<div><FiUser size={20}/></div>
			</div>
		</div>
	)
}