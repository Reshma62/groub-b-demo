import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="backdrop-blur-md fixed w-full border-b border-solid border-white/10 max-h-[70px]  items-center h-16 md:h-full  container-fluid md:leading-[70px] font-medium ">
      <nav className="flex justify-between">
        <div className="flex items-center">
          <Link className="mr-6 max-w-[144px]" to={"/"}>
            <img src="/images/main-logo.svg" alt="main logo" />
          </Link>{" "}
          <div className=" text-white hidden xl:inline-block">
            <ul className="flex gap-4 capitalize">
              <li>Products</li>
              <li>Services</li>
              <li>Solutions</li>
              <li>Subscription Plans</li>

              <li className="pl-6">Resource</li>
              <li>Free Tools</li>
              <li>Blog</li>

              <li className="pl-6">company</li>
            </ul>
          </div>{" "}
        </div>
        <div className=" items-center gap-6 hidden xl:flex">
          <ul className="flex gap-4 text-white">
            <li>Talk to sales</li>
            <li>Report an incident</li>
          </ul>
          <button className={`button--outline relative`}>
            <span
              className={`text-white before:content-['Sign_in'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-200 before:flex before:justify-center before:items-center overflow-hidden after:content-['Sign_in'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-200 after:flex after:justify-center after:items-center px-6 w-[5rem] h-6 py-4 block relative group rounded-lg before:z-50 after:z-50`}
            ></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
