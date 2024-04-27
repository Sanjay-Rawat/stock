import stockClient from "../lib/stockClient";
import { NiftyBankFuture } from "../types/NiftyBankTop";

export const getPCR = async (indexName: string) => {
    const response = await stockClient.get<NiftyBankFuture>(
      `/stocks_fo_data/v1/contracts/${indexName}/top`,
    );
  
    return response.data;
  };