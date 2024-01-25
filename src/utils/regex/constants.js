const passwordRegex =
   /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?])[\p{L}\d!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]{6,}$/u;
const phoneNumberRegex = /^(0)[0-9]{6,14}$/;
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export { passwordRegex, phoneNumberRegex, emailRegex };
