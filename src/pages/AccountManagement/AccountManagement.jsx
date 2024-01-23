import classNames from "classnames/bind";
import { useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import SectionWrapper from "../../components/SectionWrapper";
import Select from "../../components/Select";
import BrandCarousel from "../../components/BrandCarousel";
import PostWrapper from "../../components/PostWrapper";
import PostItem from "../../components/PostItem";
import ChangePasswordForm from "./components/ChangePasswordForm";
import UserDetailsForm from "./components/UserDetailsForm";
import OrderNav from "../../components/OrderNav";
import routesConfig from "../../routesConfig";

import styles from "./AccountManagement.module.scss";

const cx = classNames.bind(styles);

function AccountManagement() {
   const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
   const [showUserDetailForm, setShowUserDetailForm] = useState(false);

   const handleToggleChangePasswordForm = (value) => {
      setShowChangePasswordForm(value);
   };

   const handleToggleUserDetailForm = (value) => {
      setShowUserDetailForm(value);
   };

   return (
      <div className={cx(`wrapper`, `mt-[1rem]`)}>
         <Breadcrumbs breadcrumbs={routesConfig.account.breadcrumbs} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <OrderNav />
            <div className={`mt-[1px]`}>
               <SectionWrapper title={`Thông tin`} leftIcon={<i className="bi bi-person-fill text-denary-color"></i>}>
                  <div className={`bg-fifty-second-color p-[16px_8px] flex`}>
                     <div className={`flex mr-4`}>
                        <span className={`text-fifty-sixth-color mr-1`}>ID:</span>
                        <span>50047.</span>
                     </div>
                     <div className={`flex`}>
                        <span className={`text-fifty-sixth-color mr-1`}>Ngày đăng ký:</span>
                        <span>16/01/2024.</span>
                     </div>
                  </div>
                  <div className={`p-4 bg-white flex gap-[1rem]`}>
                     <div className={`flex flex-col flex-1 border border-solid border-thirty-eighth-color`}>
                        <div className={`p-2 text-[17.6px] bg-thirty-eighth-color text-center`}>
                           <i className="bi bi-person-lines-fill text-quinary-color mr-2"></i>
                           <span className={`text-twenty-sixth-color`}>Thông tin đăng nhập</span>
                        </div>
                        <div className={`bg-twenty-third-color p-4 flex-1`}>
                           <div className={`flex mt-2`}>
                              <span className={`text-fifty-sixth-color w-[110px]`}>Email:</span>
                              <span>demonpixelgun3d@gmail.com</span>
                           </div>
                           {showChangePasswordForm ? (
                              <div className={`mt-2`}>
                                 <ChangePasswordForm onClickCancelBtn={handleToggleChangePasswordForm} />
                              </div>
                           ) : (
                              <>
                                 <div className={`flex mt-2`}>
                                    <span className={`text-fifty-sixth-color w-[110px]`}>Mật khẩu:</span>
                                    <span>********</span>
                                 </div>
                                 <Button
                                    className={`my-4 mx-auto`}
                                    primary
                                    leftIcon={<i className="bi bi-pencil-square text-denary-color"></i>}
                                    onClick={() => handleToggleChangePasswordForm(true)}
                                 >
                                    Đổi mật khẩu
                                 </Button>
                              </>
                           )}
                        </div>
                     </div>
                     <div className={`flex flex-col flex-1 border border-solid border-thirty-eighth-color`}>
                        <div className={`p-2 text-[17.6px] bg-thirty-eighth-color text-center`}>
                           <i className="bi bi-key-fill text-quinary-color mr-2"></i>
                           <span className={`text-twenty-sixth-color`}>Thông tin liên hệ</span>
                        </div>
                        <div className={`bg-twenty-third-color p-4 flex-1`}>
                           {showUserDetailForm ? (
                              <UserDetailsForm onClickCancelBtn={handleToggleUserDetailForm} />
                           ) : (
                              <>
                                 <div className={`flex mt-2 items-center`}>
                                    <span className={`text-fifty-sixth-color w-[110px]`}>Họ tên:</span>
                                    <span>Huỳnh Tiến Khải</span>
                                 </div>
                                 <div className={`flex mt-2 items-center`}>
                                    <span className={`text-fifty-sixth-color w-[110px]`}>Điện thoại:</span>
                                    <span>0933069587</span>
                                 </div>
                                 <div className={`flex mt-2 items-center`}>
                                    <span className={`text-fifty-sixth-color w-[110px]`}>Địa chỉ:</span>
                                    <span>HCM</span>
                                 </div>
                                 <div className={`flex mt-2 items-center`}>
                                    <span className={`text-fifty-sixth-color w-[110px] shrink-0`}>Tỉnh thành:</span>
                                    <Select
                                       value={`Thành phố Hồ Chí Minh`}
                                       labelCl={`flex`}
                                       wrapperCl={`w-full`}
                                       selectCl={`border border-solid border-black p-2 w-full`}
                                       placeholder="-- Chọn tỉnh thành"
                                       data={["Thành phố Hồ Chí Minh"]}
                                       disabled
                                    />
                                 </div>
                                 <div className={`flex mt-2 items-center`}>
                                    <span className={`text-fifty-sixth-color w-[110px] shrink-0`}>Quận huyện:</span>
                                    <Select
                                       value={`Quận Bình Tân`}
                                       labelCl={`flex`}
                                       wrapperCl={`w-full`}
                                       selectCl={`border border-solid border-black p-2 w-full`}
                                       placeholder="-- Chọn quận huyện"
                                       data={["Quận Bình Tân"]}
                                       disabled
                                    />
                                 </div>

                                 <Button
                                    className={`my-4 mx-auto`}
                                    primary
                                    leftIcon={<i className="bi bi-pencil-square text-secondary-color"></i>}
                                    onClick={() => handleToggleUserDetailForm(true)}
                                 >
                                    Sửa
                                 </Button>
                              </>
                           )}
                        </div>
                     </div>
                  </div>
               </SectionWrapper>
            </div>
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

export default AccountManagement;
