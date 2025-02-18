console.log("Before");

// 1
// function fetchUser() {
//     setTimeout(function () {
//         // console.log("I am inside");
//         return {
//             name: "Hashim",
//             age: "22"
//         }
//     }, 2000)
// }

// const returnUser = fetchUser()

// 2
// fetchUser(123, function (user) {
//     console.log(user);
//     return user
// })

// function fetchUser(userid, callback) {
//     setTimeout(function () {
//         const fetchedUser = {
//             id: userid,
//             name: "Hashim",
//             email: "Hashim@email.com",
//             age: 27
//         };
//         callback(fetchedUser);
//     }, 2000);
// }

// 3
// function sendEmail(userEmail, callback) {
//     setTimeout(function () {
//         const response = {
//             status: true
//         };
//         callback(response);
//     }, 3000);
// }

// // sendEmail("hashim@email.com", function (response) {
// //     console.log(response)
// // })

// sendEmail("hashim@email.com", function (response) {
//     console.log(response)
// })

// 4
// const promise = new Promise(function (resolve, reject) {
//     setTimeout(resolve(1), 2000);
// })
// console.log(promise.then(function (result) {
//     console.log("Chal gya" + result)
// }, function (result) {
//     console.log("Nhi chalega" + result)
// }))

// console.log(promise.then(function (result) {
//     console.log("Chal gya" + result)
// }).catch(function (result) {
//     console.log("Nhi chalega" + result)
// }))

const getAPI = fetch('https://api.github.com/user/hashimaliii')
getAPI.then((res) => console.log(res))
    .catch((err) => console.log(err.message))
console.log("End")