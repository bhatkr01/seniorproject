from .base import *
from dotenv import load_dotenv

load_dotenv(Path(BASE_DIR/'.env'))
DEBUG = False


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME':os.getenv('NAME'),
        'USER':os.getenv('USER1'),
        'PASSWORD':os.getenv('PASSWORD'),
        'HOST':os.getenv('HOST'),
        'PORT':os.getenv('PORT'),
    }
}
