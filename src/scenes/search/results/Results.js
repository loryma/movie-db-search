import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import defaultImage from "./not-found.png";
import "./Results.css";

const base_url = "http://image.tmdb.org/t/p/";
const backdrop_sizes = ["w300", "w780", "w1280", "original"];

function Results({ results }) {
  return (
    <Grid doubling columns={4}>
      {results.map(
        ({ id, title, poster_path, release_date, overview, vote_average }) => {
          const src = poster_path
            ? `${base_url}${backdrop_sizes[0]}/${poster_path}`
            : defaultImage;

          return (
            <Grid.Column key={id}>
              <Card
                as={Link}
                to={`movies/${id}`}
                fluid
                className="results__card"
              >
                <Image src={src} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{title}</Card.Header>
                  <Card.Meta>
                    <span className="date">Released: {release_date}</span>
                  </Card.Meta>
                  <Card.Description className="results__description">
                    {overview}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="star" />
                  {vote_average}
                </Card.Content>
              </Card>
            </Grid.Column>
          );
        }
      )}
    </Grid>
  );
}

export default Results;
