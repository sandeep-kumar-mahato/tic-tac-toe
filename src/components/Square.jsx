/* eslint-disable react/prop-types */
const Square = ({ value, onClick }) => {
  return (
    <button
      className="w-16 h-16 bg-blue-500 text-white text-2xl font-bold flex items-center justify-center border border-gray-300"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
