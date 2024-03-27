import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => { 
  const { bookId } = useParams();
  const data = useLoaderData();
  const [isRead, setIsRead] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  useEffect(() => {
   
    const isBookRead = localStorage.getItem(`read_${bookId}`);
    setIsRead(!!isBookRead);

    
    const isBookAddedToWishlist = localStorage.getItem(`wishlist_${bookId}`);
    setIsAddedToWishlist(!!isBookAddedToWishlist);
  }, [bookId]);

  const singleBook = data.find((item) => item.bookId == bookId);

  const {
    author,
    image,
    bookName,
    tags,
    category,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook;

  const notifyRead = () => {
    if (!isRead) {
      localStorage.setItem(`readBooks`, true); // Convert to string
      setIsRead(true);
      toast("Successfully marked as read!");
    } else {
      toast("This book has already been marked as read!");
    }
  };
  const notifyWishlist = () => {
    if (!isAddedToWishlist && !isRead) {
      
      localStorage.setItem(`wishlistBooks`, true);
      setIsAddedToWishlist(true);
      toast("Successfully added to wishlist!");
    } else if (isRead) {
      toast("This book has already been marked as read!");
    } else {
      toast("This book is already in your wishlist!");
    }
  };
  // useEffect(() => {
  //   const isBookRead = localStorage.getItem(`readBooks_${bookId}`);
  //   setIsRead(isBookRead === "true"); // Parse back to boolean
    
  //   const isBookAddedToWishlist = localStorage.getItem(`wishlistBooks_${bookId}`);
  //   setIsAddedToWishlist(isBookAddedToWishlist === "true"); // Parse back to boolean
  // }, [bookId]);
  
  
  return (
    <div className="card lg:card-side mt-12 w-full bg-base-100 shadow-none rounded-md overflow-hidden lg:px-28">
      <figure>
        <img className="" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <p>{category}</p>
        <p>Review: {review}</p>
        <p>Tag {tags}</p>
        <p>Number of pages: {totalPages}</p>
        <p>Publisher: {publisher}</p>
        <p>Year of Publishing: {yearOfPublishing}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions flex justify-start">
          <button onClick={notifyRead} className="btn btn-primary">Read</button>
          <button onClick={notifyWishlist} className="btn btn-primary">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
