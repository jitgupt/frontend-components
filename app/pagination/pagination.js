import React, { useEffect, useState } from 'react'

const LIMIT = 10;

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage*LIMIT}&select=id,title,price,description,thumbnail,discountPercentage`, {
      cache: 'no-store',
    })
    const data = await res.json();
    console.log(data);
    setProducts(data.products);
    setTotalPages(Math.ceil(data.total / LIMIT));
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage => currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage => currentPage + 1);
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-wrap justify-center gap-3'>
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className='flex justify-center items-center gap-2'>
        {currentPage > 0 && <span className='cursor-pointer' onClick={handlePrev}>Prev</span>}
        {[...Array(totalPages).keys()].map((page, index) => (<span onClick={() => setCurrentPage(page)} key={index} className={`cursor-pointer p-2 ${currentPage === page ? 'bg-blue-500 text-white' : ''}`}>{page+1}</span>))}
        {currentPage < totalPages-1  && <span className='cursor-pointer' onClick={handleNext}>Next</span>}
      </div>
    </div>
  )
}

const ProductCard = ({id, title, price, description, thumbnail, discountPercentage}) => {
  return (
    <div className='flex flex-col w-[300px] items-center border  border-white p-2'>
      <img src={thumbnail} alt={title} width={150} height={120} />
      <h2>{id} - {title}</h2>
      <p>{price} - dicount of {discountPercentage}%</p>
      <p>{description}</p>
    </div>
  )
}

