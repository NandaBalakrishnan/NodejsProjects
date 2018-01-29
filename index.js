
var rect={

perimeter:(x,y)=> (2*(x+y)),
area:(x,y)=>(x*y)	
};

function solveRect(l,b){
	console.log("area and perimeter of Rectangle")
	if(l<=0 || b<=0)
	{
		console.log("len or breadth should be greater than zero")

	}
	else
	{
		console.log("area of Rectangle is "+rect.area(l,b))
		console.log("perimeter of Rectangle is"+rect.perimeter(l,b))
	}
}

solveRect(2,3)
solveRect(0,7)
solveRect(4,-6)

