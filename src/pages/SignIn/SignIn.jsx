import classNames from "classnames/bind";

import Breadcrumbs from "../../components/Breadcrumbs";
import SectionWrapper from "../../components/SectionWrapper";
import SignUpForm from "./components/SignInForm";
import BrandCarousel from "../../components/BrandCarousel";
import PostWidget from "../../components/PostWidget";
import routesConfig from "../../routesConfig";

import styles from "./SignIn.module.scss";

const cx = classNames.bind(styles);

function SignIn() {
   return (
      <div className={cx(`wrapper`, `mt-[1rem]`)}>
         <Breadcrumbs breadcrumbs={routesConfig.checkout.breadcrumbs} routesConfig={routesConfig} />

         <div className={`mt-[1rem]`}>
            <SectionWrapper
               title="Đăng nhập"
               leftIcon={<i className="bi bi-file-earmark-person text-secondary-color"></i>}
               button
               btnTitle="Đăng ký thành viên"
               btnLeftIcon={<i className="bi bi-person-plus-fill text-octonary-color"></i>}
               btnTo={routesConfig.signUp.path}
            >
               <div className={`bg-white p-4`}>
                  <SignUpForm />
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

export default SignIn;
