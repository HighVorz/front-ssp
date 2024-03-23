<template>
    <div id="livevideo">
         <video style="height: 100%;width: 60%;" id="videoElement"  autoplay controls></video>
    </div>
</template>



<script>
import flv from 'flv.js'
export default {
    name: "LivePlayer",
    methods: {
        play(urls) {
            var flvPlayer = null;
            if (flv.isSupported()) {
                var videoElement = document.getElementById('videoElement');
                flvPlayer = flv.createPlayer(
                    {
                        type: "flv",
                        isLive: true,
                        url: urls,
                    },
                );
            flvPlayer.attachMediaElement(videoElement);
            flvPlayer.load();
            }
        },
        destruction() {
            //销毁对象
            if (this.player) {
                this.player.pause();
                this.player.destroy();
                this.player = null;
            }
        },
    },
    mounted() {
        // this.play('http://115.25.46.178:90/live?port=1935&app=live&stream=10240');  
    }
};

</script>

<style scoped>

.livevideo{
    width:100%;
    height:100%
}
</style>