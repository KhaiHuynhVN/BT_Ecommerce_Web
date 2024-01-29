import classNames from "classnames/bind";
import { useState } from "react";
import Proptypes from "prop-types";

import Button from "../../../../components/Button";
import ChangePasswordForm from "../ChangePasswordForm";
import UserDetailsForm from "../UserDetailsForm";
import Select from "../../../../components/Select";

import styles from "./UiContainer.module.scss";

const cx = classNames.bind(styles);

function UiContainer({ data }) {
   const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
   const [showUserDetailForm, setShowUserDetailForm] = useState(false);

   const handleToggleChangePasswordForm = (value) => {
      setShowChangePasswordForm(value);
   };

   const handleToggleUserDetailForm = (value) => {
      setShowUserDetailForm(value);
   };

   return (
      <div className={cx(`wrapper`)}>
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
         <div className={cx("ui-container", `p-4 bg-white flex gap-[1rem]`)}>
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
                     <UserDetailsForm data={data} onClickCancelBtn={handleToggleUserDetailForm} />
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
                              selectWrapperCl={`w-full`}
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
                              selectWrapperCl={`w-full`}
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
      </div>
   );
}

UiContainer.propTypes = {
   data: Proptypes.object,
};

export default UiContainer;
