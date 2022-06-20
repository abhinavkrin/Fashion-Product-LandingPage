import DataProvider from '../components/DataProvider';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
