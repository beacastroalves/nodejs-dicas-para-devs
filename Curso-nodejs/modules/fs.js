import * as fs from 'fs';
import * as path from 'path';
import { __dirname } from './path.js';

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
  if (error) {
    console.log('Erro:', error);
  }

  console.log('Pasta criada com sucesso');
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, '/test', 'test.txt'),
  'Hello world!',
  (error) => {
    if (error) {
      console.log('Erro:', error);
    }
    console.log('Arquivo criado com sucesso');

    // Adicionar à um arquivo
    fs.appendFile(
      path.join(__dirname, '/test', 'test.txt'),
      'hello node!',
      (error) => {
        if (error) {
          console.log('Erro: ', error);
        }
        console.log('Texto adicionado com sucesso.');

        // Ler arquivo
        fs.readFile(
          path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
            if (error) {
              return console.log('Error: ', error);
            }
            console.log(data)
          }
        );
      }
    );
  }
);




