const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();

// Habilita CORS para permitir chamadas do frontend
app.use(cors());

// Middleware para tratar erros
app.use((err, req, res, next) => {
    console.error('Erro interno:', err);
    res.status(500).json({ error: err.message || 'Erro interno do servidor' });
});
  

// Configuração do Multer para salvar os arquivos na pasta 'uploads'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // pasta onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    // Define o nome do arquivo como o original, mas você pode personalizar se desejar
    cb(null, file.originalname);
  }
});

// Cria o middleware de upload com as configurações definidas
const upload = multer({ storage: storage });

// Rota para upload de um único arquivo
app.post('/upload', upload.single('file'), (req, res) => {
  // O arquivo estará disponível em req.file
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhum arquivo foi enviado.' });
  }

  console.log('Arquivo recebido:', req.file);

  // Responde com uma mensagem de sucesso e informações do arquivo
  res.json({
    message: 'Upload realizado com sucesso!',
    file: req.file
  });
});

// Rota simples para testar o servidor
app.get('/', (req, res) => {
  res.send('Servidor backend está rodando!');
});

// Inicializa o servidor na porta 3000 (ou outra de sua preferência)
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
