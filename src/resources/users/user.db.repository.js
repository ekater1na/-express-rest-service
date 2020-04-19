/* eslint-disable no-unused-vars */
const users = [...require('../../db/db.client').users];

const getAll = async () => {
  throw new Error();
};

const getById = async id => {
  throw new Error();
  //   users.find(user => user.id === id);
};

const getUserByProps = async props => {
  throw new Error();

  // user.find(user => {
  //     for (const key in props) {
  //         if (props.hasOwnProperty(key)) {
  //             if (user[key] != props[key]) {
  //                 return false;
  //             }
  //         }
  //     }

  //     return true;
  // });
};

const add = async user => {
  throw new Error();
  //   users.push(user);
  //   return user;
};

const update = async userToUpdate => {
  throw new Error();
  // let userToUpdate = null;
};

const deleteById = async id => {
  throw new Error();
};

module.exports = { getAll, getById, getUserByProps, add, update, deleteById };
