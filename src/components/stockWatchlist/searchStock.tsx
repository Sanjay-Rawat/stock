import React, { useState } from 'react';
import { debounce } from 'lodash';

interface Stock {
    search_id: string;
    analytics_label: string;
    title: string;
    bse_scrip_code: null;
    nse_scrip_code: null;
    underlying_search_id: null;
    isin: null;
    entity_type: string;
    id: string;
    expiry: null;
}

const SearchBox: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Stock[]>([]);

    const fetchSearchResults = debounce(async (term: string) => {
        try {
            const response = await fetch(`https://growww.in/v1/api/search/v3/query/global/st_p_query?page=0&query=${term}&size=10&web=true`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch search results');
            }

            const data = await response.json();
            const results: Stock[] = data?.content || [];
            setSearchResults(results);
        } catch (error) {
            console.error(error);
        }
    }, 300); // Debounce delay of 300 milliseconds

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        fetchSearchResults(e.target.value);
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-4">
                {searchResults.map((result) => (
                    <div key={result.id} className="p-2 border border-gray-300 rounded-md">
                        {result.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBox;