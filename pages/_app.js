import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div>something</div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
