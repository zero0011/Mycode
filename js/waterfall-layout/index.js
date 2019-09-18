//自执行函数
(function () {
    function Waterfall (option) {
        this.number = option.number //一次性渲染多少张图片
        this.container = option.container ;
        this.width = document.body.clientWidth;
        this.init()
    }
    Waterfall.prototype.init = function () {
        const imgList = document.getElementsByTagName('img') ;
        // float
        // position
        let heights = [] ;
        const perNum = this.getPerNum ();//每一行的图片数量
        for(var i = 0 ; i < perNum ; i++) {
            heights.push(imgList[i].offsetHeight) ;
        }
        let minIndex = this.getMinIndex(heights) ;
        for(var i = perNum ; i < imgList.length ; i ++) {
            imgList[i].style.position = 'absolute' ;
            imgList[i].style.left = `${imgList[minIndex].offsetLeft}px` ;
            imgList[i].style.top=`${heights[minIndex]}px` ;
            
            //更新高度, 并找到新最小值的下标
            heights[minIndex] = heights[minIndex] + imgList[i].offsetHeight ;
            minIndex = this.getMinIndex(heights) ;
        }
        this.heights = heights ;
    }
    Waterfall.prototype.getPerNum = function() {
        //得到每一排有多少图片
        const imgList = document.getElementsByTagName('img') ;
        const singleWidth = imgList[0].offsetWidth;//图片宽度
        return Math.floor(this.width/singleWidth) //向下取整
    }
    Waterfall.prototype.getMinIndex = function(heights) {
        const min =Math.min(...heights) ;
        return heights.findIndex(e => e===min); //返回最小值的索引
    }
    Waterfall.prototype.append = function (frag) {
        const $waterfall = document.getElementById(this.container) ;
        $waterfall.appendChild(frag) ;

        const imgList = document.getElementsByTagName('img') ;
        const imgFromFrag = Array.prototype.slice.call(imgList , -20) ;

        let heights = this.heights ;
        console.log(heights)
        let minIndex = this.getMinIndex(heights) ;
        // console.log(minIndex)
        for(var i = 0 ; i < 20 ; i ++) {
            imgFromFrag[i].style.position = 'absolute' ;
            imgFromFrag[i].style.left = `${imgList[minIndex].offsetLeft}px` ;
            imgFromFrag[i].style.top=`${heights[minIndex]}px` ;
            
            //更新高度, 并找到新最小值的下标
            heights[minIndex] = heights[minIndex] + imgFromFrag[i].offsetHeight ;
            minIndex = this.getMinIndex(heights) ;
        }
    }
    window.Waterfall = Waterfall ;//挂载到window上
})()

console.log(Waterfall)