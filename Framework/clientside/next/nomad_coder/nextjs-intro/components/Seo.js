import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo({ title }) {
  const router = useRouter();

  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
