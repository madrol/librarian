create table if not exists author  (
authorId integer auto_increment primary key,
authorName varchar(50) not null,
nationality varchar(20),
birthDate date
)
engine=MyISAM;

