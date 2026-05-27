import { useState } from "react";
import { searchRecommendations } from "../services/predictionService";

export default function SearchBar({ setResults }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("movie");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const data = await searchRecommendations(query, type);

      setResults(data.results);
    } catch (err) {
      console.log(err);
      alert("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl mb-8">

      <div className="flex gap-3 mb-4">

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-[#334155] px-4 rounded-xl outline-none"
        >
          <option value="movie">Movies</option>
          <option value="song">Songs</option>
        </select>

        <input
          type="text"
          placeholder="Describe your vibe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 p-4 rounded-xl bg-[#334155] outline-none"
        />

        <button
          onClick={handleSearch}
          disabled={loading}
          className={`px-6 rounded-xl font-semibold ${
            loading
              ? "bg-gray-500"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      <p className="text-gray-400 text-sm">
        Example: emotional sci-fi movie with hope
      </p>
    </div>
  );
}