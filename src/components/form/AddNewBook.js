import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../../redux/books/books';
import Example from './DropDown';
import Input from './Input';

function AddNewBook() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category: 'Action',
    };
    dispatch(postBook(newBook));

    setCategory('');
    setTitle('');
  };

  return (
    <>
      <h2 className="font-bold tracking-wider text-gray-500 px-16">
        ADD NEW BOOK
      </h2>
      <form className="grid grid-cols-3 gap-0 space-x-4 space-y-4 md:space-y-0 py-8 px-16 mb-8">
        <Input
          title={title}
          handleTitle={handleTitle}
          className="h-9 py-0 placeholder:text-gray-400 w-full"
        />
        <Example
          handleCategory={handleCategory}
          category={category}
          className="h-9 py-0 pl-3 pr-12 text-gray-400 w-52"
        />

        <button
          type="submit"
          onClick={submitBookToStore}
          className="bg-blue-400 text-white px-4 py-2 flex-none"
        >
          Add Book
        </button>
      </form>
    </>
  );
}

export default AddNewBook;
