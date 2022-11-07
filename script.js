async function countries(){
    try{
        const res =await fetch(
            "https://restcountries.com/v3.1/all"
        );
      function map(){
        wdata.region=="Australia"
      }
        const wdata= await res.json();
        data1=wdata(filter(wdata))
}catch(error){
    console.log("error")
}};
countries();
function filter(wdata){
    //Get all the countries from the Asia continent /region using the Filter function

    console.log("COUNTRIES IN ASIA");
    const data1 = wdata.filter(countries => countries.continents[0] === "Asia");
console.log(data1)
//Get all the countries with a population of less than 2 lakhs using Filter function
console.log("COUNTRIES IN MORE THAN LESS THAN TWO LAKHS POPULATION");
const data2 =wdata.filter(countries=>countries.population<=200000)
console.log(data2)
//Print the total population of countries using reduce function
console.log("TOTAL POPULATAION OF COUNTRIES");
const data4=wdata.map((e)=>e.population);
const data5 =data4.reduce(
    (s,t)=>s+t);
console.log(data5);
//Print the country which uses US Dollars as currency.
console.log("COUNTRIES IN USED USD");
let data6 = wdata.filter((dummy) => (dummy.currencies !== undefined))
let data7 = data6.filter((data) =>  {
    for (let key in data.currencies) {
        if(data.currencies[key].name === "United States dollar"){
      return data
      }
    }
    })
    console.log(data7)
    //Print the following details name, capital, flag using forEach function
    console.log("COUNTRIES OF NAME,CAPITAL,FLAG");
const data3=wdata.forEach(element => {
  const ouput=  "Name="+element.name.common + "| Capital="+element.capital[0] + "| Flag="+element.flags.svg
  console.log(ouput)
});
console.log(data3);
}
