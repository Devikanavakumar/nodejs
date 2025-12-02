var customerName= "Bob";
var reviewComment="great service";
let review={name:customerName,comment:reviewComment};
function printReview(reviewObject){
    let name=reviewObject.name.toUpperCase();
    let comment=reviewObject.comment.substring(0,20);
    console.log(`Thank you, ${name}, for your review!`);
    console.log(`Your comment (first 20 characters):${comment}`);
}
printReview(review);