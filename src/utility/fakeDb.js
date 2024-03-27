// // use local storage to manage job data

// const addToDb = id => {
//     let readBooks = getReadBooks();

//     // add quantity
//     const quantity = readBooks[id];
//     if (quantity) {
//         const newQuantity = quantity + 1;
//         readBooks[id] = newQuantity;
//     }
//     else {
//         readBooks[id] = 1;
//     }
//     localStorage.setItem('read-books', JSON.stringify(readBooks));
// }

// const getReadBooks = () => {
//     let readBooks = {};

//     //get the applied job from local storage
//     const storedJobs = localStorage.getItem('read-books');
//     if (storedJobs) {
//         readBooks = JSON.parse(storedJobs);
//     }
//     return readBooks;
// }

// export { addToDb, getReadBooks }