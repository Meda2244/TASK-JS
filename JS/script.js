var ALLBtn = document.querySelectorAll(".btn")
var content = document.querySelector("#content")
var showprice = document.querySelector("#showprice")
var price = document.querySelector("#price")
var del = document.querySelector("#del")
var totalprice = 0

ALLBtn.forEach(function(item){
      item.onclick = function(){
        content.innerHTML += item.getAttribute("product")+"<br>"
        totalprice += +(item.getAttribute("price"))

        if(content.innerHTML != ""){
            showprice. style .display = "block"
            showprice. style .margin = "auto"
            showprice. style .backgroundColor = "#D2B48C"
             showprice. style .color = "#fff"
              showprice. style .width = "140px"
              showprice. style .height = "40px"

              del .style .display = "block"
              del. style .margin = "auto"
            del. style .backgroundColor = "#D2B48C"
             del. style .color = "#fff"
              del. style .width = "140px"
              del. style .height = "40px"
        }
    }
})
showprice.onclick = function(){
    price.innerHTML = totalprice
} 
del .onclick = function(){
    content.innerHTML = ""
    price.innerHTML = totalprice = 0
}