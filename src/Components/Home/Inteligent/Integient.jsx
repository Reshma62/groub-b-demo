const Integient = () => {
  return (
    <section
      style={{ backgroundSize: "100%" }}
      className="container-fluid bg-[url('/images/rocks-together-1920-min.jpg')] bg-black max-lg:bg-bottom bg-no-repeat"
    >
      <div className="h-[998px] max-lg:h-[600px] max-w-[1000px] mx-auto flex justify-center items-end flex-col">
        <h5 className="text-white text-3xl max-lg:text-2xl font-medium max-w-[23rem]">
          <span className="light-blue-gradient">
            Group-IB Threat Intelligence solution{" "}
          </span>
          is ranked as one of the best in class by Gartner, Forrester, IDC and
          other analysts
        </h5>
        <div className="max-w-[23rem] flex flex-col gap-6 mt-10">
          <div className="max-w-">
            <img
              className=""
              src="/images/ti-solution-logos-1-min.png"
              alt=""
            />
          </div>
          <div>
            <img src="/images/ti-solution-logos-2-min.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integient;
