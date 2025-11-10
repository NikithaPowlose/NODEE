let customerName = "Niki";
let customerComment = "Loved the pastries and the cozy atmosphere of the cafe!";

let review = {
  name: customerName,
  comment: customerComment
};

function displayThankYou(reviewObj) 
{
  let upperName = reviewObj.name.toUpperCase();
  let shortComment = reviewObj.comment.slice(0, 20);
  console.log(`Thank you, ${upperName}!`);
  console.log(`Your review: "${shortComment}..." has been recorded.`);
}

displayThankYou(review);
