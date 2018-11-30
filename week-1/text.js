function Person(first, last, address, pay, hireDate, hireDay) {
    this.first = first;
    this.last = last;
    this.address = address;
    this.pay = pay;
    this.hireDate =  new Date().toLocaleDateString();
    this.hireDay = hireDate;
  }
  
  var Michael = new Person ('Michael','Avalos','4325 O St', 18, '01/22/2008');

  console.log('\n' + "First Name:" + Michael.first ,'\n' + "Last Name:"+ Michael.last,
  '\n' + "Address:" + Michael.address, '\n' + "Pay Rate:$" + Michael.pay, '\n' + "Date:" + Michael.hireDate
  , '\n' + "Hire Date:" + Michael.hireDay);