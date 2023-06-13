import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className="socials">
      <a
        href="https://www.linkedin.com/in/nirmal-ahirwar-5068901a0/"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillLinkedin className="icon" />
      </a>
      <a
        href="https://leetcode.com/NirmalKAhirwar/"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillTwitterSquare className="icon" />
      </a>
      <a
        href="https://github.com/NirmalKAhirwar"
        target="_blank"
        rel="noopener noreferrer">
        <FaGithubSquare className="icon" />
      </a>
    </section>
  );
}

export default Handles
