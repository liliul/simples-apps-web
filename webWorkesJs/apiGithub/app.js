var worker = new Worker('worker.js');

worker.addEventListener('message', function(e) {
  var repos = e.data;
  displayRepos(repos);
}, false);

worker.postMessage('maykbrito');

function displayRepos(repos) {
  var reposList = document.getElementById('repos-list');
  
  repos.forEach(repo => {
    var repoElement = document.createElement('div');
    repoElement.classList.add('container-card');

    repoElement.innerHTML = `<strong>${repo.name}</strong>: ${repo.description != null ? repo.description : 'Sem Discricão'} - <a href="${repo.url}" target="_blank">Ver no GitHub</a>`;
    reposList.appendChild(repoElement);
  });
}