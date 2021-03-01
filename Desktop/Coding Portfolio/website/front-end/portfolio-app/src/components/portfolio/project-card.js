import React from 'react';

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Icons
import { ImGithub } from 'react-icons/im';


//Styled-components
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    maxWidth: 650,
    height: "65vh",
    borderRadius: 0,
  },
});

const IconWrapper = styled.a`
 z-index: 10;
 color: black;
 cursor: pointer;
 &:visited {
  color: black;
  
 }
 &:active {
  color: black;
 }
`;

export default function ImgMediaCard({Project}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={Project.name}
          height="340"
          image={Project.image[0]}
          title={Project.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="black">
        Link (deployment in progress)
        </Button>
        <IconWrapper>
        <ImGithub />
        </IconWrapper>
      </CardActions>
    </Card>
  );
}