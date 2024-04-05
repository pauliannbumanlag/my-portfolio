import React from "react";

const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li><a href="https://your-project-1.com" className="text-indigo-600 hover:underline">Project 1</a></li>
        <li><a href="https://your-project-2.com" className="text-indigo-600 hover:underline">Project 2</a></li>
        <li><a href="https://your-project-3.com" className="text-indigo-600 hover:underline">Project 3</a></li>
      </ul>
    </div>
  );
};

export  default Projects;