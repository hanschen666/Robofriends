import React from "react";

const SearchBox = (props) => {
  const { searchChange } = props;
  return (
    <div className="pa2">
      <input
        className="pa3 ba bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
