const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  
  const names = ["a", "b", "c", "d", "e"]
  const prices = [1, 2, 3, 4, 5]
  const occupations = ["teacher", "programmer", "driver", "gardener"] 

 function random(max) {
    return Math.floor(Math.random() * max);
    }

function getRandomElement(array) {
 return array[random(array.length)]
}
function generateRandomFreelancer() {
   return {name: getRandomElement(names), 
      price: getRandomElement(prices),
      occupation: getRandomElement(occupations),
   };
}
function renderJobs() {
   const table = document.getElementById("table1");
   table.innerHTML = "";

   freelancers.forEach((member) => {
      const row = document.createElement("tr");
      row.innerHTML = 
      `<td>${member.name}</td>
      <td>${member.price}</td>
      <td>${member.occupation}</td>`
      table.appendChild(row);
   })
}
renderJobs()

function addFreelancer() {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer)
   renderJobs();
}

function calculateAveragePrice() {
   const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
   const averagePriceElement = document.getElementById("averagePrice");
   return total / freelancers.length;
}

renderJobs()


  const addfreelancersIntervalId = setInterval(addFreelancer, 5000);
//   addfreelancersIntervalId()