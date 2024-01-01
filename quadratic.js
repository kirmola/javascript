function quadratic(a, b, c) {

    let descriminant = (b * b) - (4 * a * c);

    if (descriminant > 0) {

        let r1 = ((-b) + Math.sqrt(descriminant)) / (2 * a)
        let r2 = ((-b) - Math.sqrt(descriminant)) / (2 * a)

        console.log(`Roots are ${r1} and ${r2}`);
    } else if (descriminant === 0) {

        let root = -b/(2*a);
    }
    else {
        console.log("No real root");
    }
}

quadratic(14, 25, 100)