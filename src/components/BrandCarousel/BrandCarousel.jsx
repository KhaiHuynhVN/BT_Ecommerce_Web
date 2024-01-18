import classNames from "classnames/bind";

import Image from "../Image";

import styles from "./BrandCarousel.module.scss";

const cx = classNames.bind(styles);

const images = [
   "https://thegioidien.com/BrandLink/Mennekes520246502.jpg",
   "https://thegioidien.com/BrandLink/Clipsal505242700.jpg",
   "https://thegioidien.com/BrandLink/Panasonic873768367.jpg",
   "https://thegioidien.com/BrandLink/SchneiderElectric412485467.jpg",
   "https://thegioidien.com/BrandLink/ABB874366621.jpg",
   "https://thegioidien.com/BrandLink/Paragon760064346.jpg",
   "https://thegioidien.com/BrandLink/philips086473574.jpg",
   "https://thegioidien.com/BrandLink/Socomec283503363.jpg",
   "https://thegioidien.com/BrandLink/Broyce%20Control482314583.jpg",
   "https://thegioidien.com/BrandLink/Mikro642736780.jpg",
   "https://thegioidien.com/BrandLink/Shamwha%20Eocr464128801.jpg",
   "https://thegioidien.com/BrandLink/Cadivi847106821.jpg",
   "https://thegioidien.com/BrandLink/Omega871268371.jpg",
   "https://thegioidien.com/BrandLink/PCE052770688.jpg",
   "https://thegioidien.com/BrandLink/Leipole613041616.jpg",
   "https://thegioidien.com/BrandLink/Hengzhu873267852.jpg",
   "https://thegioidien.com/BrandLink/LIGHTSTAR064830347.jpg",
];

const imagesCopied = [...images];

function BrandCarousel() {
   return (
      <div
         style={{ "--totalSlides": images.length * 2, "--imageWidth": "85px", "--spacing": "8px" }}
         className={cx("carousel", "bg-twenty-first-color p-[8px_13px]")}
      >
         <div className="overflow-hidden">
            <div className={cx("slide-track", `flex`)}>
               {images.concat(imagesCopied).map((image, index) => (
                  <div key={index} className={cx("slide", "flex-shrink-0 cursor-pointer")}>
                     <Image className="w-full h-full object-contain" src={image} />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default BrandCarousel;
