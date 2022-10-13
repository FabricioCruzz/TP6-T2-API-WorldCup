\c worldcup;

CREATE TABLE IF NOT EXISTS matchs (
  	id int primary key,
	home varchar(20),
	visitor varchar(20),
	matchDate date
);