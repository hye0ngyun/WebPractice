import { useRouter } from "next/router";

export default function moviesId() {
  const router = useRouter();
  console.log(router.query.id);
  return "movies id";
}
