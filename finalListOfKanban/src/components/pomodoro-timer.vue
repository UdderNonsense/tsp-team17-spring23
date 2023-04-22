<template>
    <div class="pomodoro-timer">
      <h1>Pomodoro Timer</h1>
      <div class="timer">
        <div class="time-left">{{ minutes }}:{{ seconds }}</div>
        <div class="timer-controls">
          <button @click="startTimer" v-if="!timerActive">Start</button>
          <button @click="stopTimer" v-if="timerActive">Stop</button>
          <button @click="resetTimer">Reset</button>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      minutes: 25,
      seconds: '00',
      timerActive: false,
      intervalId: null
    }
  },
  methods: {
    startTimer () {
      this.timerActive = true
      this.intervalId = setInterval(() => {
        if (this.seconds === '00') {
          this.minutes--
          this.seconds = 59
        } else {
          this.seconds--
        }
        if (this.minutes === 0 && this.seconds === 0) {
          clearInterval(this.intervalId)
          alert("Time's up!")
        }
      }, 1000)
    },
    stopTimer () {
      this.timerActive = false
      clearInterval(this.intervalId)
    },
    resetTimer () {
      this.timerActive = false
      clearInterval(this.intervalId)
      this.minutes = 25
      this.seconds = '00'
    }
  }
}
</script>

  <style scoped>
  .timer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .time-left {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .timer-controls {
    display: flex;
    justify-content: center;
  }

  .timer-controls button {
    margin: 0 10px;
  }
  </style>
