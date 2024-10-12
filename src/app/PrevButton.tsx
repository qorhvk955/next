"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";

type Props = {
  targetDt: string;
};

const PrevButton = ({ targetDt }: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        dayjs().subtract(1, "day").format("YYYYMMDD");
        router.push(
          `?targetDt=${dayjs(targetDt).subtract(1, "day").format("YYYYMMDD")}`
        );
      }}
    >
      이전
    </button>
  );
};

export default PrevButton;
