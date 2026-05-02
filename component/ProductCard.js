export default function ProductCard({
  title,
  description,
  price,
  showBadge,
}) {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col">
      
      {/* Image */}
      <div className="w-full h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
          +
        </div>
      </div>

    

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-3">
        {description}
      </p>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-auto">
        <span className="font-semibold text-gray-900">
          ₹{price}
        </span>

        <button className="w-8 h-8 border rounded-lg flex items-center justify-center hover:bg-gray-100">
          +
        </button>
      </div>
    </div>
  );
}