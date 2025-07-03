import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Laptop, Users, Star, Play, BookOpen, Award, Target } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Zero-to-Hero Curriculum',
      description: 'Structured learning paths from basics to advanced concepts',
    },
    {
      icon: Laptop,
      title: 'Real-World Projects',
      description: 'Build actual applications and websites you can showcase',
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals with real experience',
    },
  ];

  const popularCourses = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'Shasmeen Ahmed',
      duration: '8 weeks',
      price: 'Free',
      level: 'Beginner',
      students: 1250,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      title: 'TypeScript for Beginners',
      instructor: 'Muniba Khan',
      duration: '6 weeks',
      price: '$99',
      level: 'Beginner',
      students: 890,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'AI & Machine Learning',
      instructor: 'Shumail Ali',
      duration: '10 weeks',
      price: '$149',
      level: 'Intermediate',
      students: 567,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      title: 'UI/UX Design Basics',
      instructor: 'Shazia Malik',
      duration: '7 weeks',
      price: '$79',
      level: 'Beginner',
      students: 723,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const steps = [
    {
      icon: BookOpen,
      title: 'Choose a Course',
      description: 'Browse our curriculum and pick what interests you',
    },
    {
      icon: Play,
      title: 'Attend Classes',
      description: 'Join live online sessions or visit our centers',
    },
    {
      icon: Target,
      title: 'Build Projects',
      description: 'Create real applications with mentor guidance',
    },
    {
      icon: Award,
      title: 'Earn Certificate',
      description: 'Get recognized for your achievements',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      age: 16,
      course: 'Web Development',
      quote: 'CodeVerse helped me build my first website. Now I\'m freelancing!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Fatima Ali',
      age: 14,
      course: 'AI Basics',
      quote: 'The AI course opened my eyes to future possibilities in tech.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Omar Khan',
      age: 12,
      course: 'Programming Basics',
      quote: 'I love how the teachers make coding fun and easy to understand.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Tech for Kids.
                <span className="text-primary-600"> Skills for the Future.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Learn Web Development, TypeScript, and AI with expert mentorship. Perfect for ages 8–18.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/courses"
                  className="border border-primary-500 text-primary-500 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors text-center"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Kids learning to code"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 bg-accent-500 text-white p-4 rounded-full animate-bounce-gentle">
                  <Brain className="h-8 w-8" />
                </div>
              </div>
              <div className="absolute top-8 left-8 w-24 h-24 bg-primary-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-accent-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CodeVerse */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CodeVerse?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're transforming how kids learn technology with hands-on experience and expert guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="inline-flex p-4 bg-primary-100 rounded-full group-hover:bg-primary-500 group-hover:text-white transition-colors mb-6">
                  <feature.icon className="h-8 w-8 text-primary-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of students already learning with our most loved courses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.instructor}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.students} students)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary-600">{course.price}</span>
                    <Link
                      to={`/course/${course.id}`}
                      className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors group"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to transform your child into a tech creator.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex p-4 bg-primary-100 rounded-full mb-6">
                  <step.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-primary-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our amazing students who are already creating their future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Age {testimonial.age} • {testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Free Class CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our free introductory class and discover the exciting world of technology.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg group"
          >
            Join Free Class
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;