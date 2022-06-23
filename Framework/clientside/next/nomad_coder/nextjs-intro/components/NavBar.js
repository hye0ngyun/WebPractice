import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a
          className={`${router.pathname === "/" ? styles.active : ""} ${
            styles.link
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            router.pathname === "/about" ? styles.active : "",
            styles.link,
          ].join(" ")}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
