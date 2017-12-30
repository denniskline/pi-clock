# pi-clock

Install Node.js and npm
 * https://www.godaddy.com/help/install-nodejs-debian-17399
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

Run Project
 * ```DEBUG=pi-clock:* npm run devstart```


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
