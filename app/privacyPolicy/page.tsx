import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <Head>
        <title>Privacy Policy - Reposight</title>
        <meta name="description" content="Reposight Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-8 shadow-lg rounded-lg text-white">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Information Collection</h2>
          <p>We collect various forms of data to provide and enhance our services, including:</p>
          <ul className="list-disc pl-6">
            <li>Personal Information: This encompasses details such as your name, email address, and contact information, essential for account registration and service delivery.</li>
            <li>Repository Data: We gather information from GitHub repositories, including pull requests, issues, repository details, and user reviews, to curate optimized project listings.</li>
            <li>Review Data: We collate data on completed reviews within repositories, including both textual feedback and numerical ratings provided by users.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Usage of Information</h2>
          <p>Your data is utilized for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>Service Provision: We employ collected data to deliver and refine our services, including the generation of curated project listings.</li>
            <li>Communication: We may use your information to communicate with you regarding your account and service-related updates.</li>
            <li>Personalization: Your data enables us to tailor your experience and provide personalized recommendations.</li>
            <li>Analysis: We analyze usage trends and patterns to enhance the functionality and performance of our platform.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Data Security and Storage</h2>
          <p>We store all data securely on our servers, employing appropriate technical and organizational measures to prevent unauthorized access, alteration, or disclosure.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
          <p>We do not share your personal information or repository data with third parties unless compelled by law or with your explicit consent. However, anonymized and aggregated data may be shared for research, analysis, or promotional purposes.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Accessing GitHub API</h2>
          <p>Accessing data from the GitHub API is essential for providing our services. By using Reposight, you grant us authorization to collect data from your GitHub account in accordance with this Privacy Policy.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. Additionally, you may opt-out of certain communications or data processing activities. Should you wish to remove your data entirely, please send an email to <a href="mailto:agrawalskushal@gmail.com" className="text-blue-500">reposight@gmail.com</a>.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Policy Updates</h2>
          <p>This Privacy Policy may undergo periodic updates to reflect changes in our practices or legal obligations. We will notify you of any significant changes by posting an updated version on our website or through other appropriate channels.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Contact Information</h2>
          <p>For inquiries, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us at <a href="mailto:agrawalskushal@gmail.com" className="text-blue-500">reposight@gmail.com</a>.</p>
        </div>

        <p className="text-sm text-gray-600">This Privacy Policy was last updated on March 18, 2024.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
