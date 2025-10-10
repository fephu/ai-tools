import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const subscriptionTable = pgTable("subscription", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  key: varchar({ length: 255 }).notNull(),
});
