// data.js
// This file contains all the dynamic data for the portfolio.
// Update these arrays and objects to change the content on the website.

const portfolioData = {
    personalInfo: {
        name: "Srinivas Sunkara",
        title: "Computer Science Undergraduate | AI & ML Enthusiast",
        bio: "Motivated Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning with strong academic performance and hands-on project experience. Seeking a challenging role to utilize my programming and analytical skills and contribute to innovative technical projects.",
        email: "srinivas.sunkara.2006@gmail.com",
        phone: "+91 9618973589",
        github: "https://github.com/srinivas119",
        linkedin: "https://www.linkedin.com/in/srinivas-sunkara-409760310?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    
    // Coding Profiles
    codingProfiles: [
        { 
            platform: "LeetCode", 
            link: "https://leetcode.com/u/srinivas119/",
            stats: { "Java": 72, "MyYSQL": 3, "OracleSQL": 6 }
        },
        { 
            platform: "CodeChef", 
            link: "https://www.codechef.com/users/srinivas911",
            stats: { "Java": 80, "C": 25 }
        },
        { 
            platform: "GeeksforGeeks", 
            link: "https://www.geeksforgeeks.org/profile/srinivas119",
            stats: { "Java": 46 }
        }
    ],
    
    // Categorized Skills
    skills: {
        core: [
            { name: "C Programming", level: 70 },
            { name: "Java", level: 70 }
        ],
        web: [
            { name: "HTML & CSS", level: 75 }
        ],
        problemSolving: [
            { name: "Data Structures & Algorithms", level: 65 },
            { name: "SQL / DBMS", level: 60 }
        ],
        emerging: [
            { name: "Python", level: 50 },
            { name: "AI & Machine Learning", level: 55 }
        ]
    },

    // Dynamically updated projects array
    projects: [
        {
            title: "GrainPalette – Rice Type Classification",
            description: "Developed a deep learning–based system to classify different rice varieties. Applied AI/ML techniques for image-based classification and performed data preprocessing to improve model accuracy.",
            tags: ["Deep Learning", "Python", "AI/ML"],
            link: "https://github.com/srinivas119/grainpalette---a-deep-learning-odyssey-in-rice-type-classification"
        }
    ],

    workExperience: [
        {
            role: "Campus Ambassador",
            company: "Unstop",
            duration: "Oct 2025 - Feb 2026",
            description: "Actively contributing to the growth of Unstop as a Campus Ambassador, organizing events, and engaging with the student community."
        }
    ],

    education: [
        {
            degree: "B.Tech – Computer Science and Engineering",
            institution: "Aditya College of Engineering and Technology",
            year: "2023 - 2027",
            description: "CGPA: 8.41. Focusing on Artificial Intelligence, Machine Learning, and software engineering principles."
        },
        {
            degree: "Intermediate",
            institution: "Narayana Junior College",
            year: "2021 - 2023",
            description: "Pre-university education with a strong focus on mathematics and science."
        }
    ],

    badges: [
        { name: "Junior Cybersecurity Analyst Career Path", link: "https://www.credly.com/badges/77046552-322f-49d5-9b2e-f46f280312a7" },
        { name: "JavaScript Essentials 2", link: "https://www.credly.com/badges/e409f82c-8786-4008-aed2-a643d09f017b" },
        { name: "JavaScript Essentials 1", link: "https://www.credly.com/badges/bc607dc4-10cf-4a2c-9649-d77ed8ac0b02" },
        { name: "Operating System Basics", link: "https://www.credly.com/badges/d9b21612-bc86-495a-87d8-14390bc1f14f" },
        { name: "Ethical Hacker", link: "https://www.credly.com/badges/328b4617-80ff-466a-9cd5-163fd6c9d528" },
        { name: "Python Essentials 1", link: "https://www.credly.com/badges/8680b255-48d6-4ca2-9f0f-f9dbdafe5814" }
    ]
};
