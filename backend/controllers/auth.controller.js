const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};
const login = (req, res) => {
  res.send("loginUser");
};
const logout = (req, res) => {
  res.send("logoutUser");
};

export { login, logout, signup };
