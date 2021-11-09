import '../styles/globals.css';
import Layout from '../components/Layout';

//only place we can have tag styles is here

function MyApp({ Component, pageProps }) {
  return (
    <Layout jc="hello">
      <Component {...pageProps} />
    </Layout>
  );
}
// <Component> is index.js

export default MyApp;
