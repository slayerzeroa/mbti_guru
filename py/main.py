# guru table
import sqlite3
import pandas as pd

con = sqlite3.connect("./db/guru.db")
cur = con.cursor()
query = cur.execute("SELECT * FROM berkshire")
cols = [column[0] for column in query.description]
result = pd.DataFrame.from_records(data=query.fetchall(), columns=cols)
con.close()
print(result)