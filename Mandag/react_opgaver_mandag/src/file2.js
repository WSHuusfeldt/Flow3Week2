export default {
  firstName: "Kurt",
  lastName: "Wonnegut",
  gender: "Male",
  email: "kurt@wonnegut.dk"
};

export const males = ["Peter", "Jan"];
export const females = ["Janne", "Sarah"];

console.log(...males, ...females); //Peter Jan Janne Sarah
console.log(...males, "Kurt", "Helle", ...females, "Tina");

export const names = [
  {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender: "Male",
    email: "k@wonnegut.dk",
    phone: "12345"
  },
  {
    firstName: "Jane",
    lastName: "Wonnegut",
    gender: "female",
    email: "j@wonnegut.dk",
    phone: "12345"
  },
  {
    firstName: "ib",
    lastName: "Wonnegut",
    gender: "Male",
    email: "i@wonnegut.dk",
    phone: "12345"
  }
];
