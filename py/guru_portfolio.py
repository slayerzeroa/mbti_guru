# guru table
import sqlite3
import pandas as pd


def get_portfolio():        # 포트폴리오 받아오는 함수
    con = sqlite3.connect("./db/guru.db")   # db 접근
    cur = con.cursor()                      # 커서 생성
    query = cur.execute("SELECT * FROM berkshire")  # 쿼리 설정
    cols = [column[0] for column in query.description]  # 컬럼 설정
    portfolio = pd.DataFrame.from_records(data=query.fetchall(), columns=cols)      # pandas 포트폴리오 가져오기
    con.close()     # sqlite 종료
    return portfolio    # 포트폴리오 리턴

def cut(df):
    df.columns = df.columns.str.replace(' ', '_')
    cut_df = df.dropna(axis = 1, how = 'all')
    return cut_df

print(cut(get_portfolio()))