import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1 className="logo-text"><img src="/post-1.jpg" width={'32px'} height={'32px'} className='img'/> Listss</h1>
      </div>
      <Link href={'/'}>
        Home
      </Link>
      <Link href={'/about'}>
        About
      </Link>
      <Link href={'/contact'}>
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
