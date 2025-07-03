import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Award, 
  Play,
  Download,
  Share2,
  Heart,
  CheckCircle
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();

  // Mock course data - in a real app, this would come from an API
  const course = {
    id: 1,
    title: 'Web Development Fundamentals',
    description: 'Master the foundations of web development with HTML, CSS, and JavaScript. Build real projects and learn from industry experts.',
    instructor: {
      name: 'Shasmeen Ahmed',
      bio: 'Full Stack Developer with 8+ years experience. Passionate about teaching young minds.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    duration: '8 weeks',
    price: 'Free',
    level: 'Beginner',
    ageGroup: '8-11 years',
    students: 1250,
    rating: 4.9,
    totalReviews: 324,
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    keyLearnings: [
      'HTML structure and semantic elements',
      'CSS styling and responsive design',
      'JavaScript fundamentals and DOM manipulation',
      'Building interactive web pages',
      'Version control with Git',
    ],
    curriculum: [
      {
        module: 'Module 1: HTML Basics',
        lessons: [
          'Introduction to HTML',
          'HTML Tags and Elements',
          'Creating Your First Webpage',
          'Forms and Input Elements',
        ],
      },
      {
        module: 'Module 2: CSS Styling',
        lessons: [
          'CSS Selectors and Properties',
          'Layout with Flexbox',
          'Responsive Design Principles',
          'CSS Grid System',
        ],
      },
      {
        module: 'Module 3: JavaScript Fundamentals',
        lessons: [
          'Variables and Data Types',
          'Functions and Events',
          'DOM Manipulation',
          'Building Interactive Features',
        ],
      },
      {
        module: 'Module 4: Final Project',
        lessons: [
          'Project Planning',
          'Building Your Portfolio Site',
          'Deployment and Hosting',
          'Presentation and Feedback',
        ],
      },
    ],
    prerequisites: [
      'Basic computer literacy',
      'Access to a computer and internet',
      'Willingness to learn and practice',
    ],
    targetAudience: [
      'Kids aged 8-11 interested in technology',
      'Beginners with no prior coding experience',
      'Students wanting to build their first website',
    ],
    reviews: [
      {
        name: 'Ahmed Hassan',
        rating: 5,
        comment: 'Amazing course! The instructor explains everything clearly and the projects are fun.',
        date: '2 weeks ago',
      },
      {
        name: 'Fatima Khan',
        rating: 5,
        comment: 'My daughter loved this course. She built her first website and is so proud!',
        date: '1 month ago',
      },
      {
        name: 'Omar Ali',
        rating: 4,
        comment: 'Great course for beginners. The pace is perfect for kids.',
        date: '3 weeks ago',
      },
    ],
    faqs: [
      {
        question: 'Is this course suitable for complete beginners?',
        answer: 'Yes! This course is designed specifically for beginners with no prior coding experience.',
      },
      {
        question: 'What equipment do I need?',
        answer: 'You only need a computer with internet access. All software used in the course is free.',
      },
      {
        question: 'How long do I have access to the course?',
        answer: 'You get lifetime access to all course materials and updates.',
      },
      {
        question: 'Is there a certificate upon completion?',
        answer: 'Yes, you receive a certificate of completion that you can share on social media.',
      },
    ],
  };

  const [activeTab, setActiveTab] = React.useState('overview');

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/courses"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </div>

        {/* Course Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {course.ageGroup}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {course.description}
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-gray-500">({course.totalReviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gray-400" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">{course.instructor.name}</p>
                  <p className="text-sm text-gray-600">Course Instructor</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary-600">{course.price}</span>
                <div className="flex gap-2">
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-center mb-4">
                  <button className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-600 transition-colors">
                    <Play className="h-6 w-6" />
                  </button>
                </div>
                <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors mb-3">
                  Enroll Now
                </button>
                <button className="w-full border border-primary-500 text-primary-500 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                  Try Free Lesson
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content Tabs */}
        <div className="bg-white rounded-2xl shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {['overview', 'curriculum', 'instructor', 'reviews', 'faqs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 text-sm font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.keyLearnings.map((learning, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{learning}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Target Audience</h2>
                  <ul className="space-y-2">
                    {course.targetAudience.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Prerequisites</h2>
                  <ul className="space-y-2">
                    {course.prerequisites.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <div className="p-4 bg-gray-50 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-900">{module.module}</h3>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-center gap-3">
                              <BookOpen className="h-4 w-4 text-gray-400" />
                              <span className="text-gray-700">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructor</h2>
                <div className="flex items-start gap-6">
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {course.instructor.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.instructor.bio}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{course.rating} rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h2>
                <div className="space-y-6">
                  {course.reviews.map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{review.name}</h4>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faqs' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {course.faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;