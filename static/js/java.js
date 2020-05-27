// alert('Olá');
// CSS
const app = document.getElementById('raiz')
// app.textContent = 'oiiii'

// Javascript
const caixa = document.createElement('div')
// caixa.textContent = ' foi criado dinamicamente';
// caixa.setAttribute('class', 'd-flex')
caixa.setAttribute('class', 'caixa')
app.appendChild(caixa);

for (var controladora = 1; controladora <= 10; controladora++){
    var c = document.createElement('div');
    c.setAttribute('class', 'artigos')
    caixa.appendChild(c);

    var t = document.createElement('h3');
    t.textContent = 'Titulo' + controladora;
    c.appendChild(t);

    var p = document.createElement('p');
    p.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    c.appendChild(p);
}