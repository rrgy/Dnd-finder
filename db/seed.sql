create table users(
    id serial primary key,
    username varchar(20),
    password varchar(80),
    image text
);

create table characters(
    character_id serial,
    name varchar(50),
    level integer,
    hp integer,
    strength integer,
    dex integer,
    con integer,
    intellect integer,
    wis integer,
    cha integer,
    spells text,
    actions text,
    bio text,
    user_id integer references users(id)
);

create table posts(
    post_id serial primary key,
    title varchar(100),
    post_field text,
    author varchar(20),
    dm boolean
);

create table messages(
    messages_id serial,
    message text,
    post_id integer references posts(post_id),
    user_message text references users(username)
);

select * from users
join characters on users.id = characters.user_id;

select * from users
join posts on users.username = posts.author
