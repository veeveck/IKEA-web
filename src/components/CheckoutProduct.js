import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({id, title, rating,category,description,image,price}) => {
    const [isFamily]=useState(Math.random()<0.5);
    const dispatch =useDispatch();
    const removeCart=()=>{
        
        dispatch(removeFromBasket({id}));
    }
    return (
        <div className='grid grid-cols-5'>
           <Image src={image} width={200} height={180} objectFit='contain'/>
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>{Array(rating).fill().map((_,i)=><StarIcon key={i} className='h-5 text-yellow-500'/>)}</div>
                <p className='text-xs my-2 line-clamp-2'>{description}</p>
                <Currency quantity={price} currency="CAD"/>
                {isFamily &&<div className='flex items-center space-x-2 mt-5'>
                <img className='w-12' src='https://image.pngaaa.com/622/714622-middle.png' alt='logo'/>
                <p className='text-xs text-gray-500'>Member's Discount</p>
            </div>
             }
            </div>    
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button className='button' onClick={removeCart}>Remove</button>
        </div>  
        </div>
    )
}

export default CheckoutProduct
