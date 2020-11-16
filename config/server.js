module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'db3a985c8307e5341abb424b3ca36f42'),
    },
  },
});
