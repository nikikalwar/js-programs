//executing a function after the current event loop iteration\
setImmediate(()=>{
    console.log("this executes after the current event loop iteration completes")
})

//Managing Execution order with setImmediate
console.log("first");
setImmediate(function(){
    console.log("this executes after current code block")
});

console.log("second")

//handling recursive operations
function recursiveOperation(count){
    if(count<=0){
        return
    }
    console.log("count",count);
    setImmediate(function(){
        recursiveOperation(count-1)
    })
}

recursiveOperation(5);

//migrating the call stack overflow with setImmediate
function recursiveOperation(count){
    debugger;
    if(count<=0){
        return ;
    }

    console.log();
    setImmediate(function(){
        recursiveOperation(count-1)
    })
}

recursiveOperation(1000); //avoids the maximum call stack size exceeded;

//improving responsiveness for UI rendering
function renderUI(){
    //update UI elements
    setImmediate(function(){
        console.log('UI rendering updated')
    })
}

renderUI();

//managing I/O operations

function performIOOperation(){
    //perform I/O operation completed
    setImmediate(function(){
        console.log("I/O operation completed")
    })
}

performIOOperation();


//mitigating stack call operation size limit exceeded
//also handling recursion operation

function recursiveOperation(count){
    if(count<=0){
        return 1;
    }
    console.log("count",count);
    setImmediate(function(){
        recursiveOperation(count-1)*count
    })

}

recursiveOperation(10000000);

