import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from 'next/router'

const PageNotFound = () => {
    const router = useRouter()

    useEffect(() => {
       setTimeout(() => {
          router.push('/')
       }, 3000)
    }, [])


    return ( 
        <div className="not-found">
            <h1>Ooopss...</h1>
            <h3>This page cannot be found</h3>
            <p>Go back to the <Link href={'/'}>Homepage</Link></p>
        </div>
     );
}
 
export default PageNotFound;