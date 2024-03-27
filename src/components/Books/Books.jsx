import { useLoaderData } from "react-router-dom";
import CardDefault from "../Card/CardDefault";
import { useEffect, useState } from "react";
// import useBooksData from "../Hooks/useBooksData";


const Books = () => {
    
  const [booksList, setBooksList]=useState([])
  useEffect(()=>{
      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setBooksList(data))
  },[])
    console.log(booksList);
    return (
    
        
        <div>
            <h1 className="text-center text-2xl">Books</h1>
            <div className="grid md:grid-cols-3 gap-8 mx-auto">
          {booksList?.map((item, idx) => (
            <CardDefault key={idx} item={item}></CardDefault>
          )

          )}
        </div>
        </div>
    );
};

export default Books;