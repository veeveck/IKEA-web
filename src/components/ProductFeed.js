import Product from './Product'


const ProductFeed = ({products}) => {
    return (
        <div className='grid grid-flow-row-dense md: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {products.slice(0,4).map((product)=>{
                return <Product 
                key={product.title} 
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}/>
            })}
            <img className='md:col-span-full' src='https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/gateway/1110572_smb_gw_desktop_1500x300_lavolio_1x_uk._CB484123630_.jpg'   alt='txt'/>
        <div className='md:col-span-2'>
        {products.slice(4,5).map((product)=>{
                return <Product 
                key={product.title} 
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}/>
            })}
        </div>
        
        {products.slice(5,products.length).map((product)=>{
                return <Product 
                key={product.title} 
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}/>
            })}
        
        </div>

    )
}

export default ProductFeed
