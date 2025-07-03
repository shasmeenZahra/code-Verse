import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, X, Star, Users, Clock, Award, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Free Tier',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with coding basics',
      features: [
        'Access to 3 introductory courses',
        'Basic HTML & CSS lessons',
        'Community forum access',
        'Mobile-friendly platform',
        'Basic project templates',
      ],
      limitations: [
        'No live instructor support',
        'Limited course library',
        'No certificates',
        'No 1-on-1 mentoring',
      ],
      popular: false,
      cta: 'Start Free',
      ctaLink: '/courses',
    },
    {
      name: 'Standard',
      price: '$79',
      period: 'per course',
      description: 'Comprehensive learning with live instruction',
      features: [
        'Full access to all courses',
        'Live online classes',
        'Interactive coding exercises',
        'Project-based learning',
        'Course completion certificates',
        'Community forum access',
        'Mobile app access',
        'Basic progress tracking',
      ],
      limitations: [
        'Limited 1-on-1 support',
        'No priority scheduling',
      ],
      popular: true,
      cta: 'Choose Standard',
      ctaLink: '/contact',
    },
    {
      name: 'Pro',
      price: '$199',
      period: 'per month',
      description: 'Complete learning experience with mentorship',
      features: [
        'Everything in Standard',
        'Unlimited course access',
        'Weekly 1-on-1 mentoring sessions',
        'Priority instructor support',
        'Custom learning path',
        'Advanced project portfolio',
        'Industry-standard certificates',
        'Career guidance sessions',
        'Priority class scheduling',
        'Access to exclusive workshops',
      ],
      limitations: [],
      popular: false,
      cta: 'Choose Pro',
      ctaLink: '/contact',
    },
  ];

  const addOns = [
    {
      name: 'Extra 1-on-1 Sessions',
      price: '$50',
      period: 'per session',
      description: 'Additional mentoring beyond your plan',
    },
    {
      name: 'Portfolio Review',
      price: '$75',
      period: 'one-time',
      description: 'Professional review of your projects',
    },
    {
      name: 'Mock Interview',
      price: '$100',
      period: 'per session',
      description: 'Practice interviews with industry experts',
    },
  ];

  const faqs = [
    {
      question: 'Can I switch between plans?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Is there a sibling discount?',
      answer: 'Yes! We offer a 20% discount for each additional sibling enrolled in our courses.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with your learning experience.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! The price you see is what you pay. All course materials and platform access are included.',
    },
    {
      question: 'Can I pause my subscription?',
      answer: 'Yes, you can pause your Pro subscription for up to 3 months if needed.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      age: 15,
      quote: 'The Pro plan helped me build an amazing portfolio. The mentoring sessions were invaluable!',
      course: 'Web Development',
      rating: 5,
    },
    {
      name: 'Ahmed Hassan',
      age: 13,
      quote: 'Started with the free tier and loved it so much I upgraded to Standard. Great value!',
      course: 'Python Programming',
      rating: 5,
    },
    {
      name: 'Fatima Khan',
      age: 16,
      quote: 'The career guidance in Pro plan helped me land my first freelance project.',
      course: 'Full Stack Development',
      rating: 5,
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your coding journey with our flexible pricing plans designed for every learning style and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                tier.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-600">{tier.price}</span>
                  <span className="text-gray-500 ml-2">/{tier.period}</span>
                </div>
                <Link
                  to={tier.ctaLink}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors inline-block ${
                    tier.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">What's included:</h4>
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Limitations */}
              {tier.limitations.length > 0 && (
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900">Limitations:</h4>
                  {tier.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Optional Add-ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {addon.price}
                  <span className="text-sm font-normal text-gray-500 ml-1">/{addon.period}</span>
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors inline-block"
                >
                  Add to Plan
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Users className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Sibling Discount</h3>
              <p className="text-primary-100">20% off for each additional sibling</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white mb-2">Early Bird</h3>
              <p className="text-primary-100">15% off when you enroll 2 weeks early</p>
            </div>
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Age {testimonial.age} • {testimonial.course}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their future with CodeVerse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors inline-flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-primary-500 text-primary-500 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;