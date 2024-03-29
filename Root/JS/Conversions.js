/*
Author: Dr. Eniye Tebekaemi
 
Date: 4/23/2020

Instructor: Dr. Eniye Tebekaemi.

Description: JS file for Final Project.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Function #1: Converts from kilos to pounds.
	
	function kilosToPounds()
	{
		var kilos;
		var pounds;
		var message;
		
		kilos= document.getElementById("var1a").value;
		if(kilos<0)
		{
			message= "ERROR";
		}
		
		else
		{
			pounds= (kilos*2.2046);
			pounds= pounds.toFixed(3);
			
			message= pounds+" pounds";
		}
		
		document.getElementById("var1c").innerHTML = message; 	
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Function #2: Converts from pounds to kilos.
	
	function poundsToKilos()
	{
		var kilos;
		var pounds;
		var message;
		
		pounds= document.getElementById("var2a").value;
		
		if(pounds<0)
		{
			message= "ERROR";
		}
		
		else
		{
			kilos= pounds/2.2046;
			kilos= kilos.toFixed(3);
			
			message= kilos+" kilos";
		}
		
		document.getElementById("var2c").innerHTML = message; 	
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Function #3: 
	
	function litersToUSGallons()
	{
		var liters;
		var gallons;
		var message;
		
		liters= document.getElementById("var3a").value;
		
		if( liters < 0 )
		{
			message= "ERROR";
		}
		
		else
		{
			gallons= liters*0.264;
			gallons= gallons.toFixed(3);
			
			message= gallons+" gallons";
		}
		
		document.getElementById("var3c").innerHTML = message; 
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Function #4: 
	
	function USGallonsToliters()
	{
		var liters;
		var gallons;
		var message;
		
		gallons= document.getElementById("var4a").value;
		
		if( gallons < 0 )
		{
			message= "ERROR";
		}
		
		else
		{
			liters= gallons/0.264;
			liters= liters.toFixed(3);
			
			message= liters+" liters";
		}
		
		document.getElementById("var4c").innerHTML = message; 
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Function #5: 
	
	function BMI()
	{
		var inches;
		var pounds;
		var percentage;
		
		var message;
		
		inches= document.getElementById("var5d").value;
		pounds= document.getElementById("var5a").value;
		
		if( (inches==null || inches <= 0 ) || (pounds==null || pounds <= 0) )
		{
			message= "ERROR";
		}
		
		else
		{
			percentage= (703*pounds)/Math.pow(inches, 2);
			percentage= percentage.toFixed(3);
			
			if( percentage < 18.5)
			{
				message= percentage+"% (underweight)";	
			}
		
			else if( percentage >= 18.5 && percentage < 25.0)
			{
				message= percentage+"% (normal)";	
			}
		
			else if( percentage >= 25.0 && percentage < 30.0)
			{
				message= percentage+"% (overweight)";	
			}
		
			else
			{
				message= percentage+"% (obese)"
			}
		}
		
		document.getElementById("var5c").innerHTML = message; 
	}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Function #6: 
	
	function giveRand()
	{
		var start;
		var end;
		var rand;
		
		var message;
		
		start= document.getElementById("var6d").value;
		end= document.getElementById("var6a").value;
		
		if( start==null || end==null || start>=end)
		{
			message= "ERROR";
		}
		
		else
		{
			start = Math.ceil(start);
			end = Math.floor(end);
			
			rand= Math.floor( Math.random() * (end - start +1) ) + start; 
			message= "Rand number: "+rand;
		}
		
		document.getElementById("var6c").innerHTML = message; 
	}	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Function #7:
	
	function factorial()
	{
		var number;
		var factorial= 1;	
		var message;
		
		number= document.getElementById("var7a").value;


		if ( number==="" )
		{	
			message= "ERROR";
		}	
		
		else if( number>=0 && number%1==0 )
		{

			for(i=1; i<=number; i= i+1)
			{
				factorial= factorial * i;
			}
			message= "("+number+")!= "+factorial;

		}
		
		else
		{
			message= "ERROR";
		}
		
		document.getElementById("var7c").innerHTML = message; 	
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	function fib()
	{
		var number;
		var fibNumber= 0;
		
		var message;
					
		number= document.getElementById("var8a").value;
		
		if ( number==="" )
		{	
			message= "ERROR";
		}	
		
		else if( number>0 && number%1==0 )
		{
			number= number-1;
			var fibArray= new Array(number+4);
			fibArray[0]= 1;
			fibArray[1]= 1;

			for( i=2; i <= number; i= i+1 )
			{
				fibArray[i]=fibArray[i-1]+fibArray[i-2];		
			}

			fibNumber= fibArray[number];
			message= (number+1)+"nth Fib #= "+fibNumber;
		}
		
		else
		{
			message= "ERROR";
		}
		
		document.getElementById("var8c").innerHTML = message;
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//Function #9:
	 
	function isPrime()
	{
		var number;
		var counter= 3;
		var value= true;
		var message;
		
		number= document.getElementById("var9a").value;
		
		if ( number==="" )
		{	
			message= "ERROR";
		}	
		
		else if(number==1)
		{
			value= false;
			message= "Is "+(number)+" a prime number? "+false;
		}
		
		else if( number>=2 && number%1==0 )
		{

			for(i = 2; i < number; i= i+1) 
			{
				if (number % i == 0) 
				{
					value= false;
				}
					
				else
				{
					counter= counter+1;
				}
			}
			message= "Is "+(number)+" a prime number? "+value;

		}
		
		else
		{
			message= "ERROR";
		}
		
		document.getElementById("var9c").innerHTML = message;
	}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////