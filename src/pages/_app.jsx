// pages/_app.js
// import '@/styles/globals.css';

// const MyApp = ({ Component, pageProps }) => {
//   return <Component {...pageProps} />;
// };

// export default MyApp;

import '../styles/globals.css'; 
import { ThemeProvider } from '../components/themeContext/ThemeContext'; // Updated path

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;



