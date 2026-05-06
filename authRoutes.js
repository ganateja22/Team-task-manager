router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ msg: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.json({ msg: "Wrong password" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res.json({ token });

  } catch (err) {
    console.log(err);   // 🔥 shows error in terminal
    res.status(5000).json({ msg: "Server error" });
  }
});