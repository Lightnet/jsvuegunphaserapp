// https://photonstorm.github.io/phaser3-docs/Phaser.Plugins.BasePlugin.html
// https://github.com/jdotrjs/phaser3-nineslice

import Phaser from 'phaser';

export default class EBasePlugin extends Phaser.Plugins.BasePlugin {
    constructor(PluginManager) {
        super(PluginManager);
        //console.log(PluginManager);
        //scene
        // this.add.EBasePlugin();
        PluginManager.registerGameObject('EBasePlugin', this.factory, this.creator);
    }

    factory(...args) {
        //console.log("factory plugin");
        return "test";
    }

    creator(...args) {
        //console.log("creator plugin");
    }
}

const DefaultCfg = {
    key: 'EBasePlugin',
    plugin: EBasePlugin,
    start: true,
}
  
EBasePlugin.DefaultCfg = DefaultCfg;