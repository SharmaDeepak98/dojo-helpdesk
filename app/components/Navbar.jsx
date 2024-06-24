import Link from 'next/link'
import logo from './dojo-logo.png'
import Image from 'next/image'

const Navbar = () => {
  return (
  <nav>
    <Image width={70} src={logo} alt='dogo-logo '/>
    
    <h1>Dojo Helpdesk</h1>
   <Link href="/">Dashboard</Link> 
   <Link href="/tickets">Tickets</Link> 
  </nav>
  )
}
export default Navbar