<!--pages/school/card/bind.wxml-->
<view>

  <view class="margin">
    <view class="padding-xs text-center">
      <image src="{{webImage}}" mode="widthFix"></image>
    </view>
    <view class="text-center"><text>请输入关联以上系统平台账号密码\r\n默认初始账号为学号，大一新生可能暂不支持\r\n19级默认密码身份证号后六位，20,21级末8位</text></view>
  </view>

  <view class="margin padding-top">
    <view class="cu-form-group margin-top radius">
      <view class="title">账号</view>
      <input placeholder="默认账号为学号" value="{{uid}}"></input>
    </view>
    <view class="cu-form-group margin-top radius">
      <view class="title">密码</view>
      <input password="true" value="{{password}}" placeholder=""></input>
    </view>

  </view>

  <view class="padding flex flex-direction">
    <button class="cu-btn bg-netfee lg text-white">绑定查询</button>
  </view>

</view>