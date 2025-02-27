import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css'

export const metadata = {
  title:'Property Pulse',
  description:'Find your drean renral property',
  keywords:'rental, find rentals'
}

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body> 
      </html>
    </AuthProvider>
  )
}

export default MainLayout