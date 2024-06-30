let nameUser = 'maykbrito';

self.addEventListener('message', function(e) {
  const username = e.data;
  const apiUrl = `https://api.github.com/users/${nameUser}/repos`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Simular algum processamento intensivo
      let processedData = processData(data);
      self.postMessage(processedData);
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
    });
});

function processData(data) {
  // Exemplo de processamento dos dados recebidos
  return data.map(repo => ({
    name: repo.name,
    url: repo.html_url,
    description: repo.description
  }));
}
