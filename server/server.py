from flask import Flask,send_file

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
@app.route("/getPosterHomeScreen.png")
def getPosterHomeScreen():

    return send_file("assets/PosterHomeScreen.png")
