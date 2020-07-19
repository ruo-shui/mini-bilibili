export default function(params) {
	return new Promise((res, rej) => {
		wx.request({
			...params,
			url: "https://mock-api.com/mnEe4VnJ.mock" + params.url,
			success: function(result) {
				res(result.data)
			},
			fail: function(err) {
				rej(err)
			}
		})
	})
}
