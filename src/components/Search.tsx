const Search = ({
  placeholder,
  filterFunction,
  setQuery,
}: {
  placeholder: string;
  filterFunction: Function;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
}) => {
  if (setQuery) {
    return (
      <div className="search__wrapper">
        <input
          className="search"
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            filterFunction(e.target.value);
            setQuery(e.target.value);
          }}
        />
      </div>
    );
  }
};

export default Search;
