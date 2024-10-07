import Image from "next/image";
import Link from "next/link";
import React from "react";
import Price from "./Price";

function Onsale({ products }: any) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-5 underline underline-offset-4 decoration-[1px]">
        Product on Sale{" "}
      </h3>
      <div className="flex flex-col gap-2 justify-normal">
        {products?.map(
          (item: any) =>
            item?.onSale && (
              <Link
                href={`/product/${item?.id}`}
                key={item?.id}
                className="flex items-center gap-4
                 border-[1px] border-b-gray-300 py-2 "
              >
                <Image
                  src={item?.image}
                  alt="img"
                  width={200}
                  height={200}
                  className="w-24 object-contain bg-white "
                />
                <div className="flex flex-col gap-2">
                  <p className="text-sm tracking-tighter font-medium">
                    {item?.title}
                  </p>
                  <p className="text-sm font-semibold">
                    {" "}
                    <Price amount={item?.price} />{" "}
                  </p>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default Onsale;
