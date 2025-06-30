// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // 기존 스타일이 있다면

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;