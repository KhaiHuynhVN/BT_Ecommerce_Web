import classNames from "classnames/bind";

import FooterNav from "./components/FooterNav/FooterNav";
import FooterProductNav from "./components/FooterProductNav";
import Image from "../../../components/Image";

import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Footer() {
   return (
      <footer className={cx("wrapper", "mt-[1rem] border-b-[8px] border-solid border-twenty-eighth-color")}>
         <div className="pt-2">
            <div className={`p-2`}>
               <FooterNav />
            </div>

            <div className={`p-2 pb-4`}>
               <FooterProductNav />
            </div>

            <div className="border-t border-solid flex flex-col items-center border-tertiary-color p-4">
               <Link className="block w-[110px]" to={"/"}>
                  <Image className="h-full w-full object-contain" src="https://thegioidien.com/fckupload/bocongthuong.png" />
               </Link>
               <div className="text-[16px]">
                  <p className="text-center">Bản quyền © 2008-2022 thuộc về thegioidien.com</p>
                  <p className="text-center">Ghi rõ nguồn khi sử dụng các thông tin tại WWW.THEGIOIDIEN.COM.</p>
                  <p className="text-center">WWW.THEGIOIDIEN.COM thuộc sở hữu và điều hành bởi Công ty TNHH Thế Giới Điện</p>
                  <p className="text-center">
                     Văn phòng giao dịch: 98D Linh Đông, Khu Phố 7, Phường Linh Đông, TP.Thủ Đức, TP.HCM
                  </p>
                  <p className="text-center">
                     GPKD: 0305921340 , Sở KHĐT TPHCM cấp ngày 23/08/2008. Địa chỉ: 32 đường số 35, khu phố 2, phường Linh Đông,
                     thành phố Thủ Đức, TP HCM
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
