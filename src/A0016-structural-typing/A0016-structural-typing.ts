type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentvalue) => {
  return (
    user.username === sentvalue.username && user.password === sentvalue.password
  );
};

// Tipo foi inferido
const bdUser = { username: 'Joao', password: '123' };
const sentUser = { username: 'Joao', password: '123', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
