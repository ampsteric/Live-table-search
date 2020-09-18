const express=require('express');
const app=express();
// const User=require('./PostSchema')
const fileUpload=require('express-fileupload');


app.use(fileUpload());

app.post('/upload',(req,res)=>{

            if(req.files===null){
                return res.status(400).json({
                    msg:'No file uploaded'
                });
            }

            const file=req.files.file
            file.mv(`${__dirname}/uploads/${file.name}`,
            err=>{
                if(err){
                    console.log(err);
                    return res.status(500).send(err);
                }
                res.json({
                    fileName:file.name,
                    filePath: `C:/Users/SHASHWAT/Desktop/Workspace/react-boiler-plate/backend/uploads/${file.name}`
                });
            });
});

app.listen(3002,()=>{
    console.log('server running on port 3001');
})

    
    //     try {
    //         const newPost = new User({
    //             image:req.body.image
    //             // user_id: req.user.id,
    //         });
    //         const savePost = await newPost.save();
    
    //         res.json(savePost);
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send("Server Error");
    //     }
    // }
    // );
    
    








// app.post('/post',(req,res)=>{

//     fileUpload.single('image')
//     // req.body.image=file.filename
    
//     //Adding post to db
//     // const { postContent } = req.body;

//     try {
//         const newPost = new User({
//             image:req.body.image
//             // user_id: req.user.id,
//         });
//         const savePost = await newPost.save();

//         res.json(savePost);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Server Error");
//     }
// }
// );

// })

// app.listen(3000,()=>{
//     console.log('server running on port 3000');
// })