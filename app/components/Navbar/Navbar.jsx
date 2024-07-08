import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-full py-4 px-8 bg-darkOrange flex justify-between items-center rounded-2xl m-2">
      <div className="text-3xl text-white font-bold">LOGO</div>
      <div className="flex gap-6 items-center text-solidWhite font-semibold max-lg:hidden">
        <Link href="/" className="link-hover">
          Ana Sayfa
        </Link>
        <Link href="/blog" className="link-hover">
          Blog
        </Link>
        <Link href="/kategoriler" className="link-hover">
          Kategoriler
        </Link>
        <Link href="/popi" className="link-hover">
          Popüler Yazılar
        </Link>
        <Link href="/auth" className="link-hover">
          Giriş
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
