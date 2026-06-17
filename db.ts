import { drizzle } from "drizzle-orm/d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { D1Database } from "@cloudflare/workers-types";
import * as schema from "./schema";

// Cached per-request so we don't re-create the drizzle instance unnecessarily.
export function getDb() {
  const { env } = getCloudflareContext();
  const DB = (env as unknown as { DB: D1Database }).DB;
  return drizzle(DB, { schema });
}
