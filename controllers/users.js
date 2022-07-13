import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    // console.log(users);
    res.send(users);
}


export const createUser = (req, res) => {

    const user = req.body;

    const userId = uuidv4(); // add userId

    //create a new object, spread all properties of user, add userId into it 
    const userWithId = { ...user, id: userId }

    users.push(userWithId); //push to the current user array

    res.send(`User with the name ${user.firstName} added to the database!`);
}

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    //id to delete 123

    //John 123
    //Jane 321

    //Jane is 321 ==! 123, so it is ture, then keep it

    users = users.filter((user) => user.id !== id);  //!==

    res.send(`User with the id ${id} deleted from the database.`)
}

export const updateUser = (req, res) => {

    //receive a request param which is id
    const { id } = req.params;


    //id specifies which user do we want to update 
    const user = users.find((user) => user.id === id);

    //take all thing coming from the request of the body 
    const { firstName, lastName, age } = req.body;

    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }

    res.send(`User with the id ${id} has been updated!`)
}
