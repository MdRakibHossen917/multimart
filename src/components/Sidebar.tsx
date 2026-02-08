import { FiShoppingCart } from 'react-icons/fi';
import { LuEye } from 'react-icons/lu';
import { MdFavoriteBorder } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2 
                    flex flex-col overflow-hidden rounded 
                    bg-white/80 backdrop-blur-md shadow-lg 
                    opacity-0 translate-x-4
                    transition-all duration-300
                    group-hover:opacity-100 group-hover:translate-x-0">

      {/* Add to cart */}
      <button
        title="Add to cart"
        className="p-3 text-lg text-gray-700 transition hover:bg-blue-300/10 hover:text-[#115061]"
      >
        <FiShoppingCart />
      </button>

      {/* Quick view */}
      <button
        title="Quick view"
        className="border-y border-gray-200 p-3 text-lg text-gray-700 transition hover:bg-blue-300/10 hover:text-[#115061]"
      >
        <LuEye />
      </button>

      {/* Wishlist */}
      <button
        title="Add to wishlist"
        className="p-3 text-lg text-gray-700 transition hover:bg-blue-300/10 hover:text-[#115061]"
      >
        <MdFavoriteBorder />
      </button>
    </div>
  );
};

export default Sidebar;
