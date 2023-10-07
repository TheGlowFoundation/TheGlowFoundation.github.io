
import os

from django.core.wsgi import get_wsgi_application

from accounts.views import create_manager

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Glow_Sells.settings')

application = get_wsgi_application()

# create user with 'manager' role
create_manager()

application = get_wsgi_application()