const employee = {
    name: "value1", streetAddress: "value2"}
    
    function updateEmployeeWithKeyAndValue(employee, streetAddress, value2) {
        const newObj = {...employee}
        newObj[streetAddress] = value2 
        return newObj
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value2) {
       const newObj = employee
        newObj[streetAddress] = value2 
        return newObj
    }

    function  deleteFromEmployeeByKey(employee, name) {
       const newObj = {...employee}
        delete newObj.name
        return newObj
    }

    function destructivelyDeleteFromEmployeeByKey(employee, name) {
       const newObj = employee
       delete newObj.name
      return newObj 
    }