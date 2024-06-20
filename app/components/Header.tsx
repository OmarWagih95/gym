import Image from "next/image"
import Link from "next/link"
import MobileNav from "./MobileNav"
import Nav from "./Nav"

const Header = () => {
  return (
    <div className="z-30 fixed w-screen bg-black pl-7 pr-2 py-3 gap-3 flex justify-between items-center">
        <Link
        href={'./'}
        > 
        <Image className="ml-3" src={'/assets/img/logo.png'} width={70}height={50} alt="logo">
            </Image></Link>
            <MobileNav/>
            <Nav/>
    </div>
  )
}

export default Header