import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import Footer from "../Components/Shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
