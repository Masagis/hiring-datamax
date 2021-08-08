<template>
	<div class="">
		<div class="row mt-5">
			<div class="col-md-12">
				<h3>Hiring Datamax - Agis Tri Wahyuji</h3>
			</div>
			<div class="row mt-5">
				<div class="col-md-3 mb-3">
					<a href="/" :style="linkStyle">
						<div class="d-grid gap-2">
							<button class="btn btn-success">Home</button>
						</div>
					</a>
				</div>
				<div class="col-md-3 mb-3">
					<a href="/number" :style="linkStyle">
						<div class="d-grid gap-2">
							<button class="btn btn-primary">Inc and Dec Number</button>
						</div>
					</a>
				</div>
				<div class="col-md-3 mb-3">
					<a href="/timer" :style="linkStyle">
						<div class="d-grid gap-2">
							<button class="btn btn-danger">Tomato Timer</button>
						</div>
					</a>
				</div>
				<div class="col-md-3 mb-3">
					<a href="/card-users">
						<div class="d-grid gap-2 " :style="linkStyle">
							<button class="btn btn-warning">Card View</button>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="mt-5 mb-5">
			<hr />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			linkStyle: {
				color: '#ffffff',
				'text-decoration': 'none',
			},
		}
	},
}
</script>

<style scoped></style>
