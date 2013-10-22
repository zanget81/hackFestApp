function wikipediaSearch(searchTerm) 
{
	console.log( "trying to do a request" );
	$.ajax({
		url:"http://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=" + searchTerm +	"&format=json&gsrprop=snippet&prop=info&inprop=url",
		crossDomain: true,
		success:function(json)
		{
			console.log("search: " + searchTerm + " success");
			console.log("total hits: " + json['query']['searchinfo']['totalhits']);
			var element = '<li>Term ' + '"' + decodeURIComponent(searchTerm) + '"' + ' has ' + json['query']['searchinfo']['totalhits']  +  ' articles</li>'
			$('#ListOfHotItems').prepend(element); 
		},
		error:function()
		{
			console.log("search: " + searchTerm + "error");
			return 0;
		},
	});
}


function getZeeTag() 
{
	console.log( "trying to get a zeetag");
	$.ajax({ 
		beforeSend: function (request)
		{
			request.setRequestHeader("zeebox-app-id","15b9ba0a");
			request.setRequestHeader("zeebox-app-key", "bf3c4703dfea8b36b7c0717e73f1b895");
		},
		dataType: "json",
		url: "https://api.zeebox.com/zta/zeetags?broadcastevent=3052894&service=273&ad-region=1&domain=com.zeebox&platform=ipad",
		crossDomain: true,
		success:function(json)
		{
			console.log( "returning " + encodeURIComponent(json["zeetags"][0]["title"]));
			wikipediaSearch(encodeURIComponent(json["zeetags"][0]["title"])) 
			return encodeURIComponent(json["zeetags"][0]["title"]); 

		},
		error:function()
		{
			console.log( "returning error" );
			return "error"
		},
});

}