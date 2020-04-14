import React from "react";
import { Grid } from "semantic-ui-react";
import defaultImage from "./not-found.png";
import ResultItem from "../resultItem";
import "./Results.scss";

const base_url = "http://image.tmdb.org/t/p/";
const backdrop_sizes = ["w300", "w780", "w1280", "original"];

function Results({ results }) {
  return (
    <Grid className="results" doubling columns={4}>
      {results.map(({ id, poster_path, ...rest }) => {
        const src = poster_path
          ? `${base_url}${backdrop_sizes[0]}/${poster_path}`
          : defaultImage;

        return <ResultItem key={id} id={id} src={src} {...rest} />;
      })}
    </Grid>
  );
}

export default Results;
