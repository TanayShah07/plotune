export default function ResultCard({ item }) {
  return (
    <div className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300 border border-gray-800">

      {/* Poster */}
      {item.poster && (
        <img
          src={item.poster}
          alt={item.title}
          className="w-full h-[300px] object-cover"
        />
      )}

      {/* Content */}
      <div className="p-4">

        {/* Title + Rating */}
        <div className="flex items-start justify-between gap-2 mb-2">

          <h2 className="text-xl font-bold text-white line-clamp-1">
            {item.title}
          </h2>

          {item.rating && (
            <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold whitespace-nowrap">
              ⭐ {item.rating.toFixed(1)}
            </span>
          )}

        </div>

        {/* Release Date */}
        {item.release_date && (
          <p className="text-gray-400 text-xs mb-3">
            {item.release_date}
          </p>
        )}

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {item.overview || item.description}
        </p>

      </div>
    </div>
  );
}