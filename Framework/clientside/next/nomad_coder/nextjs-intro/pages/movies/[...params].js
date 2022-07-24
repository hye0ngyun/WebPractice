import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail() {
  const router = useRouter();
  console.log(router.query);
  const [title, id] = router.query.params || [];
  return (
    <>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
