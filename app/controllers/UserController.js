import UsersModel from "../model/UsersModel.js";
import { TokenEncode } from "../utility/tokenUtility.js";

// registration model
export const Registration = async (req, res) => {
  try {
    let reqBody = req.body;
    await UsersModel.create(reqBody);
    return res.json({
      status: "Success",
      "Message ": "User Registered Successfully",
    });
  } catch (e) {
    return res.json({ status: "fail", " Message": e.toString() });
  }
};

// login user
export const Login = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await UsersModel.findOne(reqBody);

    if (data == null) {
      return res.json({ status: "fail", "Message ": "User Not Found" });
    } else {
      // Login success

      let token = TokenEncode(data["email"], data["_id"]);

      return res.json({
        status: "success",
        "Message ": "User Login Successfully",
        data: { token: token },
      });
    }
  } catch (e) {
    return res.json({ status: "fail", " Message": e.toString() });
  }
};

// ProfileDetail view
export const ProfileDetails = async (req, res) => {
  try {
    let user_id = req.headers["user_id"];
    let data = await UsersModel.findOne({ _id: user_id });
    return res.json({
      status: "success",
      message: "User profile successfully",
      data: data,
    });
  } catch (e) {
    return res.json({ status: "fail", " message": e.toString() });
  }
};

// Profile update
export const profileUpdate = async (req, res) => {
  try {
    let reqBody = res.body;
    let user_id = req.headers["user_id"];
    await UsersModel.updateOne({ " _id": user_id }, reqBody);
    return res.json({
      status: "Success",
      message: "Profile Updated Successfully",
    });
  } catch (e) {
    return res.json({ status: "fail", message: e.toString() });
  }
};

// email verfiy
export const EmailVerify = async (req, res) => {
  return res.json({ status: "Success" });
};
export const Codeverify = async (req, res) => {
  return res.json({ status: "Success" });
};
export const ResetPassword = async (req, res) => {
  return res.json({ status: "Success" });
};
