import React from 'react';

const Search = () => {
  return (
    <form className='search spaced space_top_mg'>
      <input name='search' className='search__input spaced' type='text' />
      <button type='submit' className='search__button btn btn__primary btn__left'>
        <i className='material-icons'>
          search
        </i>
      </button>
      <app-button class='search__button' type='right' icon='search' color='primary-light' />
    </form>
  );
};

export default Search;
