"""
Default Imports
"""

import os
import dotenv

"""
Custom Imports
"""

from config import settings

ENV = os.getenv("ENV", "LOCAL")

if ENV not in settings.ENV_OPTIONS:
    raise ValueError(f"ENV must be one of {ENV_OPTIONS}")

dotenv.load_dotenv(f"instance/{ENV.lower()}.env")


"""
Debug and logging
"""
DEBUG = os.getenv("DEBUG", False)
LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")