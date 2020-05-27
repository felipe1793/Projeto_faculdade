// alert('Olá');
// CSS
const app = document.getElementById('raiz')
// app.textContent = 'oiiii'

// Javascript
const caixa = document.createElement('div')
// caixa.textContent = ' foi criado dinamica mente';
// caixa.setAttribute('class', 'd-flex')
caixa.setAttribute('class', 'caixa')
app.appendChild(caixa);

for (var controladora = 1; controladora <= 10; controladora++){
    var c = document.createElement('div');
    c.setAttribute('class', 'artigos')
    caixa.appendChild(c);

    var t = document.createElement('h3');
    t.textContent = 'Curso' + controladora;
    c.appendChild(t);

    var p = document.createElement('p');
    p.textContent = 'O segredo da vida não é ter tudo que você quer, mas amar tudo que você tem.';
    c.appendChild(p);
}