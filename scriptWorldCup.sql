\c worldcup;

CREATE TABLE IF NOT EXISTS match (
  	id int primary key,
	home varchar(20) not null,
	visitor varchar(20) not null,
	score_home int not null,
	score_visitor int not null,
	match_date date not null
);