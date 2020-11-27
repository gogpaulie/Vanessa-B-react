import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imageData from '../imgData/imageData';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 300,
    padding: '1rem',
  },
  button: {
    fontSize: '1.5rem',
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75vw',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  imgModal: {
    width: '100%',
  },
}));

export default function Projects2() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id='projects' className='projects'>
      <h1 className='projects__header'>Freelance Projects</h1>
      <p className='projects__info'>
        Contract freelance work with a focus on Twitch, digital marketing and
        business identity. In my free time I do traditional life drawing and
        freehand sketching.
      </p>
      <p className='projects__info'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        praesentium ex veniam soluta molestiae vitae est. Dolores animi in rem
        consequuntur autem architecto nihil ratione error? Et impedit ut
        nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        praesentium ex veniam soluta molestiae vitae est. Dolores animi in rem
        consequuntur autem architecto nihil ratione error? Et impedit ut
        nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        praesentium ex veniam soluta molestiae vitae est. Dolores animi in rem
        consequuntur autem architecto nihil ratione error? Et impedit ut
        nulla?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        praesentium ex veniam soluta molestiae vitae est. Dolores animi in rem
      </p>
      <h2 className='projects__category'>Twitch Avatars</h2>
      <Grid container className={classes.root} justify='center'>
        {imageData.map((image) => {
          if (image.category === 'avatar') {
            return (
              <Grid
                className={classes.card}
                item
                key={image.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                spacing={2}
              >
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='simple-modal-title'
                  aria-describedby='simple-modal-description'
                >
                  <div className={classes.paper}>
                    <img
                      className={classes.imgModal}
                      src={image.src}
                      alt={image.category}
                    />
                  </div>
                </Modal>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt={image.category}
                      image={image.src}
                      height='450'
                      title={image.category}
                      onClick={handleOpen}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h3' component='h2'>
                        Lizard
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Chip
                      className={classes.button}
                      icon={<FaceIcon />}
                      label='Primary clickable'
                      clickable
                      color='primary'
                      variant='outlined'
                    />
                  </CardActions>
                </Card>
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
      <h2 className='projects__category'>Twitch Panels</h2>
      <Grid container className={classes.root} justify='center'>
        {imageData.map((image) => {
          if (image.category === 'panel') {
            return (
              <Grid
                className={classes.card}
                item
                key={image.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                spacing={2}
              >
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='simple-modal-title'
                  aria-describedby='simple-modal-description'
                >
                  <div className={classes.paper}>
                    <img
                      className={classes.imgModal}
                      src={image.src}
                      alt={image.category}
                    />
                  </div>
                </Modal>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt={image.category}
                      image={image.src}
                      height='100%'
                      title={image.category}
                      onClick={handleOpen}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h3' component='h2'>
                        Lizard
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Chip
                      className={classes.button}
                      icon={<FaceIcon />}
                      label='Primary clickable'
                      clickable
                      color='primary'
                      variant='outlined'
                    />
                  </CardActions>
                </Card>
              </Grid>
            );
          }
          return null;
        })}
      </Grid>
    </div>
  );
}
