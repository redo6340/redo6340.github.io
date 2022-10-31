const employees = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
      {
        "firstName" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raiseEligible" : true
        
      },
      {
        "firstName" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raiseEligible" : true
        
      },
      {
        "firstName" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary" : 21200,
        "raiseEligible" : false
        
      },
      {
        "firstName" : "Anna",
        "department" : "Tech",
        "designation" : "Executive",
        "salary" : 25600,
        "raiseEligible" : false
        
      }
    ]
  }


  function populateHeader(obj) {
    let header = document.querySelector('header');
    let myH1 = document.createElement('h1');
    myH1.textContent = obj.companyName;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `Website: ${obj.website} // Department: ${obj.formed}`;
    header.appendChild(myPara);
  }

  function populateHeroes(obj) {
    const section = document.querySelector('section');
    const employee = obj.employees;

    for (const employee of employees) {
      const myPara1 = document.createElement('p');
      myPara1.textContent = `The total salaries of all employees is: ${employee.salary}`;
      myArticle.appendChild(myPara1);
      
    }
  }

  update();