<template>
  <div class="main-text">
		<div class="row">
			<div class="text-without-underline">Hi! I'm</div> 
			<img src="../../../assets/photo-kepka.png" 
			style="margin-left: 4px;
			margin-right: 8px;"> 
			<div class="text-without-underline">Slava, product designer with over 4 years of</div>
		</div>
		<div class="row">
			<span class="underline" style="margin-right: 0px;">experience in mobile and web products</span>
			<div class="text-without-underline">. Working at </div>
			<img src="../../../assets/purple-square.png" 
			style="margin-left: 10px;
			margin-right: 4px;"> 
			<div class="text-without-underline">Fitmost,</div>
		</div>
		<div class="row">
			<div class="text-without-underline">also trying to develop </div>
			<span class="underline"> pet-projects </span> 
			<div class="text-without-underline"> in my spare time.</div></div>
  </div>
</template>

<script>
export default {
  data () {
		return {}
  }
}
</script>

<style scoped>
@media screen and (min-width: 768px){
	img{
		height: 24px;
	}
	.row{
		display: flex;
		align-items: center;
	}
	.text-without-underline{
		border-bottom: 2px solid transparent;
	}
	.underline{
		cursor: pointer;
		margin: 8px;
		border-bottom: 2px solid #333333;
		line-height: 24px;
	}
	.main-text{
		margin-top: 132px;
		display: flex;
		flex-direction: column;
		width: 734px;
		height: 132px;
		font-size: 24px;
		line-height: 42px;
		font-weight: 500;
		align-items: center;
		align-self: center;
		color: #333333;
	}
}
@media screen and (max-width: 768px){
	.main-text{
		display: none;
	}
}

</style>