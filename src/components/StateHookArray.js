import React, {useState} from 'react';

// with arrays use map
const StateHookArray = () => {
  const [items, setItems] = useState([
    {id: 1, listItem: 'go on a holiday'},
    {id: 2, listItem: 'go hiking'},
    {id: 3, listItem: 'learn React Hooks'},
  ]);

  // remove items
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addItem = () => {
    setItems([
      ...items,
      {
        id: 4,
        listItem: 'meet deadlines',
      },
    ]);
  };

  return (
    <div className="ui container">
      <br />
      <div className="ui two column grid">
        {items.map((item) => {
          const {id, listItem} = item;
          return (
            <div key={id} className="ui row">
              <h4 className="column">{listItem}</h4>
              <button className="four wide column btn" onClick={() => removeItem(id)}>
                remove
              </button>
            </div>
          );
        })}
      </div>
        <button className="btn" onClick={() => setItems([])}>
          Delete all
        </button>
        <button className="btn" onClick={() => addItem()}>
          Add Item
        </button>
      </div>
    
  );
};

export default StateHookArray;
