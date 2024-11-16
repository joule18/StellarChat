const signup = (req, res) => {
  res.send("signupUser");
};
const login = (req, res) => {
  res.send("loginUser");
};
const logout = (req, res) => {
  res.send("logoutUser");
};

export { login, logout, signup };
