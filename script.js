window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            const bio = document.getElementById("bio");

            for (var i = 0; i < json.length; i++) {
                bio.innerHTML += `
                <div>
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in Space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                        
                </div>
            `
            }; // blank space above /div is reserved for the image file
        });
    });
});