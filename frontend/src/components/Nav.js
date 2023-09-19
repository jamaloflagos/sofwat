import { useState } from "react"
import { Link } from "react-router-dom"


const Nav = () => {
    const [nav, showNav] = useState(false)
    const setShow = () => {
        showNav(prevShowNav => !prevShowNav)
    }
  return (
    <header className="flex flex-col justify-between w-full mt-2 px-3">
        <div className="mb-5 text-navy-blue font-bold">
            <span>SOFWAT COLLEGE</span>
        </div>
        <div className="w-full flex flex-row justify-end mb-5 md:hidden" onClick={setShow}>
            <i class="fa-solid fa-bars"></i>
        </div>
        <nav className={nav ? "block md:hidden" : "hidden"}>
            <ul className="flex flex-col gap-3 items-center h-auto w-full bg-cream py-2">
                <li className="border-b border-baby-blue w-32 hover:w-44 transition ease-in-out duration-300 text-center">
                    <Link to='/'>Home</Link>
                </li>
                <li className="border-b border-baby-blue w-32 hover:w-44 transition ease-in-out duration-300 text-center">
                    <Link to='/apply'>Apply</Link>
                </li>
                <li className="border-b border-baby-blue w-32 hover:w-44 transition ease-in-out duration-300 text-center">
                    <Link to='/about'>About</Link>
                </li>
                <li className="border-b border-baby-blue w-32 hover:w-44 transition ease-in-out duration-300 text-center">
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className="border-b border-baby-blue w-32 hover:w-44 transition ease-in-out duration-300 text-center">
                    <Link to='/founder'>Founder</Link>
                </li>
                <li className="border-b border-baby-blue w-32 hover:w-44 transition ease-in-out duration-300 text-center">
                    <Link to='/e-library'>E-Library</Link>
                </li>
                <li className="border-b border-baby-blue w-32 hover:w-44 transition ease-in-out duration-300 text-center">
                    <Link to='/tutors'>Tutors</Link>
                </li>
            </ul>
        </nav>
        <nav className="hidden md:block">
            <ul className="flex flex-row gap-3 justify-center h-auto w-full bg-cream py-2">
                <li className="border-r border-baby-blue pr-10">
                    <Link to='/'>Home</Link>
                </li>
                <li className="border-r border-baby-blue pr-10">
                    <Link to='/apply'>Apply</Link>
                </li>
                <li className="border-r border-baby-blue pr-10">
                    <Link to='/about'>About</Link>
                </li>
                <li className="border-r border-baby-blue pr-10">
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className="border-r border-baby-blue pr-10">
                    <Link to='/founder'>Founder</Link>
                </li>
                <li className="border-r border-baby-blue pr-10">
                    <Link to='/e-library'>E-Library</Link>
                </li>
                <li>
                    <Link to='/tutors'>Tutors</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
export default Nav