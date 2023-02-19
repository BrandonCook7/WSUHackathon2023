CREATE TABLE IF NOT EXISTS programming_language (
    langauge_id bigint GENERATED BY DEFAULT AS IDENTITY,
    language_name char(256),
    language_description text,
    
    PRIMARY KEY (langauge_id)
);

CREATE TABLE IF NOT EXISTS user_table (
    user_id uuid not null references auth.users on delete cascade,
    email char(128),

    PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS categories (
    category_order bigint,
    parent_library_id bigint,
    category_name char(256),

    FOREIGN KEY (parent_library_id) REFERENCES programming_language(langauge_id) ON DELETE CASCADE,
    PRIMARY KEY (category_order, parent_library_id) 
);

CREATE TABLE IF NOT EXISTS questions (
    question_id bigint GENERATED BY DEFAULT AS IDENTITY,
    parent_category_order bigint,
    parent_library_id bigint,
    question_data_json text,

    FOREIGN KEY (parent_category_order, parent_library_id) REFERENCES categories(category_order, parent_library_id) ON DELETE CASCADE,
    PRIMARY KEY (question_id, parent_category_order)
);

CREATE TABLE IF NOT EXISTS has_completed (
    user_id uuid,
    category_order bigint,
    parent_library_id bigint,
    sections_completed bigint DEFAULT 0,

    FOREIGN KEY (category_order, parent_library_id) REFERENCES categories(category_order, parent_library_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user_table(user_id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, category_order)
);

CREATE TABLE IF NOT EXISTS user_ratings (
    user_id uuid,
    category_order bigint,
    parent_library_id bigint,
    rating bigint,

    FOREIGN KEY (category_order, parent_library_id) REFERENCES categories(category_order, parent_library_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES user_table(user_id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, category_order)
);

-- inserts a row into public.profiles
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into user_table (user_id)
  values (new.id);
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();


-- inserts new rows into has_completed on new user
create or replace function set_default_values_in_has_completed()
returns trigger
language plpgsql
security definer set search_path = public
as $$
DECLARE
    c record;
    category_order bigint;
    parent_library_id bigint;
begin
  FOR c IN SELECT category_order, parent_library_id FROM categories
	LOOP
        insert into has_completed (user_id, category_order, parent_library_id)
        values (new.id, c.category_order, c.parent_category_order);
	END LOOP;
end;
$$;

-- trigger the function every time a new user is added to user_table
create trigger on_new_user_in_user_table
  after insert on user_table
  for each row execute procedure set_default_values_in_has_completed();