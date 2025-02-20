// console.log("Before");

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

// Promise.all([promise]).then(function (result) {
//     console.log("Chal gya" + result)
// }).catch(function (result) {
//     console.log("Nhi chalega" + result)
// });

// const getAPI = fetch('https://api.github.com/users/hashimaliii')
// getAPI.then((res) => res.json())
// .then(profile => console.log(profile))
// .catch((err) => console.log(err.message))
// console.log("End")

// async function getGitData() {
//     const getAPI = fetch('https://api.github.com/users/hashimaliii')
//     const profile = (await getAPI).json()
//     console.log(profile)
// }

// getGitData()

// localStorage.setItem("githubURL", "https://api.github.com/users/hashimaliii")
// sessionStorage.setItem("githubURL", "https://api.github.com/users/hashimaliii")

// sessionStorage.clear()
// localStorage.clear()

// const users = [
//     { name: 'Hashim', age: 22 },
//     { name: 'Sufiyan', age: 21 },
// ]

// console.log(users)
// usersJSON = JSON.stringify(users)
// console.log(usersJSON)

// localStorage.setItem('classStudent', usersJSON)
// const usersPARSE = JSON.parse(localStorage.getItem('classStudent'))
// console.log(usersPARSE)

// Task
// Record Expenses
// Source: [text box]
// Amount:  [amount Text box]
// Spend Income Buttons

// Debit Balance:       Credit Balance
// [] green and plus     [] red and in minus
//          Total Amount [Rs. ]
// History