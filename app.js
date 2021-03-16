let express=require("express");
let app=express();
const port=5000;
const path=require('path');
let data = [
    {
    name: "Burt Lannister",
    age: 56,
    hobbies: ['reading', 'polo']
    },
    {
    name: "Tobe Nwige",
    age: 27,
    hobbies: ['writing', 'pressing flowers']
    },
    {
    name: "Miguel Atwood",
    age: undefined,
    hobbies: ['music', 'mediation']
    },
    {
    name: "Hieu Ngyen",
    age: 33,
    hobbies: undefined
    },
    {
    name: undefined,
    age: undefined,
    hobbies: undefined
    }
    ];
app.use('/public',express.static(path.join(__dirname,'/public')));

app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index",{
        title:" Welcome",
        Heading:"First  Express Application with EJS Templating Engine",
        data
    });
});

app.listen(port,()=>{
    console.log(`Application Server runing at Localhost:${port}`)
})
