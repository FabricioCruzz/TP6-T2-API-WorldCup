\c worldcup;

CREATE TABLE IF NOT EXISTS match (
  	id int primary key,
	home varchar(20) not null,
	visitor varchar(20) not null,
	score_home int not null,
	score_visitor int not null,
	match_date date not null
);

INSERT INTO match (id, home, visitor, score_home, score_visitor, match_date) values (1, 'Brasil', 'Chile', 0, 0, '2022-11-05');
INSERT INTO match (id, home, visitor, score_home, score_visitor, match_date) values (2, 'Paraguai', 'Uruguai', 0, 0, '2022-11-06');
INSERT INTO match (id, home, visitor, score_home, score_visitor, match_date) values (3, 'Portugal', 'Espanha', 0, 0, '2022-11-05');
INSERT INTO match (id, home, visitor, score_home, score_visitor, match_date) values (4, 'França', 'Suíça', 0, 0, '2022-11-10');
INSERT INTO match (id, home, visitor, score_home, score_visitor, match_date) values (5, 'Suíça', 'Brasil', 0, 0, '2022-11-15');