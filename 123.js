
const customers = [
  ["cust_1", "event 1", 7000],
  ["cust_2", "event 2", 5000],
  ["cust_1", "event 3", 3000],
  ["cust_2", "event 4", 2000],
  ["cust_1", "event 5", 1000],
  ["cust_3", "event 6", 8000],
];

/**
 output ->
    cust_1:(3,11000)
    cust_2:(2,7000)
    cust_3:(1,8000)
*/

const custObj = {}; // {cust_1: {events: [event 1, event 3], total: 8000}}

for (let customer of customers) {
  const [name, , amount] = customer;

  if (!custObj[name]) {
    custObj[name] = { total: amount, eventCount: 1 };
  } else {
    custObj[name].total = custObj[name].total + amount;
    custObj[name].eventCount = custObj[name].eventCount + 1;
  }
}
// {"cust_1":{"total":11000,"eventCount":3},"cust_2":{"total":7000,"eventCount":2},"cust_3":{"total":8000,"eventCount":1}}
// [[cust_1, {"total":11000,"eventCount":3}]]
// const str = '';
const abc = 123;
Object.entries(custObj).forEach((arr) => {
    console.log(`${arr[0]}:(${arr[1].eventCount},${arr[1].total })`);
//   console.log(arr[0] + ":(" + arr[1].eventCount + "," + arr[1].total + ")");
});