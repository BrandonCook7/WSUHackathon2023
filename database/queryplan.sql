-- Get all languages
SELECT * FROM programming_language;

-- Get all categories for a language 
SELECT categories.category_id, parent_library_id, categories.category_name, has_completed.sections_completed
FROM categories, has_completed, user_table, categories
WHERE categories.category_id = has_completed.category_id
AND has_completed.user_Id = user_table.user_id
AND categories.parent_library_id = ${language_id_user_is_trying_to_access} 
AND user_table.user_id = ${user_id_from_application}

-- Get all questions for a language's category
SELECT questions.question_id, questions.question_data
FROM categories, questions
WHERE questions.parent_category_id = categories.category_id
AND categories.category_id = ${category_id_the_user_is_trying_to_access}

-- Write completed category to a User's account (write to 'has_completed' table)
UPDATE has_completed
SET sections_completed = ${categories_completed}
WHERE user_id = ${user_id_of_user}; 
AND category_id = ${current_category}

-- Create user with user credentials -> HANDLED THROUGH SUPABASE

-- Sign in user with credientials -> HANDLED THROUGH SUPABASE