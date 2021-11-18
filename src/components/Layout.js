import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
