import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Table = ({ data, title = 'title' }) => {

  const [titles, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    setTitle(Object.keys(data[0]));
    data.map((item) => {
      const c = [];
      Object.keys(data[0]).map((t) => c.push(item[t]));
      console.log(c)
      
      setContent([c]);
      console.log(content)
    });
    /*     setTimeout(() => {
          console.log(content)
          console.log(titles)
        }, 5000); */

  }, []);

  return (
    <section className='table'>
      <h2 className='table__title'>{title}</h2>
      <button type='button'>New</button>
      <table className='table__content'>
        <thead className='table__content-head'>
          <tr>
            {
              titles.map((item) => <th>{item}</th>)
            }
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='table__content-body'>
          {
            {/* content.map((item) => <td>{item}</td>) */}
          }
        </tbody>
      </table>
    </section>
  );
};

export default Table;

/* {
  console.log(item);
  return (
    <>
      {
        titles.map((t) => <td>{item[t]}</td>)
      }
      <td>
        <Link to={`/${item.id}/view`}>
          <span className='material-icons'>
            visibility
          </span>
        </Link>
        <Link to={`/${item.id}/edit`}>
          <span className='material-icons'>
            create
          </span>
        </Link>
      </td>
    </>
  );
} */
