let click = 1;

function cekFizzBuzz(){
    let number = document.getElementById("inputNumber").value;
    let text = document.createElement("p");
    let result;

    if(click == 1){
        result = number;
    }else{
        if(number == 0){
            result = "Invalid Number"; 
        }else if(number%5 == 0 && number%3 == 0){
            result = "FizzBuzz!";
        }else if(number%3 == 0){
            result = "Buzz!";
        }else if(number%5 == 0){
            result = "Fizz!";
        }else{
            result = number;
        }
    }
    
    // document.getElementById("result").innerHTML = result;

    text.innerText = result;
    document.body.appendChild(text);

    console.log(number);
    // console.log(click);
    click += 1;
}
