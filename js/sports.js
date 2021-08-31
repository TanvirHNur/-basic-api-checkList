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
    if (teams === null){
        const div1 = document.createElement('div');
        div1.classList =  "mx-auto w-50 m-5"
        div1.innerHTML =`
        <h1>Nothing found</h1>
        <h4>No results containing all your search terms were found.</h4> 
      <ul>
        Suggestions:
        <li>Make sure that all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>
            Try fewer keywords.
            </li>
      </ul>`
        searchResult.appendChild(div1)
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