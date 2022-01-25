import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white border border-stone-200 shadow divide-y divide-stone-200">
      <div className="py-8 px-28  w-screen mx-auto md:flex gap-10 items-center justify-between space-x-4 space-y-4 md:space-y-0">
        <div className="flex justify-between w-5/12 items-center">
          <Link to="/">
            <h2 className="text-3xl text-blue-400 font-bold">Bookstore CMS</h2>
          </Link>

          <div className="w-auto text-sm flex gap-10">
            <Link to="/">BOOKS</Link>
            <Link to="/categories">CATEGORIES</Link>
          </div>
        </div>

        <div className="text-blue-400 self-end">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  );
}

export default Header;
