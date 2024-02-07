// URL variables for the APIs


document.getElementById('nameForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    console.log(name);
    const agifyUrl = `https://api.agify.io?name=${name}`;
    const genderizeUrl = `https://api.genderize.io?name=${name}`;
    const nationalizeUrl = `https://api.nationalize.io?name=${name}`;

    // Students will write async code here to fetch data from the APIs
    // and update the DOM with the results.
    const fetchAgify = async () => {
        // let use imagine the api calls are taking longer to respond because of more complex operationds done in backend
      //   await delay(2000); // Delay for 2 seconds
        const response = await fetch(agifyUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      };

    const fetchGenderize = async () => {
        const response = await fetch(genderizeUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      };

    const fetchNationalize = async () => {
        const response = await fetch(nationalizeUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      }

    const fetchPromises = [fetchAgify(), fetchGenderize(), fetchNationalize()];

    const ageOutput = document.getElementById('ageResult');
    const genderOutput = document.getElementById('genderResult');
    const nationalityOutput = document.getElementById('nationalityResult');
    // They should use Promise.all to handle the multiple fetch requests.
    Promise.all(fetchPromises)
    .then((list) => {
        ageOutput.innerHTML = '<h2>Age: ' + list[0].age + '</h2>';
        genderOutput.innerHTML = '<h2>Gender: ' + list[1].gender + '</h2>';
        nationalityOutput.innerHTML = '<h2>Nationality: ' + list[2].country[0].country_id + '</h2>';
    })
    // Error handling should also be implemented.
    .catch((error) => {
      console.error("There was a problem fetching the facts:", error);
      ageOutput.innerHTML = "Failed to fetch the facts.";
    });
});