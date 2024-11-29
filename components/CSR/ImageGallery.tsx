import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CSR1 from "@/public/asset/csr/CSR1.jpeg";
import CSR2 from "@/public/asset/csr/CSR2.jpeg";
import CSR3 from "@/public/asset/csr/CSR3.jpeg";
import CSR4 from "@/public/asset/csr/CSR4.jpeg";
import CSR5 from "@/public/asset/csr/CSR5.jpeg";
import CSR6 from "@/public/asset/csr/CSR6.jpeg";
import CSR7 from "@/public/asset/csr/CSR7.jpeg";
import CSR8 from "@/public/asset/csr/CSR8.jpeg";
import CSR9 from "@/public/asset/csr/CSR9.jpeg";
import CSR10 from "@/public/asset/csr/CSR10.jpeg";
import CSR11 from "@/public/asset/csr/CSR11.jpeg";
import CSR12 from "@/public/asset/csr/CSR12.jpeg";
import CSR13 from "@/public/asset/csr/CSR13.jpeg";
import CSR14 from "@/public/asset/csr/CSR14.jpeg";
import CSR15 from "@/public/asset/csr/CSR15.jpeg";
import CSR16 from "@/public/asset/csr/CSR16.jpeg";
import CSR17 from "@/public/asset/csr/CSR17.jpeg";
import CSR18 from "@/public/asset/csr/CSR18.jpeg";
import CSR19 from "@/public/asset/csr/CSR19.jpeg";
import CSR20 from "@/public/asset/csr/CSR20.jpeg";
import CSR21 from "@/public/asset/csr/CSR21.jpeg";
import CSR22 from "@/public/asset/csr/CSR22.jpeg";
import CSR23 from "@/public/asset/csr/CSR23.jpeg";
import CSR24 from "@/public/asset/csr/CSR24.jpeg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const itemData = [
  { img: CSR1.src, title: "CSR Image 1" },
  { img: CSR2.src, title: "CSR Image 2" },
  { img: CSR3.src, title: "CSR Image 3" },
  { img: CSR4.src, title: "CSR Image 4" },
  { img: CSR5.src, title: "CSR Image 5" },
  { img: CSR6.src, title: "CSR Image 6" },
  { img: CSR7.src, title: "CSR Image 7" },
  { img: CSR8.src, title: "CSR Image 8" },
  { img: CSR9.src, title: "CSR Image 9" },
  { img: CSR10.src, title: "CSR Image 10" },
  { img: CSR11.src, title: "CSR Image 11" },
  { img: CSR12.src, title: "CSR Image 12" },
  { img: CSR13.src, title: "CSR Image 13" },
  { img: CSR14.src, title: "CSR Image 14" },
  { img: CSR15.src, title: "CSR Image 15" },
  { img: CSR16.src, title: "CSR Image 16" },
  { img: CSR17.src, title: "CSR Image 17" },
  { img: CSR18.src, title: "CSR Image 18" },
  { img: CSR19.src, title: "CSR Image 19" },
  { img: CSR20.src, title: "CSR Image 20" },
  { img: CSR21.src, title: "CSR Image 21" },
  { img: CSR22.src, title: "CSR Image 22" },
  { img: CSR8.src, title: "CSR Image 8" },
  { img: CSR23.src, title: "CSR Image 23" },
  { img: CSR24.src, title: "CSR Image 24" },
];

const MasonryImageGallery: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="xsPhone:text-[min(7vh,7vw)] smTablet:text-[min(5vh,5vw)] font-semibold text-center mb-20 mt-5 text-[#085C2C] font-titilium">
        Image Gallery
      </h2>
      <ImageList variant="masonry" cols={3} gap={10}>
        {itemData.map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger className={"w-full"}>
              <ImageListItem className={"overflow-clip"}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  className="w-full shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </ImageListItem>
            </DialogTrigger>
            <DialogContent className={"text-white bg-transparent border-none"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                srcSet={`${item.img}`}
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                className=" shadow-lg "
              />
            </DialogContent>
          </Dialog>
        ))}
      </ImageList>
    </div>
  );
};

export default MasonryImageGallery;
