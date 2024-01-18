import classNames from "classnames/bind";

import Button from "../../../../../components/Button";

import styles from "./FacebookIframe.module.scss";

const cx = classNames.bind(styles);

function FacebookIframe() {
   return (
      <div className={cx("wrapper", "py-1 pr-4 pl-1 text-[13px] flex bg-tertiary-color")}>
         <Button
            className="py-1 px-2 text-white bg-blue-600 flex items-center rounded-[4px]"
            leftIcon={<i className="bi bi-hand-thumbs-up-fill"></i>}
         >
            <span className="font-[700] mr-1">Follow</span> 333
         </Button>
         <Button className="py-1 px-2 text-white font-[700] bg-blue-600 flex items-center rounded-[4px] ml-1" spacing="4px">
            Share
         </Button>
      </div>
   );
}

export default FacebookIframe;
