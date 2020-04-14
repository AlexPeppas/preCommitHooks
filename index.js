const args = process.argv.slice(2);
var flag = 0;
console.log (args);
if (args.length>10){
	console.log("You've passed more than 10 arguements. Prohibited")
	process.exit(1);
}	else {
	for (let i=0;i<args.length;i++){
		if (parseInt(args[i])<0){
			console.log("the number in position "+i+" of arguements is not positive. Prohibited");
			flag = 1;
		}
	}
	
	if (flag)
	{
	//	process.exitCode = 1;
	process.exit(1);
	}
}
var input = args[0];
Lastname(input);
function Lastname (input){
    if (input>=10){
        console.log('Peppas');
    }   else{ 
        console.log('Kyriakos');
    }
}
module.exports = Lastname ; 