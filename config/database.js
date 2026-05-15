const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.POSTGRES_URL,
  ssl: (process.env.DATABASE_URL || process.env.POSTGRES_URL) ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

// Test connection
pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('❌ Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
