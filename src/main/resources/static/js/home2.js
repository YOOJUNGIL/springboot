function boardListVw() {
	location.href="/board/list";
}

function boardDetailVw(no) {
	ajaxSubmit('thContents', '/board/detail?no='+no);
}

function custUserListVw() {
	location.href="/custuser/list";
}

function custUserDetailVw(userId) {
	ajaxSubmit('thContents', '/custuser/detail?userId='+userId);
}

function custUserAdd() {
	ajaxSubmit('thContents', '/custuser/add');
}

function custUserMod(userId) {
	ajaxSubmit('thContents', '/custuser/upd?userId='+userId);
}

function custUserDel() {
	ajaxSubmit('thContents', '/custuser/del');
}

function custUserProc(type, userId) {
	if(type == 'A') {
		var userId = $('#userId').val();
		var mobileNo = $('#mobileNo').val();
		var addr = $('#addr').val();
		var queryString = '?userId='+userId
		                + '&mobileNo='+mobileNo
		                + '&addr='+addr;
	}
	else if(type == 'D') {
		var queryString = '?userId='+userId;
	}
	else if(type == 'U') {
		var userId = $('#userId').val();
		var mobileNo = $('#mobileNo').val();
		var addr = $('#addr').val();
		var queryString = '?userId='+userId
		                + '&mobileNo='+mobileNo
		                + '&addr='+addr;
	}
	
	queryString += '&type='+type;
		                
	ajaxSubmit('thContents', '/custuser/proc'+queryString, '/custuser/list');
}

function backHome() {
	location.href="/index";
}

function ajaxSubmit(div, url, redirectUrl) {
	var data = {
		'userId' : $('#userId').val(),
		'mobileNo' : $('#mobileNo').val(),
		'addr' : $('#addr').val()
	};
	
	$.ajax({ 
		type : "post",
		url : url,
		//async : false,     							//동기 비동기 설정(default)
		//data : $("#frm").serialize(),					//http body : x-wwww-form
		data : JSON.stringify(data),					//http body : json
		contentType:'application/json; charset=utf-8', 	//body데이터가 어떤 타입인지(MIME)
		dataType : 'json',								//응답이 왔을 때 기본적으로 문자열(생긴게 json이라면) => javascript변경해줌									
		beforeSend : function(){
			//로딩바start
			$('.loader').show();
		},
		complete : function(){
			//로딩바end
			setTimeout(function(){
				$('.loader').hide();
			}, 1000);
		},
		success : function(data, textStatus, httpRequest){       
			if(httpRequest != undefined && httpRequest != null) {   
				if(redirectUrl != null) {
					location.href="/custuser/list";
				}
				else {
					$('#'+div).html(data);
				}
			}
		},
		error : function(httpRequest, textStatus, error) {
		   //에러내용표시
		}
	}).done(function(res){
		alert("회원가입이 완료되었습니다.");
		location.href="~~~";
	}).fail(function(error){
		alert(JSON.stringify(error));
	});
}