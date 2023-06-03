let fullName;
let capitalisedFirstName;
let capitalisedFirstLetter;
let capitalisedLastName;
let capitalisedLastLetter;

document.getElementById("submitButton").onclick = function() {
    fullName = document.getElementById("nameInput").value;

    for(let i = 0; i < fullName.length; i++) {
        if(fullName[i] === " ") {
            capitalisedFirstName = fullName.slice(0, i);
            capitalisedFirstLetter = capitalisedFirstName[0].toUpperCase();
            capitalisedFirstName = capitalisedFirstName.slice(1);
            capitalisedFirstName = capitalisedFirstLetter + capitalisedFirstName;
        };
        
        if(fullName[i] === " ") {
            i += 1;
            capitalisedLastName = fullName.slice(i);
            capitalisedLastLetter = capitalisedLastName[0].toUpperCase();
            capitalisedLastName = capitalisedLastName.slice(1);
            capitalisedLastName = capitalisedLastLetter + capitalisedLastName;
        };
    };
    fullName = capitalisedFirstName + " " + capitalisedLastName;
    document.getElementById("result").innerHTML = "Result: " + fullName;
};