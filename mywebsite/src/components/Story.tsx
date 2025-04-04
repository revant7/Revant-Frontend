import React, { useState } from 'react';

const GenerateStoryAndImage = () => {
  const [prompt, setPrompt] = useState('');
  const [story, setStory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStory('');
    setImageUrl(''); 
    setError('');

    try {
      const apiKey = 'AIzaSyBUgKmbhH4BWpp2bVEE9-ipASlPPt0wgFM';
      const modelName = 'gemini-2.0-flash'; 
      const final_prompt = "Generate a Story For :- " + prompt;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: final_prompt }]
          }],
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.7,
            // topP: 0.8,
            // topK: 40,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API error:', errorData);
        throw new Error(`Failed to generate story: ${response.status} - ${errorData?.error?.message || response.statusText}`);
      }

      const data = await response.json();
      console.log('Gemini API response data:', data);

      
      if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
        const generatedText = data.candidates[0].content.parts[0].text;
        setStory(generatedText);
      } else {
        console.warn('No generated text found in the response.');
        setError('No story was generated in the response.');
      }

      
    } catch (error) {
      console.error('Error during Gemini API request:', error);
      setError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Generate Your Story</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter your imagination or prompt here..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Story & Image'}
          </button>
        </div>
      </form>

      {loading && (
        <div className="text-center mt-4 text-gray-600">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-4 border-blue-600 rounded-full"></div>
          <p>Generating your story and image...</p>
        </div>
      )}

      {error && (
        <div className="text-center mt-4 text-red-600">
          <p>{error}</p>
        </div>
      )}

      {story && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Your Generated Story</h2>
          <p className="text-lg text-gray-700">{story}</p>
          <img src="story_image.jpg" alt="" />
        </div>
      )}

      {imageUrl && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Generated Image</h2>
          <img
            src={imageUrl}
            alt="Generated Visual"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default GenerateStoryAndImage;