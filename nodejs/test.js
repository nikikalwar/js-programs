let url = 'https://dummyjson.com/products';

String.prototype.fetchData = async function(url){
    let data = await fetch(url);
    let response = await data.json();
    let data2 = response.products.map(item=>{
        return {
            id:item.id,
            title:item.title
        }
    })
    console.log(data2);
    return data2;
}

 url.fetchData(url);

