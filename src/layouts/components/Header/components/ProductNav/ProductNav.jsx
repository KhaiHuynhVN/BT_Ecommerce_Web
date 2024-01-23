/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import ProductNavItem from "./components/ProductNavItem";
import productNavSlice from "./productNavSlice";

import styles from "./ProductNav.module.scss";

const cx = classNames.bind(styles);

const menuData = [
   {
      id: "1",
      title: "Công Tắc Ổ Cắm và Phụ Kiện",
      children: [
         {
            id: "1.1",
            title: "Clipsal/Schneider",
            children: [
               {
                  id: "1.1.1",
                  title: "Clipsal",
                  children: [
                     {
                        title: "Clipsal",
                     },
                     {
                        title: "Clipsal",
                     },
                     {
                        title: "Clipsal",
                     },
                  ],
               },
               {
                  id: "1.1.2",
                  title: "Schneider",
                  children: [
                     {
                        title: "Schneider",
                     },
                     {
                        title: "Schneider",
                     },
                     {
                        title: "Schneider",
                     },
                  ],
               },
            ],
         },
         {
            id: "1.2",
            title: "Clipsal/Schneider",
            children: [
               {
                  id: "1.2.1",
                  title: "Clipsal",
                  children: [
                     {
                        title: "Clipsal",
                     },
                     {
                        title: "Clipsal",
                     },
                     {
                        title: "Clipsal",
                     },
                  ],
               },
               {
                  id: "1.2.2",
                  title: "Schneider",
                  children: [
                     {
                        title: "Schneider",
                     },
                     {
                        title: "Schneider",
                     },
                     {
                        title: "Schneider",
                     },
                  ],
               },
            ],
         },
      ],
   },
   {
      id: "2",
      title: "Công Tắc Ổ Cắm và Phụ Kiện",
      children: [
         {
            id: "2.1",
            title: "Clipsal/Schneider",
            children: [
               {
                  id: "2.1.1",
                  title: "Clipsal",
                  children: [
                     {
                        title: "Clipsal",
                     },
                     {
                        title: "Clipsal",
                     },
                     {
                        title: "Clipsal",
                     },
                  ],
               },
               {
                  id: "2.1.2",
                  title: "Schneider",
                  children: [
                     {
                        title: "Schneider",
                     },
                     {
                        title: "Schneider",
                     },
                     {
                        title: "Schneider",
                     },
                  ],
               },
            ],
         },
         {
            id: "2.2",
            title: "Clipsal/Schneider",
            children: [
               {
                  id: "2.2.1",
                  title: "Clipsal",
                  children: [
                     {
                        title: "Clipsal",
                     },
                     {
                        title: "Clipsal",
                     },
                     {
                        title: "Clipsal",
                     },
                  ],
               },
               {
                  id: "2.2.2",
                  title: "Schneider",
                  children: [
                     {
                        title: "Schneider",
                     },
                     {
                        title: "Schneider",
                     },
                     {
                        title: "Schneider",
                     },
                  ],
               },
            ],
         },
      ],
   },
];

function ProductNav({ showProductNavBtnRef }) {
   const dispatch = useDispatch();
   const navRef = useRef(null);

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (!navRef.current.contains(e.target) && !showProductNavBtnRef.current.contains(e.target)) {
            dispatch(productNavSlice.actions.setShowProductNav(false));
         }
      };
      window.addEventListener("mousedown", handleClickOutside);

      return () => {
         window.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <nav ref={navRef} className={cx("wrapper", "absolute top-full left-0 w-full text-white bg-white")}>
         <ul>
            {menuData.map((item, index) => (
               <li key={index} className={cx("nav-item")}>
                  <ProductNavItem id={item.id} data={item} />
               </li>
            ))}
         </ul>
      </nav>
   );
}

ProductNav.propTypes = {
   showProductNavBtnRef: PropTypes.object,
};

export default ProductNav;
