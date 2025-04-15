import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  // State for markdown text
  const [markdown, setMarkdown] = useState("type markdown here");

  // Handler for text area changes
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      {/* Text area for markdown input */}
      <textarea
        value={markdown}
        onChange={handleChange}
        style={{ width: '100%', height: '200px', fontSize: '16px' }}
      />
      {/* Live preview of markdown */}
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

const data = [
    [
       { name: 'John', age: 25 },
       { name: 'Jane', age: 30 }
    ],
    [
       { name: 'Bob', age: 40 }
    ]
];

const names = data.flat().map(person => person.name);
console.log(names); // Output: ['John', 'Jane', 'Bob']