module.exports = {
	configureWebpack:{
		resolve:{
			extensions:[],
			alias:{
				'assets':'@/assets',
				'common':'@/common',
				'network':'@/network',
				'components':'@/components',
				'views':'@/views',
			}
		}
	}
}

// 这里导出的配置会与公共配置合并
// '@':'src' 内部已经默认配置了该路径
// this.$router
// this.$store
// 上面两个可以直接通过this.$获取 ，不需要单独设置路径