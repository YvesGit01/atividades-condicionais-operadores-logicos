/***a)** Sabendo que a semana possui 7 dias, sendo 1 para **segunda** e 7 para **domingo**,
 *  faça um programa que verifica o número armazenado em uma variável 
 * e imprima o dia (por extenso) da semana correspondente.

```javascript
const diaDaSemana = 3;
```

Para o exemplo acima, o programa deve imprimir a mensagem:

```
Quarta Feira
```

**b)** Crie uma verificação padrão para caso o número informado não esteja no intervalo de 1 a 7.*/


const diaDaSemana = 6;

    switch(diaDaSemana){
        case 1:
            console.log("**segunda**");
            break
        case 2:
            console.log("**terça**");
            break
        case 3:
            console.log("**quarta**");
            break
        case 4:
            console.log("**quinta**");
            break
        case 5:
            console.log("**sexta**");
            break            
        case 6:
            console.log("**sábado**");
            break
        case 7:
            console.log("**domingo**");
            break          
        default:
            console.log("O dia da semana informado não é válido");               

    }