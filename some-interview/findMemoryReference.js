const user = {name:"arthur"};
const users = [user,{name:"arthur"},{name:"joe"},user];
let someUser = user;

function* generator(){
    while(true){
        const random =  Math.random().toString(16).slice(2,10);
        yield `0x${random}`
    }
}

const preload = (knowObjects,refs,generate) => (reference = false) => {
    if(reference){
        return refs;
    } else {
        return object => {
            let address;
            if(knowObjects.has(object)){
                address = knowObjects.get(object);
            }
            else {
                address = generate.next().value;
                knowObjects.set(object,address);
                refs[address] = object;
            }
            return address;
        }
    }
}

const setup = preload(new Map(),{}, generator());
const findRef = setup(false);

const array = users.map(u=>findRef(u));

console.log(array,"arra");

let data;
for(const u in user){
  data=findRef(u)
}
let someData;
for(const u in someUser){
    someData = findRef(u)
}

console.log(data,"arrray",someData)
