import ButtonOutline from "../../Shared/Button/ButtonOutline";

const Hero = () => {
  return (
    <div
      style={{
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
      className={`bg-cover bg-black bg-[url('/images/heroM.jpg')] md:bg-[url('/images/hero.jpg')] bg-no-repeat bg-center h-[835px] md:h-[90svh] flex md:justify-normal justify-end flex-col  container-fluid pb-20 md:pb-5`}
    >
      <div className="md:ml-[6.25%] pt-64 text-white lg:max-w-[43.75%] w-full ">
        <p className=" text-base md:text-lg">
          Cybersecurity Products and Services
        </p>
        <h1 className="lg:text-[80px] text-5xl leading-tight my-3 md:my-6">
          <span className="light-blue-gradient">Fight against</span> cybercrime
        </h1>
        <p className="text-base md:text-lg">
          Our cybersecurity, anti-fraud and brand protection solutions are
          powered by intelligence-driven technologies and the exceptional human
          proficiency of our experts
        </p>
        <div className="flex md:flex-row flex-col gap-3 mt-4 md:mt-12">
          <button
            className={`bg-primary text-white before:content-['Find_your_Projects'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-200 before:flex before:justify-center before:items-center overflow-hidden after:content-['Find_your_Projects'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-200 after:flex after:justify-center after:items-center px-6 w-full md:w-[12rem] h-12 py-4 relative group rounded-lg `}
          ></button>
          <ButtonOutline />
        </div>
      </div>
    </div>
  );
};

export default Hero;
