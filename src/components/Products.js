import React, { useEffect, useState } from "react";
import { data } from "../json/product";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import AddToCartButton from "./AddToCartButton";
import { setOpenCart } from "../redux/appSlice";

// Component for displaying a list of products
const Products = () => {
  const [productData, setProductData] = useState(data);
  const [filteredData, setFilteredData] = useState(productData);
  const { category, cart, open } = useSelector((store) => store.app);
  const dispatch = useDispatch();

  // Function to filter products based on the selected category
  const filteringData = () => {
    if (category.toLowerCase() === "all") {
      setFilteredData(productData);
      return;
    }
    let filteredData = productData.filter((item) => {
      return item.category === category.toLowerCase();
    });
    setFilteredData(filteredData);
  };

  // Effect to reapply filtering when the category changes
  useEffect(() => {
    filteringData();
  }, [category]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Popular Products
        </h2>

        {/* Grid for displaying product list */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredData.map((item) => {
            return <ProductList key={item.id} item={item} />;
          })}
        </div>
      </div>

      {/* AddToCartButton component for handling cart interactions */}
      <div>
        <AddToCartButton />
      </div>
    </div>
  );
};

export default Products;
