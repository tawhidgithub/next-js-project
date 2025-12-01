"use client";

import { useState } from "react";

// SVG Icons as components
const Download = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CheckCircle2 = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Circle = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);

type Priority = "High" | "Medium" | "Low";
type Difficulty = "Easy" | "Medium" | "Hard";

interface Topic {
  name: string;
  resources: string;
  difficulty: Difficulty;
}

interface Category {
  category: string;
  priority: Priority;
  timeframe: string;
  topics: Topic[];
}

interface CompletedItems {
  [key: string]: boolean;
}

const SeniorDevRoadmap = () => {
  const [completedItems, setCompletedItems] = useState<CompletedItems>({});

  const roadmapData: Category[] = [
    {
      category: "Architecture & Design Patterns",
      priority: "High",
      timeframe: "2-3 months",
      topics: [
        {
          name: "Clean Architecture & SOLID Principles",
          resources: "Books: Clean Code, Clean Architecture",
          difficulty: "Medium",
        },
        {
          name: "Advanced State Management (Redux Toolkit, Zustand)",
          resources: "Official docs, courses on Udemy",
          difficulty: "Medium",
        },
        {
          name: "Flutter State Management (Bloc, Riverpod)",
          resources: "Reso Coder, Official Flutter docs",
          difficulty: "Medium",
        },
        {
          name: "Micro-frontends Architecture",
          resources: "Martin Fowler articles, micro-frontends.org",
          difficulty: "Hard",
        },
        {
          name: "Design Patterns (Factory, Observer, Singleton, etc.)",
          resources: "Refactoring Guru, Head First Design Patterns",
          difficulty: "Medium",
        },
      ],
    },
    {
      category: "Performance Optimization",
      priority: "High",
      timeframe: "1-2 months",
      topics: [
        {
          name: "React Performance (Memoization, Code Splitting)",
          resources: "React docs, web.dev",
          difficulty: "Medium",
        },
        {
          name: "Flutter Widget Optimization",
          resources: "Flutter performance best practices",
          difficulty: "Medium",
        },
        {
          name: "Web Vitals & Core Performance Metrics",
          resources: "web.dev, Lighthouse",
          difficulty: "Easy",
        },
        {
          name: "Lazy Loading & Virtual Scrolling",
          resources: "react-window, react-virtualized",
          difficulty: "Easy",
        },
        {
          name: "Memory Management & Profiling",
          resources: "Chrome DevTools, Flutter DevTools",
          difficulty: "Hard",
        },
      ],
    },
    {
      category: "Backend & API Development",
      priority: "High",
      timeframe: "3-4 months",
      topics: [
        {
          name: "Advanced Node.js (Streams, Workers, Clustering)",
          resources: "Node.js docs, NodeSchool",
          difficulty: "Hard",
        },
        {
          name: "Database Design & Optimization",
          resources: "PostgreSQL docs, MongoDB University",
          difficulty: "Medium",
        },
        {
          name: "GraphQL Implementation",
          resources: "Apollo docs, How to GraphQL",
          difficulty: "Medium",
        },
        {
          name: "REST API Best Practices",
          resources: "REST API Design Rulebook",
          difficulty: "Easy",
        },
        {
          name: "Authentication & Security (JWT, OAuth)",
          resources: "Auth0 docs, OWASP",
          difficulty: "Medium",
        },
        {
          name: "Caching Strategies (Redis)",
          resources: "Redis University",
          difficulty: "Medium",
        },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      priority: "Medium",
      timeframe: "2-3 months",
      topics: [
        {
          name: "Docker & Containerization",
          resources: "Docker docs, Docker Mastery course",
          difficulty: "Medium",
        },
        {
          name: "CI/CD Pipelines (GitHub Actions)",
          resources: "GitHub Actions docs",
          difficulty: "Easy",
        },
        {
          name: "Cloud Platforms (AWS/GCP basics)",
          resources: "AWS Free Tier, Cloud courses",
          difficulty: "Hard",
        },
        {
          name: "Monitoring & Logging (Sentry, DataDog)",
          resources: "Sentry docs, LogRocket",
          difficulty: "Easy",
        },
        {
          name: "Environment Management & Config",
          resources: "12-factor app methodology",
          difficulty: "Easy",
        },
      ],
    },
    {
      category: "System Design",
      priority: "High",
      timeframe: "3-4 months",
      topics: [
        {
          name: "Scalability & Load Balancing",
          resources: "System Design Primer (GitHub)",
          difficulty: "Hard",
        },
        {
          name: "Caching Strategies & CDNs",
          resources: "Cloudflare Learning, web.dev",
          difficulty: "Medium",
        },
        {
          name: "Database Scaling & Sharding",
          resources: "Database Internals book",
          difficulty: "Hard",
        },
        {
          name: "Microservices Architecture",
          resources: "Microservices.io, Sam Newman's books",
          difficulty: "Hard",
        },
        {
          name: "System Design Interview Prep",
          resources: "Designing Data-Intensive Applications",
          difficulty: "Hard",
        },
      ],
    },
    {
      category: "Testing & Quality",
      priority: "Medium",
      timeframe: "1-2 months",
      topics: [
        {
          name: "Unit Testing (Jest, React Testing Library)",
          resources: "Testing Library docs",
          difficulty: "Easy",
        },
        {
          name: "Integration & E2E Testing (Cypress, Playwright)",
          resources: "Cypress docs, Playwright docs",
          difficulty: "Medium",
        },
        {
          name: "Flutter Testing (Widget, Integration)",
          resources: "Flutter testing docs",
          difficulty: "Medium",
        },
        {
          name: "Test-Driven Development (TDD)",
          resources: "TDD by Example book",
          difficulty: "Medium",
        },
        {
          name: "Code Quality Tools (ESLint, Prettier, SonarQube)",
          resources: "Tool docs",
          difficulty: "Easy",
        },
      ],
    },
    {
      category: "Soft Skills & Leadership",
      priority: "High",
      timeframe: "Ongoing",
      topics: [
        {
          name: "Code Review Best Practices",
          resources: "Google Engineering Practices",
          difficulty: "Easy",
        },
        {
          name: "Technical Documentation",
          resources: "Docs for Developers book",
          difficulty: "Easy",
        },
        {
          name: "Mentoring Junior Developers",
          resources: "The Manager's Path book",
          difficulty: "Medium",
        },
        {
          name: "Architecture Decision Records (ADR)",
          resources: "ADR GitHub templates",
          difficulty: "Easy",
        },
        {
          name: "Technical Communication",
          resources: "Practice presentations, blog writing",
          difficulty: "Medium",
        },
      ],
    },
    {
      category: "Advanced Topics",
      priority: "Low",
      timeframe: "3-6 months",
      topics: [
        {
          name: "WebAssembly & Advanced Web APIs",
          resources: "MDN, WebAssembly docs",
          difficulty: "Hard",
        },
        {
          name: "Progressive Web Apps (PWA)",
          resources: "web.dev PWA guides",
          difficulty: "Medium",
        },
        {
          name: "Mobile DevOps (Fastlane, App Distribution)",
          resources: "Fastlane docs",
          difficulty: "Medium",
        },
        {
          name: "Real-time Features (WebSockets, Server-Sent Events)",
          resources: "Socket.io, Pusher docs",
          difficulty: "Medium",
        },
        {
          name: "Accessibility (WCAG, ARIA)",
          resources: "web.dev accessibility",
          difficulty: "Medium",
        },
      ],
    },
  ];

  const toggleComplete = (categoryIndex: number, topicIndex: number): void => {
    const key = `${categoryIndex}-${topicIndex}`;
    setCompletedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const exportToCSV = () => {
    let csv =
      "Category,Priority,Timeframe,Topic,Resources,Difficulty,Completed\n";

    roadmapData.forEach((category, catIndex) => {
      category.topics.forEach((topic, topIndex) => {
        const key = `${catIndex}-${topIndex}`;
        const completed = completedItems[key] ? "Yes" : "No";
        csv += `"${category.category}","${category.priority}","${category.timeframe}","${topic.name}","${topic.resources}","${topic.difficulty}","${completed}"\n`;
      });
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "senior-developer-roadmap.csv";
    a.click();
  };

  const getPriorityColor = (priority: Priority): string => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyColor = (difficulty: Difficulty): string => {
    switch (difficulty) {
      case "Hard":
        return "text-red-600";
      case "Medium":
        return "text-yellow-600";
      case "Easy":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const totalTopics = roadmapData.reduce(
    (sum, cat) => sum + cat.topics.length,
    0
  );
  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / totalTopics) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Senior Developer Learning Roadmap
              </h1>
              <p className="text-gray-600">
                Flutter & React Developer Path to Senior Level
              </p>
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <Download size={20} />
              Export CSV
            </button>
          </div>

          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm opacity-90">Overall Progress</p>
                <p className="text-3xl font-bold">{progressPercentage}%</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-90">Completed Topics</p>
                <p className="text-3xl font-bold">
                  {completedCount} / {totalTopics}
                </p>
              </div>
            </div>
            <div className="mt-4 bg-white bg-opacity-30 rounded-full h-3">
              <div
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {roadmapData.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">
                  {category.category}
                </h2>
                <div className="flex gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getPriorityColor(
                      category.priority
                    )}`}
                  >
                    {category.priority} Priority
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white text-indigo-600">
                    {category.timeframe}
                  </span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Topic
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Resources
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Difficulty
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {category.topics.map((topic, topicIndex) => {
                    const key = `${categoryIndex}-${topicIndex}`;
                    const isCompleted = completedItems[key];
                    return (
                      <tr
                        key={topicIndex}
                        className={`hover:bg-gray-50 transition ${
                          isCompleted ? "bg-green-50" : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <button
                            onClick={() =>
                              toggleComplete(categoryIndex, topicIndex)
                            }
                            className="focus:outline-none"
                          >
                            {isCompleted ? (
                              <CheckCircle2
                                className="text-green-600"
                                size={24}
                              />
                            ) : (
                              <Circle className="text-gray-300" size={24} />
                            )}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`font-medium ${
                              isCompleted
                                ? "line-through text-gray-400"
                                : "text-gray-900"
                            }`}
                          >
                            {topic.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {topic.resources}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`text-sm font-semibold ${getDifficultyColor(
                              topic.difficulty
                            )}`}
                          >
                            {topic.difficulty}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Recommended Learning Path
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              Start with Architecture & Design Patterns - Foundation for senior
              thinking
            </li>
            <li>
              Learn Performance Optimization - Immediate impact on your current
              work
            </li>
            <li>Deepen Backend & API skills - Become truly full-stack</li>
            <li>
              Add System Design knowledge - Essential for senior interviews
            </li>
            <li>Build DevOps capabilities - Modern development requirement</li>
            <li>
              Practice Soft Skills continuously - What truly separates seniors
            </li>
            <li>Explore Advanced Topics - Based on your career direction</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SeniorDevRoadmap;
