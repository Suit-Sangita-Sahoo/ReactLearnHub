const ReactComponent=()=>{
   return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">
        React Components
      </h1>

      <ul className="list-disc list-inside space-y-3 text-gray-800">
        <li>Components are the building blocks of a React application.</li>
        <li>They let you split the UI into independent, reusable pieces.</li>
        <li>Each component can have its own <strong>state</strong> and <strong>props</strong>.</li>
        <li>React supports <strong>Functional</strong> and <strong>Class</strong> components.</li>
        <li>Functional components are preferred with React Hooks for managing state and lifecycle.</li>
        <li>Components can be nested to create complex UIs.</li>
        <li>Reusability and modularity make code easier to maintain and test.</li>
      </ul>
    </div>
  );
}
export default ReactComponent