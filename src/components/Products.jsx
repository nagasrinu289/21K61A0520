import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";

const Products = () => {
    const [url,setUrl] = useState("");
    const [items,setItems] =useState("");
    const [category,setcategory] = useState("Phone");
    const [company,setCompany] = useState("AMZ");
    const [filter,setFilter] = useState(false);
    const [token,setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNzkzNDE5LCJpYXQiOjE3MjM3OTMxMTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQzNjU2YWM1LWFmYTMtNDc2MC1hYzYwLTc5YjczZGQ0M2U2ZSIsInN1YiI6Im5hZ2FzcmludTI4OUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJTYXNpIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5IFx1MDAyNiBFbmdpbmVlcmluZyIsImNsaWVudElEIjoiZDM2NTZhYzUtYWZhMy00NzYwLWFjNjAtNzliNzNkZDQzZTZlIiwiY2xpZW50U2VjcmV0IjoiQmlKbUlTQ3pCcVBNZHFCZyIsIm93bmVyTmFtZSI6IkNoYWxsYXJpIE5hZ2EgU3JpbnUiLCJvd25lckVtYWlsIjoibmFnYXNyaW51Mjg5QGdtYWlsLmNvbSIsInJvbGxObyI6IjIxSzYxQTA1MjAifQ.xqLSNbJy48pcA5BDEIXuBkDdNnD-IDZd2-08VKa230Y");
    const [products,setProducts] = useState([
        {
          "productName": "Laptop 4",
          "price": 1258,
          "rating": 4.94,
          "discount": 33,
          "availability": "out-of-stock"
        },
        {
          "productName": "Laptop 13",
          "price": 1244,
          "rating": 4.91,
          "discount": 45,
          "availability": "out-of-stock"
        },
        {
          "productName": "Laptop 5",
          "price": 7980,
          "rating": 4.87,
          "discount": 89,
          "availability": "out-of-stock"
        },
        {
          "productName": "Laptop 3",
          "price": 9102,
          "rating": 4.43,
          "discount": 98,
          "availability": "out-of-stock"
        },
        {
          "productName": "Laptop 11",
          "price": 5683,
          "rating": 4.22,
          "discount": 56,
          "availability": "yes"
        },
        {
          "productName": "Laptop 14",
          "price": 9254,
          "rating": 4.12,
          "discount": 56,
          "availability": "out-of-stock"
        },
        {
          "productName": "Laptop 1",
          "price": 8521,
          "rating": 4.03,
          "discount": 91,
          "availability": "yes"
        },
        {
          "productName": "Laptop 13",
          "price": 8686,
          "rating": 3.7,
          "discount": 24,
          "availability": "out-of-stock"
        },
        {
          "productName": "Laptop 11",
          "price": 2652,
          "rating": 3.47,
          "discount": 70,
          "availability": "yes"
        },
        {
          "productName": "Laptop 9",
          "price": 1742,
          "rating": 2.6,
          "discount": 39,
          "availability": "out-of-stock"
        }
      ]);
    const getProducts = async()=>{
        try {
            const tempUrl = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${items}&minPrice=1&maxPrice=10000`
            const res = await fetch(tempUrl,{
                headers:{
                    "Authorization": `Bearer ${token}`,
                    "Accept" : "application/json"
                }
            });
            if(!res.ok){
                const data = await res.json();
                return data 
            }
        } catch (error) {

            console.log(error);
            alert("check connection network")
        }
    }
    useEffect(()=>{
        // setProducts(getProducts());
        // due to cors error in the server I'm not fetching the data
    },[])

    const clicked = ()=>{
        setFilter(!filter);
    }
    const filtered = ()=>{
        const tempUrl = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${items}&minPrice=1&maxPrice=10000`
        getProducts()
    }
    

  return (
    <div>
         <div className='bg-sky-300 pt-4'>
        <button className='flex justify-center' onClick={clicked}><IoMdMenu className='w-10 h-10 '/> Filter</button>
        </div>
        <div className=' bg-slate-200 flex flex-col justify-center items-center   gap-4'>
        <div className='bg-slate-200 w-3/4 flex justify-between '>
        <div>Company : 
        <select name="company" id="company" value={company} onChange={(e)=>setCompany(e.target.value)}>
            <option value="AMZ">Amazon</option>
            <option value="FLP">Flipzart</option>
            <option value="MYN">Myntra</option>
            <option value="AZO">Azio</option>
        </select>
        </div>
        <div> Category
        <select name="category" id="category" value={category} onChange={(e)=> setcategory(e.target.value)}>
            <option value="Phone">Phone</option>
            <option value="Computer">Computer</option>
            <option value="TV">TV</option>
            <option value="Earphone">Azio</option>
            <option value="Tablet">tablet</option>
            <option value="Charger">Charger</option>
            <option value="Mouse">Mouse</option>
            <option value="Keypad">Keypad</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="Pendrive">Pendrive</option>
            <option value="Speaker">speaker</option>
            <option value="Headset">Headset</option>
            <option value="Laptop">Laptop</option>
            <option value="PC">Pc</option>
        </select>
        </div>
        <div>
           items :  <input type="number" placeholder='No of items' className='border-slate-400' value={items} onChange={(e)=> setItems(e.target.value)}/>
        </div>
        </div>
        <button type="button" onClick={filtered} className=" w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2">Default</button>
        </div> 
        <div className=' mt-5 grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-grow'>
      {products.map((product,index)=>{
        return(
            <div className='bg-white border-4 shadow-md  border-cyan-500 p-8 ' key={index}>
                <h1>Product : {product.productName}</h1>
                <p>Prics : {product.price}</p>
                <p>rating : {product.rating}</p>
                <p>Discount : {product.discount}</p>
                <p>Availability : {product.availability}</p>
            </div>
        )
      })}
    </div>
    </div>
  )
}

export default Products
