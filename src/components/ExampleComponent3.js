import React, {useState} from 'react';

const ExampleComponent3 = () => {
  const [name, setName] = useState({firstName: '', lastName: ''});

  return (
    <div className="formContainer">
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({...name, firstName: e.target.value})}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({...name, lastName: e.target.value})}
        />
        <h2>First name is: {name.firstName}</h2>
        <h2>Last name is: {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
};

export default ExampleComponent3;
