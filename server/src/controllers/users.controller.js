const UsersModel = require('../models/User.model');

const usersController = {};

usersController.getAllUsers = async (req, res) => {
  try {
    const allMovies = await UsersModel.find();
    console.log(allMovies);
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(500).json({ error: 'Error reading database' + error });
  }
};

usersController.createUser = async (req, res) => {
  const userInfo = req.body;
  const newUser = new UsersModel({ ...userInfo });
  try {
    await newUser.save();
    const allUsers = await UsersModel.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Error reading/writing database' + error });
  }
};

module.exports = usersController;
