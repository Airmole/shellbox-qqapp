<!--pages/school/card/index.wxml-->
<view class="margin bg-gray">
  <view wx:if="{{remind}}" class="remind-box">
    <image wx:if="{{remind == '加载中'}}" class="remind-img" src="/images/loading.gif"></image>
  </view>
  <block wx:else>
    <view class="ykt-card">
      <view class="ykt-black-line"></view>
      <view class="ykt-content">
        <view class="ykt-ye">
          <text class="ykt-ye-name">余额</text>
          <view class="ykt-ye-money">
            <text class="ykt-ye-value">{{ehall.amount}}</text>元
          </view>
        </view>
        <view class="ykt-img">
          <image src="/images/card-bg.png"></image>
        </view>
      </view>
      <view class="ykt-card-more">
        <text class="ykt-ye-time">截至：{{ehall.execTime}}</text>
        <text class="ykt-ye-id">卡号：{{ehall.cardno}}</text>
      </view>
    </view>

    <view class="cu-list menu bg-white radius margin-lr-xs">
      <view class="cu-item">
        <view class="content">
          <text class="text-grey">姓名</text>
        </view>
        <view class="action">
          <text class="text-grey text-sm">{{user.name}}</text>
        </view>
      </view>
      <view class="cu-item">
        <view class="content">
          <text class="text-grey">班级</text>
        </view>
        <view class="action">
          <text class="text-grey text-sm">{{user.class}}</text>
        </view>
      </view>
      <view class="cu-item">
        <view class="content">
          <text class="text-grey">学号</text>
        </view>
        <view class="action">
          <text class="text-grey text-sm">{{user.uid}}</text>
        </view>
      </view>
      <view class="cu-item">
        <view class="content">
          <text class="text-grey">专业</text>
        </view>
        <view class="action">
          <text class="text-grey text-sm">{{user.profession}}</text>
        </view>
      </view>
      <view class="cu-item">
        <view class="content">
          <text class="text-grey">一卡通卡号</text>
        </view>
        <view class="action">
          <text class="text-grey text-sm">{{ehall.cardno}}</text>
        </view>
      </view>
    </view>


    <view class="cu-list menu bg-white radius margin-lr-xs">
      <view class="cu-item arrow" bindtap="rebind">
        <view class="content">
          <text class="text-grey">切换查询他人一卡通余额</text>
        </view>
        <view class="action">
        </view>
      </view>
    </view>

  </block>
</view>