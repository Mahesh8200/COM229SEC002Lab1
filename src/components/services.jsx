export default function Services() {
    return (
      <div className="flex justify-center items-center h-[100vh] bg-white shadow-md">
        <div className="flex max-w-5xl p-10 gap-12 justify-between bg-white shadow-md">
          <h2 className="text-3xl font-bold mb-5 justify-between">Services</h2>
  
          <ul className="list-disc w-1/3 justify-between">
            <li>FrontEnd Development</li>
            <li>Back-end Development</li>
            <li>Full Stack Development</li>
            <li>Programming and Scripting</li>
            <li>Application Testing</li>
          </ul>
          <ul className="list-disc w-1/3 justify-between">
            <li>Version Control and Collaboration</li>
            <li>Security and Performance Optimization </li>
            <li>Architecture and Design</li>
            <li>Project Management </li>
            <li>Code Quality and Best Practices</li>
          </ul>
          <ul className="list-disc w-1/3 justify-between">
            <li>Performance Optimization</li>
            <li>Security Oversight</li>
            <li>Continuous Improvement</li>
            <li>Troubleshooting and Debugging</li>
            <li>Documentation and Knowledge Sharing</li>
          </ul>
        </div>
      </div>
    );
  }
  