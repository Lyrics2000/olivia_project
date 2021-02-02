from  config.settings.base import *
import os


DEBUG = False
ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'HOST' : 'ec2-107-20-104-234.compute-1.amazonaws.com',
        'NAME' :'db0e40oghro5ea',
        'USER' : 'bnezixmerlgdsv',
        'PORT'  : 5432,
        'PASSWORD' : 'a629fa0212d23bf4cc9f63e7ae30e1c36596d1d85dcbd2441c1796f5bb670969',
    }
}




#Email backends
EMIAL_BACKEND = 'ambetsaachongo@gmail.com'
EMAIL_HOST_USER = 'ambetsaachongo@gmail.com'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True

EMAIL_HOST_PASSWORD = 'Lyrics254'



#Production
AWS_ACCESS_KEY_ID = 'AKIA3T7FB5INOG27IH5T'
AWS_SECRET_ACCESS_KEY = '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'
AWS_STORAGE_BUCKET_NAME = 'handlings254'
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_LOCATION = 'static'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static_project_file'),
]
STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
DEFAULT_FILE_STORAGE = 'fishsell.storage_backends.MediaStorage' 