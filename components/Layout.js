import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, jc }) => {
  // const children = props.children;
  return (
    <div className="content">
      <Header />
      {children} {/** To load <Component/> in _app.js */}
      <Footer />
    </div>
  );
};

export default Layout;
