import Post from '../models/post.model';
import User from '../models/user.model';
import  PostType from '../enums/postType'
import formidable from 'formidable';
import path from 'path';
import {generateHashedPassword, generateSalt} from '../utils/encryption';

//TODO : FINISH
export const getUserInfo = (req,res) => {
    User
        .findOne({username : req.params.username })
        .then(result => res.send(result))
        .catch(err => console.log(err))
}

export const updateUserInfo = (req, res) => {
    const salt = generateSalt();
    const passwordHash = generateHashedPassword(req.body.password, salt);
    let password = passwordHash;
    let username = req.body.username;
    let email  = req.body.email;

    User.
        findOneAndUpdate({username : req.params.username},
        {$set: {username: username, password: password, email: email}})
            .then(result => {
                res.status(200).json({message: 'success'});
             })
             .catch(err => {
                 res.send(err)
             });
}

export const getUserReadPosts = (req, res) => {
    User.
        findOne({username : req.params.username})
        .then(result => 
                Post
                    .find({_id :{ $in :  result.readPosts}})
                    .then(posts => res.send(posts))
                    .catch(err => console.log(err))
            )
        .catch(err => console.log(err))
 }
 
 export const getUserCurrentlyReadingPosts = (req, res) => {
    User.
        findOne({username : req.params.username})
        .then(result => 
                Post
                    .find({_id :{ $in :  result.currentlyReadingPosts}})
                    .then(posts => res.send(posts))
                    .catch(err => console.log(err))
            )
        .catch(err => console.log(err))
 }

 export const getUserWantToReadPosts = (req, res) => {
    User.
        findOne({username : req.params.username})
        .then(result => 
                Post
                    .find({_id :{ $in :  result.wantToReadPosts}})
                    .then(posts => res.send(posts))
                    .catch(err => console.log(err))
            )
        .catch(err => console.log(err))
 }