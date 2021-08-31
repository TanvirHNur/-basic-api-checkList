const searchteams = () => {
    const inputText = document.getElementById('input-text');
    const input = inputText.value;
    inputText.value = ''
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${input}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTeam(data.teams))
}

const displayTeam = (teams) => {
    const searchResult = document.getElementById('search-result');
    if (teams.length === 0){
        searchResult.innerHTML =`
        <h1>Nothing found</h1>`
    }
    else{
        teams.forEach( team => {
            const div = document.createElement('div');
            div.classList = 'col';
            div.innerHTML = `
            <div class="card h-100">
                <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Name: ${team.strAlternate}</h5>
                  <h6 class="card-title">Country: ${team.strCountry}</h6>
                  <h6 class="card-title">League: ${team.strLeague}</h6>
                  <h6 class="card-title">Home: ${team.strStadium}</h6>
                  <p class="card-text">${team.strDescriptionEN.slice(0,100)}</p>
                </div>
              </div>
            `
            searchResult.appendChild(div)
            console.log(team)
        })
    }
    
    // console.log(teams)
} 


// console.log('connceted')