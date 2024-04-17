const ButtonOutline = () => {
  return (
    <button className={`button--outline relative`}>
      <span
        className={`text-white before:content-['Talk_to_sales'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-200 before:flex before:justify-center before:items-center overflow-hidden after:content-['Talk_to_sales'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-200 after:flex after:justify-center after:items-center px-6 w-full md:w-[12rem] h-12 py-4 block relative group rounded-lg before:z-50 after:z-50`}
      ></span>
    </button>
  );
};

export default ButtonOutline;
