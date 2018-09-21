import Phaser from 'phaser';

export default class EBasePlugin extends Phaser.Plugins.BasePlugin {
    constructor(mgr) {
        super(mgr);
        console.log(mgr);
        console.log("=====================================");
        mgr.registerGameObject('EBasePlugin', this.addNineSlice, this.makeNineSlice)
    }
    addNineSlice(...args) {
        console.log("addNineSlice sdf");
        return "test";
    }

    makeNineSlice(...args) {

    }
}

const DefaultCfg = {
    key: 'EBasePlugin',
    plugin: EBasePlugin,
    start: true,
}
  
EBasePlugin.DefaultCfg = DefaultCfg;