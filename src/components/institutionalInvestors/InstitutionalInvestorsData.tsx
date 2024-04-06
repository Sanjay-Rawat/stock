import { cn } from "../../lib/utils";
import MoneyIcon from "../icons/MoneyIcon";

interface Props {
  category: string;
  date: string;
  buyValue: number;
  sellValue: number;
}

const InstitutionalInvestorsData = ({
  category,
  date,
  buyValue,
  sellValue,
}: Props) => {
  const total = buyValue - sellValue;
  const didSelling = total <= 0;

  return (
    <div>
      <article className="flex items-end justify-between p-6 gap-4 flex-wrap">
        <h3 className="text-lg font-medium text-gray-900">{category}</h3>
        <div>
          <p className="text-sm text-gray-500"> Date</p>
          <p className="text-lg font-medium text-gray-900">{date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500"> BUY VALUE (₹ Crores)</p>
          <p className="text-lg font-medium text-gray-900">{buyValue}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500"> SELL VALUE (₹ Crores)</p>
          <p className="text-lg font-medium text-gray-900">{sellValue}</p>
        </div>
        <div className="flex items-center gap-4">
          <span
            className={cn("rounded-full bg-gray-100 p-2 text-green-600", {
              "bg-red-100": didSelling,
              "text-red-600": didSelling,
            })}
          >
            <MoneyIcon />
          </span>
          <div>
            <p className="text-sm text-gray-500"> NET VALUE (₹ Crores)</p>
            <p className="text-lg font-medium text-gray-900">
              {total.toFixed(2)}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default InstitutionalInvestorsData;
