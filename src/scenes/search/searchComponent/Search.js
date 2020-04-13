import React, { useState } from "react";
import { Search } from "semantic-ui-react";
import { debounce } from "lodash";
import * as Api from "api";

function SearchComponent({ setQuery }) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleResultSelect = (e, { result }) => {};

  const handleSearchChange = (e, { value }) => {
    setLoading(true);
    Api.Movies.search(value).then((res) => {
      setLoading(false);
      const { data } = res;
      const searchResults = data.results;
      setResults(searchResults);
    });
  };

  return (
    <Search
      icon="search"
      placeholder="Search..."
      onResultSelect={handleResultSelect}
      loading={loading}
      onSearchChange={debounce(handleSearchChange, 500, {
        leading: true,
      })}
      results={results}
    />
  );
}

export default SearchComponent;
