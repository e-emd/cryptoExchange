import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'adm1n@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Dew Mar',
    email: 'Dew@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Pol',
    email: 'Jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
