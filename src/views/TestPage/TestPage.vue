<template>
  <div class="main-test" ref="mainTest">
		<div class="test-photo" ref="testPhoto">
			<div class="phone-back" ref="phoneBack"></div>
			<div class="phone-front" ref="phoneFront"></div>
		</div>	
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
				const windowHeight = window.innerHeight;

				const distanceTop = Math.max(0, windowHeight - testPhotoTop);
				// const distanceBottom = Math.max(0, windowHeight + testPhotoTop - windowHeight);

				const maxRotationBack = 2; // максимальный наклон назад для phone-back
				const maxRotationFront = -2.44; // максимальный наклон вперед для phone-front

				// Коэффициенты, которые определяют, как сильно изменяется наклон в зависимости от расстояния
				const coefficientBack = maxRotationBack / windowHeight;
				const coefficientFront = maxRotationFront / windowHeight;

				// Рассчитываем текущий наклон
				const rotationBack = distanceTop * coefficientBack;
				const rotationFront = distanceTop * coefficientFront;

				// Применяем наклон к элементам
				this.$refs.phoneBack.style.transform = `rotate(${rotationBack}deg)`;
				this.$refs.phoneFront.style.transform = `rotate(${rotationFront}deg)`;
			}
		}
	}
</script>

<style scoped>
.main-test{
	width: 100%;
	height: 1800px;
}
.test-photo{
	margin-top: 500px;
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
	border-radius: 60px;
	align-items: center;
	overflow: hidden;
}
.phone-back{
	position: absolute;
	right: 58px;
	top: 116px;
	width: 243.51px;
	height: 522.71px;
	background-image: url(~@/assets/phone-back.png);
	background-size: cover;
	transform: rotate(0deg);
}
.phone-front{
	position: absolute;
	right: 164.6px;
	top: 34px;
	width: 243.51px;
	height: 522.71px;
	border-radius: 33px;
	background-image: url(~@/assets/phone-front.png);
	background-size: cover;
	transform: rotate(-0.0deg);
	box-shadow: 10px 36px 84px rgba(128, 68, 250, 1);
}

</style>