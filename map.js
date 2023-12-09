
const fetchUserData = async()=>{
    const userIds = [1,2,3,4,5];
    const promises = userIds.map( async(id)=>{
        const response = await fetch(`https://swapi.dev/api/people/${id}`);
       // console.log(await response.json(),"response here")
        return response.json();
    });
    const userData = await Promise.all(promises);
    console.log(userData)
    return userData;
};
//fetchUserData();


//((async ()=>await fetchUserData())());

const fetchStarData = async() =>{
    let id = [1,2,3,4,5];
    let promises = id.map(async(item,index)=>{
        let response = await fetch(`https://swapi.dev/api/people/${item}`);
        return response.json();
    })
    const userData = await Promise.all(promises);
    console.log(userData)
}

//fetchStarData();

const fetchStarShipData =async()=>{
    let id = [1,2,3,4,5,6];
    let promises = id.map(async(item)=>{
        let response = await fetch(`https://swapi.dev/api/starships/${item}`);
        return response.json();
    })
    let userData = await Promise.all(promises);
    console.log(userData)
}
//fetchStarShipData();

//handling undefined or Empty elements:
const numbers = [1,2,,4,,6];
let reduceNumbers = numbers.reduce((acc,currentValue)=>{
    (typeof currentValue === 'number')?acc.push(currentValue):null;
    return acc;
},[]);
console.log(reduceNumbers)
// const doubled = numbers.map(num=>num!==undefined?num:delete num);
// console.log(doubled);

const temperatureInCelsius = [0,25,40,100];
const temperatureInFahrenheit = temperatureInCelsius.map(celsius=>celsius*9/5 + 32);
//console.log(temperatureInFahrenheit) //[ 32, 77, 104, 212 ]

//above method with reducer
const temp1 = [0,25,40,100];
const temp2 = temp1.reduce((acc,currentValue)=>{
    acc.push(currentValue=currentValue*9/5 +32);
    return acc
},[]);
console.log(temp2,"value here") //[ 32, 77, 104, 212 ] value here

//generating JSX -- one of the common use of .map method is generating JSX
const items = ['Apple','banana','orange'];
const itemList = items.map((item,index)=>(
    `<li key=${index}>${item}</li>`
));

console.log(itemList);

//the above example with reduce() method
const itemListReduce = items.reduce((acc,currentValue,index)=>{
    let str = `<li key=${index}>${currentValue}</li>`;
     acc.push(str);
     return acc
},[]);
console.log(itemListReduce);

//manipulating Object properties

const users = [
    {
        id:1, name:'Alice'
    },
    {
        id:2, name:'Niki'
    },
    {
        id:3, name:'Charlie'
    }
];

const userNames = users.map(user=>user.name);
console.log(userNames);

//the same above method using .reduce()

const usersReduce = [
    {
        id:1, name:'Alice'
    },
    {
        id:2, name:'Niki'
    },
    {
        id:3, name:'Charlie'
    }
];
const usersReducenames = usersReduce.reduce((acc,currentValue)=>{
    acc.push(currentValue=currentValue.name);
    return acc;
},[])
console.log(usersReducenames)

