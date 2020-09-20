import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    Width: 345,
    Height: 345,
    marginTop: 25,
  },
  user: {
      display: 'flex',
      '& > *': {
        margin: 5,
      },
  },
});

export default function Post({ postOwner, postText, postImage }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={postImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={classes.user}>
            <Avatar alt="Remy Sharp" src={postOwner.picture} />
            <Typography gutterBottom variant="h5" component="h2">
                {`${postOwner.firstName} ${postOwner.lastName}`}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
              {postText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}