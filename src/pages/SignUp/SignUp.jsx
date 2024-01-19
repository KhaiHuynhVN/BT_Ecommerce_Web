import classNames from "classnames/bind";

import Breadcrumbs from "../../components/Breadcrumbs";
import SectionWrapper from "../../components/SectionWrapper";
import routesConfig from "../../routesConfig/routesConfig";
import SignUpForm from "./components/SignUpForm";
import BrandCarousel from "../../components/BrandCarousel/BrandCarousel";
import PostWrapper from "../../components/PostWrapper";
import PostItem from "../../components/PostItem";

import styles from "./SignUp.module.scss";

const cx = classNames.bind(styles);

function SignUp() {
   return (
      <div className={cx("wrapper", "mt-[1rem]")}>
         <Breadcrumbs breadcrumbs={routesConfig.signUp.breadcrumbs} routesConfig={routesConfig} />

         <div className="mt-[1rem]">
            <SectionWrapper
               title="Đăng ký thành viên"
               leftIcon={<i className="bi bi-file-earmark-person text-secondary-color"></i>}
            >
               <div className="p-4 bg-white">
                  <div className="flex justify-end text-[16px]">
                     <span className="text-thirtieth-color mr-2">*</span>
                     <span>là thông tin bắt buộc</span>
                  </div>
                  <SignUpForm />
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
      </div>
   );
}

export default SignUp;
