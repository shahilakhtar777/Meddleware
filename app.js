const express =require("express");
const app = express(); 

// app.use((req, res, next)=>{
//     console.log("Hi, I am 1st middleware");
//      next();
   
// });
 
// app.use((req, res, next)=>{
//     console.log("Hi, I am 2nd middleware");
//     next();
    
// });


// logger
    // app.use((req,res, next)=>{
    //     req.time = Date.now();
    //     console.log(req.method,req.hostname, req.path, req.time);
    //     next();
    // });

        const checkToken= (req,res,next)=>{
            let{ token} = req.query;
            if (token === "giveaccess"){
                next();
            }
            throw new Error("ACCESS DENITED !");
        };

        app.get("/random", (req,res)=>{
    res.send("this is random page");
})


        app.get("/err", (req,res)=>{
            abcd=abcd;
        });

        app.use((err, req,res, next) =>{
            console.log("------ERROR-----");
            next();   
        });

    app.use((req, res, next)=>{
        console.log("I am only for random");
        next();
    });

    app.get("/api", checkToken,(req,res)=>{
        res.send("data");
    });

app.get("/",(req,res)=>{
    res.send("HI, I am root." );
});



app.listen(8080,()=>{
    console.log("server listening to port 8080");
});  