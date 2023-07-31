# Use the official Python 3.9 image as the base
FROM python:3.9.17-bullseye

# Install necessary packages for a graphical interface
RUN apt-get update && apt-get install -y wget gnupg
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
RUN apt-get update && apt-get install -y google-chrome-stable
RUN apt-get install -y --no-install-recommends xvfb x11vnc fluxbox

# Install Python dependencies
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Install ChromeDriver for Selenium
# Make sure to use the appropriate version of ChromeDriver for the installed Chrome version.
RUN wget -q https://chromedriver.storage.googleapis.com/LATEST_RELEASE -O /tmp/chromedriver_version
RUN wget -q https://chromedriver.storage.googleapis.com/$(cat /tmp/chromedriver_version)/chromedriver_linux64.zip -O /tmp/chromedriver.zip
RUN unzip /tmp/chromedriver.zip -d /usr/local/bin
RUN chmod +x /usr/local/bin/chromedriver

# Set the PYTHONPATH environment variable
ENV PYTHONPATH "${PYTHONPATH}:/app"

# Start Xvfb (virtual framebuffer) and Fluxbox desktop environment
ENV DISPLAY=:99
CMD ./start.sh & uvicorn backend.main:app --host 0.0.0.0 --port 8000
