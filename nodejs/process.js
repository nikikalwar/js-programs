const {spawn}= require('child_process');

//array to hold the child processes
const childProcesses = [];

//spawn 10 child processes
for(let i=1;i<=10;i++){
    const child = spawn('node',[`app${i}.js`]);
    child.stdout.on('data',()=>{
        console.log(`App ${i} output:${data}`)
    });
    childProcesses.push(child);
}

console.log(childProcesses);

// Merge Intervals
// // Example usage:
// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];  //[0][1]>[1][0] --merge, [2][1]<[3][0]-- dont merge
// console.log(mergeIntervals(intervals)); // Output: [[1, 6], [8, 10], [15, 18]];

const intervals = [[1, 3],[2, 6],[8, 10],[15, 18]];
    let length = intervals.length;
    let arr = [];
//console.log(intervals[0][1],intervals[1][0],) //outputs 3 and 2
for(let i =0;i<length;i++){
    if((i+1<length-1)&&(intervals[i][i+1]>intervals[i+1][i])){
        let item1 = intervals[i];
        let item2 = intervals[i+1];
        item1.pop();
        item2.shift();
        arr.push([...item1,...item2]);
        i++;
    }
    else {
        arr.push(intervals[i])
    }
}

console.log(arr,"arr here")
