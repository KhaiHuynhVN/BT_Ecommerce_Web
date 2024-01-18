import PropTypes from "prop-types";

import NavChild2Item from "./components/NavChild2Item";

function NavChild2({ data }) {
   return (
      <nav className="p-[4.8px_32px_8px_16px]" onClick={(e) => e.stopPropagation()}>
         <ul className="flex flex-wrap ml-[-1px] mt-[-1px]">
            {data.map((item, index) => (
               <li key={index} className="pl-[1px] pb-[1px]" onClick={(e) => e.stopPropagation()}>
                  <NavChild2Item data={item} />
               </li>
            ))}
         </ul>
      </nav>
   );
}

NavChild2.propTypes = {
   data: PropTypes.array,
};

export default NavChild2;
