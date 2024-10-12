type Props = {
  params: {
    movieCd: string;
  };
};

const page = async ({ params: { movieCd } }: Props) => {
  const key = "23bc16ce6985f322def42db72354ef86";
  const baseUrl =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json";
  const url = `${baseUrl}?key=${key}&movieCd=${movieCd}`;

  const response = await fetch(url);
  // json 파싱
  const json = await response.json();

  console.log(json);
  console.log(url);
  return (
    <>
      <div>영화명 : {json.movieInfoResult.movieInfo.movieNm}</div>
      <div>상영시간 : {json.movieInfoResult.movieInfo.showTm}분</div>
      <div>감독: {json.movieInfoResult.movieInfo.directors[0].peopleNm}</div>
    </>
  );
};
export default page;
