<template>
	<div class="background-banner" ref="testPhoto">
		<div class="order-back" ref="phoneBack"></div>
		<div class="order-front" ref="phoneFront"></div>
		<div class="order-widget">
			<div class="order-back-phone"></div>
			<div class="order-front-phone"></div>
		</div>
		
		<div class="text-box">
			<div class="big-text">Right on Trek</div>
			<div class="small-text">Right on Trek is providing a comfortable and accessible user experience for new hikers and lifelong mountaineers to make their outdoor adventures as epic as possible. I was working on various parts of the service from authorization to the gear rental system, developed CJM and user flows.</div>
			<div class="text-with-arrow" @click="toInfoCheck">
				Checkout update ->
			</div>
			<div class="text-with-arrow" @click="toInfoGear">
				Gear rental portal ->
			</div>
			<div class="text-with-arrow" @click="toInfoTop">
				Product page standardisation ->
			</div>
			<div class="button-read" @click="toInfoTop">
				Read more
			</div>
		</div>
		<div class="phone"></div>
	</div>
</template>

<script>
	export default {
		mounted() {
			window.addEventListener('scroll', this.handleScroll);
		},
		unmounted() {
			window.removeEventListener('scroll', this.handleScroll);
		},
		methods: {
			handleScroll() {
				const testPhotoTop = this.$refs.testPhoto.getBoundingClientRect().top;
				const windowHeight = 1167;
				const distanceTop = Math.max(0, windowHeight - (testPhotoTop));
				// const distanceBottom = Math.max(0, windowHeight + testPhotoTop - windowHeight);
				const maxRotationBack = -3; // максимальный наклон назад для phone-back
				const maxRotationFront = 6; // максимальный наклон вперед для phone-front
				// Коэффициенты, которые определяют, как сильно изменяется наклон в зависимости от расстояния
				const coefficientBack = maxRotationBack / windowHeight;
				const coefficientFront = maxRotationFront / windowHeight;
				// Рассчитываем текущий наклон
				// const rotationBack = distanceTop * coefficientBack;
				// const rotationFront = distanceTop * coefficientFront;
				if (testPhotoTop>0)
				{
					const rotationBack = distanceTop * coefficientBack;
					const rotationFront = distanceTop * coefficientFront;
					this.$refs.phoneBack.style.transform = `rotate(${rotationBack + 1}deg)`;
					this.$refs.phoneFront.style.transform = `rotate(${rotationFront - 3}deg)`;
				
					this.$refs.phoneFront.style.top = `${120 - distanceTop*0.02}px`;
					this.$refs.phoneBack.style.top = `${100 + distanceTop*0.02}px`;
					// console.log(this.$refs.phoneFront.style.transform)
					// console.log(111 + distanceTop*0.05)
				}else if( testPhotoTop < 0 && testPhotoTop > -529){
					const rotationBack = distanceTop * coefficientBack;
					const rotationFront = distanceTop * coefficientFront;
					this.$refs.phoneBack.style.transform = `rotate(${-8 - rotationBack*2}deg)`;
					this.$refs.phoneFront.style.transform = `rotate(${9 - rotationFront}deg)`;
					this.$refs.phoneFront.style.top = `${74 + distanceTop*0.02}px`;
					this.$refs.phoneBack.style.top = `${220 - distanceTop*0.08}px`;
				}
			},
			toInfoTop(){
				console.log('jopa')
				this.$router.push({ name: 'infoPage', params: { scrollPosition: 'top' } })
			},
			toInfoCheck(){
				this.$router.push({ name: 'infoPage', params: { scrollPosition: 'check' } })
			},
			toInfoGear(){
				this.$router.push({ name: 'infoPage', params: { scrollPosition: 'gear' } })
			},
		}
	}
</script>

