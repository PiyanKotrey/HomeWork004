import Layout from '@/component/Layout';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
  return( <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
    crossorigin="anonymous"></script>
  </>
  );
  
}
