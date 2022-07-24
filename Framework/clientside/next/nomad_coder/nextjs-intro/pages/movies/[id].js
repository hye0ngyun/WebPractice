import { useRouter } from "next/router";

export default function moviesId() {
  const router = useRouter();
  console.log(router.query);
  // (async (id) => {
  //   const results = await (await fetch(`api/movies/${id}`)).json();
  //   console.log(results);
  // })(router.query.id);
  return (
    <>
      <h4>{router.query.title || "Loading..."}</h4>
    </>
  );
}
