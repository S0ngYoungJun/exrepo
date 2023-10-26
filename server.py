from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    submitted_data = request.form['data']
    print('Received data:', submitted_data)
    return redirect(url_for('page2', data=submitted_data))

@app.route('/page2', methods=['GET'])
def page2():
    data = request.args.get('data')
    return render_template('index2.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)