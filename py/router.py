from flask import Flask
from flask.templating import render_template
import guru_portfolio as gp

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("./../index.html", portfolio = gp.show_portfolio())

if __name__ == "__main__":
    app.run(debug=True)