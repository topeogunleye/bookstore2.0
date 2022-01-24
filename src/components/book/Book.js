import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';

function Book({ category, title, id }) {
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(deleteBook(id));
  };

  return (
    <li className="bg-white h-40 m-auto py-8 px-8 mb-8 flex justify-between w-4/5">
      <div className="">
        <p className="text-gray-500 font-bold text-sm">{title}</p>
        <p className="text-xl font-bold">{category}</p>
        <div className="grid grid-cols-3 max-w-xs divide-x text-sm text-blue-400">
          <button type="button" className="pr-3">
            Comments
          </button>
          <button type="button" onClick={removeBookFromStore} className="">
            Remove
          </button>
          <button type="button" className="">
            Edit
          </button>
        </div>
      </div>

      <div className="flex items-center border-r-2 my-4 mr-sm pr-28">
        <div className="rotate-45 border-4 border-l-neutral-300 border-sky-700 w-14 h-14 rounded-full" />
        <div className="flex flex-col ml-3">
          <span>75%</span>
          <span className="text-xs text-gray-600">Completed</span>
        </div>
      </div>

      <div className="flex flex-col tracking-wider gap-2">
        <span className="text-xs text-gray-400">CURRENT CHAPTER</span>
        <span className="tracking-normal text-sm">Introduction</span>
        <button
          type="button"
          className="bg-blue-400 text-white font-medium text-xs px-6 py-1 rounded-sm mt-4"
        >
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
}

// book prop validation
Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

// An object taking on a particular shape
export default Book;
