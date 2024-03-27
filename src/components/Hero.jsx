import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="hero  bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/pw9pWVW/Book-1.png" className="max-w-sm rounded-lg " />
          <div className="">
            <h1 className="text-5xl font-bold">Books to freshen up 
            <br />
            your bookshelf</h1>
            <Link to="/listed" className="btn btn-accent text-white bg-[#23BE0A] mt-6">View The List</Link>
          </div>
        </div>
      </div>
    );
};

export default Hero;