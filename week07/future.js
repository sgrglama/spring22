var job = ["Buisness-Man","Teacher","Actor","Programmer"];
var city = ["Bedford","Dallas","Euless","Irving"];
var spouse = ["W","X","Y","Z"];
var numKids = [1,2,3,4];

var xx = Math.floor(Math.random() * 4 )

function fortune(job,city,spouse,numKids) {
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}

fortune (job[xx],city[xx],spouse[xx],numKids[xx])