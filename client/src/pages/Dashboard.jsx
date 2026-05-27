import { useState } from "react";

import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";

export default function Dashboard() {
  const [results, setResults] = useState([]);

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome to Plotune 🔥
        </h1>

        <p className="text-gray-400 mt-2">
          Search songs and movies naturally.
        </p>
      </div>

      <SearchBar setResults={setResults} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {results.map((item, index) => (
          <ResultCard
            key={index}
            item={item}
          />
        ))}

      </div>
    </div>
  );
}