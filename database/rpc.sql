CREATE function get_categories_from_language_name(language_id_user_is_trying_to_access text) 
RETURNS text as $$
    SELECT categories.category_order, categories.category_name
    FROM categories, programming_language
    WHERE categories.parent_library_id = programming_language.langauge_id
    AND programming_language.language_name = 'TypeScript';
$$ language ;