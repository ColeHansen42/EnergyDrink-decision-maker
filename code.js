var caffineLevel;
var purpose;
//Varibles
onEvent("quizButton", "click", function( ) {
  setScreen("quizScreen");
  setProperty("C4Ultimate", "hidden", true);
});
//button to take you to next screen
    setProperty("c4", "hidden", true);
    setProperty("whiteMonster", "hidden", true);
    setProperty("ZOA", "hidden", true);
    setProperty("redbull", "hidden", true);
    setProperty("ghost", "hidden", true);
    setProperty("Alani", "hidden", true);
    setProperty("celsius", "hidden", true);
    setProperty("mtn", "hidden", true);
//setting all images to hidden 
onEvent("generateButton", "click", function( ) {
  caffineLevel = getText("energyDropdown");
  purpose = getText("purposeDropdown");
  gym();
  Tired();
  Study();
});
onEvent("energyDropdown", "change", function( ) {
  updateScreen();
});
onEvent("purposeDropdown", "change", function( ) {
  updateScreen();
});
//button to generate the image for what drink will show up
function gym() {
  if (caffineLevel == "Low" && purpose == "Gym") {
    setProperty("whiteMonster", "hidden", false);
  } else if ((caffineLevel == "Mid" && purpose == "Gym")) {
    setProperty("c4", "hidden", false);
  } else if ((caffineLevel == "High" && purpose == "Gym")) {
    setProperty("C4Ultimate", "hidden", false);
  }
}
//function for if purpose is gym
function Tired() {
  if (caffineLevel == "Low" && purpose == "Tired") {
    setProperty("redbull", "hidden", false);
  } else if ((caffineLevel == "Mid" && purpose == "Tired")) {
    setProperty("ZOA", "hidden", false);
  } else if ((caffineLevel == "High" && purpose == "Tired")) {
    setProperty("ghost", "hidden", false);
  }
}
//function for if purpose is tired
function Study() {
  if (caffineLevel == "Low" && purpose == "Studying") {
    setProperty("mtn", "hidden", false);
  } else if ((caffineLevel == "Mid" && purpose == "Studying")) {
    setProperty("Alani", "hidden", false);
  } else if ((caffineLevel == "High" && purpose == "Studying")) {
    setProperty("celsius", "hidden", false);
  }
}
//function for if purpose is studying
function updateScreen() {
   hideElement("Alani");
    hideElement("mtn");
    hideElement("celsius");
    hideElement("ZOA");
    hideElement("ghost");
    hideElement("redbull");
    hideElement("c4");
    hideElement("C4Ultimate");
   hideElement("whiteMonster");
}
//function to update screen
