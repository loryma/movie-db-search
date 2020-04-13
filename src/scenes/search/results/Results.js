import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";

const base_url = "http://image.tmdb.org/t/p/";
const backdrop_sizes = ["w300", "w780", "w1280", "original"];

function Results({ results }) {
  return (
    <Grid doubling columns={5}>
      {results.map(
        ({ id, title, poster_path, release_date, overview, vote_average }) => (
          <Grid.Column>
            <Card key={id}>
              <Image
                src={`${base_url}/${backdrop_sizes[0]}/${poster_path}`}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                  <span className="date">Released: {release_date}</span>
                </Card.Meta>
                <Card.Description>{overview}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="star" />
                  {vote_average}
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      )}
    </Grid>
  );
}

export default Results;
