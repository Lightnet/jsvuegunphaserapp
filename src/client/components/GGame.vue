<template>
    <div>
        <accountinfo></accountinfo>
        <indexnav></indexnav>
        <PhaserApp />
        <BottomBar></BottomBar>
    </div>
</template>

<script>
import AccountInfo from './AccountInfo.vue';
import IndexNav from './IndexNav.vue';
import BottomBar from './BottomBar';
import PhaserApp from '../phaserapp/PhaserApp';

export default {
    components: {
        'indexnav':IndexNav,
        'accountinfo':AccountInfo,
        PhaserApp,
        BottomBar,
    },
    data () {
        return {
            msg: 'Hello world!'
        }
    },
    created(){

    },
    beforeDestroy(){

    },
    methods: {
    }
}
</script>

<style>
</style>