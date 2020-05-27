from flask import Flask, render_template
app = Flask(__name__)


@app.route('/Empresa')
@app.route('/')
def hello_world():
    return render_template('Empresa.html')


@app.route('/inicio')
def contato():
    return render_template('inicio.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/Contato')
def conosco():
    return render_template('Contato.html')

@app.route('/Login')
def log():
    return render_template('login.html')

@app.route('/curso')
def curso():
    return render_template('cursos.html')
