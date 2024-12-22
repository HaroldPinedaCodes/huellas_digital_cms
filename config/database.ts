export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_PRIVATE_URL"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
