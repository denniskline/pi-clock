# pi-clock

![with-clock-initial-setup](https://user-images.githubusercontent.com/4529833/34457864-86ccb7f0-ed8c-11e7-9809-e66df7e1b6d2.jpg)

Install Node.js and npm
 * nodejs is already installed on rasbian 
 * If running on ubuntu, an very old version will be installed with apt-get install nodejs)
 * https://nodejs.org/en/download/package-manager/
 * ```curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -```
 * ```sudo apt-get install -y nodejs```
 * 
 * https://nodejs.org/en/download/package-manager/
 * ```sudo apt-get install nodejs```      (already installed on raspberry pi 2.4.5)
 * ```sudo apt-get install npm``` 

Setup project
 * ```cd pi-clock```
 * ```npm init```
 * ```npm install express --save```
 * ```npm install express-generator -g```    (needs to run sudo to install globally)
 * ```express --view=pug pi-clock```
 * ```npm install```
 * ```npm install --save-dev nodemon```      (allows file changes without restarting server each time)
 * ```npm install -g bower```
 * ```bower init```
 * ```bower install moment --save```

Run Project
 * ```DEBUG=pi-clock:* npm run devstart```

OpenWeatherMap
 * Create an account: https://openweathermap.org/api
 * Track down API Key: https://home.openweathermap.org/api_keys
 * Find city id: http://bulk.openweathermap.org/sample/city.list.json.gz

Clock:
 * Analog: https://codepen.io/nDav/pen/zvPJem
 * Digital: https://codepen.io/icebob/pen/JYoQZg


Screen Setup:
 * Connect the screen:
     * https://thepihut.com/blogs/raspberry-pi-tutorials/45295044-raspberry-pi-7-touch-screen-assembly-guide
 * Configure Kiosk Mode
     * https://www.danpurdy.co.uk/web-development/raspberry-pi-kiosk-screen-tutorial
     * ```
        sudo vi /etc/xdg/lxsession/LXDE/autostart
        @lxpanel --profile LXDE
        @pcmanfm --desktop --profile LXDE
        #@xscreensaver -no-splash
        @xset s off
        @xset -dpms
        @xset s noblank
        @chromium --noerrdialogs --kiosk http://localhost:3000 --incognito```
    * Setting LXDE or LXDE-pi does not seem to work.  This does work ....
        * ```chromium-browser --kiosk http://localhost:3000/```
