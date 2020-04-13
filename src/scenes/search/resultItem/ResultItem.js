import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function ResultItem({ id, src, title, release_date, overview, vote_average }) {
  return (
    <Grid.Column>
      <Card as={Link} to={`movies/${id}`} fluid className="results__card">
        <Image src={src} dimmer wrapped ui={false} />
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

export default ResultItem;
