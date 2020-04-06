const UserItems = [
  {
    id: '1',
    name: 'Alice',
    login: 'alice',
    password: '12345'
  },
  {
    id: '2',
    name: 'Bob',
    login: 'bob',
    password: '123456'
  },
  {
    id: '3',
    name: 'Charlie',
    login: 'charlie',
    password: '1234567'
  }
];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return UserItems;
};

const getUser = async id => {
  const user = UserItems.find(element => element.id === id);
  if (!user) {
    return;
  }
  return user;
};

module.exports = { getAll, getUser };
