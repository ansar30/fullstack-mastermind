# AI Basics for Developers - Complete Guide

## Table of Contents
1. [Introduction to AI](#introduction-to-ai)
2. [Machine Learning Fundamentals](#machine-learning-fundamentals)
3. [AI APIs for Developers](#ai-apis-for-developers)
4. [Integrating AI in Web Applications](#integrating-ai-in-web-applications)
5. [Prompt Engineering](#prompt-engineering)
6. [Practical AI Projects](#practical-ai-projects)
7. [Ethics and Best Practices](#ethics-and-best-practices)

---

## Introduction to AI

Artificial Intelligence (AI) is the simulation of human intelligence by machines, especially computer systems.

### Key Concepts

**Artificial Intelligence (AI):**
- Broad field of computer science
- Systems that can perform tasks requiring human intelligence
- Includes ML, NLP, computer vision, robotics

**Machine Learning (ML):**
- Subset of AI
- Algorithms that learn from data
- Improve performance without explicit programming

**Deep Learning:**
- Subset of ML
- Neural networks with multiple layers
- Excels at image, speech, and text processing

**Natural Language Processing (NLP):**
- Understanding and generating human language
- Chatbots, translation, sentiment analysis

**Computer Vision:**
- Interpret and understand visual information
- Image recognition, object detection, facial recognition

### AI vs Traditional Programming

**Traditional Programming:**
```
Input + Rules → Output
Example: If age >= 18, then "Adult" else "Minor"
```

**Machine Learning:**
```
Input + Output → Rules (Model)
Example: Train model with age+label data to learn the rule
```

---

## Machine Learning Fundamentals

### Types of Machine Learning

**1. Supervised Learning**
- Labeled training data
- Learn mapping from input to output
- Examples: Classification, Regression

```python
# Example: Predicting house prices
Input: Square footage, bedrooms, location
Output: Price

# The model learns from historical data
Training Data: {(1500 sq ft, 3 bed, NYC) → $500k}
```

**2. Unsupervised Learning**
- Unlabeled data
- Find patterns and structure
- Examples: Clustering, Dimensionality reduction

```python
# Example: Customer segmentation
Input: Customer purchase history
Output: Customer groups with similar behavior
```

**3. Reinforcement Learning**
- Learn through trial and error
- Reward-based feedback
- Examples: Game playing, robotics

### Common ML Algorithms

**Classification:**
- Decision Trees
- Random Forest
- Support Vector Machines (SVM)
- Neural Networks

**Regression:**
- Linear Regression
- Polynomial Regression
- Ridge/Lasso Regression

**Clustering:**
- K-Means
- Hierarchical Clustering
- DBSCAN

---

## AI APIs for Developers

### OpenAI API

OpenAI provides powerful AI models through a simple API.

**Setup:**
```bash
npm install openai
```

**Basic Usage:**
```javascript
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

// Text generation (GPT)
async function generateText(prompt) {
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 150,
            temperature: 0.7
        });
        
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Chat completion (ChatGPT)
async function chat(messages) {
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: messages,
            temperature: 0.7,
            max_tokens: 500
        });
        
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Usage
const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Explain React hooks in simple terms.' }
];

const reply = await chat(messages);
console.log(reply);
```

**Image Generation (DALL-E):**
```javascript
async function generateImage(prompt) {
    try {
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: '512x512'
        });
        
        return response.data.data[0].url;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Usage
const imageUrl = await generateImage('A futuristic city at sunset');
console.log('Generated image:', imageUrl);
```

**Code Generation (Codex):**
```javascript
async function generateCode(description) {
    try {
        const response = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: `# ${description}\n`,
            max_tokens: 200,
            temperature: 0
        });
        
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Usage
const code = await generateCode('JavaScript function to validate email');
console.log(code);
```

### Google Cloud AI APIs

**Vision API - Image Analysis:**
```javascript
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
    keyFilename: 'path/to/credentials.json'
});

async function detectLabels(imagePath) {
    const [result] = await client.labelDetection(imagePath);
    const labels = result.labelAnnotations;
    
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
}

async function detectText(imagePath) {
    const [result] = await client.textDetection(imagePath);
    const detections = result.textAnnotations;
    console.log('Text:', detections[0].description);
}

async function detectFaces(imagePath) {
    const [result] = await client.faceDetection(imagePath);
    const faces = result.faceAnnotations;
    
    console.log(`Found ${faces.length} face(s)`);
    faces.forEach((face, i) => {
        console.log(`Face #${i + 1}:`);
        console.log(`  Joy: ${face.joyLikelihood}`);
        console.log(`  Anger: ${face.angerLikelihood}`);
    });
}
```

**Natural Language API:**
```javascript
const language = require('@google-cloud/language');

const client = new language.LanguageServiceClient();

async function analyzeSentiment(text) {
    const document = {
        content: text,
        type: 'PLAIN_TEXT'
    };
    
    const [result] = await client.analyzeSentiment({ document });
    const sentiment = result.documentSentiment;
    
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
    
    return sentiment;
}

async function extractEntities(text) {
    const document = {
        content: text,
        type: 'PLAIN_TEXT'
    };
    
    const [result] = await client.analyzeEntities({ document });
    const entities = result.entities;
    
    entities.forEach(entity => {
        console.log(`Entity: ${entity.name}`);
        console.log(`Type: ${entity.type}`);
        console.log(`Salience: ${entity.salience}`);
    });
}
```

### AWS AI Services

**Amazon Rekognition:**
```javascript
const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition({ region: 'us-east-1' });

async function detectLabels(imagePath) {
    const params = {
        Image: {
            S3Object: {
                Bucket: 'my-bucket',
                Name: imagePath
            }
        },
        MaxLabels: 10,
        MinConfidence: 75
    };
    
    try {
        const data = await rekognition.detectLabels(params).promise();
        return data.Labels;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function compareFaces(sourceImage, targetImage) {
    const params = {
        SourceImage: {
            S3Object: {
                Bucket: 'my-bucket',
                Name: sourceImage
            }
        },
        TargetImage: {
            S3Object: {
                Bucket: 'my-bucket',
                Name: targetImage
            }
        },
        SimilarityThreshold: 90
    };
    
    try {
        const data = await rekognition.compareFaces(params).promise();
        return data.FaceMatches;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
```

---

## Integrating AI in Web Applications

### Use Cases

**1. Chatbot Integration**
```javascript
// Simple chatbot with OpenAI
const express = require('express');
const app = express();

app.post('/api/chat', async (req, res) => {
    const { message, history } = req.body;
    
    const messages = [
        { role: 'system', content: 'You are a helpful customer support assistant.' },
        ...history,
        { role: 'user', content: message }
    ];
    
    try {
        const reply = await chat(messages);
        res.json({ reply });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
```

**2. Content Generation**
```javascript
// Blog post generator
async function generateBlogPost(topic, keywords) {
    const prompt = `Write a blog post about ${topic}. Include these keywords: ${keywords.join(', ')}`;
    
    const post = await generateText(prompt);
    return post;
}

// Product description generator
async function generateProductDescription(productName, features) {
    const prompt = `Write a compelling product description for ${productName}. Features: ${features.join(', ')}`;
    
    const description = await generateText(prompt);
    return description;
}
```

**3. Image Analysis**
```javascript
// Upload and analyze image
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/api/analyze-image', upload.single('image'), async (req, res) => {
    try {
        const labels = await detectLabels(req.file.path);
        const text = await detectText(req.file.path);
        
        res.json({
            labels,
            text,
            insights: `This image contains: ${labels.map(l => l.description).join(', ')}`
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
```

**4. Sentiment Analysis**
```javascript
// Analyze customer reviews
async function analyzeReviews(reviews) {
    const sentiments = await Promise.all(
        reviews.map(review => analyzeSentiment(review.text))
    );
    
    const avgScore = sentiments.reduce((sum, s) => sum + s.score, 0) / sentiments.length;
    
    return {
        overallSentiment: avgScore > 0 ? 'Positive' : avgScore < 0 ? 'Negative' : 'Neutral',
        score: avgScore,
        details: sentiments
    };
}
```

**5. Smart Search**
```javascript
// Semantic search using embeddings
async function semanticSearch(query, documents) {
    // Get embedding for query
    const queryEmbedding = await getEmbedding(query);
    
    // Compare with document embeddings
    const similarities = documents.map(doc => ({
        doc,
        similarity: cosineSimilarity(queryEmbedding, doc.embedding)
    }));
    
    // Sort by similarity
    return similarities
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 10);
}

function cosineSimilarity(a, b) {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
}
```

---

## Prompt Engineering

Crafting effective prompts to get better AI responses.

### Best Practices

**1. Be Specific and Clear**
```
❌ Bad: "Write about dogs"
✅ Good: "Write a 300-word article about the benefits of adopting rescue dogs, targeting first-time dog owners."
```

**2. Provide Context**
```
❌ Bad: "Explain this concept"
✅ Good: "Explain the concept of React hooks to a beginner who knows JavaScript basics but is new to React."
```

**3. Use Examples (Few-shot Learning)**
```
Prompt:
"Convert natural language to SQL queries.

Examples:
Input: Show all users
Output: SELECT * FROM users;

Input: Find users older than 25
Output: SELECT * FROM users WHERE age > 25;

Input: Count active users
Output:"
```

**4. Specify Format**
```
Prompt: "List 5 benefits of exercise. Format as JSON with 'benefit' and 'description' keys."

Expected output:
[
  { "benefit": "Improved Health", "description": "..." },
  ...
]
```

**5. Set the Role**
```
"You are an experienced React developer. Explain the useEffect hook and common pitfalls to avoid."
```

### Prompt Templates

**Code Review:**
```javascript
const codeReviewPrompt = (code, language) => `
Review this ${language} code and provide:
1. Code quality assessment
2. Potential bugs or issues
3. Performance improvements
4. Best practice recommendations

Code:
\`\`\`${language}
${code}
\`\`\`
`;
```

**Documentation Generator:**
```javascript
const docPrompt = (functionCode) => `
Generate comprehensive documentation for this function including:
- Description
- Parameters
- Return value
- Example usage

Function:
\`\`\`javascript
${functionCode}
\`\`\`
`;
```

**Test Generator:**
```javascript
const testPrompt = (code) => `
Generate unit tests for this function using Jest. Include:
- Test cases for normal inputs
- Edge cases
- Error cases

Code:
\`\`\`javascript
${code}
\`\`\`
`;
```

---

## Practical AI Projects

### Project 1: AI-Powered Chatbot

```javascript
// Simple chatbot with context
class Chatbot {
    constructor() {
        this.conversationHistory = [];
    }
    
    async sendMessage(userMessage) {
        this.conversationHistory.push({
            role: 'user',
            content: userMessage
        });
        
        const systemMessage = {
            role: 'system',
            content: 'You are a helpful assistant specialized in web development.'
        };
        
        const messages = [systemMessage, ...this.conversationHistory];
        
        const reply = await chat(messages);
        
        this.conversationHistory.push({
            role: 'assistant',
            content: reply
        });
        
        return reply;
    }
    
    clearHistory() {
        this.conversationHistory = [];
    }
}

// Usage
const bot = new Chatbot();
const reply1 = await bot.sendMessage('What is React?');
const reply2 = await bot.sendMessage('How do I use hooks?'); // Context-aware
```

### Project 2: Content Moderation System

```javascript
async function moderateContent(text) {
    // Check for inappropriate content
    const moderationResponse = await openai.createModeration({
        input: text
    });
    
    const results = moderationResponse.data.results[0];
    
    if (results.flagged) {
        return {
            approved: false,
            categories: Object.keys(results.categories).filter(
                key => results.categories[key]
            ),
            message: 'Content violates community guidelines'
        };
    }
    
    return {
        approved: true,
        message: 'Content approved'
    };
}

// Usage in API
app.post('/api/comments', async (req, res) => {
    const { text } = req.body;
    
    const moderation = await moderateContent(text);
    
    if (!moderation.approved) {
        return res.status(400).json({
            error: moderation.message,
            violatedCategories: moderation.categories
        });
    }
    
    // Save comment
    // ...
    
    res.json({ message: 'Comment posted successfully' });
});
```

### Project 3: Smart Email Responder

```javascript
async function generateEmailResponse(emailContent) {
    const prompt = `
    Generate a professional email response to the following email:
    
    ${emailContent}
    
    The response should:
    - Be polite and professional
    - Address all points mentioned
    - Be concise (2-3 paragraphs)
    `;
    
    const response = await generateText(prompt);
    return response;
}

async function categorizeEmail(emailContent) {
    const prompt = `
    Categorize this email into one of these categories:
    - Support Request
    - Sales Inquiry
    - Bug Report
    - Feature Request
    - General Question
    
    Email: ${emailContent}
    
    Category:`;
    
    const category = await generateText(prompt);
    return category.trim();
}
```

### Project 4: Code Assistant

```javascript
class CodeAssistant {
    async explainCode(code) {
        const prompt = `Explain what this code does in simple terms:\n\n${code}`;
        return await generateText(prompt);
    }
    
    async findBugs(code) {
        const prompt = `Identify potential bugs or issues in this code:\n\n${code}`;
        return await generateText(prompt);
    }
    
    async improveCode(code) {
        const prompt = `Suggest improvements for this code:\n\n${code}`;
        return await generateText(prompt);
    }
    
    async generateTests(code) {
        const prompt = `Generate Jest unit tests for this function:\n\n${code}`;
        return await generateText(prompt);
    }
}
```

---

## Ethics and Best Practices

### Ethical Considerations

**1. Bias and Fairness**
- AI models can inherit biases from training data
- Test for biases across different demographics
- Regularly audit AI decisions

**2. Privacy**
- Don't send sensitive user data to external APIs
- Use encryption for data in transit
- Comply with GDPR, CCPA, etc.
- Be transparent about data usage

**3. Transparency**
- Inform users when they're interacting with AI
- Explain how AI decisions are made
- Provide human alternatives

**4. Accountability**
- Have human oversight for critical decisions
- Maintain audit logs
- Have appeal processes

### Best Practices

**1. Cost Management**
```javascript
// Implement caching to reduce API calls
const cache = new Map();

async function getCachedResponse(prompt) {
    if (cache.has(prompt)) {
        return cache.get(prompt);
    }
    
    const response = await generateText(prompt);
    cache.set(prompt, response);
    
    return response;
}
```

**2. Error Handling**
```javascript
async function safeAICall(fn, fallback) {
    try {
        return await fn();
    } catch (error) {
        console.error('AI call failed:', error);
        return fallback || 'Sorry, I encountered an error. Please try again.';
    }
}
```

**3. Rate Limiting**
```javascript
const rateLimit = require('express-rate-limit');

const aiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: 'Too many AI requests, please try again later.'
});

app.use('/api/ai', aiLimiter);
```

**4. Input Validation**
```javascript
function validateInput(text) {
    if (!text || text.trim().length === 0) {
        throw new Error('Input cannot be empty');
    }
    
    if (text.length > 4000) {
        throw new Error('Input too long (max 4000 characters)');
    }
    
    return text.trim();
}
```

**5. Monitoring**
```javascript
async function monitoredAICall(operation, params) {
    const start = Date.now();
    
    try {
        const result = await operation(params);
        const duration = Date.now() - start;
        
        // Log metrics
        console.log({
            operation: operation.name,
            duration,
            success: true,
            timestamp: new Date()
        });
        
        return result;
    } catch (error) {
        const duration = Date.now() - start;
        
        console.error({
            operation: operation.name,
            duration,
            success: false,
            error: error.message,
            timestamp: new Date()
        });
        
        throw error;
    }
}
```

---

## Resources for Learning AI

### Online Courses
- Andrew Ng's Machine Learning (Coursera)
- Deep Learning Specialization (Coursera)
- Fast.ai Practical Deep Learning
- Google's Machine Learning Crash Course

### Tools and Libraries
- TensorFlow.js (ML in JavaScript)
- Brain.js (Neural networks in JS)
- ml5.js (Friendly ML for web)
- Hugging Face Transformers

### APIs to Explore
- OpenAI API
- Google Cloud AI
- AWS AI Services
- Microsoft Azure Cognitive Services
- Hugging Face API

---

**Next Steps:**
- Review [Advanced AI Topics](../advanced-ai/overview.md)
- Explore [AI for Developers](../ai-for-developers/overview.md)
- Build practical AI projects
- Stay updated with AI developments

**Remember:** AI is a tool to augment human capabilities, not replace them. Use responsibly! 🤖

