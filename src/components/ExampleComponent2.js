import React, {useState} from 'react';

// with arrays use map
const ExampleComponent2 = () => {
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
        listItem: 'finish deadlines',
      },
    ]);
  };

  return (
    <>
      {items.map((item) => {
        const {id, listItem} = item;
        return (
          <div key={id} className="item">
            <h4>{listItem}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setItems([])}>
        Delete all
      </button>
      <button className="btn" onClick={() => addItem()}>
        Add Item
      </button>
    </>
  );
};

export default ExampleComponent2;
