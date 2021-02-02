from  config.settings.base import *
import os

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases
DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

#development
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR,'static_project_file'),
]
STATIC_ROOT = os.path.join(BASE_DIR,'static_cdn')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR,'media_cdn')



