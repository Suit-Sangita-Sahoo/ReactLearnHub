const Prop=()=>{
     return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">
        React Props
      </h1>

      <ul className="list-disc list-inside space-y-3 text-gray-800">
        <li>Props (short for properties) are used to pass data from parent to child components.</li>
        <li>They are **read-only**, meaning a child cannot modify them.</li>
        <li>Props allow components to be **dynamic and reusable**.</li>
        <li>They can be of any data type: string, number, object, array, or function.</li>
        <li>Functional components receive props as function arguments.</li>
        <li>Props help in creating **customizable components** without changing their code.</li>
        <li>Using props makes the UI predictable and easier to debug.</li>
      </ul>
    </div>
  );
}
export default Prop