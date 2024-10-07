"use client";
import { ProductProps } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useQuery } from "react-query";



const SearchComponent = ({ className }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {data} = useQuery("allProductsss" ,async ()=> await axios.get("http://localhost:3000/products").then((res)=> res.data ))
 
  //Filtering products based on search
  useEffect(() => {
    if (searchQuery && searchQuery?.length > 0) {
      const productsList = [...data];
      const filteredProducts : object[] = productsList?.filter((p) => p?.title.includes(searchQuery)
      );
      setProducts(filteredProducts ?? []);
    } else {
      setProducts(data);
    }
  }, [searchQuery]);
  const searchProduct = (id:ProductProps) => {
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <div className={className}>
        <input
          type="text"
          placeholder="Search your products here"
          onFocus={() => setIsModalOpen(true)}
          className="h-full   flex-1 bg-transparent outline-none  placeholder:text-gray-600"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        {searchQuery ? (
          <IoCloseOutline
            onClick={() => setSearchQuery("")}
            className="size-5 duration-200 hover:cursor-pointer hover:text-red-500"
          />
        ) : (
          <FaSearch className="size-5 hover:cursor-pointer" />
        )}
      </div>
      {isModalOpen && searchQuery?.length > 0 ? (
        <div className="transition-all duration-300 text-primeColor absolute   z-40  max-h-96 overflow-y-auto  w-full  flex-col  justify-center items-center text-center gap-2 rounded-md border-[1px] border-black bg-white px-6 text-base md:flex md:w-[450px] lg:w-[600px]">
          {products?.length > 0 ? (
            products.map((p:ProductProps) => (
              <div
                className="  border-b-[1px] p-2 border-gray-300"
                onClick={() => {
                  searchProduct(p?.id);
                  setSearchQuery("");
                }}
                key={p?.id}
              >
                {p?.title}
              </div>
            ))
          ) : (
            <div>no result</div>
          )}
        </div>
      ) : null}
    </div>
  );
};
export default SearchComponent;
