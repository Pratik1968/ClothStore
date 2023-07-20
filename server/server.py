from flask import Flask,send_file

app = Flask(__name__)


@app.route("/PosterHomeScreen.png")
def getPosterHomeScreen():

    return send_file("assets/PosterHomeScreen.png")
@app.route("/CategoriesMenHomeScreen.png")
def getCategoriesMenHomeScreen():
    return send_file("assets/CategoriesMenHomeScreen.png")

@app.route("/CategoriesWomenHomeScreen.png")
def getCategoriesWomenHomeScreen():
    return send_file("assets/CategoriesWomenHomeScreen.png")
@app.route("/CategoriesKidsHomeScreen.png")
def getCategoriesKidsHomeScreen():
    return send_file("assets/CategoriesKidsHomeScreen.png")
app.run(host='0.0.0.0')