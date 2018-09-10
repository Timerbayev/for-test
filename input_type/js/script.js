let type_input = prompt("Please, enter type of input");
type_input = type_input.toLowerCase();

switch (type_input) {
	 case "email":
	 	   console.log('there is input type of ' + type_input );
	 	   break;
	 case "number":
	       console.log('there is input type of ' + type_input );
	       break;
	 case "date":
	       console.log('there is input type of ' + type_input );
	       break;
	 case "radio":
	       console.log('there is input type of ' + type_input );
	       break;	   
	 default:
	       console.log('there is not input type of ' + type_input );
	       break;   
}		   