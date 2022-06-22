import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
    // (async () => {
    //   const json = await (
    //     await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    //   ).json();
    //   setDetail(json.data.movie);
    //   setLoading(false);
    //   console.log(detail);
    // })();
  }, []);
  return <div>{loading ? <h2>Loading...</h2> : <h2>Detail</h2>}</div>;
}

export default Detail;
