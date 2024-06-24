<template>
  <div class="main-text">
		<div class="row">
			<div class="text-without-underline">Hi! I'm</div> 
			<img src="../../../assets/photo-kepka.png" 
			style="margin-left: 4px;
			margin-right: 8px;"> 
			<div class="text-without-underline">Slava, product</div>
		</div>
		<div class="row">
			<div class="text-without-underline">designer with over 4 years of</div>
		</div>
		<div class="row">
			<span class="underline" style="margin-right: 0px;">experience in mobile and web</span>
		</div>
		<div class="row">
			<span class="underline" style="margin-right: 0px;">products</span>
			<div class="text-without-underline">. Working at </div>
			<img src="../../../assets/purple-square.png" 
			style="margin-left: 10px;
			margin-right: 4px;"> 
			<div class="text-without-underline">Fitmost,</div>
		</div>
		<div class="row">
			<div class="text-without-underline">also trying to develop </div>
		</div>
		<div class="row">
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
	.main-text{
		display: none;
	}
}
@media screen and (max-width: 768px){
	.main-text{
		margin-top: 112px;
		display: flex;
		flex-direction: column;
		width: calc(100%-32px);
		font-size: 18px;
		line-height: 32px;
		font-weight: 600;
		align-items: center;
		align-self: center;
		color: rgba(51, 51, 51, 1);
		margin-bottom: 112px;
	}
	img{
		height: 32px;
	}
	.row{
		display: flex;
		align-items: center;
	}
	.text-without-underline{
		border-bottom: 1.5px solid transparent;
	}
	.underline{
		margin: 8px;
		border-bottom: 1.5px solid #333333;
		line-height: 20px;
	}
}

</style>