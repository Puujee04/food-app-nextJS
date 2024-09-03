import Link from "next/link";
import Image from "next/image";

import LogoImg from "@/assets/logo.png";
import classes from "./mainHeader.module.css";
import MainHeaderBackground from "./mainHeaderBackground";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={LogoImg} alt="Logo " priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/community">Browse Community</Link>
            </li>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
