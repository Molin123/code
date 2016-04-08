var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'content':'very good',
	'article_id':'6323',
});

var options = {
	hostname :'www.imooc.com',
	port:80,
	path:'/article/ajaxpostcomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=52729dca-5b1e-4280-83a5-267ca5e714f2; imooc_isnew=1; imooc_isnew_ct=1460098729; PHPSESSID=qs76k3bhhvl3v6rhiid28sn2p2; IMCDNS=0; loginstate=1; apsid=Q4Y2EwMjlhMzFjN2I0MWM5MWU0OTNlM2QxNGUwNTEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjgxODg2MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4MTA5NzU3NDZAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGRiMDkzZTA4MmFkZDVhZGZjM2ExYTM3OGUzNDNhNmEyG1cHVxtXB1c%3DMj; last_login_username=810975746%40qq.com; cvde=570756a9cfcdf-13; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1460098731; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1460099061',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/article/6323',
		'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest',
	}
}


var req = http.request(options, function(res){
	console.log('Status:' + res.statusCode);
	console.log('headers:' + JSON.stringify(res.headers));

	res.on('data', function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});

	res.on('end', function(){
		console.log('success');
	});
})

req.on('error', function(e){
	console.log('Error:' + e.messge);
})

req.write(postData);

req.end();







