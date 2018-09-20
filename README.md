# jsvuegunphaserapp

Created by: Lightnet

# Required:
 * nodejs
 * npm

# Code Languages:
 * Babeljs javascript
 * Nodejs javascript

# Information:
  Design to be simple and blank application design test build. Phaser simple blank added for test.

  Current mode Development / Debug mode that is not config for production yet.

# Features:
 * Peer to Peer database from gun.js.
 * SEA.js (Security, Encryption, Authorization) from gun.js
 * Private Message (Simple)
 * Alias Contacts (Add/Remove)
 * Login, Sign up, Forgot Password Hint (Simple)
 * Change Password (Simple)
 * Chat Message (Timegraph)
 * To Do List (Add / Edit /Remove) (user auth not working / gun working)
 * Connect gun peer (partly work)
 * Disconnect gun peer (partly work)
 * Added simple loading screen since javascript take a while to load.

# Notes:
 * jquery smallest file to helpful tool scripts.
 * jquery-ui is tricky to setup since they broken in part to reduce file size good for design. Since need few scripts and css to keep file small as possible.
 * Not yet config for development and production.
 * Some minor bug on gun.user() function calls from sea.js might not work in some areas.
 * Load time data may be slow on time graph or other libraries.

# Bugs:
 * Connect and disconnect button is what doesn't work some condtions.
 * gun.user there might be some bug that doesn't load correctly. null and boolean are not working for some reason to set variable into graph. But not using sea.js it works.

# Project Links:
 * https://lightnet-jsvuegunphaserapp.glitch.me
 * https://glitch.com/edit/#!/lightnet-jsvuegunphaserapp
 * https://github.com/Lightnet/jsvuegunphaserapp
 
# Links:
 * https://gun.eco/docs/SEA
 * https://github.com/amark/gun/wiki/SEA
 * https://github.com/amark/gun/wiki/auth
 * https://github.com/amark/gun/wiki/Security
 * https://github.com/amark/gun/wiki/Security,-Authentication,-Authorization
 * http://gun.js.org/explainers/data/security.html
 * https://gun.eco/explainers/data/security.html

# Credits:
 * https://gitter.im/amark/gun chat room browser.