import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
         <NavLink to="/" className={
            ({ isActive }) => isActive ? 'text-[#23BE0A]' : 'font-lg'}
            >Home</NavLink>
        <NavLink to="/listed" className={
            ({ isActive }) => isActive ? 'text-[#23BE0A]' : 'font-lg'}
            >Listed Books</NavLink>
        <NavLink to="/pages" className={
            ({ isActive }) => isActive ? 'text-[#23BE0A]' : 'font-lg'}
            >Pages to Read</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About us</NavLink>
    </>
    return (
        <div className="navbar bg-base-100  px-4 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
        {links}
      </ul>
    </div>
    <a className=" text-2xl text-[#131313] font-bold normal-case">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4 flex items-center">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2 ">
  <button className="btn text-white btn-accent bg-[#23BE0A]">Sign In</button>
  <button className="btn text-white btn-accent bg-[#23BE0A] ">Sign Up</button>
  </div>
</div>
    );
};

export default Header;