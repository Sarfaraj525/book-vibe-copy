import { Link } from "react-router-dom";

const CardDefault = ({ item }) => {
    // console.log(item);
    const {bookId,author, image, bookName, tags, category, rating } = item || {};
  return (
    
    <Link to={`/book-details/${bookId}`}>
    <div className="">
      

      <div className="card bg-base-100 shadow-xl mt-4">
        <figure>
          <img
            src={ image }
            alt=""
          />
        </figure>
        <div className="card-body">
                <p className="">{tags}</p>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="flex items-center justify-around">
            <p>{category}</p>
            
            <div className="flex gap-1 items-center">
                <p>{rating}</p>
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star w-4" />
  
                </div>
            </div>
           
        </div>
          
        </div>
      </div>
    </div>
    
    </Link>
  );
};

export default CardDefault;
