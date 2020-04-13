import React, { useState } from "react";
import Search from "./searchComponent";
import Results from "./results";
import { Container } from "semantic-ui-react";

function SearchPage() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  return (
    <Container>
      <Search page={page} />
      <Results results={results} />
    </Container>
  );
}

export default SearchPage;
