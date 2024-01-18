const routesConfig = {
   home: {
      path: "/",
      title: "Trang chủ",
   },
   signUp: {
      path: "/dang-ky",
      title: "Đăng ký",
      breakCumps: ["home", "signUp"],
   },
   product: {
      path: "/san-pham/:id",
      title: "Sản phẩm",
      breakCumps: ["home", "product"],
   },
   cart: {
      path: "/gio-hang",
      title: "Giỏ hàng",
      breakCumps: ["home", "cart"],
   },
   checkout: {
      path: "/mua-hang",
      title: "Mua hàng",
      breakCumps: ["home", "cart", "checkout"],
   },
   signIn: {
      path: "/dang-nhap",
      title: "Đăng nhập",
      breakCumps: ["home", "signIn"],
   },
   forgotPassword: {
      path: "/quen-mat-khau",
      title: "Quên mật khẩu",
      breakCumps: ["home", "forgotPassword"],
   },
};

export default routesConfig;
