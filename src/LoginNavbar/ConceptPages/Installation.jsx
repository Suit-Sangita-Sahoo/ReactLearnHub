const Installation = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">
        Installation of React
      </h1>

      <ul className="list-disc list-inside space-y-3 text-gray-800">
        <li>React requires Node.js and npm to be installed on your system.</li>
        <li>Create a new React project using <strong>create-react-app</strong>:</li>
        <li><code>npx create-react-app my-app</code></li>
        <li>Navigate to the project folder: <code>cd my-app</code></li>
        <li>Start the development server: <code>npm start</code></li>
        <li>Your React app will open in the browser at <strong>http://localhost:3000</strong>.</li>
        <li>React can also be installed using Vite or other build tools for faster setup.</li>
      </ul>
    </div>
  );
};

export default Installation;
