// numbers = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]*2);    
// }

// console.log(numbers.length);
// console.log(numbers.at(2))



// array map function
// ----------------> its nothing but perform action for each element with the help of callback function

// a = [2,3,4,5,6,7,8,8]
// console.log(
//     a.map(
//         (element)=>{
//             return element*element
//         }
//     )
// );



// a = Array.from("This is a sample string")

// console.log(a.map(
//     (cbf)=>{
//         return cbf.concat(`+${cbf}`)
//     }
// ));




// array filter mehod is used to filter anything from array based on conditional statements


// let mix_people = [14,23,4,35,76,64,3,54,56,7,78]

// allowed_to_drink = mix_people.filter(
//     (age)=>{
//         return age>18
//     }
// )


// console.log(allowed_to_drink);



// array reduce method reduce array to single value


// let marks = [1,2,3,4,5,6,7,8,9,10]
// let marks_sum = marks.reduce(
//     (prev, next)=>{
//         return prev+next
//     }
// )
// console.log(marks_sum);



// array every method check condition for every element of array


people = [43,54,654,657,67,867,867,97878,977]

all_gt_18 = people.every(
    (age)=>{
        return age>18
    }
)
console.log(all_gt_18);