export const register = obj => new Promise((resolve, reject) => {
  // reject({ code: 401, message: 'Unauthorized' });
  resolve({ authToken: 'foo-bar' });
});

export const login = (login, password) => new Promise((resolve, reject) => {
  // reject({ code: 401, message: 'Unauthorized' });
  resolve({ authToken: 'foo-bar' });
});

export const logout = () => true;
