import { Outlet } from 'react-router'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import NavBar from '../../components/Shared/NavBar/NavBar'
import Footer from '../../components/Shared/Footer/Footer'

const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen  bg-white'>
      {/* Left Side: Sidebar Component */}
      <NavBar></NavBar>
      <Sidebar />
      {/* Right Side: Dashboard Dynamic Content */}
      <div className='flex-1  md:ml-64'>
        <div className='p-5'>
          {/* Outlet for dynamic contents */}
          <Outlet />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DashboardLayout