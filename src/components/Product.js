import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
const MAX_RATING=5;
const MIN_RATING=1;
const Product = ({id, title, category,description,image,price}) => {
    const [rating]=useState(Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1)) + MIN_RATING)
    const [isFamily]=useState(Math.random()<0.5)
    const dispatch=useDispatch()
    const addItemToBasket=()=>{
        const product={
            id, title,category,description,image,price,
        };
        dispatch(addToBasket(product));
    }
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
          <Image src={image} height={200} width={200} objectFit='contain'/> 
          <h4 className my-3> {title}</h4>
          <div className='flex'>
              {Array(rating).fill().map((_, i)=>{
                return  <StarIcon  className='h-5' text-yellow-500/>
              })}
          </div>
          <p className='text-xs my-2 line-clamp-2'>{description}</p>
          <div className='mb-5'>
              <Currency quantity={price} currency='CAD'/>
          </div>
          {isFamily &&<div className='flex items-center space-x-2 mt-5'>
              <img className='w-12' src='https://image.pngaaa.com/622/714622-middle.png' alt='logo'/>
          <p className='text-xs text-gray-500'>Member's Discount</p></div>}
          <button className='mt-auto button' onClick={addItemToBasket}>Add to Cart </button>
        </div>
    )
}

export default Product
