const pool = require('../config/database');

class Camera {
  static async create({ userId, name, ip, port, username, password, streamLink }) {
    const query = `
      INSERT INTO cameras (user_id, name, ip, port, username, password, stream_link, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
      RETURNING *
    `;
    const values = [userId, name, ip, port, username, password, streamLink];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findByUserId(userId) {
    const query = `
      SELECT * FROM cameras 
      WHERE user_id = $1 
      ORDER BY created_at DESC
    `;
    const result = await pool.query(query, [userId]);
    return result.rows;
  }
}

module.exports = Camera;
