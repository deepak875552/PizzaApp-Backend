const { registerUser } = require("../services/userService");
async function createUser(req, res) {
  console.log("create user Controller called");
  console.log(req.body);
  //TODO- Register the user

  try {
    const response = await registerUser(req.body);

    return res.status(201).json({
      message: "Successfully registered the user",
      success: true,
      data: response,
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.reason,
      data: {},
      error: error,
    });
  }
}
module.exports = { createUser };
