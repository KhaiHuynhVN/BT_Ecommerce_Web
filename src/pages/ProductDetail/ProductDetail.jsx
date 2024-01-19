import classNames from "classnames/bind";
import { useState } from "react";

import BreakCump from "../../components/BreakCump";
import routesConfig from "../../routesConfig";
import BrandCarousel from "../../components/BrandCarousel";
import PostWrapper from "../../components/PostWrapper";
import PostItem from "../../components/PostItem";
import SectionWrapper from "../../components/SectionWrapper";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Image from "../../components/Image";
import CommentForm from "../../components/CommentForm";
import ProductCard from "../../components/ProductCard";

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
            +value < 1 ? setAmount(1) : setAmount(+value);
            break;
      }
   };

   return (
      <div className={cx("wrapper", "mt-[1rem]")}>
         <BreakCump breakCumps={routesConfig.product.breakCumps} routesConfig={routesConfig} />

         <div className="mt-[1rem]">
            <SectionWrapper
               leftIcon={<i className="bi bi-lightning text-denary-color"></i>}
               title="CON224_ABE_G5 - Ổ cắm âm sàn cho Concept có đế âm, màu nhũ bạc"
               button
               btnTitle={`Hướng dẫn mua hàng`}
               btnLeftIcon={<i className="bi bi-patch-question-fill text-octonary-color"></i>}
            >
               <div className="bg-white">
                  <div className={`py-4 px-2 bg-twenty-seventh-color grid grid-cols-12`}>
                     <div className="col-span-5"></div>
                     <div className="col-span-7">
                        <div className="flex items-center justify-start">
                           <div className="mr-2">
                              <span className="leading-[1.4] text-[19.2px] text-thirty-second-color mr-1">Giá bán:</span>
                              <span className="leading-[1.4] text-thirty-first-color text-[24px] mr-1">1.334.000</span>
                              <span className="leading-[1.4] text-[16px] text-thirty-second-color">vnđ/Cái.</span>
                           </div>
                           <div className="mr-2">
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
                        <div className="flex justify-start mt-[1rem] pb-2">
                           <span className="flex items-center text-thirty-second-color text-[16px] mr-2">Số lượng</span>
                           <div className="flex bg-thirty-third-color p-[2px] items-center mr-2">
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
                  <div className="grid grid-cols-12 py-2 pl-2">
                     <div className="col-span-5 flex flex-col">
                        <div className="p-2 flex flex-1 justify-center">
                           <Image src="https://thegioidien.com/PrdGallery/CON224_ABE_G5412488602.jpg" />
                        </div>
                        <div className="p-2 mt-2 mr--2 flex justify-center bg-thirty-fifth-color">
                           <Image className={`mr-2`} src="https://thegioidien.com/ThumbG/CON224_ABE_G5412488602.jpg" />
                        </div>
                     </div>
                     <div className="col-span-7 flex flex-col overflow-y-auto h-[484px]">
                        <span className="block pl-[5px] pt-[4px] mt-2 text-[16px] text-thirty-sixth-color font-[700]">
                           Ổ cắm âm sàn cho Concept có đế âm, màu nhũ bạc
                        </span>
                        <div className="mt-2 pt-2 pl-[5px] flex items-center text-[16px]">
                           <i className="bi bi-check-square text-red-700"></i>
                           <span className="mx-2">Mã sản phẩm:</span>
                           <span className="text-thirty-seventh-color font-bold">CON224_ABE_G5</span>
                        </div>
                        <div className="mt-2 py-2 pl-[5px] flex items-center text-[16px]">
                           <i className="bi bi-check-square text-red-700"></i>
                           <span className="mx-2">Thương hiệu:</span>
                           <span className="font-bold">Clipsal / Schneider</span>
                        </div>
                        <div className="mt-2">
                           <table className="border-collapse border border-solid border-thirty-eighth-color w-full">
                              <thead className="font-bold">
                                 <tr>
                                    <th
                                       colSpan={2}
                                       className={`border border-solid border-thirty-eighth-color 
                                       text-start pl-[5px] py-[8px]`}
                                    >
                                       <i className="bi bi-patch-plus text-[16px] text-red-700 mr-2"></i>
                                       Thông số kỹ thuật
                                    </th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Chất liệu</td>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>
                                       Kim loại
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Màu sắc</td>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>
                                       Nhũ bạc
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>
                                       Thiết bị tương thích
                                    </td>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>
                                       Series Concept
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Loại</td>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>
                                       Ổ cắm âm sàn
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>Thiết bị gắn kèm</td>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>Không</td>
                                 </tr>
                                 <tr>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>
                                       Đế gắn kèm (chưa bao gồm)
                                    </td>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>M224B</td>
                                 </tr>
                                 <tr>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>
                                       Kích thước (WxHxD)
                                    </td>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>
                                       120x120x78 mm
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px]`}>
                                       Quy cách đóng gói
                                    </td>
                                    <td className={`border border-solid border-thirty-eighth-color p-[5px] font-bold`}>
                                       Bao nhựa
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex items-center text-[16px]">
                           <i className="bi bi-check-square text-red-700"></i>
                           <span className="mx-2">Xuất xứ:</span>
                           <span className="text-thirty-seventh-color font-bold">China</span>
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex items-center text-[16px]">
                           <i className="bi bi-check-square text-red-700"></i>
                           <span className="mx-2">Chất lượng:</span>
                           <span>Mới 100%, chưa sử dụng</span>
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex items-center text-[16px]">
                           <i className="bi bi-check-square text-red-700"></i>
                           <span className="mx-2">Chứng từ:</span>
                           <span>Hóa đơn VAT</span>
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex items-center text-[16px]">
                           <i className="bi bi-check-square text-red-700"></i>
                           <span className="ml-2 font-bold">Giảm thêm chiết khấu cao khi mua số lượng lớn</span>
                        </div>
                        <div className="mt-2 pt-2 pl-[5px] flex items-center text-[16px]">
                           <i className="bi bi-check-square text-red-700"></i>
                           <span className="ml-2">Giới thiệu sản phẩm:</span>
                        </div>
                        <span className="block mt-2 pl-[5px]">
                           Ổ cắm âm sàn Schneider có thể thay đổi linh hoạt các thiết bị tùy theo nhu cầu sử dụng, dễ lắp đặt và
                           an toàn.
                        </span>
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
               <div className={`bg-white grid grid-cols-12`}>
                  <div className={`col-span-2`}>
                     <ProductCard />
                  </div>
                  <div className={`col-span-2`}>
                     <ProductCard />
                  </div>
                  <div className={`col-span-2`}>
                     <ProductCard />
                  </div>
                  <div className={`col-span-2`}>
                     <ProductCard />
                  </div>
                  <div className={`col-span-2`}>
                     <ProductCard />
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

export default ProductDetail;
