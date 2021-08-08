<template>
	<div class="" id="listusers">
		<div class="row">
			<div class="col-md-3" v-for="ListUser in listfetch" :key="ListUser.id">
				<div class="card shadow mb-3">
					<img
						v-bind:src="ListUser.avatar"
						class="card-img-top img-fluid img-thumbnail"
						alt="profile user"
					/>
					<div class="card-body">
						<h5 class="card-title">{{ ListUser.first_name }} {{ ListUser.last_name }}</h5>
						<p class="card-text">{{ ListUser.email }}</p>
					</div>
					<div class="card-body">
						<p>{{ ListUser.gender }}</p>
						<p>{{ ListUser.telp }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ListUsers',
	data() {
		return {
			listfetch: [],
			length_data: 0,
			iduser: '',
			users: 30,
		}
	},
	mounted() {
		this.getDataUsers()
	},
	methods: {
		async getDataUsers() {
			try {
				const response = await this.$axios.get(
					this.$baseurl + `api/?results=30&gender=male`
				)
				if (response.status === 200) {
					//   alert("success");
					var data = response.data.results
					this.length_data = data.length
					for (var i = 0; i < data.length; i++) {
						this.listfetch.push({
							title: data[i].name.title,
							first_name: data[i].name.first,
							last_name: data[i].name.last,
							id: data[i].login.uuid,
							email: data[i].email,
							avatar: data[i].picture.large,
							telp: data[i].cell,
							gender: data[i].gender,
						})
					}
				}
			} catch (e) {
				alert('err')
			}
		},
	},
}
</script>
<style></style>
