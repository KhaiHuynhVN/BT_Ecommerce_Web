import routesConfig from "../routesConfig";
import * as Pages from "../pages";
import * as Layouts from "../layouts";

const routes = [
   { path: routesConfig.home.path, component: Pages.Home, layout: Layouts.DefaultLayout },
   { path: routesConfig.signUp.path, component: Pages.SignUp, layout: Layouts.DefaultLayout },
   { path: routesConfig.product.path, component: Pages.ProductDetail, layout: Layouts.DefaultLayout },
   { path: routesConfig.cart.path, component: Pages.Cart, layout: Layouts.DefaultLayout },
   { path: routesConfig.checkout.path, component: Pages.Checkout, layout: Layouts.DefaultLayout },
   { path: routesConfig.signIn.path, component: Pages.SignIn, layout: Layouts.DefaultLayout },
   { path: routesConfig.forgotPassword.path, component: Pages.ForgotPassword, layout: Layouts.DefaultLayout },
   { path: routesConfig.account.path, component: Pages.AccountManagement, layout: Layouts.DefaultLayout },
   { path: routesConfig.resetPassword.path, component: Pages.ResetPassword, layout: Layouts.DefaultLayout },
];

export default routes;
