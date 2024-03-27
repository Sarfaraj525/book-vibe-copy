// import Header from "../Header/Header";

import { useEffect, useState } from "react";


const ListedBooks = () => {
    const [readBooks, setReadBooks]=useState([])
    const [wishlistBooks, setWishlistBooks]=useState([])
    console.log(readBooks);
    console.log(wishlistBooks);
    useEffect(() => {
        const storedReadBooks =  JSON.parse( localStorage.getItem( "readBooks" ) )
        if (storedReadBooks) {
            setReadBooks(storedReadBooks)
        }
        const storedWishlistBooks =  JSON.parse( localStorage.getItem( "wishlistBooks" ) )
        if (storedWishlistBooks) {
            setWishlistBooks(storedWishlistBooks)
        }
    },[]);
    
    return (
    <div>
        <div className="text-center text-2xl">
            <h2>Books</h2>
        </div>
        <div className="text-center mt-4 mb-4">
        <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1 text-white btn-accent bg-[#23BE0A]">Sort By </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>rating</a></li>
            <li><a>totalPages</a></li>
            <li><a>yearOfPublishing</a></li>
            </ul>
        </div>
        </div>
        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box  p-6">Read Books</div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books"/>
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Wishlist Books</div>
        </div>
        
    </div>
        
    );
};

export default ListedBooks;