import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import productNavSlice from "../components/Header/components/ProductNav/productNavSlice";

import styles from "./DefaultLayout.module.scss";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(productNavSlice.actions.resetMenu());
   });

   return (
      <div className={cx("wrapper")}>
         <Header />
         <div className={cx("content")}>{children}</div>
         <Footer />
      </div>
   );
}

DefaultLayout.propTypes = {
   children: PropTypes.node,
};

export default DefaultLayout;
