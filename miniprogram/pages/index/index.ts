Page({
  data: {
    list: [
      {
        id: 1,
        name: "XR 熙熙",
        url: "../../assets/1.jpg",
      },
      {
        id: 2,
        name: "Kivi 跨次元对话",
        url: "../../assets/2.jpg",
      },
      {
        id: 3,
        name: "AR 兔兔",
        url: "../../assets/3.jpg",
      },
      {
        id: 4,
        name: "AR 元宇宙",
        url: "../../assets/4.jpg",
      },
      {
        id: 4,
        name: "AR 元宇宙",
        url: "../../assets/5.jpg",
      },
    ],
  },
  onLoad() {},
  navToDe: function () {
    wx.navigateTo({
      url: "/pages/ar-page/index",
    });
  },
});
