

## Feature Sections:

# Game Features:
 * 

# Auth Features :
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