import Image from 'next/image';
import {MenuIcon, SearchIcon,ShoppingBagIcon, ShoppingCartIcon,LocationMarkerIcon,TruckIcon,} from '@heroicons/react/outline'
const Header = () => {
    return (
        <header>
            <div className='flex items-center bg-ikea_blue p-1 flex-grow py-2'>
            <div className='mt-2 flexitems-center flex-grow sm:flex-grow-0'>
                <Image src='https://logos-world.net/wp-content/uploads/2020/09/IKEA-Emblem.jpg'
                width={150} height={50} objectFit='contain' className='cursor-pointer'/>
            </div> 

            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-blue-500 hover:bg-blue-600'>
                <input className='p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4' type='text'/>
                <SearchIcon className='h-12 p-4'/>
            </div>  
            <div className='text-white flex items-center space-x-6 mx-6 whitespace-nowrap'>
                <div className='link'>
                    <p>Hello Vivek</p>
                    <p className='font-extrabold md:text-sm'>Accounts</p>
                </div>
                <div className='link'>
                   <p className='font-extrabold md:text-sm'>Returns</p>
                   <p className='font-extrabold md:text-sm'>& Orders</p>
                </div>
                <div className='relative link flex items-center space-x-2'>

                    <ShoppingCartIcon className='h-10'/>
                    <span className='absolute top-0 left-5 h-4 w-4 bg-blue-500 text-center rounded-full text-white font-bold'>1</span>
                    <LocationMarkerIcon className='hidden md:inline h-10'/>
                    <TruckIcon className=' hidden md:inline h-10'/>
                    <ShoppingBagIcon className='h-10'/>
                </div>

            </div>  
            </div>  
            <div className='flex items-center bg-ikea_blue-light text-white space-x-4 p-2 pl-6'>
                <p>
                <MenuIcon className='h-6 mr-1'/>
                </p>   
                <p className='link'>IKEA Family</p>
                <p className='link'>Products</p>
                <p className='link'>Rooms</p>
                <p className='link'>Offers</p>
                <p className='link hidden lg:inline-flex'>Shop The Room</p>
                <p className='link hidden lg:inline-flex'>Gift Ideas</p>
                <p className='link hidden lg:inline-flex'>What's New</p>
                <p className='link hidden lg:inline-flex'>Sustainable Living</p>

            </div>   
        </header>
    )
}

export default Header
