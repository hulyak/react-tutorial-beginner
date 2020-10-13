import React, {useState} from 'react';

const ExampleComponent = () => {
  const [title, setTitle] = useState('hello world');

  console.log(useState());

  const handleClick = () => {
    setTitle('change my title');
  };

  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <button type="button" onClick={handleClick} className="btn">
          Change title
        </button>
      </div>
    </>
  );
};

export default ExampleComponent;
