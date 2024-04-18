import { Link } from "react-router-dom";

const CommonSection = ({ isright }) => {
  return (
    <section className="bg-black container-fluid py-40 max-md:py-10">
      <div className="container">
        <div className="grid grid-cols-12 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:gap-10 gap-32 place-content-between place-items-center">
          <div
            className={`max-sm:col-span-full max-lg:col-span-2 col-span-5 ${
              isright ? "order-2" : "order-1"
            } `}
          >
            <div className="max-w-28">
              <img src="/public/images/ti-main-icon-min.png" alt="" />
            </div>
            <h4 className="light-blue-gradient text-2xl max-md:text-base mb-7">
              Threat Intelligence
            </h4>
            <h2 className="text-white text-[58px] max-md:text-4xl leading-tight">
              Understand adversaries
            </h2>
            <p className="text-[#a3a3a3] text-lg  mt-7 mb-16">
              Supercharge your cyber security and defeat attacks before they
              begin with knowledge of how, when, where and why threat actors
              will strike
            </p>
            <Link className="text-white hover:text-[#7a7a7a] text-lg" to={"/"}>
              Learn more
            </Link>
          </div>
          <div
            className={`max-sm:col-span-full col-span-7 max-lg:col-span-2 ${
              isright ? "order-1 max-sm:order-2" : "order-2"
            }`}
          >
            <div className="w-full">
              <img
                className="rounded-xl w-full"
                src="/images/ti-interface-min.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
