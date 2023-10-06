
/* 
    **ERD**
players (id, name, position, nationality)
    |
    | one-to-many
    v
Games played (id, player id, minutes played)
    |
    | one-to-many
    v
Goals (id, player id, game id)
    |
    | one-to-many
    v
Assits (id, player id, game id)


    **DB schema**

    -players (id SERIAL PRIMARY KEY, name VARCHAR(255), position VARCHAR(255), nationality VARCHAR(255)
    -games_played (id SERIAL PRIMARY KEY, player_id INTEGER REFERENCES players(id), games_count INTEGER)
    -goals (id SERIAL PRIMARY KEY, player_id INTEGER REFERENCES players(id), game_id INTEGER REFERENCES games_played(id))
    -assists (id SERIAL PRIMARY KEY, player_id INTEGER REFERENCES players(id), game_id INTEGER REFERENCES games_played(id))


/* First table: identifying and storing players information. 
There's 4 columns that displays a player's ID (primary key), his name, his position and his nationality. 
*/
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50),
    nationality VARCHAR(100)
);

/* Second table: Tracks number of games a player has played. The 3 columns are for the ID, 
the player's Id that uses a foreign key to reference players and the last column is a 
column that represents the total number of games played by
*/
CREATE TABLE games_played (
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES players(id),
    games_count INTEGER,
);

/* Third table: tells how many goals a player has scored in each game. The 3 columns are for the ID, 
the player's Id that uses a foreign key to reference players and the last column is 
the game_id that references the 'games_played' */
CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES players(id),
    game_id INTEGER REFERENCES games_played(id),
    
);

/* Fourth table: tells how many goals a player has scored in each game. The 3 columns are for the ID, 
the player's Id that uses a foreign key to reference players and the last column is 
the game_id that references the 'games_played'  */
CREATE TABLE assists (
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES players(id),
    game_id INTEGER REFERENCES games_played(id),

);
