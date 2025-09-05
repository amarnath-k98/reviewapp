

const RatingStars = ({ rating }) => {
  const numericRating = parseFloat(rating);

  const isValid = !isNaN(numericRating) && numericRating > 0;
  const scaled = isValid ? Math.round((numericRating / 10) * 5) : 0;

  return (
    <div className="flex items-center mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-xl ${
            star <= scaled ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">
        {isValid ? `(${numericRating}/10)` : "(No rating)"}
      </span>
    </div>
  );
};

export default RatingStars;
