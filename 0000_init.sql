CREATE TABLE `clients` (
	`id` text PRIMARY KEY NOT NULL,
	`client_name` text NOT NULL,
	`brand_type` text DEFAULT '' NOT NULL,
	`audience` text DEFAULT '' NOT NULL,
	`notes` text DEFAULT '{}' NOT NULL,
	`done_sections` text DEFAULT '{}' NOT NULL,
	`settings` text DEFAULT '{}' NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
