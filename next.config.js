module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['images.dog.ceo', 'images.unsplash.com'],
	},
	// 공공데이터 api 사용시 CORS 에러 발생 해결 코드
	async rewrites() {
		return [
			// 한국천문연구원_특일 정보 (공공데이터)
			{
				source: '/SpcdeInfoService/:path*',
				destination: `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/:path*`,
			},
			// 구글 캘린더
			{
				source: '/calendars/:path*',
				destination: `https://www.googleapis.com/calendar/v3/calendars/:path*`,
			},
		];
	},
};
