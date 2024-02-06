import classNames from "classnames/bind";
// import { useRef } from "react";

import { images } from "../../../../assets";
import Image from "../../../../components/Image";
import SectionWrapper from "../../../../components/SectionWrapper";
import DeliveryTermsForm from "./components/DeliveryTermsForm";
import OrderConfirmTable from "./components/OrderConfirmTable";
import PaymentMethodForm from "./components/PaymentMethodForm";

import styles from "./OrderConfirm.module.scss";

const cx = classNames.bind(styles);

const OrderConfirm = () => {
   // const deliveryTermsFormBtnRef = useRef();

   const onSubmithandle = (data) => {
      console.log(data);
   };

   // const handleSubmitForm = () => {
   //    deliveryTermsFormBtnRef.current.click();
   // };

   return (
      <div className={cx(`wrapper`, `bg-white p-2`)}>
         <div className={`bg-thirty-eighth-color`}>
            <div className={`flex p-2 pb-0 justify-between items-center`}>
               <div className={`w-[180px]`}>
                  <Image src={images.logoNoBg} />
               </div>
               <span className={`text-fifty-ninth-color block`}>Mua nhanh giá tốt</span>
            </div>
            <h1 className={`text-thirty-second-color text-[32px] text-center p-2`}>ĐƠN HÀNG</h1>
            <div className={`px-2 pb-4 flex justify-between`}>
               <div>
                  <div className={`flex`}>
                     <span className={`text-sixtieth-color w-[100px] block`}>Khách hàng:</span>
                     <span className={`block`}>Huỳnh Tiến Khải</span>
                  </div>
                  <div className={`flex`}>
                     <span className={`text-sixtieth-color w-[100px] block`}>Điện thoại:</span>
                     <span className={`block`}>0933069587</span>
                  </div>
                  <div className={`flex`}>
                     <span className={`text-sixtieth-color w-[100px] block`}>Email:</span>
                     <span className={`block`}>demonpixelgun3d@gmail.com</span>
                  </div>
               </div>
               <div>
                  <div className={`flex`}>
                     <span className={`text-sixtieth-color w-[70px] block`}>Mã số::</span>
                     <span className={`block font-[600]`}>EW49666</span>
                  </div>
                  <div className={`flex`}>
                     <span className={`text-sixtieth-color w-[70px] block`}>Ngày:</span>
                     <span className={`block`}>02/02/2024</span>
                  </div>
                  <div className={`flex`}>
                     <span className={`text-sixtieth-color w-[70px] block`}>Dự án:</span>
                     <span className={`block`}>DH-349577</span>
                  </div>
               </div>
            </div>
            <OrderConfirmTable />
         </div>

         <div className={`mt-4`}>
            <SectionWrapper
               titleSecondary
               title="Điều khoản giao nhận"
               leftIcon={<i className="bi bi-car-front-fill text-primary-color"></i>}
            >
               <div className={`bg-thirty-ninth-color p-2`}>
                  <DeliveryTermsForm
                     // ref={deliveryTermsFormRef}
                     onSubmit={onSubmithandle}
                  />
               </div>
            </SectionWrapper>
         </div>

         <div className={`mt-4`}>
            <SectionWrapper
               titleSecondary
               title="Phương thức thanh toán"
               leftIcon={<i className="bi bi-cash-stack text-primary-color"></i>}
            >
               <div className={`bg-thirty-ninth-color p-2`}>
                  <PaymentMethodForm />
               </div>
            </SectionWrapper>
         </div>
      </div>
   );
};

export default OrderConfirm;
