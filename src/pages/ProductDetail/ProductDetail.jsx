import classNames from "classnames/bind";
import { useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import routesConfig from "../../routesConfig";
import BrandCarousel from "../../components/BrandCarousel";
import SectionWrapper from "../../components/SectionWrapper";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Image from "../../components/Image";
import CommentForm from "./components/CommentForm";
import ProductDetailTable from "./components/ProductDetailTable";
import PostWidget from "../../components/PostWidget";
import ProductContainer from "../../components/ProductContainer";

import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

function ProductDetail() {
   const [amount, setAmount] = useState(1);

   const handleChangeAmount = (e, type) => {
      let value = e?.target.value;
      value = value?.replace(/^0+/, "");

      switch (type) {
         case "plus":
            setAmount(amount + 1);
            break;
         case "minus":
            amount <= 1 ? setAmount(1) : setAmount(+amount - 1);
            break;
         default:
            +value < 1 ? setAmount(1) : setAmount(String(value));
            break;
      }
   };

   return (
      <div className={cx("wrapper", "mt-[1rem]")}>
         <Breadcrumbs breadcrumbs={routesConfig.product.breadcrumbs} routesConfig={routesConfig} />

         <div className="mt-[1rem]">
            <SectionWrapper
               leftIcon={<i className="bi bi-lightning text-denary-color"></i>}
               title="CON224_ABE_G5 - Ổ cắm âm sàn cho Concept có đế âm, màu nhũ bạc"
               button
               btnTitle={`Hướng dẫn mua hàng`}
               btnLeftIcon={<i className="bi bi-patch-question-fill text-octonary-color"></i>}
            >
               <div className={cx("product-detail", "bg-white")}>
                  <div className={cx("product-detail-header", `py-4 px-2 bg-twenty-seventh-color grid grid-cols-12 gap-[1rem]`)}>
                     <div className={cx("product-detail-header__left", "col-span-5")}>
                        <div className={cx("chat-wrapper", `flex flex-wrap items-center h-full`)}>
                           <span className={`block mr-2`}>Chat:</span>
                           <div className={`flex flex-wrap gap-2`}>
                              <a className={`hover:bg-thirty-ninth-color block`} href="/">
                                 <Image src="https://thegioidien.com/images/zalolg.png" />
                              </a>
                              <a className={`hover:bg-thirty-ninth-color block`} href="/">
                                 <Image src="https://thegioidien.com/images/fmesenger.png" />
                              </a>
                              <a className={`hover:bg-thirty-ninth-color block`} href="/">
                                 <Image src="https://thegioidien.com/images/telegram.png" />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className={cx("product-detail-header__right", "col-span-7")}>
                        <div className={cx("right-price", "flex flex-wrap gap-2 items-center justify-start")}>
                           <div>
                              <span className="leading-[1.4] text-[19.2px] text-thirty-second-color mr-1">Giá bán:</span>
                              <span className="leading-[1.4] text-thirty-first-color text-[24px] mr-1">1.334.000</span>
                              <span className="leading-[1.4] text-[16px] text-thirty-second-color">vnđ/Cái.</span>
                           </div>
                           <div>
                              <span className="leading-[1.4] text-[16px] mr-1">Giá thị trường:</span>
                              <span className="leading-[1.4] text-nineteenth-color text-[17.6px] line-through mr-1">
                                 1.732.500
                              </span>
                              <span className="leading-[1.4] text-[16px]">vnđ/Cái.</span>
                           </div>
                           <div>
                              <span className="text-[16px] mr-1">Tiết kiệm:</span>
                              <span className="text-thirty-first-color text-[19.2px]">23%</span>
                           </div>
                        </div>
                        <div className={cx("right-amount-wrapper", "flex flex-wrap gap-2 justify-start mt-[1rem] pb-2")}>
                           <span
                              className={cx(
                                 "right-amount-wrapper__text",
                                 "flex items-center text-thirty-second-color text-[16px]",
                              )}
                           >
                              Số lượng
                           </span>
                           <div className="flex bg-thirty-third-color p-[2px] items-center">
                              <Button
                                 className={`hover:text-tertiary-color text-septenary-color`}
                                 onClick={() => handleChangeAmount(null, "minus")}
                              >
                                 <i className="bi bi-patch-minus text-[30px] p-2"></i>
                              </Button>
                              <Input
                                 value={amount}
                                 type="number"
                                 inputCl={`bg-white max-w-[80px] p-2 text-center text-[20px]`}
                                 onChange={handleChangeAmount}
                              />
                              <Button
                                 className={`hover:text-tertiary-color text-septenary-color`}
                                 onClick={() => handleChangeAmount(null, "plus")}
                              >
                                 <i className="bi bi-patch-plus text-[30px] p-2"></i>
                              </Button>
                           </div>
                           <span className="flex items-center mr-2">Cái</span>
                           <Button
                              className={`items-center`}
                              primary
                              leftIcon={<i className="bi bi-cart text-[22px]"></i>}
                              fallbackLeftIcon={<i className="bi bi-cart-plus text-[22px]"></i>}
                              to={routesConfig.cart.path}
                           >
                              Mua hàng
                           </Button>
                        </div>
                     </div>
                  </div>
                  <div className={cx("product-detail-content", "grid grid-cols-12 py-2 pl-2")}>
                     <div className={cx("product-detail-content__images", "col-span-5 flex flex-col")}>
                        <div className="p-2 flex flex-1 justify-center">
                           <Image src="https://thegioidien.com/PrdGallery/CON224_ABE_G5412488602.jpg" />
                        </div>
                        <div className="p-2 mt-2 mr--2 flex justify-center bg-thirty-fifth-color">
                           <Image className={`mr-2`} src="https://thegioidien.com/ThumbG/CON224_ABE_G5412488602.jpg" />
                        </div>
                     </div>
                     <div
                        className={cx(
                           "product-detail-content__description",
                           "col-span-7 flex flex-col overflow-y-auto h-[484px]",
                        )}
                     >
                        <span className="block pl-[5px] pt-[4px] mt-2 text-[16px] text-thirty-sixth-color font-[700]">
                           Ổ cắm âm sàn cho Concept có đế âm, màu nhũ bạc
                        </span>
                        <div className="mt-2 pt-2 pl-[5px] flex flex-wrap items-center text-[16px]">
                           <div className={`flex items-center`}>
                              <i className="bi bi-check-square text-red-700"></i>
                              <span className="mx-2">Mã sản phẩm:</span>
                           </div>
                           <span className="text-thirty-seventh-color font-bold">CON224_ABE_G5</span>
                        </div>
                        <div className="mt-2 py-2 pl-[5px] flex flex-wrap items-center text-[16px]">
                           <div className={`flex items-center`}>
                              <i className="bi bi-check-square text-red-700"></i>
                              <span className="mx-2">Thương hiệu:</span>
                           </div>
                           <span className="font-bold">Clipsal / Schneider</span>
                        </div>
                        <div className="mt-2">
                           <ProductDetailTable />
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex flex-wrap items-center text-[16px]">
                           <div className={`flex items-center`}>
                              <i className="bi bi-check-square text-red-700"></i>
                              <span className="mx-2">Xuất xứ:</span>
                           </div>
                           <span className="text-thirty-seventh-color font-bold">China</span>
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex flex-wrap items-center text-[16px]">
                           <div className={`flex items-center`}>
                              <i className="bi bi-check-square text-red-700"></i>
                              <span className="mx-2">Chất lượng:</span>
                           </div>
                           <span>Mới 100%, chưa sử dụng</span>
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex flex-wrap items-center text-[16px]">
                           <div className={`flex items-center`}>
                              <i className="bi bi-check-square text-red-700"></i>
                              <span className="mx-2">Chứng từ:</span>
                           </div>
                           <span>Hóa đơn VAT</span>
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex items-center text-[16px]">
                           <i className="bi bi-check-square text-red-700"></i>
                           <span className="ml-2 font-bold">Giảm thêm chiết khấu cao khi mua số lượng lớn</span>
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex flex-col justify-center text-[16px]">
                           <div className={`flex items-center`}>
                              <i className="bi bi-check-square text-red-700"></i>
                              <span className="ml-2">Giới thiệu sản phẩm:</span>
                           </div>
                           <span className="block mt-2">
                              Ổ cắm âm sàn Schneider có thể thay đổi linh hoạt các thiết bị tùy theo nhu cầu sử dụng, dễ lắp đặt
                              và an toàn.
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className={`mt-4 p-4 bg-thirty-ninth-color`}>
                     <div className={cx("comment-count", `py-2 px-4 inline-block text-white`)}>
                        <i className="bi bi-chat-dots-fill mr-2 text-denary-color"></i>
                        Đánh Giá Sản Phẩm (0)
                     </div>

                     <div className={`mt-[1rem] pt-2`}>
                        <CommentForm />
                     </div>
                  </div>
               </div>
            </SectionWrapper>

            <SectionWrapper
               leftIcon={<i className="bi bi-list text-twenty-ninth-color"></i>}
               title="Sản Phẩm Khác Thuộc Ổ Cắm Âm Sàn, Đế Âm, Hộp Nổi - Clipsal/Schneider"
               titlePrimary
            >
               <ProductContainer />
            </SectionWrapper>
         </div>

         <div className="mt-[1rem]">
            <BrandCarousel />
         </div>

         <div className={`mt-[1rem]`}>
            <PostWidget />
         </div>
      </div>
   );
}

export default ProductDetail;
