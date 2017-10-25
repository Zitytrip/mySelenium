sudo apt-get install unzip

# https://sites.google.com/a/chromium.org/chromedriver/
cd /tmp

wget -N https://chromedriver.storage.googleapis.com/2.33/chromedriver_linux64.zip
unzip chromedriver_linux64.zip
chmod +x chromedriver

sudo mv -f chromedriver /usr/local/share/chromedriver
sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver
sudo ln -s /usr/local/share/chromedriver/chromedriver /usr/bin/chromedriver

/usr/bin/chromedriver/chromedriver  --version

