import { Badge } from "@/components/ui/badge";
import Menu from "@/components/Menu";
import Career from "@/components/Career";
import { Suspense } from "react";

const page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="my-3 lg:min-h-[80vh]  flex lg:flex-row flex-col   lg:w-[95%] mx-auto rounded-3xl overflow-hidden">
        <div className="lg:w-[50%] w-full lg:min-h-[80vh] bg-red-600 lg:text-start text-center px-[5%] pb-5 pt-[10%]">
          <h2 className="text-white insane text-[90px]">YMER&#39;S GRILL</h2>
          <div className="text-white border-dashed border-[2px] py-5 lg:w-[45%] text-center">
            <h3 className="insane text-5xl">SINCE 2000</h3>
          </div>
          <p className="text-gray-200 text-lg py-4  lg:w-[75%]">
            Shija autentike që të sjell kujtime të paharrueshme. Përjetoni
            kënaqësinë e një shije të jashtëzakonshme!
          </p>
          <a
            href="https://wa.me/355695467048"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl my-2 bg-white text-gray-900 px-[5%] py-2 rounded-full font-semibold inline-block"
          >
            Na kontaktoni
          </a>
        </div>
        <div className="lg:w-[50%] w-full lg:min-h-[80vh] bg-red-700 p-5">
          <img src="/retro.png" className="rounded-lg" alt="" />
        </div>
      </div>

      <Suspense fallback={<p>Loading menu...</p>}>
        <Menu />
      </Suspense>

      <div className="px-[5%] py-5 ">
        <img src="toons.png" className="lg:w-[80%] w-full mx-auto" alt="" />
        <h1 className="text-[#B82424] lg:text-5xl w-[70%]  text-end font-bold ml-[30%] ">
        Traditë, shije dhe cilësi – një përvojë e paharrueshme!
        </h1>
      </div>

      <div className="px-[5%] flex gap-3  lg:flex-row flex-col items-center py-[3%] bg-[#B82424] ">
        <div className="lg:w-[50%] ">
          <img src="/abt.png" className="lg:w-[50%] w-full mx-auto" alt="" />
        </div>
        <div className="lg:w-[50%]">
          <Badge variant="outline" className="text-[#B82424] bg-white text-lg">
          Rreth ushqimit tonë
          </Badge>

          <h2 className="text-[60px] py-3 font-bold text-gray-900">
          Cilësi e lartë dhe <b className="text-[#E18F34]">shërbim i shkëlqyer.</b>
          </h2>
          <p className="text-gray-200 text-lg">
          Përjetoni një eksperiencë unike kulinare, ku çdo pjatë përgatitet me përbërës të freskët dhe cilësi të lartë.
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1 py-2 lg:gap-[5%] gap-3">
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-900">
              Ushqim me cilësi të lartë
              </h2>
              <p className="text-lg text-gray-200">
              Receta tradicionale, përgatitje me pasion dhe shije unike që të kënaq çdo shqisë.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-gray-900">
              Reputacion i shkëlqyer
              </h2>
              <p className="text-lg text-gray-200">
              Mijëra klientë të kënaqur na zgjedhin çdo ditë për ushqimin tonë të jashtëzakonshëm.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Career />

      <div className="flex items-center gap-[0.5] bg-black relative  cursor-pointer lg:flex-row flex-col">
        <div className="bg-black top-0 flex items-center text-center justify-center  left-0 right-0 bottom-0  absolute bg-opacity-[0.3]"></div>
        <div className="lg:w-[25%]  lg:h-[50vh] ">
          <img src="/ig/1.jpeg" className="h-full w-full object-cover" alt="" />
        </div>
        <div className="lg:w-[25%]  lg:h-[50vh]">
          <img src="/ig/2.jpeg" className="h-full w-full object-cover" alt="" />
        </div>
        <div className="lg:w-[25%]  lg:h-[50vh]">
          <img src="/ig/5.jpeg" className="h-full w-full object-cover" alt="" />
        </div>
        <div className="lg:w-[25%]  lg:h-[50vh]">
          <img src="/ig/3.jpeg" className="h-full w-full object-cover" alt="" />
        </div>
        <div className="lg:w-[25%]  lg:h-[50vh]">
          <img src="/ig/4.jpeg" className="h-full w-full object-fill" alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
