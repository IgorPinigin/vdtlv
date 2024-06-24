<template>
	<div class="background-banner" ref="testPhoto">
		<div class="phone-back" ref="phoneBack"></div>
		<div class="phone-front" ref="phoneFront"></div>
		<div class="text-box">
			<div class="big-text">Fitmost</div>
			<div class="small-text">Right on Trek is providing a comfortable and accessible user experience for new hikers and lifelong mountaineers to make their outdoor adventures as epic as possible. I was working on various parts of the service from authorization to the gear rental system, developed CJM and user flows.</div>
			<div class="text-with-arrow">
				Search update ->
			</div>
			<div class="text-with-arrow">
				App redesign ->
			</div>
			<div class="button-read">
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
				const windowHeight = 767;


				const distanceTop = Math.max(0, windowHeight - (testPhotoTop));
				// const distanceBottom = Math.max(0, windowHeight + testPhotoTop - windowHeight);

				const maxRotationBack = 6.5; // максимальный наклон назад для phone-back
				const maxRotationFront = -4.44; // максимальный наклон вперед для phone-front

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
					this.$refs.phoneBack.style.transform = `rotate(${rotationBack - 3.760687}deg)`;
					this.$refs.phoneFront.style.transform = `rotate(${rotationFront + 3 - 0.590687}deg)`;
					
					this.$refs.phoneBack.style.right = `${251 - distanceTop*0.29}px`;
					this.$refs.phoneFront.style.right = `${90 + distanceTop*0.072}px`;
					// console.log(this.$refs.phoneFront.style.transform)
					// console.log(111 + distanceTop*0.05)
				}else if( testPhotoTop < 0 && testPhotoTop > -329){
					const rotationBack = distanceTop * coefficientBack;
					const rotationFront = distanceTop * coefficientFront;
					this.$refs.phoneBack.style.right = `${-194 + distanceTop*0.29}px`;
					this.$refs.phoneBack.style.transform = `rotate(${9 - rotationBack}deg)`;
					
					this.$refs.phoneFront.style.right = `${202 - distanceTop*0.072}px`;
					this.$refs.phoneFront.style.transform = `rotate(${-6.5 - rotationFront}deg)`;

				}
			}
		}
	}
</script>

<style scoped>
@media screen and (min-width: 768px){
	.background-banner{
		margin-top: 60px;
		margin-bottom: 72px;
		position: relative;
		width: 1000px;
		height: 589px;
		background-image: url(~@/assets/back-test.png); 
		background-size: cover;
		margin-left: auto;
		margin-right: auto;
		background-position: center;
		align-items: center;	
		border-radius: 64px;
		align-items: center;
		overflow: hidden;
	}
	.phone-back{
		position: absolute;
		top: 116px;
		right: 122.1504699707031px;
		width: 243.51px;
		height: 522.71px;
		background-image: url(~@/assets/phone-back.png);
		background-size: cover;
		transform: rotate(0deg);
	}
	.phone-front{
		position: absolute;
		right: 122.1504699707031px;
		top: 34px;
		width: 243.51px;
		height: 522.71px;
		border-radius: 33px;
		background-image: url(~@/assets/phone-front.png);
		background-size: cover;
		transform: rotate(-0.0deg);
		box-shadow: 10px 36px 84px rgba(128, 68, 250, 1);
	}
	.text-box{
		position: absolute;
		top: 127px;
		bottom: 127px;
		left: 64px;
		width: fit-content;
		height: fit-content;
		max-width: 480px;
	}
	.big-text{
		color: white;
		font-size: 40px;
		line-height: 40px;
		font-weight: 700;
		margin-bottom: 32px;
	}
	.small-text{
		font-weight: 400;
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
		font-weight: 600;
		margin-bottom: 4px;
		color: white;
		cursor: default;
		border-bottom: 1.3px solid transparent;
		transition: border-bottom 0.3s ease;
	}
	.text-with-arrow:hover{
		cursor: pointer;
		border-bottom: 1.3px solid white;
	}
	.button-read{
		cursor: pointer;
		margin-top: 28px;
		background-color: white;
		padding: 14px 16px;
		width: fit-content;
		border-radius: 16px;
		font-size: 16px;
		line-height: 20px;
		font-weight: 600;
		color: #7F4CF7;
	}
}
@media screen and (max-width: 768px){
	.background-banner{
		display: none;
	}
}

</style>