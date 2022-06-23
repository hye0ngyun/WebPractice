import NavBar from "../components/NavBar";
import styles from "../styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log();
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello</span>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
