# AWS for Developers - Complete Guide

## Table of Contents
1. [Introduction to AWS](#introduction-to-aws)
2. [IAM (Identity and Access Management)](#iam)
3. [EC2 (Elastic Compute Cloud)](#ec2)
4. [S3 (Simple Storage Service)](#s3)
5. [RDS (Relational Database Service)](#rds)
6. [Lambda](#lambda)
7. [API Gateway](#api-gateway)
8. [CloudFront](#cloudfront)
9. [Elastic Beanstalk](#elastic-beanstalk)
10. [Best Practices](#best-practices)

---

## Introduction to AWS

Amazon Web Services (AWS) is a comprehensive cloud computing platform providing on-demand computing resources and services.

### Why AWS?
- **Scalability** - Scale resources up or down
- **Cost-Effective** - Pay only for what you use
- **Global Infrastructure** - Data centers worldwide
- **Reliability** - 99.99% uptime SLA
- **Security** - Industry-leading security
- **Wide Service Portfolio** - 200+ services

### Key Concepts

**Regions and Availability Zones:**
- **Region:** Geographic location (e.g., us-east-1, eu-west-1)
- **Availability Zone (AZ):** Isolated data center within a region
- **Edge Location:** CDN endpoints for CloudFront

**Pricing Model:**
- Pay-as-you-go
- Reserved instances (discounts for commitment)
- Spot instances (bid for unused capacity)
- Free tier (limited free usage for 12 months)

---

## IAM (Identity and Access Management)

IAM manages access to AWS services securely.

### Core Concepts

**Users:**
- Individual accounts for people
- Credentials: username/password, access keys

**Groups:**
- Collection of users
- Simplified permission management

**Roles:**
- Temporary permissions for services/users
- No credentials stored

**Policies:**
- JSON documents defining permissions
- Attached to users, groups, or roles

### IAM Best Practices

```json
// Sample IAM Policy (JSON)
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```

**Security Best Practices:**
1. Enable MFA for root account
2. Create individual IAM users
3. Use groups for permission management
4. Grant least privilege
5. Rotate credentials regularly
6. Use roles for applications

---

## EC2 (Elastic Compute Cloud)

EC2 provides resizable compute capacity (virtual servers) in the cloud.

### Instance Types

**General Purpose:** Balanced CPU, memory, networking
- t2.micro, t3.medium, m5.large

**Compute Optimized:** High-performance processors
- c5.large, c5.xlarge

**Memory Optimized:** Fast performance for memory-intensive workloads
- r5.large, x1e.xlarge

**Storage Optimized:** High sequential read/write access
- i3.large, d2.xlarge

### Launching an EC2 Instance

**Step 1: Choose AMI (Amazon Machine Image)**
```
- Amazon Linux 2
- Ubuntu Server 20.04
- Windows Server 2019
- Custom AMIs
```

**Step 2: Choose Instance Type**
```
t2.micro (Free tier eligible)
- 1 vCPU
- 1 GB RAM
- EBS storage
```

**Step 3: Configure Instance**
```
- Number of instances
- Network (VPC)
- Subnet
- Auto-assign Public IP
- IAM role
```

**Step 4: Add Storage**
```
- Root volume (8-30 GB)
- Additional EBS volumes
- Instance store (ephemeral)
```

**Step 5: Add Tags**
```
Key: Name, Value: MyWebServer
Key: Environment, Value: Production
```

**Step 6: Configure Security Group**
```
Type: SSH, Port: 22, Source: My IP
Type: HTTP, Port: 80, Source: 0.0.0.0/0
Type: HTTPS, Port: 443, Source: 0.0.0.0/0
```

**Step 7: Launch and Create Key Pair**
```
Download .pem file (keep secure!)
```

### Connecting to EC2

```bash
# SSH into instance (Linux/Mac)
chmod 400 my-key.pem
ssh -i my-key.pem ec2-user@<public-ip-address>

# Windows (using PuTTY)
# Convert .pem to .ppk using PuTTYgen
# Use PuTTY to connect
```

### Deploying Node.js App on EC2

```bash
# Update system
sudo yum update -y  # Amazon Linux
# or
sudo apt update && sudo apt upgrade -y  # Ubuntu

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Install Git
sudo yum install git -y

# Clone your repository
git clone https://github.com/username/repo.git
cd repo

# Install dependencies
npm install

# Install PM2 (process manager)
sudo npm install -g pm2

# Start application
pm2 start app.js
pm2 startup  # Enable auto-start on reboot
pm2 save

# Set up Nginx as reverse proxy
sudo amazon-linux-extras install nginx1 -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Configure Nginx
sudo nano /etc/nginx/conf.d/app.conf
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## S3 (Simple Storage Service)

S3 is object storage for the cloud - store and retrieve any amount of data.

### Key Concepts

**Buckets:**
- Containers for objects
- Globally unique names
- Region-specific

**Objects:**
- Files stored in buckets
- Key (filename) + Value (data)
- Metadata and version ID

**Storage Classes:**
- Standard (frequently accessed)
- Intelligent-Tiering (automatic cost optimization)
- Standard-IA (infrequent access)
- Glacier (archival)

### Creating and Using S3

**AWS CLI Commands:**
```bash
# Create bucket
aws s3 mb s3://my-unique-bucket-name

# Upload file
aws s3 cp myfile.txt s3://my-bucket/

# Download file
aws s3 cp s3://my-bucket/myfile.txt ./

# List objects
aws s3 ls s3://my-bucket/

# Sync directory
aws s3 sync ./local-folder s3://my-bucket/folder/

# Delete object
aws s3 rm s3://my-bucket/myfile.txt

# Delete bucket
aws s3 rb s3://my-bucket --force
```

### S3 with Node.js (AWS SDK)

```javascript
const AWS = require('aws-sdk');

// Configure AWS
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1'
});

const s3 = new AWS.S3();

// Upload file
async function uploadFile(fileName, fileContent) {
    const params = {
        Bucket: 'my-bucket',
        Key: fileName,
        Body: fileContent,
        ContentType: 'image/jpeg',
        ACL: 'public-read' // or 'private'
    };
    
    try {
        const data = await s3.upload(params).promise();
        console.log('File uploaded successfully:', data.Location);
        return data.Location;
    } catch (err) {
        console.error('Error uploading file:', err);
        throw err;
    }
}

// Download file
async function getFile(fileName) {
    const params = {
        Bucket: 'my-bucket',
        Key: fileName
    };
    
    try {
        const data = await s3.getObject(params).promise();
        return data.Body;
    } catch (err) {
        console.error('Error getting file:', err);
        throw err;
    }
}

// Delete file
async function deleteFile(fileName) {
    const params = {
        Bucket: 'my-bucket',
        Key: fileName
    };
    
    try {
        await s3.deleteObject(params).promise();
        console.log('File deleted successfully');
    } catch (err) {
        console.error('Error deleting file:', err);
        throw err;
    }
}

// Generate presigned URL (temporary access)
function getPresignedUrl(fileName) {
    const params = {
        Bucket: 'my-bucket',
        Key: fileName,
        Expires: 3600 // URL expires in 1 hour
    };
    
    return s3.getSignedUrl('getObject', params);
}
```

### Hosting Static Website on S3

1. Create S3 bucket
2. Enable static website hosting
3. Upload website files
4. Set bucket policy for public access
5. Access via S3 website endpoint

**Bucket Policy for Public Read:**
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::my-bucket/*"
        }
    ]
}
```

---

## RDS (Relational Database Service)

Managed relational database service supporting multiple engines.

### Supported Database Engines
- MySQL
- PostgreSQL
- MariaDB
- Oracle
- SQL Server
- Amazon Aurora (MySQL/PostgreSQL compatible)

### Creating RDS Instance

**Key Configurations:**
```
DB Engine: MySQL 8.0
Template: Free tier / Production
Instance: db.t2.micro (free tier)
Storage: 20 GB General Purpose SSD
Backup: Automated backups (7-35 days)
Multi-AZ: No (free tier) / Yes (production)
Public Access: No (recommended)
VPC Security Group: Allow port 3306 from app servers
```

### Connecting to RDS

**Node.js with MySQL:**
```javascript
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'mydb.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: process.env.DB_PASSWORD,
    database: 'myapp',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Query example
async function getUsers() {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    } catch (err) {
        console.error('Database error:', err);
        throw err;
    }
}
```

**Best Practices:**
- Use security groups to restrict access
- Enable encryption at rest
- Enable automated backups
- Use read replicas for scaling
- Monitor with CloudWatch
- Use parameter groups for optimization

---

## Lambda

Serverless compute service - run code without managing servers.

### Key Concepts
- **Event-driven** - Triggered by events
- **Stateless** - No persistent state
- **Auto-scaling** - Scales automatically
- **Pay per execution** - Only pay when code runs

### Creating Lambda Function

**Node.js Lambda Example:**
```javascript
// index.js
exports.handler = async (event, context) => {
    console.log('Event:', JSON.stringify(event));
    
    // Your logic here
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            input: event
        })
    };
    
    return response;
};
```

### Lambda with API Gateway

```javascript
// CRUD Lambda example
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { httpMethod, path, body } = event;
    
    try {
        switch (httpMethod) {
            case 'GET':
                return await getItems();
            case 'POST':
                return await createItem(JSON.parse(body));
            case 'PUT':
                return await updateItem(JSON.parse(body));
            case 'DELETE':
                return await deleteItem(event.pathParameters.id);
            default:
                return {
                    statusCode: 400,
                    body: JSON.stringify({ error: 'Invalid method' })
                };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};

async function getItems() {
    const params = {
        TableName: 'MyTable'
    };
    const data = await dynamodb.scan(params).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(data.Items)
    };
}
```

### Lambda Triggers
- API Gateway (HTTP requests)
- S3 (file uploads)
- DynamoDB Streams (database changes)
- CloudWatch Events (scheduled tasks)
- SNS/SQS (messages)

---

## API Gateway

Create, publish, and manage APIs at any scale.

### Features
- RESTful APIs
- WebSocket APIs
- Request/response transformation
- API keys and usage plans
- Throttling and caching
- CORS support

### Creating REST API

**Steps:**
1. Create API
2. Create resources (/users, /posts)
3. Create methods (GET, POST, PUT, DELETE)
4. Integrate with Lambda/HTTP endpoint
5. Deploy to stage (dev, prod)
6. Get invoke URL

**Example API Structure:**
```
/users
  GET    - List users (Lambda: getUsers)
  POST   - Create user (Lambda: createUser)
  
/users/{id}
  GET    - Get user (Lambda: getUser)
  PUT    - Update user (Lambda: updateUser)
  DELETE - Delete user (Lambda: deleteUser)
```

---

## CloudFront

Content Delivery Network (CDN) for fast content delivery.

### Benefits
- Low latency
- High transfer speeds
- DDoS protection
- SSL/TLS encryption
- Custom domain support

### Use Cases
- Serve static website (S3 + CloudFront)
- Cache API responses
- Stream video content
- Distribute software downloads

### Setting Up CloudFront

**For S3 Static Website:**
1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Configure cache behaviors
4. Set up SSL certificate (ACM)
5. Update DNS (Route 53 or your provider)

---

## Elastic Beanstalk

PaaS for deploying and scaling web applications.

### Supported Platforms
- Node.js
- Python
- Java
- Ruby
- PHP
- .NET
- Go
- Docker

### Deploying Node.js App

```bash
# Install EB CLI
pip install awsebcli

# Initialize application
eb init

# Create environment
eb create production-env

# Deploy
eb deploy

# Open in browser
eb open

# View logs
eb logs

# SSH into instance
eb ssh

# Terminate environment
eb terminate production-env
```

### Configuration

**`.ebextensions/nodecommand.config`:**
```yaml
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
    NodeVersion: 18.x
  aws:elasticbeanstalk:application:environment:
    PORT: 8080
    NODE_ENV: production
```

---

## Best Practices

### Security
1. **Enable MFA** on root account
2. **Use IAM roles** instead of access keys
3. **Encrypt data** at rest and in transit
4. **Use VPC** for network isolation
5. **Regular security audits** with AWS Trusted Advisor

### Cost Optimization
1. **Use free tier** for learning/testing
2. **Right-size instances** - don't over-provision
3. **Use reserved instances** for predictable workloads
4. **Set up billing alerts**
5. **Delete unused resources**

### Performance
1. **Use CloudFront** for static content
2. **Enable caching** where appropriate
3. **Use Auto Scaling** for variable loads
4. **Choose regions** close to users
5. **Use ElastiCache** for database caching

### Reliability
1. **Multi-AZ deployments** for high availability
2. **Automated backups** for databases
3. **Health checks** for instances
4. **CloudWatch monitoring** and alarms
5. **Regular disaster recovery testing**

---

## Common AWS Services Quick Reference

| Service | Purpose | Use Case |
|---------|---------|----------|
| EC2 | Virtual servers | Host applications |
| S3 | Object storage | Store files, host static sites |
| RDS | Managed databases | MySQL, PostgreSQL |
| Lambda | Serverless compute | Event-driven functions |
| API Gateway | API management | REST/WebSocket APIs |
| CloudFront | CDN | Fast content delivery |
| DynamoDB | NoSQL database | High-performance apps |
| ElastiCache | In-memory cache | Redis, Memcached |
| Route 53 | DNS service | Domain management |
| CloudWatch | Monitoring | Logs, metrics, alarms |
| SNS | Notifications | Push notifications, emails |
| SQS | Message queue | Decouple applications |
| Elastic Beanstalk | PaaS | Easy deployment |
| ECS/EKS | Container orchestration | Docker containers |

---

**Next Steps:**
- Review [Interview Questions](./interview-questions.md)
- Practice with [AWS Free Tier](https://aws.amazon.com/free/)
- Check the [Cheatsheet](./cheatsheet.md)
- Get [AWS Certified Cloud Practitioner](https://aws.amazon.com/certification/certified-cloud-practitioner/)

