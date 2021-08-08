<template>
	<div class="mt-5">
		<h4 class="mb-3">Demo Increment and Decrement a Number</h4>
		<h1>{{ counter }}</h1>
		<div class="mt-3">
			<button
				type="button"
				class="btn btn-outline-primary"
				@click="increment"
				id="btn_increment"
			>
				Increment</button
			>&nbsp;
			<button
				type="button"
				class="btn btn-outline-danger"
				@click="decrement"
				id="btn_decrement"
				disabled
			>
				Decrement
			</button>
			&nbsp;
			<button type="button" class="btn btn-outline-secondary" @click="resetNumber">
				Reset
			</button>
		</div>
	</div>
</template>
<script>
import $ from 'jquery'
export default {
	name: 'IncrementDecrementNumber',
	data() {
		return {
			counter: 0,
			someStyle: {
				'margin-top': '30px',
			},
		}
	},
	methods: {
		increment() {
			//   this.checkButton();
			if (this.counter < 50) {
				this.counter++
				$('#btn_decrement').prop('disabled', false)
				if (this.counter === 50) {
					$('#btn_increment').prop('disabled', true)
				}
			}
		},
		decrement() {
			if (this.counter > 0) {
				$('#btn_increment').prop('disabled', false)
				this.counter--
				if (this.counter === 0) {
					$('#btn_decrement').prop('disabled', true)
				}
			}
		},
		resetNumber() {
			this.counter = 0
		},
	},
}
</script>
<style scoped></style>
