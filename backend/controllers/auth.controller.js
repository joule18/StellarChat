import bcrypt from "bcryptjs";

import User from "../models/user.model.js";

const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`;

    const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`;

    const otherProfilePic = `https://avatar.iran.liara.run/username?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic:
        gender === "male"
          ? boyProfilePic
          : gender === "female"
          ? girlProfilePic
          : otherProfilePic,
    });

    if (newUser) {
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      console.log("Error in signup controller (user data)", error.message);
      res.status(500).json({ error: "Invalid user data." });
    }
  } catch (error) {
    console.log("Error in signup controller ", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
};
const login = (req, res) => {
  res.send("loginUser");
};
const logout = (req, res) => {
  res.send("logoutUser");
};

export { login, logout, signup };
