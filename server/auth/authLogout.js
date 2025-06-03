import userModel from '../user/userModel.js'
// TODO: remove token from user record

const authLogout = async (req, res) => {
  console.log("auth logout", req.user);

    if (!req.user) {
      res.status(401).json({ message: "Not authenticated." })
    }

    try {
      // Remove user token
      const removeToken = await userModel.updateOne(
        { _id: req.user._id },
        { token: [] }
      )
 

    req.logout((err) => {
        // callback
      if (err) {
        return res.status(400)
      }
      res.status(200).json({ message: "Logged out." })
    })
   } catch (err) {
      console.log("error", err);
      res.status(500).json({ message: "Error logging out." });
    }

  }
  export default authLogout