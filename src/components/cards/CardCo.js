import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BookModal from '../bookmodal/BookModal';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
  }
});

function CardCo({ image, title, desc, btn, walk, num, often, id }) {
  const classes = useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image={image}
            title=""
            style={{borderRadius: '8px 8px 0px 0px'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h6">
              {title}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="h2">
              {often}
            </Typography>
            <Typography gutterBottom variant="h6" component="h6">
              {walk}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {num}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <BookModal btn={btn} title={title} desc={desc} number={num} walk={walk}/>
         { often ? (<BookModal btn="Remove" title='Are you sure?' desc='Once you do this you cannot undo this' rmvID={id}/>)
         : (
           <>
           </>
         ) }
        </CardActions>
      </Card>
    )
}

export default CardCo
