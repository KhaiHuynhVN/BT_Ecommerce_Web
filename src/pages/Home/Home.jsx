import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import SectionWrapper from "../../components/SectionWrapper";
import ProductCard from "../../components/ProductCard";
import BrandCarousel from "../../components/BrandCarousel";
import PostWrapper from "../../components/PostWrapper";
import PostItem from "../../components/PostItem";
import Image from "../../components/Image";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
   return (
      <div className={cx("wrapper", "mt-[1rem]")}>
         <SectionWrapper title="Công Tắc Ổ Cắm và Phụ Kiện" to={"/"}>
            <div className={cx("brand-images", "grid p-2 grid-cols-12 gap-[0.5rem]")}>
               <Link className="col-span-1 border-solid border-[1px] border-transparent hover:border-tertiary-color" to={"/"}>
                  <Image
                     className="w-full h-full object-contain"
                     src="https://thegioidien.com/BrandLink/Clipsal-Schneider246576838.jpg"
                     alt="brand"
                  />
               </Link>
               <Link className="col-span-1 border-solid border-[1px] border-transparent hover:border-tertiary-color" to={"/"}>
                  <Image
                     className="w-full h-full object-contain"
                     src="https://thegioidien.com/BrandLink/Panasonic855116771.jpg"
                     alt="brand"
                  />
               </Link>
            </div>
            <div className="grid grid-cols-12 gap-[1rem] bg-white p-4">
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
            </div>
         </SectionWrapper>
         <SectionWrapper title="Công Tắc Ổ Cắm và Phụ Kiện" to={"/"}>
            <div className={cx("brand-images", "grid p-2 grid-cols-12 gap-[0.5rem]")}>
               <Link className="col-span-1 border-solid border-[1px] border-transparent hover:border-tertiary-color" to={"/"}>
                  <Image
                     className="w-full h-full object-contain"
                     src="https://thegioidien.com/BrandLink/Clipsal-Schneider246576838.jpg"
                     alt="brand"
                  />
               </Link>
               <Link className="col-span-1 border-solid border-[1px] border-transparent hover:border-tertiary-color" to={"/"}>
                  <Image
                     className="w-full h-full object-contain"
                     src="https://thegioidien.com/BrandLink/Panasonic855116771.jpg"
                     alt="brand"
                  />
               </Link>
            </div>
            <div className="grid grid-cols-12 gap-[1rem] bg-white p-4">
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
               <div className="col-span-2">
                  <ProductCard to={"san-pham/1"} />
               </div>
            </div>
         </SectionWrapper>
         <div className="mt-[1rem]">
            <BrandCarousel />
         </div>
         <div className="mt-[1rem] grid grid-cols-12 gap-[1rem]">
            <div className="col-span-4">
               <PostWrapper
                  className="border-b-[3px] border-twenty-second-color border-solid"
                  gridCl="bg-twenty-third-color grid grid-cols-12 p-4 gap-[1.5rem_1rem]"
                  title="Hướng dẫn - Câu hỏi thường gặp"
                  leftIcon={<i className="bi bi-patch-question-fill text-secondary-color"></i>}
               >
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
               </PostWrapper>
            </div>
            <div className="col-span-4">
               <PostWrapper
                  className="border-b-[3px] border-twenty-second-color border-solid"
                  gridCl="bg-twenty-third-color grid grid-cols-12 p-4 gap-[1.5rem_1rem]"
                  title="Tài liệu kỹ thuật"
                  leftIcon={<i className="bi bi-file-text-fill text-secondary-color"></i>}
               >
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
               </PostWrapper>
            </div>
            <div className="col-span-4">
               <PostWrapper
                  className="border-b-[3px] border-twenty-second-color border-solid"
                  gridCl="bg-twenty-third-color grid grid-cols-12 p-4 gap-[1.5rem_1rem]"
                  title="Bảng giá sản phẩm"
                  leftIcon={<i className="bi bi-currency-dollar text-secondary-color"></i>}
               >
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
                  <div className="col-span-6">
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
               </PostWrapper>
            </div>
         </div>
      </div>
   );
}

export default Home;
