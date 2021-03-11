<template>
    <div>
        <div class="content">
        <img src="./imgs/shop/1.jpg" alt="" />
        <div class="rig">
          <div class="top">
            <span>品牌</span>
            <p>祝贺日当午，汗滴禾吓哭</p>
            <span>保|准|到</span>
          </div>
          <div class="bottom">
            <div class="b-r">
              <div class="b-r-t">
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <span>5.0</span>
                <p>月售106单</p>
              </div>
              <div class="b-r-b">
                <p>￥20起送 / 配送费5元</p>
              </div>
            </div>
            <div class="b-l">
              <span>硅谷转送</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <img src="./imgs/shop/2.jpg" alt="" />
        <div class="rig">
          <div class="top">
            <span>品牌</span>
            <p>祝贺日当午，汗滴禾吓哭</p>
            <span>保|准|到</span>
          </div>
          <div class="bottom">
            <div class="b-r">
              <div class="b-r-t">
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <span>5.0</span>
                <p>月售106单</p>
              </div>
              <div class="b-r-b">
                <p>￥20起送 / 配送费5元</p>
              </div>
            </div>
            <div class="b-l">
              <span>硅谷转送</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <img src="./imgs/shop/3.jpg" alt="" />
        <div class="rig">
          <div class="top">
            <span>品牌</span>
            <p>祝贺日当午，汗滴禾吓哭</p>
            <span>保|准|到</span>
          </div>
          <div class="bottom">
            <div class="b-r">
              <div class="b-r-t">
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <span>5.0</span>
                <p>月售106单</p>
              </div>
              <div class="b-r-b">
                <p>￥20起送 / 配送费5元</p>
              </div>
            </div>
            <div class="b-l">
              <span>硅谷转送</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <img src="./imgs/shop/4.jpg" alt="" />
        <div class="rig">
          <div class="top">
            <span>品牌</span>
            <p>祝贺日当午，汗滴禾吓哭</p>
            <span>保|准|到</span>
          </div>
          <div class="bottom">
            <div class="b-r">
              <div class="b-r-t">
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <img src="./imgs/stars/star24_on@2x.png" alt="" />
                <span>5.0</span>
                <p>月售106单</p>
              </div>
              <div class="b-r-b">
                <p>￥20起送 / 配送费5元</p>
              </div>
            </div>
            <div class="b-l">
              <span>硅谷转送</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
 .content {
  height: 100px;
  display: flex;
  margin-top: 15px;
}
 .content img {
  display: block;
  width: 80px;
  height: 100px;
}
 .content .rig {
  flex: 1;
  box-sizing: border-box;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
 .content .rig .top {
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
}
 .content .rig .top span:first-child {
  background-color: yellow;
  font-size: 12px;
  font-weight: 700;
  margin-top: 5px;
}
 .content .rig .top span:last-child {
  font-size: 12px;
  color: #ccc;
  border: 1px solid #ccc;
  height: 20px;
  line-height: 20px;
}
 .content .rig .top p {
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  display: -moz-box;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-left: 5px;
}
 .content .rig .bottom {
  display: flex;
  justify-content: space-between;
}
 .content .rig .b-r-t {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 10px;
}
 .content .rig .b-r-t img {
  margin-right: 2px;
  width: 13px;
  height: 13px;
  display: block;
}
 .content .rig .b-r-t span {
  color: orange;
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
}
 .content .rig .b-r-b p {
  color: #999;
}
 .content .rig .b-l span {
  color: skyblue;
  border: 1px solid skyblue;
}
</style>