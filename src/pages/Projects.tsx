import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Search, Filter, Award, Code, Users, Star } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAge, setSelectedAge] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'EcoTrack - Environmental Monitoring App',
      description: 'A React-based web application that helps users track their carbon footprint and environmental impact.',
      student: 'Sarah Ahmed',
      age: 16,
      level: 'Advanced',
      ageGroup: '16-18',
      techStack: ['React', 'Node.js', 'MongoDB', 'CSS'],
      image: 'https://images.pexels.com/photos/3585030/pexels-photo-3585030.jpeg?auto=compress&cs=tinysrgb&w=500',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      tags: ['Environment', 'Web App', 'Data Visualization'],
      completionDate: '2024-01-15',
      courseName: 'Full Stack Development',
    },
    {
      id: 2,
      title: 'Math Quiz Game',
      description: 'Interactive math quiz game built with JavaScript that helps younger students practice arithmetic.',
      student: 'Ahmed Hassan',
      age: 12,
      level: 'Beginner',
      ageGroup: '8-11',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=500',
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      tags: ['Education', 'Game', 'Math'],
      completionDate: '2024-01-10',
      courseName: 'Web Development Fundamentals',
    },
    {
      id: 3,
      title: 'AI Recipe Generator',
      description: 'Python application that uses AI to generate recipes based on available ingredients.',
      student: 'Fatima Khan',
      age: 15,
      level: 'Intermediate',
      ageGroup: '12-15',
      techStack: ['Python', 'AI', 'Flask', 'HTML'],
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      tags: ['AI', 'Food', 'Machine Learning'],
      completionDate: '2024-01-08',
      courseName: 'AI & Machine Learning',
    },
    {
      id: 4,
      title: 'Student Portfolio Website',
      description: 'Beautiful personal portfolio website showcasing projects and skills using modern CSS and JavaScript.',
      student: 'Omar Ali',
      age: 14,
      level: 'Intermediate',
      ageGroup: '12-15',
      techStack: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      tags: ['Portfolio', 'Personal', 'Animation'],
      completionDate: '2024-01-05',
      courseName: 'UI/UX Design Basics',
    },
    {
      id: 5,
      title: 'School Management System',
      description: 'Full-featured school management system with student records, grades, and attendance tracking.',
      student: 'Zara Malik',
      age: 17,
      level: 'Advanced',
      ageGroup: '16-18',
      techStack: ['React', 'Node.js', 'Express', 'MySQL'],
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=500',
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      tags: ['Education', 'Management', 'Full Stack'],
      completionDate: '2024-01-03',
      courseName: 'Advanced Web Development',
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with beautiful data visualizations and forecasting.',
      student: 'Hassan Sheikh',
      age: 13,
      level: 'Beginner',
      ageGroup: '12-15',
      techStack: ['HTML', 'CSS', 'JavaScript', 'API'],
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=500',
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
      tags: ['Weather', 'Dashboard', 'API'],
      completionDate: '2024-01-01',
      courseName: 'JavaScript Essentials',
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAge = selectedAge === 'all' || project.ageGroup === selectedAge;
    const matchesTech = selectedTech === 'all' || 
                       project.techStack.some(tech => tech.toLowerCase().includes(selectedTech.toLowerCase()));
    
    return matchesSearch && matchesAge && matchesTech;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  const stats = [
    { number: '150+', label: 'Projects Built' },
    { number: '85%', label: 'Student Satisfaction' },
    { number: '12', label: 'Technologies Used' },
    { number: '25+', label: 'Awards Won' },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Student Projects Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing projects built by our talented students. From beginner websites to advanced AI applications, 
            see what's possible when young minds meet technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={selectedAge}
              onChange={(e) => setSelectedAge(e.target.value)}
            >
              <option value="all">All Ages</option>
              <option value="8-11">8-11 years</option>
              <option value="12-15">12-15 years</option>
              <option value="16-18">16-18 years</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              <option value="all">All Technologies</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
              <option value="python">Python</option>
              <option value="ai">AI</option>
            </select>
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group relative"
                >
                  <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    Featured
                  </div>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                      {project.level}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {project.student.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{project.student}</p>
                        <p className="text-sm text-gray-600">Age {project.age} • {project.courseName}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <a
                          href={project.githubUrl}
                          className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                          title="View Code"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={project.liveUrl}
                          className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-700">Outstanding</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            All Projects ({filteredProjects.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                    {project.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {project.student.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{project.student}</p>
                      <p className="text-sm text-gray-600">Age {project.age} • {project.courseName}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-600 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                        title="View Code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Code className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Own Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our courses and start creating amazing projects that showcase your skills and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Courses
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;