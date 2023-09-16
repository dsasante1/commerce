const UserService = require('../services/user.service');



//Controller creating a new user
const createUser = async (req, res, next) => {
  try {
    const response = await UserService.createUser(req.body);
    return res.status(response.code).json(response);
  } catch (error) {
    console.log({ error });
    next(error);
  }
};





//Login controller 

const signInUser = async (req, res, next) => {
  try {
    const result = await UserService.loginUser(req.body);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};




//Returns all users
const fetchAllUsers = async (req, res, next) => {
  try {
    const result = await UserService.getAllUsers();
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};





// Gets user by id
const fetchUserById = async (req, res, next) => {
  try {
    const user = req.user;
    return res.status(200).json({
      status: 'success',
      message: 'User fetched successfully',
      code: 200,
      data: {
        user,
      },
    });
  } catch (error) {
    console.log({ error });
    next(error);
  }
};

/*{
  status: 'success',
  message: 'Users fetched successfully',
  code: 200,
  data: {
    user,
  },
};*/
module.exports = {
  createUser,
  signInUser,
  fetchAllUsers,
  fetchUserById,
};
