<template>
    <div class="box" @click="changeState" ref="videobox">
    <!-- 展示12个视频直播源,使用了组件 -->
        <div class="leftpart">
            <div class="partone">
                <video-player></video-player>
            </div>
            <div class="parttwo">
                <video-player></video-player>
            </div>
            <div class="partthree">
                <video-player></video-player>
            </div>
        </div>
        <div class="middlepart1">
            <div class="partfour">
                <video-player></video-player>
            </div>
            <div class="partfive">
                <video-player></video-player>
            </div>
            <div class="partsix">
                <video-player></video-player>
            </div>
        </div>
        <div class="middlepart2">
            <div class="partseven">
                <video-player></video-player>
            </div>
            <div class="parteight">
                <video-player></video-player>
            </div>
            <div class="partnine">
                <video-player></video-player>
            </div>
        </div>
        <div class="rightpart">
            <div class="partten">
                <video-player></video-player>
            </div>
            <div class="parteleven">
                <video-player></video-player>
            </div>
            <div class="parttwelev">
                <video-player></video-player>
            </div>
        </div>
    </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue'

export default {

    name: "MainView",
    components: { VideoPlayer },
    data() {
        return {
            fullscreen: false,
        }
    },
    methods: {
        changeState() {

            if (this.fullscreen){
                document.exitFullscreen()
                // console.log(document)
            }else{
                this.$refs.videobox.webkitRequestFullscreen()
            }
            this.fullscreen = ! this.fullscreen
        }
    }
}
</script>

<style scoped>
.box {
    height: 100%;
    width: 100%;
    /* background-color: bisque; */
    display: flex;
}

.leftpart {
    width: 25%;
    height: 100%;
    /* background-color: aqua; */
}

.middlepart1 {
    width: 25%;
    height: 100%;
    /* background-color: yellow; */
}

.middlepart2 {
    width: 25%;
    height: 100%;
}

.rightpart {
    width: 25%;
    height: 100%;
}

.partone,
.parttwo,
.partthree {
    height: 33%;
    width: 100%;
    /* background-color: burlywood; */
}

.partfour,
.partfive,
.partsix {
    height: 33%;
    width: 100%;
    /* background-color: burlywood; */
}

.partseven,
.parteight,
.partnine {
    height: 33%;
    width: 100%;
    /* background-color: burlywood; */
}

.partten,
.parteleven,
.parttwelev {
    height: 33%;
    width: 100%;
    /* background-color: burlywood; */
}
</style>
