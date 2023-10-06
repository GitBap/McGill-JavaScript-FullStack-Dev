
/* CREATE TABLE statements */
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE users_comments (
    user_id INT NOT NULL,
    comment_id INT NOT NULL,
    PRIMARY KEY (user_id, comment_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (comment_id) REFERENCES comments(comment_id)
);

/* joins*/
SELECT users.username, comments.comment_text
FROM users
INNER JOIN comments ON users.user_id = comments.user_id;

SELECT users.username, comments.comment_text
FROM users
LEFT JOIN comments ON users.user_id = comments.user_id;

SELECT users.username, comments.comment_text
FROM users
RIGHT JOIN comments ON users.user_id = comments.user_id;

SELECT users.username, comments.comment_text
FROM users
FULL OUTER JOIN comments ON users.user_id = comments.user_id;
