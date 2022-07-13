import express from 'express';


import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';
const router = express.Router(); //initialise out router;



//all routes in here are starting with /users  
router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser) //put the colon here you are expecting anything after the user's path

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser)

export default router;