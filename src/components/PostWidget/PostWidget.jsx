import classNames from "classnames/bind";

import PostWrapper from "../PostWrapper";
import PostItem from "../PostItem";
import Button from "../Button";

import styles from "./PostWidget.module.scss";

const cx = classNames.bind(styles);

function PostWidget() {
   return (
      <div className={cx("wrapper", "grid grid-cols-12 gap-[1rem]")}>
         <div className={cx("post-widget-item", "col-span-4")}>
            <PostWrapper
               className={cx("post-container")}
               title="Hướng dẫn - Câu hỏi thường gặp"
               leftIcon={<i className="bi bi-patch-question-fill text-secondary-color"></i>}
            >
               <div className={`bg-twenty-third-color grid grid-cols-12 p-4 gap-[1.5rem_1rem]`}>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/images388638267032664804.jpg" />
                  </div>
               </div>
               <div className={cx("post-more-btn", `bg-twenty-third-color p-4`)}>
                  <Button
                     className={`ml-auto max-w-fit`}
                     to={"/"}
                     septenary
                     leftIcon={<i className="bi bi-chevron-double-right"></i>}
                  >
                     Xem thêm
                  </Button>
               </div>
            </PostWrapper>
         </div>
         <div className={cx("post-widget-item", "col-span-4")}>
            <PostWrapper
               className={cx("post-container")}
               title="Tài liệu kỹ thuật"
               leftIcon={<i className="bi bi-file-text-fill text-secondary-color"></i>}
            >
               <div className={`bg-twenty-third-color grid grid-cols-12 p-4 gap-[1.5rem_1rem]`}>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/TLUG534424638648374342.jpg" />
                  </div>
               </div>
               <div className={cx("post-more-btn", `bg-twenty-third-color p-4`)}>
                  <Button
                     className={`ml-auto max-w-fit`}
                     to={"/"}
                     septenary
                     leftIcon={<i className="bi bi-chevron-double-right"></i>}
                  >
                     Xem thêm
                  </Button>
               </div>
            </PostWrapper>
         </div>
         <div className={cx("post-widget-item", "col-span-4")}>
            <PostWrapper
               className={cx("post-container")}
               title="Bảng giá sản phẩm"
               leftIcon={<i className="bi bi-currency-dollar text-secondary-color"></i>}
            >
               <div className={`bg-twenty-third-color grid grid-cols-12 p-4 gap-[1.5rem_1rem]`}>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
                  <div className={cx("post-item", "col-span-6")}>
                     <PostItem image="https://thegioidien.com/hmhNews/Mennekes181728460066052280268475215.jpg" />
                  </div>
               </div>
               <div className={cx("post-more-btn", `bg-twenty-third-color p-4`)}>
                  <Button
                     className={`ml-auto max-w-fit`}
                     to={"/"}
                     septenary
                     leftIcon={<i className="bi bi-chevron-double-right"></i>}
                  >
                     Xem thêm
                  </Button>
               </div>
            </PostWrapper>
         </div>
      </div>
   );
}

export default PostWidget;
