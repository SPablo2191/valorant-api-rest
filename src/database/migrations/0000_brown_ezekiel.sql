CREATE TABLE `agents` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`uuid` varchar(256),
	`displayName` text,
	`displayIcon` varchar(256),
	`user_id` int NOT NULL,
	CONSTRAINT `agents_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text,
	`lastName` text,
	`email` varchar(256),
	`password` varchar(256),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
