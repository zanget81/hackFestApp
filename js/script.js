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
			var element = '<li>Term ' + '"' + searchTerm + '"' + ' has ' + json['query']['searchinfo']['totalhits']  +  ' articles</li>'
			$('#ListOfHotItems').prepend(element); 
		},
		error:function()
		{
			console.log("search: " + searchTerm + "error");
			return 0;
		},
	});
}

// TODO: Do an zeebox API request
function getZeeTag() 
{
	console.log( "trying to get a zeetag");
	return "something"
}