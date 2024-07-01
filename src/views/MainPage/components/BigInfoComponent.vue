<template>
	<div class="big-info-container">
		<div class="row-with-photo">
			<div class="photo"></div>
			<div class="photo-text">
				<span>
					I am a product designer with over 4 years experience in companies from different spheres (wellness, e-commerce and foodtech). I have designed interfaces (web and mobile) some startups at different stages of development: from MVP to projects with over 10 000 MAU. 
				</span>
				<div >
					<span style="border-bottom: 1px solid #333333; cursor: pointer; 		outline: none;
		-webkit-tap-highlight-color: rgba(0,0,0,0);" @click="toCV">
						Check my CV</span>
					<span>
						or read briefly↓
					</span>
				</div>
			</div>
		</div>
		<div class="horizontal-spacer">
		</div>
		<div class="row-with-work">
			<div class="first-row">
				<div class="big-info">
					<div class="small-text">
						since 2023
					</div>
					Mentoring designers at 
					<span class="url-word" @click="toHelper">
						Helper</span>. Answered questions and held meetings with junior and middle designers to build<br> an effective development track
				</div>
				<div class="middle-info">
					<div class="small-text">
						October 2022
					</div>
					Become a Product Designer <br>at
					<span class="url-word" @click="toFitmost">Fitmost</span>
				</div>
			</div>
			<div class="second-row">
				<div class="middle-info">
					<div class="small-text">
						September 2021 
					</div>
					Worked at <span class="url-word" @click="toRoT">RightOnTrek</span><br>as UI/UX Designer
				</div>
				<div class="small-info">
					<div class="small-text">
						June 2021 
					</div>
					Started <span class="url-word" @click="toEduct">Educt</span> with my folks
				</div>
				<div class="middle-info">
					<div class="small-text">
						July 2021
					</div>
					Got BA “Information technologies <br>in design” at ITMO University
				</div>
			</div>
		</div>
		<div class="horizontal-spacer">
		</div>
		<div class="row-with-info">
			<div class="descr">Also you can contact me at</div>
			<div class="cards-row">
				<div class="contact-card" @click="toTg">
					<div class="place">
						Telegram
					</div>
					<div class="id">
						@vdtlv
					</div>
				</div>
				<div class="contact-card" @click="toDribble">
					<div class="place">
						Dribbble
					</div>
					<div class="id">
						@vdtlv
					</div>
				</div>
				<div class="contact-card" @click="toInst">
					<div class="place">
						Instagram
					</div>
					<div class="id">
						@vdtlv
					</div>
				</div>
				<div class="contact-card" @click="toGit">
					<div class="place">
						Github
					</div>
					<div class="id">
						/vdtlv
					</div>
				</div>
				<div class="contact-card mail" @click="toMail">
					<div class="place">
						Mail
					</div>
					<div class="id">
						contact@vdtlv.me
					</div>
				</div>
				<div class="contact-card mail-phone">
					<div class="place">
						Mail
					</div>
					<div class="id">
						contact@vdtlv.me
					</div>
				</div>

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
		methods:{
			toTg(){
				const telegramUsername = 'vdtlv'; // Замените на имя пользователя или бота в Telegram
				const telegramLink = `https://t.me/${telegramUsername}`;
				window.open(telegramLink, '_blank');
			},
			toDribble(){
				window.open('https://dribbble.com/vdtlv', '_blank');
			},
			toInst(){
				window.open('https://www.instagram.com/vdtlv', '_blank');
			},
			toGit(){
				window.open('https://github.com/vdtlv', '_blank');
			},
			toHelper(){
				window.open('https://www.gohelper.io/', '_blank');
			},
			toFitmost(){
				window.open('https://fitmost.ru/', '_blank');
			},
			toRoT(){
				window.open('https://rightontrek.com/', '_blank');
			},
			toEduct(){
				window.open('https://educt.ru/', '_blank');
			},
			toMail(){
				const email = 'contact@vdtlv.me'; // Замените на нужный email
				const subject = encodeURIComponent('Hello!');
				const body = encodeURIComponent('');
				const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
				window.location.href = mailtoLink;
			}
		}
	}
</script>

