

/// update linux 
sudo apt update

/// install web server (link apache) its for redrect to our locla host from port 80
sudo apt install nginx


/// install nvm for mannage node and npm 

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

/// close and open ssh again

nvm ls-remote

nvm ls-remote --lts

nvm install node



/////////////////////////////////////////////////////////







///////////////////////// only for sql 
sudo apt install postgresql postgresql-contrib

///// set password to postgres

sudo sudo -u postgres psql

psql -U postgres -h localhost



///////////////////////////////

sudo apt install git

git clone https://github.com/bozeha/fishes_server_azure.git




//// go to folder and install node_models

cd fish_server

sudo apt install npm

sudo npm install



///////////// start create ssl file for https connections for nginx


///got to folder of the config file 


cd /etc/nginx/sites-available

//// bkp old config 


sudo mv default default.bkp

///////// create folder for ssl file 

sudo mkdir /etc/nginx/ssl

/// add folder promitions 

sudo chmod 777 /etc/nginx/ssl

//// create the key 
cd /etc/nginx

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ssl/example.key -out ssl/example.crt


/// upload default file ->from pc local folder default_config_with_ssl 


/// change folder promitions 
sudo chmod 777 /etc/nginx/sites-available/


////move the file we upload to sites-available 
sudo mv default /etc/nginx/sites-available/

/// test if file is ok type 

sudo nginx -t

/// restart nginx

 sudo systemctl restart nginx
 
 /// enter your project folder 
 cd fish_server
 
///////// nginx default setting is on port 8080 so file app.js must listen to port 8080
 
 /////////////////in the app code ->  app.listen(process.env.PORT || 8080);
 
 
 /// run node server 

 sudo nginx -s reload
 node app.js
 
 *** must change port to 8080 in app.js file 








