export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("loginuser");
};

export const logout = (req, res) => {
  res.send("logoutuser");
};
