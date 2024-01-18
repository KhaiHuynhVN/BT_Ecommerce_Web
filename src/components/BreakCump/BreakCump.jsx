import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./BreakCump.module.scss";

const cx = classNames.bind(styles);

function BreakCump({ breakCumps = [], routesConfig = {} }) {
   return (
      <div className={cx("wrapper", "flex text-[19.2px]")}>
         {breakCumps.map((item, index, _this) => {
            const Component = index === _this.length - 1 ? "span" : Link;

            return (
               <Component key={index} className="flex items-center p-2 pr-0" to={routesConfig[item].path}>
                  {index === 0 ? (
                     <i className="bi bi-house flex-shrink-0 text-[30px] text-twenty-ninth-color size-[32px] relative bottom-[8px] mr-[4.8px]"></i>
                  ) : (
                     <i className="bi bi-chevron-right flex items-center text-twenty-ninth-color mr-[4.8px]"></i>
                  )}
                  {routesConfig[item].title}
               </Component>
            );
         })}
      </div>
   );
}

BreakCump.propTypes = {
   breakCumps: PropTypes.array,
   routesConfig: PropTypes.object,
};

export default BreakCump;
