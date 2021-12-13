import { debounce } from "commonjs/utils";

// 可以混入生命周期函数，使用混入会把原有的代码和这里的代码进行合并
export const itemListenerMixin = {
    data(){
        return {
            imgListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 100);
        // 全局监听    图片加载完成刷新scroll获取高度
        this.imgListener = () => {
            refresh();
        }
        this.$bus.$on("itemImageLoad", this.imgListener);
        console.log("混入");
    }
}