import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const clients = sqliteTable("clients", {
  id: text("id").primaryKey(),
  clientName: text("client_name").notNull(),
  brandType: text("brand_type").notNull().default(""),
  audience: text("audience").notNull().default(""),
  // JSON-encoded blobs — keeps the schema simple while letting the UI evolve
  // notes: { [sectionId]: string }
  notes: text("notes").notNull().default("{}"),
  // doneSections: { home: string[], about: string[], offers: string[], socialproof: string[], blog: string[] }
  doneSections: text("done_sections").notNull().default("{}"),
  // settings: { aboutMode: 'personal'|'org', offerMode: 'services'|'pricing'|'catalog' }
  settings: text("settings").notNull().default("{}"),
  createdAt: integer("created_at").notNull(),
  updatedAt: integer("updated_at").notNull(),
});
