const Jsxrules = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">
        JSX Rules
      </h1>

      <ul className="list-disc list-inside space-y-3 text-gray-800">
        <li>JSX stands for <strong>JavaScript XML</strong>.</li>
        <li>It allows writing HTML-like syntax inside JavaScript.</li>
        <li>JSX expressions must be wrapped in a <strong>single parent element</strong>.</li>
        <li>JavaScript expressions can be used inside JSX with <code>{'{ }'}</code>.</li>
        <li>All JSX tags must be <strong>closed properly</strong> (self-closing for empty tags).</li>
        <li>Use <code>className</code> instead of <code>class</code> for CSS classes.</li>
        <li>JSX can include components, elements, and expressions seamlessly.</li>
      </ul>
    </div>
  );
};

export default Jsxrules;
