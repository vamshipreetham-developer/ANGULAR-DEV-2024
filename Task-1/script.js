let peopleWithAge = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
    { name: 'Eve', age: 22 }
  ];
  
for (let i = 0; i < peopleWithAge.length; i++) {
    
    if (peopleWithAge[i].age > 30) {
    
      console.log(peopleWithAge[i].age);
    }
  }


  let objectsWithABCNames = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'Alex', age: 40 },
    { name: 'Beth', age: 22 },
    { name: 'Catherine', age: 27 }
  ];
  
  for (let i = 0; i < objectsWithABCNames.length; i++) {
    if (objectsWithABCNames[i].name.toLowerCase().startsWith('a')) {
      console.log(objectsWithABCNames[i]);
    }
  }
  