var posts=["2024/09/12/hello-world/","2024/09/14/测试第一稿/","2024/09/14/番茄工作法技巧一：红线原则 提升专注力的基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };