import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div>something 2</div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
