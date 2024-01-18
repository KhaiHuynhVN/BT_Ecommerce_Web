function ScrollToTopBtn() {
   const handleScrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <div
         className="fixed flex bottom-1 cursor-pointer right-1 z-[998] size-[42px] bg-quaternary-color rounded-[50%]"
         onClick={handleScrollToTop}
      >
         <i className="bi bi-house text-twenty-fourth-color m-auto text-[1.33333rem]"></i>
      </div>
   );
}

export default ScrollToTopBtn;
