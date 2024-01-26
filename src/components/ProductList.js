import React from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../redux/appSlice";

// Component for displaying an individual product in a list
const ProductList = ({ item }) => {
  // Extracting properties from the item object
  const { name, image, price } = item;
  const dispatch = useDispatch();

  // Function to add the product to the cart
  const addToCart = (cartItem) => {
    dispatch(setCart(cartItem));
  };

  return (
    <div className="group relative bg-gray-200 p-5">
      {/* Product image */}
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={image}
          alt={"product"}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      {/* Add to Cart button */}
      <button
        onClick={() => {
          addToCart(item);
        }}
        className="absolute top-2 rounded-lg right-2 text-center px-2 py-1 bg-gray-500 hover:bg-gray-800 z-50 text-white"
      >
        Add to Cart
      </button>

      {/* Product details */}
      <div className="mt-4 flex justify-between">
        <div>
          {/* Product name */}
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </h3>
        </div>

        {/* Product price */}
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
};

export default ProductList;
