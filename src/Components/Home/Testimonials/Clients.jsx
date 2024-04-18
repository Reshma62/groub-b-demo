import { Testimonial } from "./Testimonial";

const Clients = () => {
  return (
    <div className=" container-fluid  bg-black">
      <div className="container">
        <div className="text-center mb-20">
          <h1 className="lg:text-[58px] text-4xl leading-tight text-white">
            Stories of successful implementation of
            <span className="light-blue-gradient block">
              our cybersecurity products and services
            </span>
          </h1>
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Clients;
