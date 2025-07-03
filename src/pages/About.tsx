import React from 'react';
import { MapPin, Users, Target, Award, Linkedin, Github, Globe } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Shasmeen',
      role: 'Founder & Curriculum Designer',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Passionate educator with 10+ years in tech education. Believes in making coding accessible to all.',
      linkedin: '#',
    },
    {
      name: 'Muniba',
      role: 'Lead Instructor',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in JavaScript and React. Specializes in making complex concepts simple for young learners.',
      linkedin: '#',
    },
    {
      name: 'Shazia',
      role: 'UX/UI Design Mentor',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Creative designer with a passion for user experience. Helps students create beautiful interfaces.',
      linkedin: '#',
    },
    {
      name: 'Shumail',
      role: 'AI Research & Projects Lead',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'AI researcher and developer. Guides students through the fascinating world of artificial intelligence.',
      linkedin: '#',
    },
    {
      name: 'Ebad',
      role: 'Full Stack Developer & Mentor',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Full-stack developer with expertise in modern web technologies. Mentors advanced projects.',
      linkedin: '#',
    },
  ];

  const locations = [
    {
      city: 'Karachi',
      address: '123 Tech Street, Gulshan-e-Iqbal',
      status: 'Physical Center',
    },
    {
      city: 'Lahore',
      address: '456 Innovation Avenue, DHA',
      status: 'Physical Center',
    },
    {
      city: 'Islamabad',
      address: '789 Education Boulevard, F-10',
      status: 'Physical Center',
    },
    {
      city: 'Global',
      address: 'Online Classes Available Worldwide',
      status: 'Online Platform',
    },
  ];

  const stats = [
    { number: '2,500+', label: 'Students Taught' },
    { number: '50+', label: 'Courses Available' },
    { number: '3', label: 'Physical Locations' },
    { number: '95%', label: 'Student Satisfaction' },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About CodeVerse
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to transform learners into creators, bridging the gap between 
            tech learning and real-world industry skills.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At CodeVerse, we believe that every child has the potential to become a creator in the digital age. 
                Our mission is to provide high-quality, accessible technology education that empowers young minds 
                to shape the future.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We transform learners into creators by offering comprehensive courses in web development, 
                programming, AI, and design, taught by industry experts who understand how to make complex 
                concepts engaging and accessible for young learners.
              </p>
              <div className="flex items-center gap-4">
                <Target className="h-8 w-8 text-primary-500" />
                <span className="text-lg font-semibold text-gray-900">
                  Empowering the next generation of tech innovators
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students learning"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-4 rounded-full">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </div>
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

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our passionate educators and industry experts are dedicated to inspiring the next generation of tech creators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white p-2 rounded-full">
                    <Award className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn with us in person at our physical centers or join our global online community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="inline-flex p-3 bg-primary-100 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{location.city}</h3>
                <p className="text-gray-600 text-sm mb-3">{location.address}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  location.status === 'Physical Center' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {location.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Bridging the gap between tech learning and real-world industry skills through innovative education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-white rounded-full shadow-md mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Learning</h3>
              <p className="text-gray-600">
                Hands-on projects and real-world applications that make learning engaging and practical.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-white rounded-full shadow-md mb-4">
                <Target className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry-Relevant Skills</h3>
              <p className="text-gray-600">
                Curriculum designed with input from tech professionals to ensure students learn relevant skills.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-white rounded-full shadow-md mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mentorship & Support</h3>
              <p className="text-gray-600">
                Ongoing guidance from experienced mentors who help students achieve their goals.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey with CodeVerse today and become part of a community that's shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Explore Courses
            </a>
            <a
              href="/contact"
              className="border border-primary-500 text-primary-500 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;