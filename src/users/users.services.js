const userControllers = require('./users.controllers');

const getAllUsers = (req, res) => {
    userControllers.findAllUsers()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

const getUserById = (req, res) => {
    const id = req.params.id;

    userControllers.findUserById(id)
        .then((data) => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).json({ message: 'Invalid id' });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

const postUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;

    userControllers.createUser({ first_name, last_name, email, password, birthday })
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });

};

const patchUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const id = req.params.id;

    userControllers.updateUser(id, { first_name, last_name, email, password, birthday })
        .then((data) => {
            if (data) {
                res.status(200).json({ message: 'User modified successfully' });
            } else {
                res.status(404).json({ message: 'invalid id' });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    userControllers.deleteUser(id)
        .then((data) => {
            if (data) {
                res.status(200).json({ message: 'User deleted successfully' });

            } else {
                res.status(404).json({ message: 'invalid id' });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

module.exports = {
    getAllUsers,
    getUserById,
    deleteUser,
    postUser,
    patchUser

};
