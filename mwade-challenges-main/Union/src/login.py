from flask import Flask, request
import sqlite3
import os

app = Flask(__name__)


@app.route('/api/login', methods=['POST'])
def root_post():
    name = request.json.get("username")
    password = request.json.get("password")
    conn = sqlite3.connect("users.db")
    cur = conn.cursor()
    res = "SELECT username FROM users WHERE username = '%s' AND password = '%s';" %(name, password)
    print(res)
    output = cur.execute(res).fetchone()
    print(output)
    conn.commit()
    conn.close()

    if output is None:
        return {
            'status': 'FAILED',
            'message': 'Wrong credentials'
        }

    else:
        return {
            'status': 'SUCCESS',
            'message': f"Welcome back '%s' The flag is '%s'." % (name, output[0])
        }


@app.route('/', methods=['GET'])
def root_get():
    with open('login.html', 'r') as file:
        return file.read()


if __name__ == "__main__":
    with sqlite3.connect("users.db") as con:
        con.execute("CREATE TABLE IF NOT EXISTS users(username TEXT NOT NULL,password TEXT NOT NULL);")
        cur = con.cursor()
        _res = cur.execute("SELECT * FROM users WHERE username='admin';")
        if not _res.fetchone():
            cur.execute("INSERT INTO users(username, password) VALUES(?,?);", ('admin', os.getenv("FLAG", "flag{test_flag}")))
        con.commit()

    app.run(host='0.0.0.0')
