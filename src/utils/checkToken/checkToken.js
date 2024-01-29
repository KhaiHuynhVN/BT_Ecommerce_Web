import { jwtDecode } from "jwt-decode";

const checkToken = (token) => {
   if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      // const dateCurrTime = new Date(Date.now());
      // const fotmatCrrTime = `${dateCurrTime.getHours()}:${dateCurrTime.getMinutes()}:${dateCurrTime.getSeconds()}`;
      // const dateExpTime = new Date(decodedToken.exp * 1000);
      // const fotmatExpTime = `${dateExpTime.getHours()}:${dateExpTime.getMinutes()}:${dateExpTime.getSeconds()}`;
      // console.log(`Current Time: ${fotmatCrrTime}`);
      // console.log(`Exp Time: ${fotmatExpTime}`);
      if (decodedToken.exp < currentTime) {
         return null;
      } else {
         return decodedToken;
      }
   }
};

export default checkToken;
