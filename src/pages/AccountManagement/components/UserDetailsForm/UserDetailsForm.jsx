/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-case-declarations */
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import _ from "lodash";

import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";
import { schema } from "../../../../reactHookFormSchema";
import { userServices, provinceServices } from "../../../../services";
import authSlice from "../../../../store/authSlice";

import styles from "./UserDetailsForm.module.scss";

const cx = classNames.bind(styles);

function UserDetailsForm({ data, onClickCancelBtn }) {
   const dispatch = useDispatch();
   const [districtDatas, setDistrictDatas] = useState([]);
   const [isDisabled, setIsDisabled] = useState(false);

   const arrAddress = data?.address?.split(", ").reverse();
   const [province, district, ...resAddress] = Array.isArray(arrAddress) ? arrAddress : [];

   const { mutate } = useMutation({
      mutationFn: (data) => userServices.updateUserInfoService(data),
      onSuccess: async () => {
         const userData = await userServices.getUserInfoService(localStorage.getItem("accessToken"));
         dispatch(authSlice.actions.setUserData(userData?.data));
         onClickCancelBtn(false);
      },
      onError: (err) => {
         console.log(err);
      },
   });

   const { data: provinceDatas, error } = useQuery({
      queryKey: ["provinces"],
      queryFn: () => provinceServices.getProvinceService(),
      onSuccess: async (provinceData) => {
         const provinceId = provinceData?.data.results.find((item) => item.province_name === province).province_id;
         setIsDisabled(true);
         const districtDatas = await provinceServices.getDistrictService(provinceId);
         setDistrictDatas(districtDatas?.data.results);
         setIsDisabled(false);
      },
      onError: (err) => console.log(err),
      staleTime: 1000 * 60 * 60 * 24,
   });

   const {
      register,
      handleSubmit,
      formState: { errors },
      clearErrors,
      setValue,
      getValues,
      trigger,
   } = useForm({
      resolver: yupResolver(schema.userDetailsFormSchema),
      defaultValues: {
         fullName: data?.fullName,
         phoneNumber: data?.phone?.replace("+84", "0"),
         email: data?.email,
         address: resAddress?.reverse().join(", "),
         province: province,
         district: district,
      },
   });

   useEffect(() => {
      if (!provinceDatas) return;
      const fetchData = async () => {
         const provinceId = provinceDatas?.data.results.find((item) => item.province_name === province).province_id;
         const districtDatas = await provinceServices.getDistrictService(provinceId);
         setDistrictDatas(districtDatas?.data.results);
      };
      fetchData();
   }, []);

   const handleChangeFormData = async (e, key, type) => {
      switch (type) {
         case "province":
            const value = e.target.value;

            if (value) {
               const provinceId = provinceDatas?.data.results.find((item) => item.province_name === value).province_id;
               setIsDisabled(true);
               const districtDatas = await provinceServices.getDistrictService(provinceId);
               setDistrictDatas(districtDatas?.data.results);
            } else {
               setDistrictDatas([]);
            }

            clearErrors("district");
            setValue("province", value.trim(), { shouldValidate: Object.keys(errors).length ? true : false });
            setValue("district", "");
            setIsDisabled(false);
            break;
         case "district":
            setValue("district", e.target.value.trim(), { shouldValidate: Object.keys(errors).length ? true : false });
            clearErrors("district");
            break;
         default:
            setValue(key, e.target.value.trimStart());
            clearErrors(key);
            break;
      }
   };

   const onSubmitHandle = (formData) => {
      const { phoneNumber, fullName: name, address, email, province, district } = formData;

      const newData = {
         name,
         phone: `+84${phoneNumber.replace(/^0+/, "")}`,
         address: `${address}, ${district}, ${province}`,
      };

      if (!Object.keys(errors).length) {
         const originData = {
            email,
            fullName: name,
            phone: `+84${phoneNumber.replace(/^0+/, "")}`,
            address: `${address}, ${district}, ${province}`,
         };
         const isEqual = _.isEqual(originData, data);
         if (isEqual) {
            onClickCancelBtn(false);
         } else {
            mutate(newData);
         }
      }
   };

   const handleBlurInput = (key) => {
      Object.keys(errors).length && trigger(key);
   };

   return (
      <form className={cx("wrapper", "flex flex-col")} onSubmit={handleSubmit(onSubmitHandle)}>
         <div className="flex flex-col gap-4 w-full">
            <div>
               <Input
                  value={getValues("fullName")}
                  register={{ ...register("fullName") }}
                  field={`Họ tên`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={() => handleBlurInput("fullName")}
                  onChange={(e) => handleChangeFormData(e, "fullName")}
               />
               {errors.fullName?.message && <p className={`text-tertiary-color mt-1`}>{errors.fullName.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("phoneNumber")}
                  type="number"
                  register={{ ...register("phoneNumber") }}
                  field={`Điện thoại`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={() => handleBlurInput("phoneNumber")}
                  onChange={(e) => handleChangeFormData(e, "phoneNumber")}
               />
               {errors.phoneNumber?.message && <p className={`text-tertiary-color mt-1`}>{errors.phoneNumber.message}</p>}
            </div>
            <div>
               <Input
                  value={getValues("address")}
                  register={{ ...register("address") }}
                  field={`Địa chỉ`}
                  labelCl={`block`}
                  inputWrapperCl={`w-full mt-1`}
                  inputCl={`border p-2 text-[16px] border-black border-solid focus:outline outline-black 
                  outline-1 w-full rounded-[3px] bg-white`}
                  onBlur={() => handleBlurInput("address")}
                  onChange={(e) => handleChangeFormData(e, "address")}
               />
               {errors.address?.message && <p className={`text-tertiary-color mt-1`}>{errors.address.message}</p>}
            </div>
            {error ? (
               <div className="text-tertiary-color mt-1">Không lấy được dữ liệu tỉnh thành</div>
            ) : (
               <>
                  <div>
                     <Select
                        value={getValues("province")}
                        placeholder={`-- Chọn tỉnh thành`}
                        register={{ ...register("province") }}
                        data={provinceDatas?.data.results}
                        valueKey={"province_name"}
                        contentKey={"province_name"}
                        field={`Tỉnh/thành`}
                        labelCl={`block`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        onChange={(e) => handleChangeFormData(e, "province", "province")}
                     />
                     {errors.province?.message && <p className={`text-tertiary-color mt-1`}>{errors.province.message}</p>}
                  </div>
                  <div>
                     <Select
                        disabled={isDisabled}
                        value={getValues("district")}
                        placeholder={`-- Chọn quận huyện`}
                        register={{ ...register("district") }}
                        data={districtDatas}
                        valueKey={"district_name"}
                        contentKey={"district_name"}
                        field={`Quận/huyện`}
                        labelCl={`block`}
                        selectCl={`border border-solid border-black p-2 w-full`}
                        onChange={(e) => handleChangeFormData(e, "district", "district")}
                     />
                     {errors.district?.message && <p className={`text-tertiary-color mt-1`}>{errors.district.message}</p>}
                  </div>
               </>
            )}
         </div>
         <div className={`my-4 flex flex-wrap gap-4 justify-center`}>
            <Button primary leftIcon={<i className="bi bi-arrow-counterclockwise text-denary-color"></i>}>
               Cập nhật
            </Button>
            <Button
               primary
               leftIcon={<i className="bi bi-x-lg text-denary-color"></i>}
               onClick={(e) => {
                  e.preventDefault();
                  onClickCancelBtn(false);
               }}
            >
               Hủy
            </Button>
         </div>
      </form>
   );
}

UserDetailsForm.propTypes = {
   data: PropTypes.object,
   onClickCancelBtn: PropTypes.func,
};

export default UserDetailsForm;
