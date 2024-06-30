

export default ({
    schema: './db/schema.js',
    out: './drizzle',
    dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
    dbCredentials: {
        host: "localhost",
        user: "postgres",
        password: "Admin@123",
        database: "test1",
    },
});
