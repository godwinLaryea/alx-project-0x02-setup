import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="flex justify-between items-center text-white font-medium bg-sky-400 h-[70px] px-8 mb-4">
        <a href="#">
          <img src="#" alt="Nii's logo" />
        </a>

        <ul className="space-x-4">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
