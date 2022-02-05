module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e38572b0f2a16c08aeb15e7f150f3c8c'),
  },
});
