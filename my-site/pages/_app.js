import Layout from '../components/Layout'
import '../styles/styles.css'
import AnimationProvider from '../contexts/AnimationContext'

function MyApp({ Component, pageProps }) {

  return (
    <AnimationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimationProvider>
  )
}

export default MyApp
