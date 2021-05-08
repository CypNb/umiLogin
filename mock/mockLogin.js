export default {
  'post /api/user/login': (req, res) => {
    window.localStorage.setItem('roles', 'user');
    res.end('OK');
  },
};
