import userJs from "./modul.js";

const User = new userJs();
User.addUser("dani","galih@gmail.com",18);
User.addUser("vepi","galih@gmail.com",18);
// userJs.adduser("vepi","galih@gmail.com",18);

console.log(User.getUser());
