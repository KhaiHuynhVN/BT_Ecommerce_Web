import classNames from "classnames/bind";

import Breadcrumbs from "../../components/Breadcrumbs";
import SectionWrapper from "../../components/SectionWrapper";
import ResetPasswordForm from "./components/ResetPasswordForm";
import BrandCarousel from "../../components/BrandCarousel";
import PostWidget from "../../components/PostWidget";
import routesConfig from "../../routesConfig";

import styles from "./ResetPassword.module.scss";

const cx = classNames.bind(styles);

function ResetPassword() {
   return (
      <div className={cx(`wrapper`, `mt-[1rem]`)}>
         <Breadcrumbs breadcrumbs={routesConfig.checkout.breadcrumbs} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <SectionWrapper title="Cấp lại mật khẩu" leftIcon={<i className="bi bi-key-fill text-secondary-color"></i>}>
               <div className={`bg-white p-4`}>
                  <div className="flex justify-end text-[16px]">
                     <span className="text-thirtieth-color mr-2">*</span>
                     <span>là thông tin bắt buộc</span>
                  </div>
                  <ResetPasswordForm />
               </div>
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

export default ResetPassword;
