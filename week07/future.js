var job = ["Programmer","Teacher","Driver","Youtuber"];
var city = ["McAllen","Dallas","Keller","Irving"];
var spouse = ["Liza","Katy","Scarlet","Tina"];
var numKids = [1,2,3,4];

var xx = Math.floor(Math.random() * 4 )

function fortune(job,city,spouse,numKids) {
document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids.");
}

fortune (job[xx],city[xx],spouse[xx],numKids[xx])