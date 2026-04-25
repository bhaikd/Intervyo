import mongoose from "mongoose";
import dotenv from "dotenv";
import Blog from "../models/Blog.model.js";
import User from "../models/User.model.js";

dotenv.config();

const blogs = [
  {
    title: "How to Ace Your First AI Mock Interview: 7 Tips for Success",
    slug: "ace-your-first-ai-mock-interview",
    excerpt: "Discover the best strategies to master AI-powered interviews. Learn how Intervyo.xyz can help you land your dream job.",
    content: `The job market is changing fast. Today, many companies are using artificial intelligence to screen candidates before they ever talk to a human recruiter. Whether it’s a recorded video response or a real-time conversation with a bot, the AI mock interview has become a critical step in the hiring process.

But how do you impress an algorithm? Unlike human recruiters, AI looks for specific patterns in your speech, tone, and body language. If you want to stand out, you need to prepare differently.

In this guide, we’ll walk you through the exact steps to master your first AI mock interview and how tools like Intervyo.xyz can give you the winning edge.

1. Master Your Environment
Your background and lighting matter more than you think. AI systems often analyze "visual noise." A cluttered background can distract the AI (and the human who eventually reviews the footage).
Pro Tip: Use a neutral background and ensure your face is well-lit from the front. Avoid backlighting from windows.
Check: Is your camera at eye level? This builds a better visual connection.

2. Perfect Your Body Language
AI algorithms often track eye contact and facial expressions to gauge confidence and engagement. 
Look at the Camera, Not the Screen: Looking at the camera lens simulates eye contact.
Smile Naturally: A warm smile at the beginning and end of your answer signals positivity.
Practice with Intervyo: You can try AI mock interviews on Intervyo to see how your body language holds up under pressure.

3. Focus on Keywords (But Stay Natural)
Just like an ATS (Applicant Tracking System) scans your resume, AI interviewers listen for relevant keywords.
Scenario: If you are applying for a Project Manager role, ensure you mention terms like "stakeholder management," "Agile," and "KPIs."
The Balance: Don't just list keywords. Weave them into your stories naturally using the STAR Method (Situation, Task, Action, Result).

4. Eliminate Verbal Fillers
"Um," "uh," and "like" can lower your clarity score in an automated assessment. AI is designed to measure communication fluency.
Actionable Tip: Take a breath before you start speaking. Pausing is better than filling the silence with noise.
Simulator Benefit: Use Intervyo’s interview simulator to get real-time feedback on your speech patterns and filler word usage.

5. Be Concise and Structured
AI interviews often have strict time limits per question (e.g., 2 minutes). If you ramble, you might get cut off before you reach the most important part of your answer.
Structure: Aim for a 90-second answer. 

6. Treat it Like a Real Conversation
It’s easy to feel robotic when talking to a computer. However, the best results come from candidates who remain personable. Imagine there is a person behind the camera lens.

7. Review and Iterate
The biggest advantage of an AI mock interview is the ability to watch yourself back. You’ll notice things you didn't realize you were doing—like touching your face or speaking too fast.

Real-World Example: The "Tell Me About Yourself" Question
Most AI interviews start here. A candidate who simply lists their resume will rank lower than one who tells a compelling story.
Bad Example: "I've been a developer for 5 years. I know React and Node."
Good Example: "Over the last 5 years, I've focused on building scalable web applications. My passion for AI led me to develop tools that increase productivity by 30%, much like the innovation happening at Intervyo."

FAQ: Frequently Asked Questions
What is an AI mock interview?
An AI mock interview is a practice session where an artificial intelligence system acts as the interviewer. It asks questions, records your responses, and provides data-driven feedback on your performance.

Does AI judge my personality?
AI doesn't have "feelings," but it can detect behavioral traits through your choice of words, tone of voice, and facial expressions.

How can I practice for an AI interview for free?
You can start by recording yourself on your phone, but for professional feedback, using a dedicated tool is better. Practice this using Intervyo’s interview simulator to get the most accurate insights.

Summary: Ready to Level Up?
Preparing for the future of hiring doesn't have to be scary. With the right tools and mindset, you can turn the AI interview into your secret advantage.

Start practicing today: Go to Intervyo.xyz and take your first AI-powered mock interview.`,
    tags: ["AI Interview", "Career", "Mock Interview", "Job Hunt"],
    status: "published",
    featured: true,
    publishedAt: new Date(),
  },
  {
    title: "Cracking the FAANG Interview: A 3-Month Roadmap",
    slug: "faang-roadmap",
    excerpt: "A comprehensive guide on Data Structures, Algorithms, and behavioral preparation for top tech companies.",
    content: "Content for FAANG roadmap...",
    tags: ["Interview Prep", "Career", "FAANG"],
    status: "published",
    featured: true,
    publishedAt: new Date(),
  },
  {
    title: "10 React Performance Optimization Techniques",
    slug: "react-performance",
    excerpt: "Boost your web app speed using useMemo, useCallback, and dynamic imports in React.",
    content: "Content for React performance...",
    tags: ["React", "Frontend", "Optimization"],
    status: "published",
    featured: false,
    publishedAt: new Date(),
  }
];

const seedBlogs = async () => {
  try {
    const mongoURI = process.env.MONGODB_URL || "mongodb://localhost:27017/intervyo";
    await mongoose.connect(mongoURI);

    console.log("Connected to MongoDB for seeding...");

    // Find a user to be the author
    let author = await User.findOne({ email: "admin@intervyo.xyz" });
    
    if (!author) {
      author = await User.findOne({});
    }

    if (!author) {
      console.log("No user found in database. Creating a system user...");
      author = new User({
        name: "Intervyo Team",
        email: "team@intervyo.xyz",
        password: "system_password_123", // Will be hashed by pre-save hook
        isVerified: true,
        authProvider: "local"
      });
      await author.save();
    }

    console.log(`Using author: ${author.name} (${author._id})`);

    // Prepare blogs with author ID
    const blogsWithAuthor = blogs.map(blog => ({
      ...blog,
      author: author._id
    }));

    // Clear existing blogs (optional - set to false if you want to keep them)
    const clearExisting = true;
    if (clearExisting) {
      await Blog.deleteMany({});
      console.log("Cleared existing blogs.");
    }

    await Blog.insertMany(blogsWithAuthor);

    console.log("✅ Blog posts seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedBlogs();
