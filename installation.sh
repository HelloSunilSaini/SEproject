sudo apt-get update

# install nodejs and npm for UI
sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install npm

# install mongodb for data store
# sudo apt-get install mongodb

# backend installation
sudo apt-get install antiword
sudo apt-get install python3-pip
sudo pip3 install virtualenv 
virtualenv venv 
source venv/bin/activate
pip install flask
pip install flask_restful
pip install flask_cors
pip install jsonschema
pip install bson
deactivate

# nginx installation
sudo apt install nginx
sudo cp default /etc/nginx/sites-available/default

# chrome installation
sudo apt-get install google-chrome-stable 

# crome extention installation

install_chrome_extension () {
  preferences_dir_path="/opt/google/chrome/extensions"
  pref_file_path="$preferences_dir_path/$1.json"
  upd_url="https://clients2.google.com/service/update2/crx"
  mkdir -p "$preferences_dir_path"
  echo "{" > "$pref_file_path"
  echo "  \"external_update_url\": \"$upd_url\"" >> "$pref_file_path"
  echo "}" >> "$pref_file_path"
  echo Added \""$pref_file_path"\" ["$2"]
}

if ! which "google-chrome" ; then
  wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub \
  | sudo apt-key add -
  echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' \
  | sudo tee /etc/apt/sources.list.d/google-chrome.list
  sudo apt-get update
  sudo apt install google-chrome-stable
else
  echo Chrome already installed
fi


install_chrome_extension "gbkeegbaiigmenfmjfclcdgdpimamgkj" "Office Editing for Docs, Sheets & Slides"
install_chrome_extension "ghbmnnjooekpmoecnnnilnnbdlolhkhi" "Google Docs Offline"

# bin folder command
sudo ln -s ./run.sh /bin/doc_recognition