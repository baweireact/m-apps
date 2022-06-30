//获取应用实例
const app = getApp();
const { getMdData, getHtmlData } = require('./config')
//const a = require('../../mathjax/es5/tex-mml-chtml.js')
Page({
    data: {
        article: {},
        article2: {}
    },
    onLoad: function () {
        //this.setDataAsync()
        this.setMdArticle()
        //this.setHtmlArticle()
    },
    //渲染异步数据
    setDataAsync() {
        app.getText('https://www.vvadd.com/wxml_demo/demo.txt?v=2',res => {
            console.log(res.data)
        	let obj = app.towxml(res.data,'markdown',{
        		// theme:'dark',
        		events:{
        			tap:e => {
        				console.log('tap',e);
        			},
        			change:e => {
        				console.log('todo',e);
        			}
        		}
        	});

        	this.setData({
        		article:obj,
        		isLoading: false
        	});
        });
    },
    //渲染markdown格式的数据，包含公式
    setMdArticle() {
        const mdData = getMdData()
        let obj = app.towxml(mdData, 'markdown', {
            // theme:'dark',
            events: {
                tap: e => {
                    console.log('tap', e);
                },
                change: e => {
                    console.log('todo', e);
                }
            }
        });

        this.setData({
            article: obj,
            isLoading: false
        });
    },
    //渲染html格式的数据，包含公式
    setHtmlArticle() {
        const mdData = getHtmlData()
        let obj = app.towxml(mdData, 'html', {
            // theme:'dark',
            events: {
                tap: e => {
                    console.log('tap', e);
                },
                change: e => {
                    console.log('todo', e);
                }
            }
        });

        this.setData({
            article: obj,
            isLoading: false
        });

    }
})