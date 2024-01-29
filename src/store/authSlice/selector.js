const token = (state) => state.auth.token;
const refreshToken = (state) => state.auth.refreshToken;
const userData = (state) => state.auth.userData;

export { refreshToken, token, userData };
