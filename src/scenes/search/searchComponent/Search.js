import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "modules";
import { Search } from "semantic-ui-react";
import { debounce } from "lodash";
import * as Api from "api";

function SearchComponent({ setQuery, fetchMovies }) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleResultSelect = (e, { result }) => {
    fetchMovies(result.title);
  };

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

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (query) => dispatch(actions.fetchMovies(query)),
});

export default connect(undefined, mapDispatchToProps)(SearchComponent);
