import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, Tag, ArrowRight } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: 1,
    title: 'Getting Started with Web Development for Kids',
    content: `
      <h2>Introduction</h2>
      <p>Web development is one of the most exciting and accessible ways for kids to start their journey into the tech world. With just a browser and a text editor, young learners can create amazing websites and applications that can be shared with the world.</p>
      
      <h2>Why Start with Web Development?</h2>
      <p>Web development offers several advantages for young learners:</p>
      <ul>
        <li><strong>Immediate Visual Results:</strong> Kids can see their code come to life instantly in a browser</li>
        <li><strong>Creative Expression:</strong> Web development combines logic with creativity and design</li>
        <li><strong>Low Barrier to Entry:</strong> Only basic tools are needed to get started</li>
        <li><strong>Real-World Applications:</strong> Every website they visit uses these technologies</li>
      </ul>
      
      <h2>The Three Pillars of Web Development</h2>
      <h3>1. HTML - The Structure</h3>
      <p>HTML (HyperText Markup Language) is like the skeleton of a website. It defines the structure and content of web pages using elements like headings, paragraphs, images, and links.</p>
      
      <h3>2. CSS - The Style</h3>
      <p>CSS (Cascading Style Sheets) is what makes websites look beautiful. It controls colors, fonts, layouts, and animations. Think of it as the outfit that makes your HTML look stylish.</p>
      
      <h3>3. JavaScript - The Behavior</h3>
      <p>JavaScript brings websites to life by adding interactivity. It allows websites to respond to user actions, create animations, and build dynamic features.</p>
      
      <h2>Getting Started: Your First Webpage</h2>
      <p>Here's a simple example to get started:</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Website!&lt;/h1&gt;
    &lt;p&gt;This is my first webpage created with HTML.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      
      <h2>Next Steps</h2>
      <p>Once you've mastered the basics, you can explore:</p>
      <ul>
        <li>Responsive design for mobile devices</li>
        <li>CSS frameworks like Bootstrap</li>
        <li>JavaScript libraries like React</li>
        <li>Backend development with Node.js</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Web development is an incredible skill that opens doors to countless opportunities. At CodeVerse, we make learning these technologies fun and engaging for young minds. Remember, every expert was once a beginner!</p>
    `,
    author: 'Shasmeen Ahmed',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Web Development',
    tags: ['HTML', 'CSS', 'JavaScript', 'Beginners', 'Tutorial'],
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'getting-started-web-development-kids',
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Building Your First React App: A Teen\'s Guide',
      excerpt: 'Step-by-step tutorial for teenagers to create their first React application.',
      author: 'Muniba Khan',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'JavaScript',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'first-react-app-teen-guide',
    },
    {
      id: 3,
      title: 'Python Programming: Perfect First Language for Kids',
      excerpt: 'Why Python is an excellent choice for young programmers.',
      author: 'Ebad Ahmed',
      date: '2024-01-03',
      readTime: '8 min read',
      category: 'Python',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'python-programming-kids',
    },
    {
      id: 4,
      title: 'The Importance of Design Thinking in Tech Education',
      excerpt: 'How teaching design principles alongside coding helps students.',
      author: 'Shazia Malik',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'design-thinking-tech-education',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute top-6 left-6 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {blogPost.category}
            </div>
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {blogPost.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(blogPost.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {blogPost.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {blogPost.title}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">Share this article:</span>
              <div className="flex gap-2">
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Share2 className="h-4 w-4 text-gray-600" />
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 group"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;