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
	$.ajax({ 
		type : "post",
		url : url,
		dataType:"HTML", 					//전송받을 형식 지정 
		async : false,     					//동기 비동기 설정
		//data : $("#frm").serialize(),		//폼데이터를 직렬화해서 전송 폼전체를 전송시
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
	});
}