let url = 'https://api.nobelprize.org/2.1/nobelPrizes';
 //awardyear,category and fullname
 let data ;
 let returnedData;
 const fetchData = async() =>{
    let response = await fetch(url);
    data = await response.json();
    data = data.nobelPrizes;
    let formatted = data.map(item=>{  
        let fullName1 = item.laureates;
      //  console.log(...fullName1,"fullname here")
        let obj = fullName1
      //  console.log(obj[0].fullName?.en,"obj")
        return {
                awardyear:item.awardYear,
                category:item.category.en,
                fullname:obj[0].fullName?.en
            } 
    })
   returnedData = formatted;
   // console.log(returnedData)
   const createHtml = returnedData.map((item,index)=>(
    `<div class="row header-row"><div class="col">awardYear<div class="row">${item.awardyear}</div></div><div class="col">category<div class="row">${item.category}</div></div><div class="col">fullName<div class="row">${item.fullname}</div></div></div>`
 ))

 console.log(createHtml)
 }
 
  fetchData();

 
