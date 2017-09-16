<template>
  <div id="videoplay" style='height:90vh'>
    <video-player  ref="videoPlayer"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied">
    </video-player>
    <video-player  ref="videoPlayer"
        :options="playerOptions2"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>
import Vue from 'vue'
import { videoPlayer } from 'vue-video-player'

export default {
    components: {
        videoPlayer
    },
    data() {
      return {
        playerOptions: {
          start: 0,
          playsinline: false,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
        },
        playerOptions2: {
          start: 0,
          playsinline: false,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L"
          }],
        }
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      onPlayerPlay(player) {
      },
      onPlayerPause(player) {
      },
      playerStateChanged(playerCurrentState) {
      },
      playerReadied(player) {
        console.log('the player is readied', player)
      }
    }
}
</script>
<style>
#videoplay{
  margin-left: 180px;
}
#videoplay .video-player{
    width:40%;
    margin: 10px;
    margin-top: 10%;
    margin-left: 5%;
   	float: left;
}
</style>
