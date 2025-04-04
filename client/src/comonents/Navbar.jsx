import { Link, useNavigate, useLocation } from "react-router"

const Navbar = () => {
  // let location = useLocation()
  // console.log("location", location)

  // const navigate = useNavigate()

  return (
    <div>
      <nav className='bg-white border-gray-200 dark:bg-red-900 '>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img
              src={new URL("../assets/pizza3.png", import.meta.url).href}
              className='h-12'
              alt='Flowbite Logo'
            />
            <span className='self-center text-slate-100 text-2xl font-semibold whitespace-nowrap '>
              OverTheWall
            </span>
          </div>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
      
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-cta'
          >
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent '>
              <li>
                {/* className={`block py-2 px-3 md:hover:bg-transparent md:border-0 ${
                    location.pathname === "/rooms"
                      ? "text-teal-300 underline"
                      : "text-gray-900 "
                  }  md:p-0  md:hover:bg-transparent  lessSpace`} */}
                <Link
                  to='/'
                  className='block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-100 text-xl '
             
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/menu'
                  className='block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-100 text-xl '
                >
                 Menu
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='block py-2 px-3 md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-100 text-xl'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to='/order-create'
                  className='block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-100 text-xl'
                >
                 Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className='navColorBottom bg-gray-50'>
        <div className='max-w-screen-xl px-4 py-3 mx-auto'>
          <div className='flex items-center'>
            <p>Company slogan</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
