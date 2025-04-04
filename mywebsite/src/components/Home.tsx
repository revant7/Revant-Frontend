import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to StoryTeller</h1>
          <p className="text-xl mb-8">Unleash your creativity, write captivating stories, and share them with the world.</p>
          <Link
            to="#explore"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300 transform hover:scale-105"
          >
            Explore Stories
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Why StoryTeller?</h2>
          <p className="text-lg text-gray-600 mb-8">
            StoryTeller is a platform where anyone can share their stories, whether it's fiction, non-fiction,
            or personal experiences. Join a community of passionate storytellers and discover new worlds through the art of storytelling.
          </p>
          <Link
            to="#about"
            className="inline-block bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Generate Your Story Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-6">Generate Your Story with Imagination</h2>
          <p className="text-xl mb-8">Don’t just read stories, create them! Use your imagination or provide a prompt to generate unique and exciting stories in minutes.</p>
          <Link
            to="/generate"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-200 transition duration-300 transform hover:scale-105"
          >
            Start Generating
          </Link>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section id="explore" className="bg-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-12">Featured Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Story Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">The Lost Kingdom</h3>
              <p className="text-gray-700 mb-4">
                A captivating tale of a hidden kingdom and the brave souls who embark on a perilous journey to uncover its secrets.
              </p>
              <Link
                to="#story1"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                Read More →
              </Link>
            </div>

            {/* Story Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Whispers in the Wind</h3>
              <p className="text-gray-700 mb-4">
                A gripping mystery surrounding a lost letter that holds the key to a decades-old secret.
              </p>
              <Link
                to="#story2"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                Read More →
              </Link>
            </div>

            {/* Story Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Beyond the Stars</h3>
              <p className="text-gray-700 mb-4">
                An intergalactic adventure exploring the mysteries of the universe, love, and human spirit.
              </p>
              <Link
                to="#story3"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white text-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">Ready to Share Your Story?</h2>
          <p className="text-lg mb-8">Join our community of storytellers, share your creativity, and engage with others.</p>
          <Link
            to="/register"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
