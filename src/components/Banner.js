import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
            <Carousel  autoPlay infiniteLoop showStatus={false} showIndicators={true} showThumbs={false} interval={3000}  height='50%' >
                <div>
                    <Image loading='lazy' src='https://www.ikea.com/images/a-dark-brown-kitchen-featuring-stainless-steel-appliances-744dcf5ef2a50f02509554b05195e9ef.png?f=xxl' alt='txt'  width={800} height={600}/>
                </div>
                <div>
                   <Image loading='lazy' src='https://www.ikea.com/images/two-korken-jars-filled-with-beets-and-pickles-sitting-on-a-c-4e93c57b324cc17e93d57c4438afb136.jpg?f=sg' alt='xtx' width={800}  height={600}/>
                </div>
                <div>
                    <Image loading='lazy' src='https://www.ikea.com/images/get-your-mind-out-of-the-clutter-we-can-help-with-planning-a-4839fbb05f704b1a075643c38156be21.jpg?f=xxl' alt='opi'  width={800} height={600}/>
                </div>
                <div>
                    <Image loading='lazy' src='https://www.ikea.com/ext/ingkadam/m/63ec31af2dbe5675/original/PE827861-crop001.jpg?f=xxxl' alt='ert'  width={800} height={600}/>
                </div>    
            </Carousel>    
            
        </div>
    )
}

export default Banner
