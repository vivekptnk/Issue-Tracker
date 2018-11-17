document.getElementById('issueInputForm').addEventListener('submit',saveIssue)

function saveIssue(e){
    var issueDec = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = chance.guid();
    

}

function fetchIssues(){
    var issues = JSON.parse(localStorage('issues'));
    var issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    for (var i = 0; i < issues.length; i++){
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesList.innerHTML += '<div class="well">'+
                                '<h6>Issue ID: ' + id  + '<h6>' +
                                '<p><span class="label label-info">' + status + '</span></p>' +
                                '<h3>' + desc + '</h3>' +
                                '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>' +
                                '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' +
                                '<a href="#" onclick="setStatusClosed(\''+id'\')" class="btn btn-warning">Close</a>' + 
                                '<a href="#" onlick="deleteIssue(\''+id'\')" class="btn btn-danger">Delete</a>' + 
                                '</div>';
    }
}