function setStatusClosed (id) {
    var issues = JSON.parse(localStorage.getItem('issues'));
    
    for(var i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues[i].status = "Closed";
        }
    }
      
    localStorage.setItem('issues', JSON.stringify(issues));
    
    fetchIssues();
  }