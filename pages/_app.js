import Layout from "../components/layout/Layout";
import Context from "../context/Header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}
  
export default MyApp;