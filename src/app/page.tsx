import Link from 'next/link';
import React from 'react'

interface Idata{
   id:number;
   name:string;
   type:string;
   available:boolean;
}

const Home = async () => {
   const res = await fetch('https://simple-books-api.glitch.me/books')
   const data:Idata[] = await res.json()
   console.log(data)
  return (
   <>
  {data.map((book)=>{
   return  (
  <Link href={`/bookList/${book.id}`} key={book.id}>
  <h1 className='text-[25px] text-blue-600'>{book.name}</h1>
  </Link>


)
  })}
  
   
   </>
  )
}

export default Home