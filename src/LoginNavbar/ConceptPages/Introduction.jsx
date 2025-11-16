const Introduction = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Introduction to React
      </h1>

      <ul className="list-disc list-inside space-y-6 text-gray-800">
        <li>
          <h2 className="text-xl font-semibold">What is React?</h2>
          <p>
            React is an <strong>open-source JavaScript library</strong> developed
            by Facebook. It is used for building fast and interactive user
            interfaces (UI), especially for{" "}
            <strong>single-page applications (SPA)</strong>.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold">Component-Based Architecture</h2>
          <p>
            The entire UI is built using <strong>reusable components</strong>.
            Each component manages its own <strong>state</strong> and{" "}
            <strong>logic</strong>, making apps easier to maintain.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold">Declarative Programming</h2>
          <p>
            Instead of telling the browser <em>how</em> to update the UI step by
            step, you just declare <em>what</em> the UI should look like, and
            React updates it automatically.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold">Virtual DOM (Key Concept)</h2>
          <p>
            React uses a <strong>Virtual DOM</strong> (in-memory representation
            of the real DOM). It compares the new Virtual DOM with the old one
            using a process called <strong>Reconciliation</strong> and updates
            only the changed parts in the real DOM →{" "}
            <strong>faster performance</strong>.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold">JSX (JavaScript XML)</h2>
          <p>
            React uses <strong>JSX</strong>, a syntax extension that allows
            writing HTML-like code inside JavaScript. JSX makes the code more
            readable and easier to write.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold">One-Way Data Binding</h2>
          <p>
            Data flows <strong>from parent to child</strong> via props. This
            makes data flow predictable and debugging easier.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold">React is Just the View Layer</h2>
          <p>
            React only handles the <strong>UI (View)</strong> part of the MVC
            architecture. For state management, routing, and backend
            communication, extra libraries (like{" "}
            <strong>Redux, React Router, Axios</strong>) are often used.
          </p>
        </li>

        <li>
          <h2 className="text-xl font-semibold">Strong Community & Ecosystem</h2>
          <p>
            React has a <strong>huge developer community</strong> and a{" "}
            <strong>rich ecosystem</strong> with libraries for routing, state
            management, testing, UI components, and more.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Introduction;
