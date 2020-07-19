### 项目介绍

本项目是一个仿bilibili视频首页和视频详情页的微信小程序项目（本人还是非常喜欢B站这个平台的），非常适合刚刚学习小程序的同学们练手。首页包含了头部、导航栏、视频列表等部分。详情页包含了视频，视频信息介绍，视频推荐列表和评论。

### 项目截图

<div>
    <img src="./screenshots/index.jpg" width=32%/>
    <img src="./screenshots/detail1.jpg" width=32%/>
    <img src="./screenshots/detail2.jpg" width=33%/>
</div>

### 知识点总结

1.项目下载运行的时候，要在微信开发者工具的详情中勾选不校验合法域名，要不请求不到数据。或者在微信公众平台中，开发设置里边添加request合法域名：https://mock-api.com（项目接口地址）

2.请求接口时采用promise封装request，这样的好处是代码比较简洁，不用每次都写接口完整地址，并且不用考虑this指向问题。

```js
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
```

3.为了是封装后的代码更为简洁，可以使用 async 和 await ，但是小程序真机运行是不支持这个语法的，所以要引用项目中lib文件夹中的runtime.js。

```js
import request from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime.js"
async getNavList(){
		const data = await request({url:"/navList"})
		if(data.code === 0){
			this.setData({
				navList:data.data.navList
			})
		}
	}
```

3.首页导航栏封装时候使用了scroll-view，发现这个组件用flex布局不起作用，最后用了inline-block使它们都在一行显示。

4.轮播图制作时候要注意，swiper的默认宽高为375\*150，image的默认宽高为320\*240，所以要调整图片大小，可以设置image的mode为widthFix，然后设置image为100%，最后调整swiper的高度和图片一样。

5.图标使用的是阿里巴巴的IconFont（强烈推荐，非常好用），搜索需要使用的图标，加入购物车，添加到一个新建的项目中，然后复制代码，导入到开发的项目中，就可以通过text标签添加相应的类名的方式引入图标。

6.设置文字单行和多行显示，超出省略号。

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

```css
overflow : hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```

7。关于接口数据，因为不是自己写的，所以有些数据已经失效了，视频数据是我自己在bilibili上找的一个链接（我最喜欢的白蛇：缘起），所以点开的视频都是这一个（用户头像也是，不要在意这一点小小的瑕疵）

