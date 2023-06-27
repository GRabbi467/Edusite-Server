const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/Categories.json');
const course = require('./Data/Course.json');



app.get('/',(req,res)=>{
    res.send('My Edu Server Running')
})
app.get('/course-categories',(req,res)=>{
  res.send(categories)
})

app.get('/category/:id',(req,res)=>{
  const id = req.params.id;
  if( id === "00"){
    res.send(course);
  }
  const categoryCourse = course.filter( c => c.category_id === id);
  res.send(categoryCourse);
})

app.get('/course/:id',(req,res)=>{
  const id = req.params.id;
  const selectedCourse = course.find( c => c._id === id);
  res.send(selectedCourse)
})

app.listen(port, () => {
  console.log(`Running on port  ${port}`)
})