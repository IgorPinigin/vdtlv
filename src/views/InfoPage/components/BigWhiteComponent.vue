<template>
	<div class="white-back">
		<div class="column">
			<div class="title" ref="title">Checkout update</div>
			<div class="title-2">at <span style="border-bottom: 1.7px solid rgba(51, 51, 51, 0.5); line-height: 5px;">RightOnTrek</span></div>
			<div class="row">
				<div class="left-text">Problem</div>
				<div class="right-text">We got a big amount of abandoned carts. Depending on UX research results I found out that there are two main reasons: too many non-obvious steps during checkout and hard forms without presaved information for authorized users.</div>
			</div>
			<div class="row">
				<div class="left-text">Goal</div>
				<div class="right-text">Decrease the number of abandoned carts in relation to paid orders. Increase the number of orders through the website.</div>
			</div>
			<div class="row">
				<div class="left-text">Execution Checklist</div>
					<div style="display: flex; flex-direction: column;">
					<div class="row mobile margin">
						<div class="step-number">1.</div>
						<div class="right-text" style="width: 418px;">Find out the needs and pains of users and determine the tasks to achieve results by changing metrics together with the project manager.</div>
					</div>
					<div class="row mobile margin">
						<div class="step-number">2.</div>
						<div class="right-text" style="width: 418px;">Explore the best options for implementing the payment process, study the existing customer journey, prepare hypotheses and present them to the team.</div>
					</div>
					<div class="row mobile">
						<div class="step-number">3.</div>
						<div class="right-text" style="width: 418px;">Prepare prototypes for testing hypotheses, test and make changes based on test results.</div>
					</div>
				</div>		
			</div>
			<div class="row">
				<div class="left-text">Results</div>
				<div class="right-text">The calendar turned into the new component with options for year/month selector, become more convenient for users of mobile devices. Updated product card for cart, now they are more informative. New option buttons added to the design system.</div>
			</div>
		</div>
		<div class="big-photo">
			<img src="../../../assets/photo-info-1.png">
		</div>
		<div class="column">
			<div class="black-text">
				In the course of work, several checkout layouts were prepared and the user path was redesigned to achieve better performance in usability tests. The final result (for a certain audience of users) has become better compared to the implemented one:
			</div>
			<div class="slanted-text">	
				<span>The data is the result of testing with the Marvel app (3 weeks). It looks great, but the</span> 
				results of Google Analytics (1 month after implementation) came out a little different: the number of orders increased, but the number of abandoned carts did not change. After reviewing the problem, I found out that the most of the carts are left by users who do not want to create an account for the purchase. The service is turning into membership only platform so it is iportant to inform users about this or make a guest checkout.
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{

			}
		},
		mounted() {
			window.addEventListener('scroll', this.checkPosition);
		},
		unmounted() {
			window.removeEventListener('scroll', this.checkPosition);
		},
		methods: {
			checkPosition() {
				const title = this.$refs.title.getBoundingClientRect().top;
				if (title < 0) {
					this.$emit('titleFirstVisible')
				} else{
					this.$emit('titleFirstNotVisible')
				}
			}
		}
	}
</script>

