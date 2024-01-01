let primestatus;
// 5
function isPrime(number) {
    for (let i = 2; i < number; i++) {

        if (number % i == 0) {
            primestatus = false
            break
        }
        else {
            primestatus = true
        }
    }
    return primestatus
}

for (let i = 0; i < 100; i++) {
    console.log(i,"==>", isPrime(i));
    
}