import dayjs from "dayjs";
import PrevButton from "../app/PrevButton";
import Link from "next/link"; // Link 컴포넌트 임포트

type Props = {
  searchParams: {
    targetDt?: string;
  };
};

const today = dayjs().subtract(1, "day").format("YYYYMMDD");

export default async function Home({
  searchParams: { targetDt = today },
}: Props) {
  // 데이터 로드
  const key = "23bc16ce6985f322def42db72354ef86";
  // const targetDt = "20241011";
  const baseUrl =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
  const url = `${baseUrl}?key=${key}&targetDt=${targetDt}`;

  // 요청
  const response = await fetch(url);
  // json 파싱
  const json = await response.json();

  console.log(JSON.stringify(json, null, 2));

  return (
    <>
      {" "}
      <div className="w-[500px] mx-auto">
        <div className="flex justify-between">
          <PrevButton targetDt={targetDt} />
          {dayjs(targetDt).format("YYYY년MM월DD일")}
          <button>다음</button>
        </div>

        <ol className="divide-y *:py-4 mt-4">
          {json.boxOfficeResult.dailyBoxOfficeList.map((item: ItemType) => (
            <li key={item.rank}>
              {item.rank}위 -
              <Link href={`movie/${item.movieCd}`}>{item.movieNm}</Link>
              {item.rankOldAndNew === "NEW" && (
                <span className="text-xs text-red-500">N</span>
              )}
            </li>
          ))}
        </ol>
        <pre>{/* <code>{JSON.stringify(json, null, 2)}</code> */}</pre>
      </div>
      ,
    </>
  );
}

// type ResponseType = {
//   boxOfficeResult: {
//     boxofficeType: string;
//     showRange: string;
//     dailyBoxOfficeList: ItemType[];
//   };
// };

type ItemType = {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
};
