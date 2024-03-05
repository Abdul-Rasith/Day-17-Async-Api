var res = fetch("https://restcountries.com/v3.1/all")
.then((data) =>data.json()).then((data1)=>bar(data1))

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className ="row"

function bar(data1){
console.log(data1)
    for(var i=0; i<data1.length;i++){
        var col = document.createElement("div")
        col.className = "col-lg-4"
        col.innerHTML = `<div class="card text-center" style="width: 18rem;">
        <div class="card-header">${data1[i].name.common}</div>
        <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Capital:${data1[i].capital}</p>
          <p class="card-text">Region:${data1[i].region}</p>
          <p class="card-text">latlng:${data1[i].latlng}</p>
          <p class="card-text">Country Code:${data1[i].cca3}</p>
          <a href="#" class="btn btn-primary">Click for Weather</a>
        </div>
      </div>`
      row.append(col)
      container.append(row)
      document.body.append(container)

        var res = data1[i].latlng
        foo(...res)   
        
    }
}

function foo(lat,lon){
    var final_res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6d32bc5256f5580ac5debc60d60473d1`)
    .then((data2)=>data2.json()).then((data3)=>console.log(data3.main.temp))
}







  


 
// 