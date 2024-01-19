import classNames from "classnames/bind";

import Breadcrumbs from "../../components/Breadcrumbs";
import BrandCarousel from "../../components/BrandCarousel";
import PostWrapper from "../../components/PostWrapper";
import PostItem from "../../components/PostItem";
import SectionWrapper from "../../components/SectionWrapper";
import Select from "../../components/Select";
import CartTable from "./components/CartTable/CartTable";
import Button from "../../components/Button";
import routesConfig from "../../routesConfig";

import styles from "./Cart.module.scss";

const cx = classNames.bind(styles);

function Cart() {
   return (
      <div className={cx("wrapper", `mt-[1rem]`)}>
         <Breadcrumbs breadcrumbs={routesConfig.cart.breadcrumbs} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <SectionWrapper
               leftIcon={<i className="bi bi-currency-dollar text-denary-color"></i>}
               title="Chi tiết đơn hàng, dự án"
               button
               btnTitle={`Xóa đơn hàng`}
               btnLeftIcon={<i className="bi bi-trash text-octonary-color"></i>}
            >
               <div className={`bg-white`}>
                  <div className={`p-4`}>
                     <span className={`block text-[19.2px]`}>Chọn sản phẩm nhanh</span>
                     <Select
                        wrapperCl={`my-4`}
                        selectCl={`border border-solid border-transparent outline outline-1 outline-black focus:border-black 
                        p-2 w-[690px]`}
                        placeholder={`-- Chọn danh mục sản phẩm`}
                     />
                     <Select
                        wrapperCl={`my-4`}
                        selectCl={`border border-solid border-transparent outline outline-1 outline-black focus:border-black 
                        p-2 w-[690px]`}
                        placeholder={`-- Chọn nhãn hiệu`}
                     />
                  </div>
                  <div className={`mx-2 mb-2`}>
                     <span className={cx("table-title", `block text-[24px] text-thirty-second-color p-4 text-center`)}>
                        BẢNG DỰ TOÁN ĐƠN HÀNG
                     </span>
                     <CartTable />
                  </div>
                  <div className={`p-4 flex justify-between`}>
                     <Button
                        primary
                        leftIcon={<i className="bi bi-chevron-left text-denary-color"></i>}
                        to={routesConfig.home.path}
                     >
                        Chọn thêm sản phẩm
                     </Button>
                     <Button
                        primary
                        rightIcon={<i className="bi bi-chevron-right text-denary-color"></i>}
                        to={routesConfig.checkout.path}
                     >
                        Tiếp tục đặt hàng
                     </Button>
                  </div>
               </div>
            </SectionWrapper>
         </div>

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

export default Cart;
