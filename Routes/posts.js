const router = require('express').Router()
const { updatePosts, deletePosts, getIndividualPosts, postSinglePosts, getAllPosts } = require('../Controller/Posts')
const Post = require('../model/Posts')

const multer = require('multer')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multer({storage: fileStorageEngine})

// get all data
router.get('/',getAllPosts)

// post a data
router.post('/', upload.single('image') ,(req, res) => {
    console.log(req.file)
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        postImage: req.file.path
    })
    post.save()
    .then(result => {
        console.log(result)
        res.status(201).json({
            message: 'post created',
            createdPost: {
                title: result.title,
                description: result.description,
                _id: result._id,
                request: {
                    type: 'GET',
                    url: "http://localhost:5000/" + result.postImage
                }
            }
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            message: err
        })
    })
})

// get specific data
router.get('/:postId', getIndividualPosts)

// delete specific post
router.delete('/:postId', deletePosts)

router.patch('/:postId', updatePosts)

module.exports = router