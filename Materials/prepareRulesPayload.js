  /************ Define Vocabulary ******************/
  var Vocabulary = [{
  	"OrderDetails": {
		"EmployeeName": $.context.emp.name,
		"EmployeeRole": $.context.emp.role,
		"EmployeeRegion": $.context.emp.region,
		"ProductType": $.context.prod.category,
		"ProductCost": $.context.prod.cost
  	}
  }];
  
  var rulesPayload = {
  	"RuleServiceId": "6330200565af4367a679ec33c92dea9d",
  	"Vocabulary": Vocabulary
  };
  
  $.context.rulesPayload = rulesPayload;
  
  /************ Enhance Workflow Context for additional attributes ****************/
  var attributes = {
  	"OrderDetails": {
		"EmployeeName": $.context.emp.name,
		"EmployeeRole": $.context.emp.role,
		"EmployeeRegion": $.context.emp.region,
		"ProductType": $.context.prod.category,
		"ProductCost": $.context.prod.cost
  	}
  };
  
  $.context.attributes = attributes;