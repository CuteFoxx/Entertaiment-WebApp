const Search = ({
  placeholder,
  filterFunction,
}: {
  placeholder: string;
  filterFunction: Function;
}) => {
  return (
    <div className="search__wrapper">
      <input
        className="search"
        type="text"
        placeholder={placeholder}
        onChange={(e) => filterFunction(e.target.value)}
      />
    </div>
  );
};

export default Search;
