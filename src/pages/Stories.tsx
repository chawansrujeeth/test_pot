
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    id: 1,
    title: "The Bug That Changed Everything 🐛",
    author: "Alex the Code Wizard",
    avatar: "🧙‍♂️",
    content: "I remember my first week learning Python. I spent 6 hours debugging what I thought was a complex algorithm issue. Turns out, I just forgot a single colon after my if statement! That day taught me the importance of paying attention to syntax. Now I'm a senior developer at a tech company, and I still smile every time I see that error message.",
    date: "March 15, 2024",
    language: "Python"
  },
  {
    id: 2,
    title: "From Zero to Hero in C++ 💪",
    author: "Sarah Lightning",
    avatar: "⚡",
    content: "When I started with C++, pointers felt like an alien language. I failed my first coding interview because of them. But instead of giving up, I spent summer break building a mini game engine. Every segfault taught me something new. Fast forward two years, and I just got accepted into Google's internship program!",
    date: "February 28, 2024",
    language: "C++"
  },
  {
    id: 3,
    title: "The Java Journey of a Lifetime ☕",
    author: "Mike Bean Counter",
    avatar: "🤓",
    content: "My Java story started in college with a simple 'Hello World' program that took me an hour to run correctly. I was intimidated by all the class declarations and public static void main. But my professor said something that stuck: 'Every expert was once a beginner.' Now I lead a team of 15 developers building enterprise applications!",
    date: "January 20, 2024",
    language: "Java"
  },
  {
    id: 4,
    title: "The Midnight Debugging Session 🌙",
    author: "Luna NightCoder",
    avatar: "🦉",
    content: "It was 2 AM, and my project was due at 8 AM. My Python script kept crashing with a mysterious error. I was on the verge of tears when I discovered CodeTester. The instant feedback helped me find the issue in minutes - I was trying to divide by zero in edge cases! I submitted my project on time and got an A+.",
    date: "December 10, 2023",
    language: "Python"
  },
  {
    id: 5,
    title: "Conquering Recursion Like a Boss 🌀",
    author: "Tom Stack Overflow",
    avatar: "🤯",
    content: "Recursion was my nemesis for months. Every time I tried to write a recursive function, I'd either get infinite loops or stack overflows. But then I learned to visualize the call stack like a tower of blocks. Each function call was a new block, and the base case was the foundation. Now recursion is one of my favorite problem-solving tools!",
    date: "November 5, 2023",
    language: "C++"
  },
  {
    id: 6,
    title: "The First Successful Compilation 🎉",
    author: "Emma Syntax Queen",
    avatar: "👑",
    content: "The feeling when your Java program compiles without errors for the first time is indescribable! I had been getting syntax errors for days, mixing up semicolons and brackets. When I finally saw 'BUILD SUCCESSFUL' in my terminal, I literally jumped up and danced around my room. My roommates thought I was crazy, but I had never been happier!",
    date: "October 15, 2023",
    language: "Java"
  }
];

const getLanguageColor = (language: string) => {
  switch (language) {
    case "Python": return "bg-cartoon-green-100 text-cartoon-green-700";
    case "C++": return "bg-cartoon-blue-100 text-cartoon-blue-700";
    case "Java": return "bg-cartoon-yellow-100 text-cartoon-yellow-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

const Stories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cartoon-blue-50 via-white to-cartoon-purple-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Stories 📚
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real developers in our community. From first bugs to career breakthroughs, 
            these tales inspire and remind us that every coding journey is unique and beautiful.
          </p>
        </div>

        <div className="space-y-8">
          {stories.map((story) => (
            <Card key={story.id} className="cartoon-card hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl animate-float">{story.avatar}</div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
                        {story.title}
                      </h2>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLanguageColor(story.language)}`}>
                          {story.language}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                      <span className="font-medium text-gray-700">by {story.author}</span>
                      <span>•</span>
                      <span>{story.date}</span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {story.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="cartoon-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Got a Story to Share? ✨</h3>
              <p className="text-gray-600 mb-6">
                We'd love to hear about your coding journey! Whether it's a funny bug story, 
                a breakthrough moment, or an inspiring transformation, your story could help others.
              </p>
              <div className="text-4xl mb-4">📖</div>
              <p className="text-sm text-gray-500">
                Share your story with us at stories@codetester.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Stories;
