CREATE TABLE `agents` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`uuid` varchar(256),
	`displayName` text,
	`displayIcon` varchar(256),
	`user_id` serial AUTO_INCREMENT NOT NULL,
	CONSTRAINT `agents_id` PRIMARY KEY(`id`)
);
