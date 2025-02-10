import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import { Button } from "./ui/button";


const Posts = ({products}) => {

  console.log(products, 'pr')

  return (
    <div className="grid lg:grid-cols-3 gap-5 py-3">
      {products?.map((el, index: number) => (
        <Drawer key={index}>
          <DrawerTrigger>
            <div className="flex flex-col rounded-xl overflow-hidden border-[1px] shadow relative">
              <img
                src={el?.image_path}
                className="w-full lg:h-[350px] h-[250px] object-cover"
                alt={el.title}
              />
              <h3 className="text-white absolute top-4 right-4 bg-[#B82424] p-2 rounded-lg text-3xl font-semibold">
                {el.priceLek}
              </h3>
              <div className="py-3 px-2">
                <h2 className="text-gray-900 text-2xl font-semibold pb-2 w-full text-start">
                  {el?.title}
                </h2>
                <p className="text-gray-900 text-xl font-semibold w-full text-start">
                  Përbërësit:
                </p>
                <p className="text-gray-500 text-xl w-full text-start">{el?.description}</p>
              </div>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
              <DrawerDescription>
                <div className="flex lg:flex-col flex-col gap-3">
                  <div className="w-full">
                    <img
                      src={el?.image_path}
                      className="lg:h-[350px] h-[350px] border-none mx-auto lg:object-contain object-cover rounded-lg"
                      alt={el?.title}
                    />
                  </div>
                  <div className="w-full text-center">
                    <h2 className="text-3xl text-neutral-900">{el?.title}</h2>
                    <p className="text-lg text-gray-700">Përbërësit: {el?.description}</p>
                    <p className="text-lg text-gray-700">Cmimi: {el?.priceLek} Lek / {el?.priceEuro} €</p>
                  </div>
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Mbyll</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
};

export default Posts;
