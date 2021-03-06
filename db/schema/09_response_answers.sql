DROP TABLE IF EXISTS response_answers CASCADE;
CREATE TABLE response_answers (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_response_id INTEGER NOT NULL REFERENCES quiz_responses(id) ON DELETE CASCADE,
  answer_id INTEGER NOT NULL REFERENCES question_options(id) ON DELETE CASCADE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);