<style scoped>
@media screen and (min-width: 768px){
	.big-info-container{
		align-self: center;
	}
	.row-with-photo{
		display: flex;
		width: 736px;
		height: 120px;
	}
	.photo{
		border-radius: 32px;
		width: 160px;
		height: 120px;
		background-image: url(~@/assets/photo.png);
		background-size: cover;
		background-position: center;
		box-shadow: 0px 8px 32px rgba(186, 186, 186, 0.36);
	}
	.photo-text{
		margin-top: 10px;
		margin-bottom: 10px;
		width: 544px;
		margin-left: 32px;
		font-size: 16px;
		line-height: 20px;
		font-weight: 400
	}
	.row-with-work{
		width: 736px;
		height: 188px;
	}
	.first-row{
		width: 736px;
		height: 88px;
		display: flex;
		margin-bottom: 32px;
	}
	.big-info{
		font-size: 16px;
		font-weight: 400;
		line-height: 20px;
		color: rgba(51, 51, 51, 1);
		width: 448px;
		height: 88px;
		margin-right: 32px;
	}
	.middle-info{
		font-size: 16px;
		font-weight: 400;
		line-height: 20px;
		color: rgba(51, 51, 51, 1);
		width: 256px;
		height: 68px;
	}
	.small-info{
		margin-left: 32px;
		margin-right: 32px;
		font-size: 16px;
		font-weight: 400;
		line-height: 20px;
		color: rgba(51, 51, 51, 1);
		width: 160px;
		height: 68px;
	}
	.small-text{
		color: rgba(51, 51, 51, 0.5);
		margin-bottom: 8px;
	}
	.url-word{
		cursor: pointer;
		border-bottom: 1px solid #333333;
	}
	.second-row{
		width: 736px;
		height: 68px;
		display: flex;
	}
	.row-with-info{
		width: 736px;
		height: 100px;
		margin-bottom: 104px;
	}
	.horizontal-spacer{
		margin-top: 24px;
		margin-bottom: 24px;
		height: 1px;
		width: 736px;
		background-color: rgba(51, 51, 51, 0.1);
	}
	.descr{
		color: #333333;
		margin-bottom: 16px;
	}
	.contact-card{
		background-color: rgba(241, 241, 241, 0.1);
		width: fit-content;
		min-width: 101.75px;
		height: 44px;
		border-radius: 16px;
		border: 1px solid rgba(246, 243, 244, 1);
		padding: 10px 16px;
		box-shadow: 0px 4px 16px rgba(186, 186, 186, 0.24);
	}
	.contact-card:hover{
		cursor: pointer;
		box-shadow: 0px 8px 32px rgba(186, 186, 186, 0.32);
	}
	.contact-card:active{
		background-color: rgba(229, 229, 229, 0.5)
	}
	.place{
		font-size: 16px;
		line-height: 20px;
		font-weight: 600;
		margin-bottom: 4px;
		color: rgba(51, 51, 51, 1);
	}
	.id{
		font-size: 16px;
		line-height: 20px;
		font-weight: 400;
		color: rgba(51, 51, 51, 0.5)
	}
	.cards-row{
		display: flex;
		gap: 8px;
	}
	.mail-phone{
		display: none;
	}
}
@media screen and (max-width: 768px){
	.big-info-container{
		margin-top: 110px;
		width: calc(100% - 32px);
		margin-left: 16px;
		margin-right: 16px;
		margin-bottom: 64px;
	}
	.row-with-photo{
		width: 100%;
	}
	.photo{
		border-radius: 32px;
		width: 100%;
		height: 67.5vw;
		background-image: url(~@/assets/photo-info-mobile.png);
		background-size: cover;
		background-position: center;
		box-shadow: 0px 8px 32px rgba(186, 186, 186, 0.36);
	}
	.photo-text{
		margin-top: 16px;
		margin-bottom: 16px;
		width: 100%;
		font-size: 16px;
		line-height: 20px;
		font-weight: 400
	}
	.horizontal-spacer{
		margin-top: 24px;
		margin-bottom: 24px;
		height: 1px;
		width: 100%;
		background-color: rgba(51, 51, 51, 0.1);
	}
	.big-info{
		font-size: 16px;
		font-weight: 400;
		line-height: 20px;
		color: rgba(0, 0, 0, 1);
		width: 100%;
		height: fit-content;
	}
	.middle-info{
		margin-top: 16px;
		font-size: 16px;
		font-weight: 400;
		line-height: 20px;
		color: rgba(0, 0, 0, 1);
		width: 100%;
		height: fit-content;
	}
	.small-info{
		margin-top: 16px;
		font-size: 16px;
		font-weight: 400;
		line-height: 20px;
		color: rgba(0, 0, 0, 1);
		width: 100%;
		height: fit-content;
	}
	.small-text{
		color: rgba(51, 51, 51, 0.5);
		margin-bottom: 8px;
	}
	.url-word{
		cursor: pointer;
		border-bottom: 1px solid #333333;
		outline: none;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}
	.descr{
		color: #333333;
		margin-bottom: 16px;
	}
	.contact-card{
		background-color: rgba(241, 241, 241, 0.1);
		width: calc(50% - 40px); /* Минимальная ширина - половина от 100% ширины контейнера */
		height: 44px;
		border-radius: 16px;
		padding: 10px 16px;
		border: 1px solid rgba(246, 243, 244, 1);
		box-shadow: 0px 4px 16px rgba(186, 186, 186, 0.24);
	}
	.contact-card:active{
		cursor: pointer;
		box-shadow: 0px 8px 32px rgba(186, 186, 186, 0.32);
		background-color: rgba(229, 229, 229, 0.5)
	}


	.cards-row{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.mail{
		display: none;
	}
	.mail-phone{
		width: calc(100% - 33px);
	}
	.place{
		font-size: 16px;
		line-height: 20px;
		font-weight: 600;
		margin-bottom: 4px;
		color: rgba(51, 51, 51, 1);
	}
	.id{
		font-size: 16px;
		line-height: 20px;
		font-weight: 400;
		color: rgba(51, 51, 51, 0.5)
	}
}


</style>