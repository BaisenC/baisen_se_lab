window.onload = function() {
    if(Kernal.isLogin()) {
        initUserInfo();
    }

    // 设置监听器，点击搜索按钮后，执行对应函数
    document.getElementById('search-btn').addEventListener('click', function() {
        search();
    });

    // TODO: 在此为 top-right 元素设置监听器
    // document.getElementById('top-right') ...
    document.getElementById('top-right').addEventListener('click',function(){
        clickLogin();
    })

}

function search() {
    // TODO: 搜索触发后的行为
    var text =document.getElementById('search-input-text').value;
    if (text != ''){
        window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+text;
    }else{
        alert('请输入搜索内容');
    }
    document.getElementById('search-input-text').value='';
    console.log('search execute success');
}

function clickLogin() {
    if(!Kernal.isLogin()) {
        login();
    }
    else {
        logout();
    }
}

function initUserInfo() {
    // TODO: 修改页面显示错误的 bug
    let username = Kernal.getUserName();
    console.log(username); //o_0
    username=username.substring(0,5);
    
    let content = `<div id="user">
                        <span id="user-img">
                            <img src="img/user.jpg" >
                        </span>
                        <span id="name">
                           ${username}  
                         </span>
                    </div>`;                     ;
    document.getElementById('top-right').innerHTML = content;
   
}

// ============================================================ 你不需要去关注的代码

function login() {
    Kernal.login();
    location.reload();
}

function logout() {
    Kernal.logout();
    location.reload();
}