import connect from "./connect/connect.js";
import User from "./schemas/user.js";

connect();

// const user_inserted = await User.create(
//   {
//     email: "ksh1234gamil.com",
//     name: "김세환",
//   },
//   {
//     email: "hgd1234gamil.com",
//     name: "홍길동",
//   },
//   {
//     email: "jbg1234gamil.com",
//     name: "장보고",
//   }
// );

// const users = await User.find();
// console.log(users);
