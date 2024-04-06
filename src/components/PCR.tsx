import { cn } from "../lib/utils";
import DownTrend from "./icons/DownTrend";
import UpTrend from "./icons/UpTrend";

interface Props {
  pcr: number;
  market: string;
}

const PCR = ({ pcr, market }: Props) => {
  const isUpTrend = pcr <= 1;
  return (
    <div className="flex gap-4 ">
      <p>{market} PCR:</p>
      <div
        className={cn(
          "inline-flex gap-2 rounded bg-green-100 p-1 text-green-600",
          {
            "bg-red-100": !isUpTrend,
            "text-red-600": !isUpTrend,
          }
        )}
      >
        <span className="text-xs font-medium"> {pcr} </span>
        {isUpTrend ? <UpTrend /> : <DownTrend />}
      </div>
    </div>
  );
};

export default PCR;
