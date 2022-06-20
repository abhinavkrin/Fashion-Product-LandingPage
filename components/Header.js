/* eslint-disable @next/next/no-img-element */
import {FiChevronRight, FiHeart, FiMenu, FiShoppingBag, FiUser} from 'react-icons/fi';
import { useData } from './DataProvider';

import Logo from './Logo';
export default function Header({isOpen = true, collectionBoxRef}){
	return (
		<div className='flex flex-row items-center w-full'>
			<div className='h-20 2xl:h-24 p-6 2xl:p-8 flex flex-row items-center border-r border-b cursor-pointer'>
				<FiMenu size={20}/>
			</div>
			<div className='h-20 2xl:h-24 p-6 2xl:p-8 flex flex-row items-center border-r border-b cursor-pointer'>
				<Logo width={24} height={24}/>
			</div>
			<div className='h-20 2xl:h-24 flex items-stretch flex-auto border-r border-b'>
				<nav className='flex items-stretch h-full'>
					<ul className='flex flex-row items-stretch h-full'>
						{
							[{name: 'NEW'},{name: 'SALE'},{name: 'MEN'},{name: 'WOMEN', active: true}].map( (item,i) => (
								<li key={item.name+i} 
									className={`${item.active?'border-b-2 border-b-red-600':''} flex items-center cursor-pointer px-6 2xl:px-8 2xl:py-4 hover:border-b hover:border-b-red-200`}>
										{item.name}
									</li>
							))
						}
					</ul>
				</nav>
			</div>
			<div className='h-20 2xl:h-24 p-6 2xl:p-8 flex flex-row items-center border-r border-b space-x-6 2xl:space-x-12 px-20 2xl:px-24'>
				<div>
					<FiHeart className='cursor-pointer'/>
				</div>
				<input type="text" className='focus:outline-none active:outline-none text-right bg-inherit w-24' placeholder='SEARCH'/>
			</div>
			<div className='h-20 2xl:h-24 p-6 2xl:p-8 flex flex-row items-center border-b space-x-6 2xl:space-x-12 px-10 2xl:px-24'>
				<div className='cursor-pointer'><FiShoppingBag size={20}/></div>
				<div className='cursor-pointer'><FiUser size={20}/></div>
			</div>
		</div>
	)
}