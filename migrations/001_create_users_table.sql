-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE INDEX IF NOT EXISTS on email
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Seed a default user if none exists
INSERT INTO users (full_name, email, password, created_at, updated_at)
SELECT
    'Demo User' AS full_name,
    'test1@gmail.com' AS email,
    -- bcrypt hash for password 'Test@123'
    '$2b$10$gyaIpsIS1YQldLxRDRQcG.IOdVmYIxtOYWbYlQ4.zy4eQlFVA1gI6' AS password,
    NOW() AS created_at,
    NOW() AS updated_at
WHERE NOT EXISTS (
    SELECT 1 FROM users WHERE email = 'test1@gmail.com'
);
