function changeColor(){
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var container = document.getElementById("container1");
    console.log("rgb("+input1.value+","+input2.value+","+input3.value+")");
    container.style.backgroundColor = "rgb("+input1.value+","+input2.value+","+input3.value+")";
    input1.value = null
    input2.value = null
    input3.value = null
    console.log(container)
}
changeColor()

