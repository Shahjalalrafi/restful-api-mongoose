const router = require('express').Router()
const { updatePosts, deletePosts, getIndividualPosts, postSinglePosts, getAllPosts } = require('../Controller/Posts')
const Post = require('../model/Posts')

// get all data
router.get('/',getAllPosts)

// post a data
router.post('/', postSinglePosts)

// get specific data
router.get('/:postId', getIndividualPosts)

// delete specific post
router.delete('/:postId', deletePosts)

router.patch('/:postId', updatePosts)

module.exports = router