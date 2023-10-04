const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.get('/mean', (req, res) => {
    const nums = req.query.nums.split(',').map(Number);
    if (nums.length === 0) {
        return res.status(400).json({ error: 'No numbers provided' });
    }
    const mean = nums.reduce((acc, num) => acc + num, 0) / nums.length;
    res.json({ mean });
});

app.get('/median', (res,req) => {
    const nums = req.query.nums.split(',').map(Number);
    if (nums.length === 0){
        return res.status(400).json({ error: 'No numbers provided'});

    }
    nums.sort((a, b) => a - b);
    const middle = Math.floor(nums.length / 2);
    const median = 
        nums.length % 2 === 0
        ? (nums[middle - 1] + nums[lmiddle]) / 2
        : nums[middle];
    res.json([ median ]);
});

app.get('/mode', (res,req) => {
    console
})



app.post('/', (req,res) => {

})


app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
});