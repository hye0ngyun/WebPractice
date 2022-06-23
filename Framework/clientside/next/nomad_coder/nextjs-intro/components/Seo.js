import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo() {
  const router = useRouter();
  const titles = { "/": "Home", "/about": "About" };
  return (
    <Head>
      <title>{titles[router.pathname]} | Next Movies</title>
    </Head>
  );
}
