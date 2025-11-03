import express, { json } from "express";
import jwt from "jsonwebtoken";
import { Contentmodel, LinkModel, User } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { usermiddleware } from "./middleware.js";
import { random } from "./utils.js";
const app = express();
app.use(express.json());
app.post('/api/v1/signup', async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
   try {await User.create({
        username: username,
        password: password
    })
    res.json({
        message: "user signed up "
    })} catch(e){
        res.status(411).json({
            messsage: "User already exists"
        })
    }
});
app.post("/api/v1/signin", async (req,res) => {
 const username = req.body.username;
 const password = req.body.password;
 const existinguser = await User.findOne({
    username,
    password
 })
  if (existinguser) {
    const token = jwt.sign({
        id: existinguser._id
    }, JWT_PASSWORD)
    res.json({
        token
    })
 } else{
    res.status(403).json({
        message: "Incorrect credentials"
    })
 }
})
app.post("/api/v1/content", usermiddleware,async (req,res) => {
    const link = req.body.link;
    const type = req.body.type;
   await Contentmodel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })
     res.json({
        message: "content added"
    })
})
app.get("/api/v1/content", usermiddleware, async(req,res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await Contentmodel.find({
         userId: userId
    }).populate("userId" , "username")
    res.json({
        content
    })
})
app.delete("/api/v1/content", (req,res) => {

})
app.post("/api/v1/share", usermiddleware, async(req,res) => {
    try{
    const share = req.body.share;
    if(share){
        const hash = random(10);
        await LinkModel.findOneAndUpdate({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        },{
            upsert: true,
            new: true
        })
        return res.json({
            message: "/share/" + hash
        })
    } else{
       await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        })
    }
    res.json({
        message: "Share settings updated successfully"
    });} catch(e){
        console.error(e);
        return res.status(500).json({
            error: "Internal matter hai internally solve ho jayega"
        })
    }
});
app.get("/api/v1/sharelink/:sharelink", async (req,res) => {
    
    try {
        //@ts-ignore
    const hash = req.params.sharelink;
    const link = await LinkModel.findOne({
        hash
    });
    if (!link) {
        res.status(411).json({
            message: "so sorry incorrect input"
        })
        return;
    }
    
    const content = await Contentmodel.find({
        userId: link.userId
    })
    const user = await User.findOne({
        _id: link.userId
    })
    
    res.json({
        username: user?.username,
        content: content
    });
} catch(e){
    console.error(e);
    return res.status(500).json({
        error: "Internal server error"
    });
}
    
})
app.listen(3000); 