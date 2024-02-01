const passwordRegex =
   /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?])[\p{L}\d!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]{6,}$/u;
const phoneNumberRegex = /^(?:\+{1}[1-9][0-9]{8,12}|0[1-9][0-9]{8,12})$/;
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export { passwordRegex, phoneNumberRegex, emailRegex };
