import Link from 'next/link'
import Footer from '../components/Footer'
import style from '../styles/Home.module.css'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
       <h1 className={style.title}>Home</h1>
       <p className={style.text}>Welcome to listss</p>
       <Link href={'/lists'} className={style.btn}>See all listings</Link>
    </div>
  )
}
