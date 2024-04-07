import { useQuery } from "react-query";
import { getPCR } from "../../service/stockService";

// export const useGetPCR=async ()=>{
//     // https://groww.in/v1/api/stocks_fo_data/v1/contracts/nifty-bank/top
//         const response = await fetch(`https://groww.in/v1/api/stocks_fo_data/v1/contracts/nifty-bank/top`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });

//         if (!response.ok) {
//             throw new Error('Failed to fetch search results');
//         }

//         const data: NiftyBankFuture = await response.json();
//        return data;
// }


export const useGetPCR = (indexName: string, refetchInterval?: number ) => {
    const queryKey = [indexName];
  
    const { data, error, isLoading } = useQuery({
      queryKey,
      queryFn: ()=> getPCR(indexName),
      refetchInterval: refetchInterval
    });
  
    return {
      data,
      error,
      isLoading,
    };
  };

  