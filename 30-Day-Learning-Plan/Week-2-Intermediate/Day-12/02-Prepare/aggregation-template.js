/**
 * MongoDB Aggregation Template
 * 
 * Task: Write aggregation for "Top 5 active users"
 * 
 * Requirements:
 * - Use aggregation pipeline
 * - $match, $group, $sort, $limit stages
 * - Calculate user activity
 * - Return top 5 users
 */

const mongoose = require('mongoose');

// TODO: Define User and Activity schemas
// const userSchema = new mongoose.Schema({...});
// const activitySchema = new mongoose.Schema({...});

// TODO: Write aggregation query
async function getTop5ActiveUsers() {
    // TODO: Use aggregation pipeline
    // $match - filter activities
    // $group - group by user, count activities
    // $sort - sort by activity count
    // $limit - get top 5
    // $lookup - join with users collection
}

module.exports = { getTop5ActiveUsers };

