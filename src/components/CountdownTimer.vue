<template>
	<div class="" id="Countdown">
		<h3>Demo Tomato Timer</h3>
		<div class="d-flex justify-content-center mt-3">
			<h1 id="minutes" />
			<h1>:</h1>
			<h1 id="second" />
		</div>
		<div class="mt-3">
			<button type="button" class="btn btn-primary mr-5" @click="startTimer">
				Start
			</button>
			&nbsp;
			<button type="button" class="btn btn-secondary mr-5" @click="resetTimer">
				Reset
			</button>
			&nbsp;
			<button type="button" class="btn btn-danger mr-5" @click="stopTimer">
				Stop
			</button>
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
export default {
	name: 'CountdownTimer',
	data() {
		return {
			minutes: 25,
			second: 0,
			start: false,
			interval: null,
		}
	},
	mounted() {
		this.resetTimer()
		this.interval = setInterval(this.intervalCallback, 1000)
	},
	methods: {
		startTimer() {
			if (this.start === false) {
				this.start = true
				this.intervalCallback()
			}
		},
		stopTimer() {
			this.start = false
			this.intervalCallback()
		},
		resetTimer() {
			this.minutes = 25
			this.second = 0
			$('#minutes').text(this.minutes)
			if (this.second < 10) {
				$('#second').text('0' + this.second)
			} else {
				$('#second').text(this.second)
			}
		},
		intervalCallback() {
			if (!this.start) {
				return false
			}
			if (this.second === 0) {
				if (this.minutes == 0) {
					this.timerComplete()
					return null
				}
				this.second = 59
				this.minutes--
			} else {
				this.second--
			}
			if (this.second < 10) {
				$('#second').text('0' + this.second)
			} else {
				$('#second').text(this.second)
			}
			if (this.minutes < 10) {
				$('#minutes').text('0' + this.minutes)
			} else {
				$('#minutes').text(this.minutes)
			}
		},
		timerComplete() {
			this.start = false
			alert('Good work! Now take a 5 minute break.')
		},
	},
}
</script>
<style></style>
