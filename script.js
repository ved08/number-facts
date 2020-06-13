function showFact(){
let output = document.getElementById('output')
let input = document.getElementById('number');
fetch('http://numbersapi.com/' + input.value)
.then(res => res.text())
.then(resp => {
    if(input.value <= 100000 && input.value >= 0){
        output.textContent = resp
    }else output.textContent = 'Enter a smaller number';
})
}