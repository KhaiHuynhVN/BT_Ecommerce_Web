import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import SectionWrapper from "../../components/SectionWrapper";
import BrandCarousel from "../../components/BrandCarousel";
import Image from "../../components/Image";
import Button from "../../components/Button";
import PostWidget from "../../components/PostWidget";
import ProductContainer from "../../components/ProductContainer";

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
            <ProductContainer />
            <div className={cx("more-btn", `bg-white p-4`)}>
               <Button
                  className={`ml-auto max-w-fit`}
                  to={"/"}
                  septenary
                  leftIcon={<i className="bi bi-chevron-double-right"></i>}
               >
                  Xem thêm
               </Button>
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
            <ProductContainer />
            <div className={cx("more-btn", `bg-white p-4`)}>
               <Button
                  className={`ml-auto max-w-fit`}
                  to={"/"}
                  septenary
                  leftIcon={<i className="bi bi-chevron-double-right"></i>}
               >
                  Xem thêm
               </Button>
            </div>
         </SectionWrapper>

         <div className="mt-[1rem]">
            <BrandCarousel />
         </div>

         <div className={`mt-[1rem]`}>
            <PostWidget />
         </div>
      </div>
   );
}

export default Home;
