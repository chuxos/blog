var posts=["2024/09/12/hello-world/","2024/09/14/测试第一稿/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };