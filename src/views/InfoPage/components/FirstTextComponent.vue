<template>
	<div class="text-box">
			<div class="big-text" ref="bigText">Right on Trek</div>
			<div class="grey-text">Visit rightontrek.com</div>
			<div class="small-text">At Right on Trek I wanted to provide a comfortable and accessible user experience for new hikers and lifelong mountaineers to make their outdoor adventures as epic as possible. I was working on various parts of the service from authorisation to the gear rental system. Developed CJM and user flows to turn RoT into a subscription-only platform smoothly.</div>
			<div class="text-with-arrow" @click="toSecond">
				Checkout update ->
			</div>
			<div class="text-with-arrow" @click="toThird">
				Gear rental portal ->
			</div>
			<div class="text-with-arrow">
				Product page standardisation ->
			</div>
		</div>
</template>

<script>
export default {
	setup () {
		return {}
	},
	mounted() {
    window.addEventListener('scroll', this.checkPosition);
  },
  unmounted() {
    window.removeEventListener('scroll', this.checkPosition);
  },
  methods: {
		checkPosition() {
			const bigTextTop = this.$refs.bigText.getBoundingClientRect().top;
			if (bigTextTop < 0) {
				this.$emit('dividerVisible')
			} else{
				this.$emit('dividerNotVisible')
			}
    },
		toSecond(){
			this.$emit('second')
		},
		toThird(){
			this.$emit('third')
		},
  }
}
</script>

<style scoped>
@media screen and (min-width: 768px){
	.text-box{
		position: relative;
		margin-top: 132px;
		margin-bottom: 64px;
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		align-items: start;
		width: fit-content;
		height: fit-content;
		max-width: 736px;
	}
	.big-text{
		color: rgba(51, 51, 51, 1);
		font-size: 40px;
		line-height: 40px;
		font-weight: 700;
		position: relative; 
		top: 0;
		left: 0;
		
	}
	.grey-text{
		margin-top: 8px;
		margin-bottom: 32px;
		font-size: 17px;
		font-weight: 400;
		line-height: 24px;
		color: rgba(51, 51, 51, 0.5);
	}
	.small-text{
		font-weight: 400;
		font-size: 17px;
		line-height: 20.57px;
		width: 100%;
		color: rgba(51, 51, 51, 1);
		padding-bottom: 32px;
	}
	.text-with-arrow{
		width: fit-content;
		font-size: 17px;
		line-height: 20.57px;
		font-weight: 700;
		margin-bottom: 4px;
		color: rgba(51, 51, 51, 1);
		cursor: pointer;
		border-bottom: 1.3px solid transparent;
		transition: border-bottom 0.3s ease;
	}
	.text-with-arrow:hover{
		border-bottom: 1.3px solid rgba(51, 51, 51, 1);
	}
}
@media screen and (max-width: 768px){
	.text-box{
		position: relative;
		margin-top: 64px;
		margin-bottom: 12px;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		align-items: start;
		width: calc(100% - 32px);
		height: fit-content;
	}
	.big-text{
		color: rgba(51, 51, 51, 1);
		font-size: 32px;
		line-height: 40px;
		font-weight: 700;
		position: relative; 
		top: 0;
		left: 0;
		
	}
	.grey-text{
		margin-top: 8px;
		margin-bottom: 16px;
		font-size: 17px;
		font-weight: 400;
		line-height: 24px;
		color: rgba(51, 51, 51, 0.5);
	}
	.small-text{
		font-weight: 400;
		font-size: 16px;
		line-height: 20.57px;
		width: 100%;
		color: rgba(51, 51, 51, 1);
		padding-bottom: 16px;
	}
	.text-with-arrow{
		width: fit-content;
		font-size: 16px;
		line-height: 20.57px;
		font-weight: 700;
		margin-bottom: 8px;
		color: rgba(51, 51, 51, 1);
		cursor: pointer;
		border-bottom: 1.3px solid transparent;
		transition: border-bottom 0.3s ease;
	}
	.text-with-arrow:hover{
		cursor: pointer;
		border-bottom: 1.3px solid rgba(51, 51, 51, 1);
	}
}
</style>