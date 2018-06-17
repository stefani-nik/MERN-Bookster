import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Rating, Button, Divider, Grid, Header, Label } from 'semantic-ui-react';

const NewPost = (props) => {
        const date = props.date.substring(0, 10);
        return(
            <Grid.Column>
                
            <Image as={ Link } to={props.detailsNavigation} src={props.imageUrl} alt="" size="small" aligned="center" bordered/>
            <div>
                <div>
                    <h1>
                        <Header className='book-title' as={Link} to={props.detailsNavigation}>{props.title}<br/> by <i className='book-author'>{props.author}</i></Header>
                    </h1>
                </div>
                <div className='book-date'>
                <Label className='date-tag' as='a' color='blue'>
                      Posted on {date}
                </Label>
                </div>
                <div className='learn-more-btn'>
                    <Button as={Link} to={props.detailsNavigation} basic color='blue'>Learn More</Button>
                </div>
            </div>
        </Grid.Column>
    )
};

NewPost.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
};

export default NewPost;