from dotenv import load_dotenv
import os

load_dotenv()

print(os.getenv("PASSWORD"))
print(os.getenv("NAME"))
print(os.getenv("USER1"))
