-- Create cameras table
CREATE TABLE IF NOT EXISTS cameras (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(100),
    ip VARCHAR(50),
    port VARCHAR(10) DEFAULT '8000',
    username VARCHAR(100),
    password VARCHAR(100),
    stream_link TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE INDEX on user_id
CREATE INDEX IF NOT EXISTS idx_cameras_user_id ON cameras(user_id);
