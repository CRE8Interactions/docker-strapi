export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'mailcatcher',
        port: 1025,
        ignoreTLS: true,
      },
      settings: {
        defaultFrom: 'donotreply@example.com',
        defaultReplyTo: 'donotreply@example.com',
      },
    },
  },
});
