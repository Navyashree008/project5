function changeColor(){
    var container = document.getElementById("container1");
    var input = document.getElementById("input1");
    // console.log(input)
    container.style.backgroundColor = input.value ;
    input.value = null
    // console.log(container)
}
changeColor()
