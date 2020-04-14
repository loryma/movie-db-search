import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Divider, Image, Header, Grid } from "semantic-ui-react";
import Menu from "shared/menu";
import * as Api from "api";
import { formatRuntime } from "utils";
import defaultImage from "./not-found.png";
import "./Movie.scss";

const base_url = "http://image.tmdb.org/t/p/";
const backdrop_sizes = ["w300", "w780", "w1280", "original"];

function Movie() {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    release_date: "",
    genres: [],
    overview: "",
    runtime: "",
  });
  let src = "";
  let duration = "";
  let date = "";

  useEffect(() => {
    if (id) {
      Api.Movies.get(id)
        .then(({ data }) => setData(data))
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  if (data) {
    src = data.poster_path
      ? `${base_url}${backdrop_sizes[1]}/${data.poster_path}`
      : defaultImage;

    if (data.runtime) {
      duration = formatRuntime(data.runtime);
    }
    if (data.release_date) {
      date = `(${data.release_date.slice(0, 4)})`;
    }
  }

  return (
    <>
      <Menu />
      <Container>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Image size="large" src={src} />
          </Grid.Column>

          <Grid.Column>
            <Header>
              {data.title} {date}
            </Header>
            <div className="movie__info info">
              <div className="movie__duration info__item">{duration}</div>
              {data.genres.map((genre) => (
                <div className="movie__genre info__item" key={genre.name}>
                  {genre.name}
                </div>
              ))}
            </div>
            <p>{data.overview}</p>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}

export default Movie;
