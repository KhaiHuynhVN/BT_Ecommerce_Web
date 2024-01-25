import classNames from "classnames/bind";

import BrandCarousel from "../../components/BrandCarousel/BrandCarousel";
import Breadcrumbs from "../../components/Breadcrumbs";
import PostWidget from "../../components/PostWidget";
import SectionWrapper from "../../components/SectionWrapper";
import routesConfig from "../../routesConfig/routesConfig";
import SignUpForm from "./components/SignUpForm";

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

            <div className={`mt-[1rem]`}>
               <PostWidget />
            </div>
         </div>
      </div>
   );
}

export default SignUp;
