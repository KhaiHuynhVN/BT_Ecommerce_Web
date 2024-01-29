const routesConfig = {
   home: {
      path: "/",
      title: "Trang chủ",
   },
   signUp: {
      path: "/dang-ky",
      title: "Đăng ký",
      breadcrumbs: ["home", "signUp"],
   },
   product: {
      path: "/san-pham/:id",
      title: "Sản phẩm",
      breadcrumbs: ["home", "product"],
   },
   cart: {
      path: "/gio-hang",
      title: "Giỏ hàng",
      breadcrumbs: ["home", "cart"],
   },
   checkout: {
      path: "/mua-hang",
      title: "Mua hàng",
      breadcrumbs: ["home", "cart", "checkout"],
   },
   signIn: {
      path: "/dang-nhap",
      title: "Đăng nhập",
      breadcrumbs: ["home", "signIn"],
   },
   forgotPassword: {
      path: "/quen-mat-khau",
      title: "Quên mật khẩu",
      breadcrumbs: ["home", "forgotPassword"],
   },
   account: {
      path: "/thanh-vien",
      title: "Thành viên",
      breadcrumbs: ["home", "account"],
   },
   resetPassword: {
      path: "/capmatkhaumoi",
      title: "Cấp mật khẩu mới",
      breadcrumbs: ["home", "forgotPassword", "resetPassword"],
   },
};

export default routesConfig;
