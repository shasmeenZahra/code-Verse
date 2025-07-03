import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  User, 
  School, 
  Calendar, 
  BookOpen, 
  CheckCircle,
  ArrowRight,
  Clock,
  Trophy,
  Target
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Kids & Teens Courses',
      description: 'Comprehensive coding courses designed specifically for young learners aged 8-18.',
      features: [
        'Age-appropriate curriculum',
        'Interactive learning experiences',
        'Project-based learning',
        'Online and in-person options',
        'Beginner to advanced levels'
      ],
      price: 'From $79/course',
      popular: true,
    },
    {
      icon: User,
      title: '1-on-1 Mentorship',
      description: 'Personalized learning with dedicated mentors for accelerated progress.',
      features: [
        'Customized learning plan',
        'Individual attention',
        'Flexible scheduling',
        'Progress tracking',
        'Industry expert mentors'
      ],
      price: 'From $150/month',
      popular: false,
    },
    {
      icon: School,
      title: 'School Partnerships',
      description: 'Partner with schools to bring coding education directly to classrooms.',
      features: [
        'Curriculum integration',
        'Teacher training',
        'Student assessment tools',
        'Bulk enrollment discounts',
        'Ongoing support'
      ],
      price: 'Custom pricing',
      popular: false,
    },
    {
      icon: Calendar,
      title: 'Bootcamps & Holiday Camps',
      description: 'Intensive short-term programs during school breaks and holidays.',
      features: [
        'Intensive learning format',
        'Project completion',
        'Peer collaboration',
        'Certificate of completion',
        'Fun and engaging activities'
      ],
      price: 'From $299/week',
      popular: false,
    },
    {
      icon: BookOpen,
      title: 'Parent Workshops',
      description: 'Educational sessions for parents to understand and support their child\'s coding journey.',
      features: [
        'Understanding tech education',
        'Supporting learning at home',
        'Career guidance',
        'Industry insights',
        'Networking opportunities'
      ],
      price: 'Free',
      popular: false,
    },
  ];

  const comparisonData = [
    {
      feature: 'Age Range',
      regular: '8-18 years',
      mentorship: '8-18 years',
      school: '8-18 years',
      bootcamp: '10-18 years',
      parent: 'Adults',
    },
    {
      feature: 'Class Size',
      regular: '10-15 students',
      mentorship: '1-on-1',
      school: '20-30 students',
      bootcamp: '8-12 students',
      parent: '15-25 parents',
    },
    {
      feature: 'Duration',
      regular: '6-12 weeks',
      mentorship: 'Ongoing',
      school: 'Semester/Year',
      bootcamp: '1-2 weeks',
      parent: '2-3 hours',
    },
    {
      feature: 'Certification',
      regular: '✓',
      mentorship: '✓',
      school: '✓',
      bootcamp: '✓',
      parent: '○',
    },
    {
      feature: 'Project Portfolio',
      regular: '✓',
      mentorship: '✓',
      school: '✓',
      bootcamp: '✓',
      parent: '○',
    },
  ];

  const steps = [
    {
      icon: Target,
      title: 'Choose Your Path',
      description: 'Select the service that best fits your learning goals and schedule.',
    },
    {
      icon: User,
      title: 'Get Matched',
      description: 'We match you with the right instructor or program based on your needs.',
    },
    {
      icon: BookOpen,
      title: 'Start Learning',
      description: 'Begin your coding journey with our expert guidance and support.',
    },
    {
      icon: Trophy,
      title: 'Achieve Success',
      description: 'Complete projects, earn certificates, and build your tech portfolio.',
    },
  ];

  const beneficiaries = [
    {
      title: 'Students',
      description: 'Learn valuable tech skills that prepare you for the future job market.',
      benefits: [
        'Develop problem-solving abilities',
        'Build creative projects',
        'Gain confidence in technology',
        'Prepare for tech careers'
      ],
    },
    {
      title: 'Schools',
      description: 'Enhance your curriculum with modern technology education.',
      benefits: [
        'Integrate STEM education',
        'Improve student engagement',
        'Prepare students for digital age',
        'Professional development for teachers'
      ],
    },
    {
      title: 'Parents',
      description: 'Support your child\'s education and understand their learning journey.',
      benefits: [
        'Understand tech education importance',
        'Support learning at home',
        'Connect with other parents',
        'Guide career decisions'
      ],
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of technology education services designed to empower learners of all ages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 relative ${
                service.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-flex p-4 bg-primary-100 rounded-full mb-4">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-600 transition-colors inline-block"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Compare Our Programs
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Regular Courses</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Mentorship</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">School Programs</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Bootcamps</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Parent Workshops</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.regular}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.mentorship}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.school}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.bootcamp}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.parent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Who Can Benefit */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Can Benefit?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our services are designed to meet the diverse needs of learners, educators, and families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beneficiaries.map((beneficiary, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{beneficiary.title}</h3>
                <p className="text-gray-600 mb-6">{beneficiary.description}</p>
                <ul className="space-y-2">
                  {beneficiary.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How to Start */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to begin your coding journey with CodeVerse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex p-4 bg-white rounded-full shadow-md mb-4">
                  <step.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-primary-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already started their coding journey with CodeVerse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors inline-flex items-center justify-center group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/courses"
              className="border border-primary-500 text-primary-500 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;