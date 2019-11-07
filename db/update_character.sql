update characters
set name = $1, level = $2, hp = $3, strength = $4, dex = $5, con = $6, intellect = $7, wis = $8, cha = $9, spells = $10, actions = $11, bio = $12, user_id = $13
where character_id = $14