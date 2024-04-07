import { relations, sql } from "drizzle-orm";
import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  phone: text("phone").notNull().primaryKey(),
  welcomeMessage: text("welcomeMessage"),
});

export const menuItem = sqliteTable("menu_item", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  phone: text("phone").notNull(),
  title: text("title").notNull(),
  reply: text("reply").notNull(),
});

export const file = sqliteTable("file", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  url: text("url").notNull(),
  phone: text("phone").notNull(),
  name: text("name"),
  type: text("type"),
  key: text("key").notNull(),
  timestamp: integer("timestamp", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});

export const menuItemFiles = sqliteTable(
  "menu_item_files",
  {
    menuItem: integer("menuItem").notNull(),
    file: integer("file").notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.menuItem, t.file] }),
  }),
);

export const interaction = sqliteTable("interaction", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("userId").notNull(),
  phone: text("phone").notNull(),
  type: text("type", { enum: ["init", "message"] }).notNull(),
  body: text("body"),
  timestamp: integer("timestamp", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});

export const userRelations = relations(user, ({ many }) => ({
  menuItems: many(menuItem),
}));

export const menuItemFilesRelations = relations(menuItemFiles, ({ one }) => ({
  file: one(file, {
    fields: [menuItemFiles.file],
    references: [file.id],
  }),
  menuItem: one(menuItem, {
    fields: [menuItemFiles.menuItem],
    references: [menuItem.id],
  }),
}));

export const menuItemRelations = relations(menuItem, ({ one, many }) => ({
  user: one(user, {
    fields: [menuItem.phone],
    references: [user.phone],
  }),
  files: many(menuItemFiles),
}));
