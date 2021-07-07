const Post = require('../model/Posts')


// getAllData controller
exports.getAllPosts =  async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    }catch(err) {
        res.json({
            message: err
        })
    }
}

// post a singleData controller
exports.postSinglePosts =  async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try{
        const postData = await post.save()
        res.json(postData)        
    }catch(err) {
        res.json({
            message: err.message
        })
    }   
}

// Get specificData controller
exports.getIndividualPosts =  async (req, res) => {
    try {
        const specificPost = await Post.find({_id : req.params.postId})
        res.json(specificPost)
    }catch(err) {
        res.json({
            message: err
        })
    }
}


// delete controller
exports.deletePosts = async(req, res) => {
    try {
        const deletePost = await Post.deleteOne({_id: req.params.postId})
        res.json(deletePost)
    }catch(err) {
        res.json({
            message: err
        })
    }
}

// update controller
exports.updatePosts = async(req, res) => {
    try {
        const updatePost = await Post.updateOne({_id: req.params.postId}, { $set: { title: req.body.title } })
        res.json(updatePost)
    }catch(err) {
        res.json({
            message: err
        })
    }
}