<template>
    <div>
        <accountinfo></accountinfo>
        <indexnav></indexnav>
        Home
        <accountsearch></accountsearch>
        <BottomBar />
        <!--
        <PhaserApp />
        <AliasContacts></AliasContacts>
        <AlphaTest></AlphaTest>
        <accountpassphrasehint></accountpassphrasehint>
        <accountchangepassphrase></accountchangepassphrase>
        <accountprofile></accountprofile>
        <accountsearch></accountsearch>
        -->
    </div>
</template>

<script>
import AccountInfo from './AccountInfo.vue';
import IndexNav from './IndexNav.vue';
import BottomBar from './BottomBar';
import PhaserApp from '../phaserapp/PhaserApp';

//import AccountChangePassPhrase from './gaccount/AccountChangePassPhrase.vue';
//import AccountPassPhraseHint from './gaccount/AccountPassPhraseHint.vue';
//import AccountProfile from './gaccount/AccountProfile.vue';
import AccountSearch from './gaccount/AccountSearch.vue';
//import AliasContacts from './gaccount/AliasContacts.vue';
import AlphaTest from './AlphaTest.vue';
//import Phaser from 'Phaser';

export default {
    components: {
        'indexnav':IndexNav,
        'accountinfo':AccountInfo,
        //'accountprofile':AccountProfile,
        'accountsearch':AccountSearch,

        //'accountchangepassphrase':AccountChangePassPhrase,
        //'accountpassphrasehint':AccountPassPhraseHint,
        //AliasContacts,
        PhaserApp,
        BottomBar,
        AlphaTest,

    },
    data() {
        return {
            
        }
    },
    created(){
        
    },
    methods: {
        searchuser(){
            
        },
    }
}
</script>

<style>
.example {
  color: red;
}
</style>