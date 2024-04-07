import PCR from "../components/PCR";
import InstitutionalInvestorsData from "../components/institutionalInvestors/InstitutionalInvestorsData";
import StockWatchList from "../components/stockWatchlist/main";

const HomePage = () => {
  return (
    <> <StockWatchList/>
    <hr />    
    <div className="p-8">
      <div className="flex gap-6 flex-wrap justify-center items-center rounded-lg border border-gray-100 bg-white shadow p-6">
        <PCR pcr={0.8} market="Nifty" />
        <PCR pcr={1.3} market="Bank Nifty" />
      </div>
      <div className="rounded-lg border border-gray-100 bg-white shadow p-6 mt-6 font-medium text-lg">
        <h3 className="text-xl">FII/FPI & DII trading activity</h3>
        <InstitutionalInvestorsData
          buyValue={9462.33}
          sellValue={12832.75}
          category="DII"
          date="05-Apr-2024"
        />
        <InstitutionalInvestorsData
          buyValue={12834.7}
          sellValue={11175.43}
          category="FII"
          date="05-Apr-2024"
        />
      </div>
      <div className="rounded-lg border border-gray-100 bg-white shadow p-6 mt-6 font-medium text-lg">
        <h3>Market News</h3>
      </div>
      <div className="rounded-lg border border-gray-100 bg-white shadow p-6 mt-6 font-medium text-lg">
        Holidays
      </div>

      <h1 className="text-3xl font-bold underline">Note For Sanjay!</h1>
      <ul>
        <li>1. Run NPM I first</li>
        <li>2. Write any resuable component inside components folder</li>
        <li>3. Call that component inside Pages &gt; HomePage</li>
        <li>
          3. Try using tailwind class name, here is the cheatsheet
          https://tailwindcomponents.com/cheatsheet/
        </li>

        <li>
          4. Extensin can install for better dev experience: Tailwind CSS
          IntelliSense, Prettier, ES7+ React/Redux/React-Native snippets
        </li>
        <li>
          Need readymade tailwind components? copy paste code from:
          https://flowbite.com/docs/components/card/
        </li>
      </ul>
    </div>
    </>
  );
};

export default HomePage;
