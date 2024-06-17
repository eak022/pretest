import { useState } from 'react'
import data from './data';

function App() {
const [menuItems, setMenuItems] = useState(data);

  return (
    <>
      <div className="title">
        <h2>Grap Restaurant </h2>
      </div>

      <div className="input">
        <input type="text" />
      </div>

      <div className="restaurant">
        {data.map((item) => {
          const { id, name, img, rtype} = item;
          return (
            <article className="menu-item" key={id}>
              <img src={img} alt={name} className="photo" />
              <div className="item-info">
                <header>
                  <h3>{name}</h3>
                </header>
                <p className="item-text">{rtype}</p>
              </div>
              <button type="button" class="btn btn-primary">
               Order now
              </button>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default App