<style scoped>
@media screen and (min-width: 768px){
	.background-banner{
		position: relative;
		width: 1000px;
		height: 589px;
		background-image: url(~@/assets/orange.png); 
		background-size: cover;
		margin-left: auto;
		margin-right: auto;
		background-position: center;
		align-items: center;	
		border-radius: 64px;
		align-items: center;
		overflow: hidden;
	}
	.order-back{
		position: absolute;
		top: 102px;
		width: 613.7px;
		height: 349.51px;
		left: 590px;
		border-radius: 16px;
		background-image: url(~@/assets/order.png);
		background-size: cover;
		box-shadow: 0px 36px 84px rgba(202, 78, 8, 1);
	}
	.order-front{
		position: absolute;
		left: 590px;
		top: 102px;
		width: 613.7px;
		height: 349.51px;
		border-radius: 16px;
		background-image: url(~@/assets/order.png);
		background-size: cover;
		box-shadow: 0px 36px 84px rgba(202, 78, 8, 1);
	}
	.text-box{
		position: absolute;
		top: 114.5px;
		bottom: 114.5px;
		left: 64px;
		width: fit-content;
		height: fit-content;
		max-width: 480px;
	}
	.big-text{
		color: white; 
		font-size: 40px;
		line-height: 40px;
		font-weight: 600;
		margin-bottom: 32px;
	}
	.small-text{
		font-weight: 300;
		font-size: 17px;
		line-height: 20.57px;
		width: 100%;
		color: white;
		padding-bottom: 32px;
	}
	.text-with-arrow{
		width: fit-content;
		font-size: 17px;
		line-height: 20.57px;
		font-weight: 500;
		margin-bottom: 4px;
		color: white;
		cursor: default;
		border-bottom: 1.3px solid transparent;
		transition: border-bottom 0.3s ease;
		cursor: pointer;
	}
	.text-with-arrow:hover{
		border-bottom: 1.3px solid white;
	}
	.button-read{
		margin-top: 28px;
		background-color: white;
		padding: 14px 16px;
		width: fit-content;
		border-radius: 16px;
		font-size: 16px;
		line-height: 20px;
		font-weight: 600;
		color: #F55204;
		cursor: pointer;
	}
}
@media screen and (max-width: 768px){
	.background-banner{
		width: 100%;
		background-image: linear-gradient(to bottom, rgba(255, 117, 58, 1), rgba(228, 87, 7, 1));
		height: fit-content;
		align-items: center;
		justify-content: center;
		align-self: center;
		border-radius: 32px;
		align-items: center;
	}
	.order-back-phone{
		top: 6px;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		width: 96%;
		height: 54vw;
		border-radius: 16px;
		background-image: url(~@/assets/order.png);
		background-size: cover;
		transform: rotate(-4.46deg);
		box-shadow: 0px 36px 84px rgba(202, 78, 8, 1); 
	} 
	.order-front-phone{
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		width: 96%;
		height: 54vw;
		border-radius: 16px;
		background-image: url(~@/assets/order.png);
		background-size: cover;
		transform: rotate(0.42deg);
		box-shadow: 0px 36px 84px rgba(202, 78, 8, 1); 
	} 
	.order-widget{
		position: relative;
		margin-left: auto;
		margin-right: auto;
		margin-top: 28px;
		width: 86vw;
		height: fit-content;
	}
	.text-box{
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		margin-top: 74vw;
		width: calc(100% - 32px);
		height: fit-content;
	}
	.big-text{
		z-index: 15;
		height: fit-content;
		display: flex;
		font-size: 32px;
		font-weight: 700;
		line-height: 40px;
		color: rgba(255, 255, 255, 1);
	}
	.small-text{
		height: fit-content;
		display: flex;
		margin-top: 32px;
		font-size: 16px;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
		margin-bottom: 28px
	}
	.text-with-arrow{
		height: fit-content;
		color: rgba(255, 255, 255, 1);
		font-size: 16px;
		font-weight: 600;
		margin-top: 4px;
		outline: none;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}
	
	.button-read{
		display: flex;
		background-color: rgba(255, 255, 255, 1);
		height: 48px;
		margin-top: 32px;
		margin-bottom: 16px;
		border-radius: 16px;
		color: rgba(245, 82, 4, 1);
		font-size: 16px;
		font-weight: 600;
		align-items: center;
		justify-content: center;
	
	}
}

</style>