import users from './users.js';

// Task - 1
const getUserNames = users.map(user => user.name);
 
  
console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
 


// Task - 2
  
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr] 

  

// Task - 3

const getUsersWithGender = (users, gender) => users.filter(user => user.gender ===gender).map(user =>user.name);
   
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Task - 4
const getInactiveUsers = users.filter(user => !user.isActive);
   
  console.log(getInactiveUsers); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

 
 // Task - 5
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
 
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
  

//   Task - 6
  const getUsersWithAge = (users, min, max) => users.filter(user => user.age>= min && user.age<= max);
 
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//   Task - 7
//   
const calculateTotalBalance = users => 
users.reduce((totalbalance, user) => totalbalance + user.balance, 0);


console.log(calculateTotalBalance(users)); // 20916

//   Task - 8
const getUsersWithFriend = (users, friendName) => 
users.filter(user => user.friends.includes(friendName)).map(user=>user.name);
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//   Task - 9

const getNamesSortedByFriendsCount = users => 
users.sort((prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length);
// users.sort(function (a, b){
//     return a.friends.length - b.friends.length;
// });
  
  console.log(getNamesSortedByFriendsCount(users));
//   [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


//   Task - 10


const getSortedUniqueSkills = users => users.reduce((acc, user) =>{
    acc.push(...user.skills);
    return acc;
},[])
    .filter((user,ind,users)=> users.indexOf(user)===ind)
    .sort();

  console.log(getSortedUniqueSkills(users));
//   [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


