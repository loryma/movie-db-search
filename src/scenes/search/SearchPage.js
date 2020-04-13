import React, { useState } from "react";
import { connect } from "react-redux";
import Search from "./searchComponent";
import Results from "./results";
import { Container } from "semantic-ui-react";

function SearchPage({ results }) {
  const [page, setPage] = useState(1);

  return (
    <Container>
      <Search />
      <Results results={results} />
    </Container>
  );
}

const mapStateToProps = ({ search }) => ({ results: search.results });

export default connect(mapStateToProps)(SearchPage);
