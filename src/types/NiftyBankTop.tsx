export interface NiftyBankFuture {
    derivatives: Deriva[]
    callOI: number
    putOI: number
    pcr: number
    futures: Future[]
  }
  
  export interface Deriva {
    contract: Contract
    livePrice: LivePrice
  }
  
  export interface Contract {
    contract: string
    contractDisplayName: string
    symbol: string
    growwContractId: string
    price: number
    optionType: string
    expiry: string
    searchId: string
    underlyingId: string
    lotSize: number
    exchange: string
  }
  
  export interface LivePrice {
    type: string
    symbol: string
    tsInMillis: number
    open: number
    high: number
    low: number
    close: number
    ltp: number
    dayChange: number
    dayChangePerc: number
    lowPriceRange: number
    highPriceRange: number
    volume: number
    lowTradeRange: number
    highTradeRange: number
    totalBuyQty: number
    totalSellQty: number
    openInterest: number
    prevOpenInterest: number
    oiDayChange: number
    oiDayChangePerc: number
    lastTradeQty: number
    lastTradeTime: number
  }
  
  export interface Future {
    contract: string
    contractDisplayName: string
    displayName: string
    symbol: string
    growwContractId: string
    price: number
    expiry: string
    searchId: string
    exchange: string
    livePrice: LivePrice2
  }
  
  export interface LivePrice2 {
    type: string
    symbol: string
    tsInMillis: number
    open: number
    high: number
    low: number
    close: number
    ltp: number
    dayChange: number
    dayChangePerc: number
    lowPriceRange: number
    highPriceRange: number
    volume: number
    lowTradeRange: number
    highTradeRange: number
    totalBuyQty: number
    totalSellQty: number
    openInterest: number
    prevOpenInterest: number
    oiDayChange: number
    oiDayChangePerc: number
    lastTradeQty: number
    lastTradeTime: number
  }
  