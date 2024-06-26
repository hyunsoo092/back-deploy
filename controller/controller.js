import User from "../schemas/user.js";

const main = (req, res) => {
  res.set({ "Content-Type": "text/html; charset=utf-8" });
  res.send("<h1>Welcome Express!! 자동배포 완성!!</h1>");
};

const test = async () => {
  // 몽고DB에 있는 유저 정보를 보내준다.
  const users = await User.find();
  console.log(users);
  res.json(users);
};

export { main, test };
