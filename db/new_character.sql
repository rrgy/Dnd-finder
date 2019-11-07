insert into characters(
    name, level, hp, strength, dex, con, intellect, wis, cha, spells, actions, bio, user_id
) values (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
);