<style scoped>
@media screen and (min-width: 768px){
	.white-back{
		width: 100%;
		height: fit-content;
		background-color: rgba(255, 255, 255, 0.75);
		border-radius: 64px;
		justify-content: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 72px;
	}
	.column{
		width: 736px;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: start;
	}
	.title{
		margin-top: 64px;
		margin-bottom: 8px;
		font-size: 32px;
		line-height: 40px;
		font-weight: 700;
	}
	.title-2{
		color: rgba(51, 51, 51, 0.5);
		font-size: 17px;
		font-weight: 400;
		margin-bottom: 64px;
	}
	.row{
		display: flex;
		margin-bottom: 64px
	}
	.left-text{
		width: 256px;
		margin-right: 32px;
		font-size: 17px;
		line-height: 24px;
		color: rgba(51, 51, 51, 1);
		font-weight: 700;
	}
	.right-text{
		width: 448px;
		font-size: 17px;
		line-height: 24px;
		color: rgba(51, 51, 51, 1);
		font-weight: 400;
	}
	.big-photo{
		width: 1000px;
		height: 546px;
		background-color: rgba(235, 235, 235, 1);
		border-radius: 32px;
		position: relative;
		margin-bottom: 64px;
	}
	img{
		width: 648px;
		height: 369px;
		display: flex;
		position: absolute; /* Позиционируем изображение абсолютно относительно родительского элемента */
		top: 50%; /* Помещаем изображение в вертикально центр родительского элемента */
		left: 50%; /* Помещаем изображение в горизонтально центр родительского элемента */
		transform: translate(-50%, -50%) rotate(-4.44deg);
		box-shadow: 0px 36px 84px rgba(240, 240, 240, 1);
	}
	.black-text{
		font-size: 17px;
		font-weight: 400x;
		line-height: 24px;
		margin-bottom: 64px;
	}
	.slanted-text{
		font-weight: 400x;
		line-height: 24px;
		margin-bottom: 64px;
		font-style: italic;
		color: rgba(51, 51, 51, 0.5)
	}
	.step-number {
		font-size: 17px;
		line-height: 24px;
		color: rgba(51, 51, 51, 1);
		font-weight: 400;
		margin-right: 6px;
	}
	.margin{
		margin-bottom: 16px;
	}
}
@media screen and (max-width: 768px){
	.white-back{
		width: 100vw;
		height: fit-content;
		background-color: rgba(255, 255, 255, 0.75);
		border-radius: 32px;
		margin-bottom: 32px;
	}
	.column{
		position: relative;
		width: calc(100% - 32px);
		height: fit-content;
		margin-left: auto;
		margin-right: auto;
	}
	.title{
		margin-top: 32px;
		margin-bottom: 8px;
		font-size: 24px;
		line-height: 40px;
		font-weight: 700;
	}
	.title-2{
		color: rgba(51, 51, 51, 0.5);
		font-size: 17px;
		font-weight: 400;
		margin-bottom: 24px;
	}
	.row{

	}
	.left-text{
		width: 100%;
		margin-bottom: 8px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(51, 51, 51, 1);
		font-weight: 700;
	}
	.right-text{
		width: 100%;
		margin-bottom: 24px;
		font-size: 16px;
		line-height: 24px;
		color: rgba(51, 51, 51, 1);
		font-weight: 400;
	}
	.big-photo{
		width: 100vw;
		height: 70vw;
		background-color: rgba(235, 235, 235, 1);
		position: relative;
		margin-bottom: 24px;
	}
	img{
		width: 86vw;
		height: 48vw;
		display: flex;
		position: absolute; /* Позиционируем изображение абсолютно относительно родительского элемента */
		top: 50%; /* Помещаем изображение в вертикально центр родительского элемента */
		left: 50%; /* Помещаем изображение в горизонтально центр родительского элемента */
		transform: translate(-50%, -50%) rotate(-4.44deg);
		box-shadow: 0px 36px 84px rgba(240, 240, 240, 1);
	}
	.black-text{
		font-size: 16px;
		font-weight: 400x;
		line-height: 24px;
		margin-bottom: 24px;
		color: rgba(0, 0, 0, 1)
	}
	.slanted-text{
		font-size: 16px;
		font-weight: 400x;
		line-height: 24px;
		margin-bottom: 32px;
		font-style: italic;
		color: rgba(51, 51, 51, 0.5)
	}
	.step-number {
		font-size: 17px;
		line-height: 24px;
		color: rgba(51, 51, 51, 1);
		font-weight: 400;
		margin-right: 6px;
	}
	.mobile{
		display: flex;
	}
	.margin{
		margin-bottom: 0px;
	}
}
</style>