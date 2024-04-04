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

export const image = sqliteTable("image", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  url: text("url").notNull(),
  phone: text("phone").notNull(),
  name: text("name"),
  timestamp: integer("timestamp", { mode: "timestamp" })
    .notNull()
    .default(sql`(strftime('%s', 'now'))`),
});

export const menuItemImages = sqliteTable(
  "menu_item_images",
  {
    menuItem: integer("menuItem").notNull(),
    image: integer("image").notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.menuItem, t.image] }),
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

export const menuItemImagesRelations = relations(menuItemImages, ({ one }) => ({
  image: one(image, {
    fields: [menuItemImages.image],
    references: [image.id],
  }),
  menuItem: one(menuItem, {
    fields: [menuItemImages.menuItem],
    references: [menuItem.id],
  }),
}));

export const menuItemRelations = relations(menuItem, ({ one, many }) => ({
  user: one(user, {
    fields: [menuItem.phone],
    references: [user.phone],
  }),
  images: many(menuItemImages),
}));
