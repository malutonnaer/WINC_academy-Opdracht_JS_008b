// const getBouncerReaction = function(
//     maxVisitors,
//     currentVisitors,
//     ageOfPotentialVisitor
// ) {
//     if (ageOfPotentialVisitor < 18) {
//         return "this is a club for adults";
//     }

//     if (currentVisitors >= maxVisitors ) {
//         return "it's too busy now, come back later";
//     } else {
//         return "come in";
//     }
// };

// console.log(getBouncerReaction(2000, 2001, 19));

const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) return "this is a club for adults";
    if (currentVisitors >= maxVisitors ) return "it's too busy now, come back later";
    else return "come in";   
};

console.log(getBouncerReaction(2000 , 1001 , 17 ));

