import { pgTable, varchar, timestamp, integer } from "drizzle-orm/pg-core";

export const subscriptionTable = pgTable("subscription", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  key: varchar({ length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  expiredAt: timestamp("expired_at", { withTimezone: true }).notNull(),
});
