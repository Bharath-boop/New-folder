import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
export const userSchema = pgTable("users", {
    id: uuid("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull()
})