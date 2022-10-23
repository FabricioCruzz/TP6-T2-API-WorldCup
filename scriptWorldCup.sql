\c worldcup;

CREATE TABLE IF NOT EXISTS match (
  	id int primary key,
	home varchar(20) not null,
	visitor varchar(20) not null,
	match_date date not null
);