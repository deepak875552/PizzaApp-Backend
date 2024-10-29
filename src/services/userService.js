const { findUser, createUser } = require("../repos/userRepository");

async function registerUser(userDetails) {
  console.log("Hitting service layer");
  //It will create new user in db
  //1. need to check if the user with this email and mobile number already exists.
  const user = await findUser({
    email: userDetails.email,
    mobileNumber: userDetails.mobileNumber,
  });

  if (user) {
    throw {
      reason: "User with the given email and mobile number already exist",
      statusCode: 400,
    };
  }
  //2.if not found then cerate the user in the database

  const newUser = await createUser({
    email: userDetails.email,
    password: userDetails.password,
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    mobileNumber: userDetails.mobileNumber,
  });

  if (!newUser) {
    throw {
      reason: "Something went wrong, can't create user",
      statusCode: 500,
    };
  }
  //3.return the details of created user
  return newUser;
}
module.exports = {
  registerUser,
};
