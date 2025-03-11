from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector
from mysql.connector import Error
from typing import List, Dict

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

# Configuration des CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"], 
)

#valider les requêtes entrantes
class PostData(BaseModel):
    userName: str
    text: str
    audioURL: str | None = None 

#  BDD
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="sayit"
    )

@app.post("/save_post")
async def save_post(post: PostData):
    try:
        db = get_db_connection()
        cursor = db.cursor()
        query = "INSERT INTO posts (userName, content, audio_url) VALUES (%s, %s, %s)"
        cursor.execute(query, (post.userName, post.text, post.audioURL))
        db.commit()
        return {"message": "Post saved successfully!"}
    except Error as e:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        if cursor: cursor.close()
        if db: db.close()

@app.get("/posts", response_model=List[Dict])
def get_posts():
    try:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)
        cursor.execute("SELECT * FROM posts ORDER BY id DESC")
        return cursor.fetchall()
    except Error as e:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        if cursor: cursor.close()
        if db: db.close()
