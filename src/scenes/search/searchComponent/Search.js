import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "modules";
import { Search } from "semantic-ui-react";
import { debounce } from "lodash";
import * as Api from "api";
import "./Search.scss";

function SearchComponent({ setQuery, fetchMovies, query }) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleResultSelect = (e, { result }) => {
    fetchMovies(result.title);
    setQuery(result.title);
  };

  const handleSearchChange = (e, { value }) => {
    setLoading(true);
    if (value.length < 1) setLoading(false);

    Api.Movies.search(value).then((res) => {
      setLoading(false);
      const { data } = res;
      const searchResults = data.results;
      setResults(searchResults);
    });
  };

  return (
    <Search
      size="large"
      className="search__input"
      icon="search"
      placeholder="Search..."
      onResultSelect={handleResultSelect}
      loading={loading}
      onSearchChange={debounce(handleSearchChange, 500, {
        leading: true,
      })}
      defaultValue={query}
      results={results}
    />
  );
}

const mapStateToProps = ({ search }) => ({ query: search.query });

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (query) => dispatch(actions.fetchMovies(query)),
  setQuery: (query) => dispatch(actions.setQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
