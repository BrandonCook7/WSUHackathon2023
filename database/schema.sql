CREATE TABLE IF NOT EXISTS programming_language (
    langauge_id bigint GENERATED BY DEFAULT AS IDENTITY,
    
    PRIMARY KEY (langauge_id)
);

CREATE TABLE IF NOT EXISTS user_table (
    user_id bigint GENERATED BY DEFAULT AS IDENTITY,

    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS categories (
    category_id bigint GENERATED BY DEFAULT AS IDENTITY,
    parent_library_id bigint,

    FOREIGN KEY (parent_library_id) REFERENCES programming_language(langauge_id),
    PRIMARY KEY (category_id, parent_library_id)
);

CREATE TABLE IF NOT EXISTS questions (
    question_id bigint GENERATED BY DEFAULT AS IDENTITY,
    parent_category_id bigint,
    question_data JSON,

    FOREIGN KEY (parent_category_id) REFERENCES categories(category_id),
    PRIMARY KEY (question_id, parent_category_id)
);

CREATE TABLE IF NOT EXISTS has_completed (
    user_id bigint,
    category_id bigint,
    sections_completed bigint,

    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (user_id) REFERENCES user_table(user_id),
    PRIMARY KEY (user_id, category_id)
);

CREATE TABLE IF NOT EXISTS user_ratings (
    user_id bigint,
    category_id bigint,
    rating bigint,

    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (user_id) REFERENCES user_table(user_id),
    PRIMARY KEY (user_id, category_id)
);