/* =json ****************************************/
    
var showTeamData        = $('#teams');

showTeamData.empty();

$.getJSON('teams.json', function (data) {
    
    $.each(data.teams, function(i) {
        var pointTo         = data.teams[i],
            row             = $('<div class="col-50" />'),
            col             = $('<div class="col" />'),
            
            userContent     = $('<div class="user-content v-align" />'),
            userName        = $('<h3>'+ pointTo.name +'</h3>'),
            userDesignation = $('<p>'+ pointTo.designation +'</p>'),

            userDetail      = $('<div class="user-popup hidden" />');
            
        showTeamData.append(row);
        row.append(col);
        col.append(userContent);
        userContent.append(userName, userDesignation);
        col.append(userDetail);
        
    });
	
	showTeamData.find('.loader').hide();
    
});