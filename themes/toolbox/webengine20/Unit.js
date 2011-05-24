function Unit(valueX,valueY){
	
	if(typeof(valueX) == "object" && valueX.mValue != null && valueX.mUnit != null && ( valueY == null || valueY == undefined ) ){ // we got a unit
		valueY = valueX.mUnit;
		valueX = valueX.mValue;
	} else if(valueY == null){ // we have to seperate
		valueY = this.getUnit(valueX);
		valueX = this.getValueWithoutUnits(valueX);
	}
	this.mValue = valueX;
	this.mUnit = valueY;  

	return this;  
 }
 
 Unit.prototype.add = function(value){
 	if(value.mValue == null){ // dont get a Unit
 		this.getValueWithoutUnits(value);
 		this.mValue += value;
 	}
 	else{ // Value is a Unit
 		this.mValue += value.mValue;
 	}

 }
 
 Unit.prototype.sub = function(value){
 	if(value.mValue == null){ // dont get a Unit
 		this.getValueWithoutUnits(value);
 		this.mValue -= value;
 	}
 	else{ // Value is a Unit
 		this.mValue -= value.mValue;
 	}

 }
 
 Unit.prototype.getValue = function(){
 	return (this.mValue + "" + this.mUnit);
 }
 
 

 /**
 * adds the given unit to the value, or replace the old one. Fails if no unit given
 * \return  value + right unit of measurement like 50px or 50%
 * @param value the Value that should get the unit
 * @param unit needed unit like: % or px
 */
 Unit.prototype.getValueWithUnits = function(value, unit){
   
   if(unit == null || unit == "" || unit == undefined){
        unit = globals.stdUnit;
   }
   value += "";
   var currUnit = getUnit(value);
   if(currUnit == unit)
        return value;
        
   if(currUnit == "")
        return (value + unit);

   return  getValueWithoutUnits(value) + unit;

     
}

 Unit.prototype.getValueWithoutUnits = function(value){
    value += "";
    value = value.replace(/px/, "");
    value = value.replace(/%/, "");
    return Number(value);


}

/**
 * @return unit ("px" or "%") if value has a unit and empty String if there is no unit
*/

 Unit.prototype.getUnit = function(value){
     value += "";
     if(value.match(".*%"))
        return "%";
     if(value.match(".*px"))
        return "px";
	var ret = "px";
	if(globals != null && globals.stdUnit != null)
		ret = globals.stdUnit;
		
   return ret;
}
