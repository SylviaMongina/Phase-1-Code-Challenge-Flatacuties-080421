
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/characters')
    .then(response => {
        return response.json()
    })
    .then(data=>{
        loadCandidates(data)
    })
    let voteForm = document.getElementById('votes-form')
    voteForm.addEventListener('submit', (event)=>{
        event.preventDefault()
        let currentVotes = parseInt(event.target.votes.value)
        let initialVotes = parseInt(document.getElementById('vote-count').textContent)
        let finalVotes = currentVotes + initialVotes
        //let finalVotes = (!Boolean(currentVotes) || !Boolean (initialVotes))? currentVotes + initialVotes : 0
        let truthyValue = Boolean(finalVotes)? finalVotes: initialVotes
        document.getElementById('vote-count').textContent = truthyValue
        event.target.reset()
    })
    let button = document.getElementById('reset-btn')
    button.addEventListener('click', event => {
        document.getElementById('vote-count').textContent = 0
    })
})
function loadCandidates(candidates){
    for(let candidate of candidates){
        candidateLoader(candidate)
    }
}
function candidateLoader(candidate){
    let character = document.getElementById('character-bar')
    let span = document.createElement('span')
    span.textContent = candidate.name
    character.appendChild(span)
    span.addEventListener('click', ()=> {
      let name =  document.getElementById('name')
      name.textContent = candidate.name
      let image = document.getElementById('image')
      image.setAttribute('src', candidate.image)
      let voteCount = document.getElementById('vote-count')
      voteCount.textContent  = candidate.votes
      
    })
}
