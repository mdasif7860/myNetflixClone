import styles from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
           <Image src="/logo.png" width={150} height={40} alt="MyLogoImage"/>
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
