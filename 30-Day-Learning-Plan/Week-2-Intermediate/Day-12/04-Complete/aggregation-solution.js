/**
 * MongoDB Aggregation - Complete Solution
 */

const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
}, { timestamps: true });

// Activity Schema
const activitySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    action: String,
    timestamp: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Activity = mongoose.model('Activity', activitySchema);

// Top 5 Active Users Aggregation
async function getTop5ActiveUsers() {
    return await Activity.aggregate([
        // Match recent activities (last 30 days)
        {
            $match: {
                timestamp: {
                    $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                }
            }
        },
        // Group by user and count activities
        {
            $group: {
                _id: '$userId',
                activityCount: { $sum: 1 },
                lastActivity: { $max: '$timestamp' }
            }
        },
        // Sort by activity count (descending)
        {
            $sort: { activityCount: -1 }
        },
        // Limit to top 5
        {
            $limit: 5
        },
        // Lookup user details
        {
            $lookup: {
                from: 'users',
                localField: '_id',
                foreignField: '_id',
                as: 'user'
            }
        },
        // Unwind user array
        {
            $unwind: '$user'
        },
        // Project final shape
        {
            $project: {
                _id: 0,
                userId: '$_id',
                name: '$user.name',
                email: '$user.email',
                activityCount: 1,
                lastActivity: 1
            }
        }
    ]);
}

// Alternative: Using Mongoose populate
async function getTop5ActiveUsersV2() {
    const topUsers = await Activity.aggregate([
        {
            $match: {
                timestamp: {
                    $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                }
            }
        },
        {
            $group: {
                _id: '$userId',
                activityCount: { $sum: 1 }
            }
        },
        {
            $sort: { activityCount: -1 }
        },
        {
            $limit: 5
        }
    ]);
    
    const userIds = topUsers.map(u => u._id);
    const users = await User.find({ _id: { $in: userIds } });
    
    return topUsers.map(tu => ({
        ...tu,
        user: users.find(u => u._id.toString() === tu._id.toString())
    }));
}

module.exports = { getTop5ActiveUsers, getTop5ActiveUsersV2 };

/**
 * Usage Example:
 * 
 * app.get('/api/top-users', async (req, res) => {
 *   try {
 *     const topUsers = await getTop5ActiveUsers();
 *     res.json(topUsers);
 *   } catch (error) {
 *     res.status(500).json({ error: error.message });
 *   }
 * });
 */

