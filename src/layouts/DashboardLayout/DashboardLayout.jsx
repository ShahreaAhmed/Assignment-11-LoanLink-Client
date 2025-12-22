import { Outlet } from 'react-router'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import NavBar from '../../components/Shared/NavBar/NavBar'
import Footer from '../../components/Shared/Footer/Footer'

const DashboardLayout = () => {
  return (
    <div className='relative min-h-screen  bg-white'>
      {/* Left Side: Sidebar Component */}
      <Sidebar />
      {/* Right Side: Dashboard Dynamic Content */}
      <div className='flex-1 p-5 md:ml-64'>
          {/* Outlet for dynamic contents */}
          <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout











