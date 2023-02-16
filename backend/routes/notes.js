const express=require('express');
const Post=require('../models/Post');
const { body, validationResult } = require('express-validator');
const router=express.Router()


// ROUTE 1: Fetch Alll Post of a user using: Get "/api/note/fetchallpost".
router.get('/fetchallpost', async (req, res)=>{
    try {
        const posts= await Post.find();
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Create a new Post using: POST "/api/Note/addpost". 
router.post('/addpost', [
    body('posti', 'Enter a valid post').isLength({ min: 3 }),
    ], async (req, res) => {
    try {
            // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {posti,comment}=req.body;

    const post = new Post({
        posti,comment
    })
    const savedNote = await post.save()

    res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
  
// // ROUTE 3: Update existing note using: PUT "/api/note/updatepost". login required

router.put('/updatepost/:id', async (req, res) => {
    try {
        

        const{posti,comment}=req.body;
        //Creaing a NewNot Obj
        const newNote={};
        if(posti){newNote.posti=posti};
        if(comment){newNote.comment=comment};

        //Find the NOte and Update it

        let post = await Post.findById(req.params.id);
        if(!post){return res.status(404).send("Not Found")}

        post = await Post.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})

        res.send(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    })


    // ROUTE 3: Delete existing post using: DELETE "/api/note/updatepost". login required

    router.delete('/deletepost/:id', async (req, res) => {
        try {
            
        //Find the NOte and Update it

        let post = await Post.findById(req.params.id);
        if(!post){return res.status(404).send("Not Found")}

        post = await Post.findByIdAndDelete(req.params.id)

        res.send({"Success":"Note is Deleted",post:post});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    })
module.exports = router