userlist=[];
function validation(){
    var em=$("#see").val();
    var pwd=$("#spp").val();
    var cpd=$("#scc").val();
    var ag=$("#saa").val();
    if (em==""){
        $("#se").removeClass("hide");
        return false;
    }
    else{
        $("#se").addClass("hide");
    }
    if (pwd==""){
        $("#sp").removeClass("hide");
        return false;
    }
    else{
        $("#sp").addClass("hide");
    }
    if (cpd==""){
        $("#sc").removeClass("hide");
        return false;
    }
    else{
        $("#sc").addClass("hide");
    }
    if(pwd!==cpd){
        $("#ap").removeClass("hide");
        return false;
    }
    else{
        $("#ap").addClass("hide");
    }
    if (ag==""){
        $("#sa").removeClass("hide");
        return false;
    }
    else{
        $("#sa").addClass("hide");
        check();
        console.log(userlist);
        return true;
    }
    
    function check(){
        if(userlist.length!==0 && userlist.filter(x => x.email==$("#see").val()).length!==0){   //check not empty and check whether same mail is there
            window.alert("email"+$("#email").val()+"already exists");
            return false;
        }
        else{
            output();
        }
        function output(){
            userdetails={
                email:em,
                password:pwd,
                age:ag
            }
            userlist.push(userdetails);
        }
}
}

function validation1(){
    var e=$("#logi").val();
    var p=$("#passwor").val();
    if(e==""){
        $("#l1").removeClass("hide");
        return false;
    }
    else{
        $("#l1").addClass("hide");
    }
    if(p==""){
        $("#p1").removeClass("hide");
        return false;
    }
    else{
        $("#p1").addClass("hide");
        logging();
    }
    function logging(){
        var i;
        var isUserLoggedIn = false;
        if(userlist.length === 0){
            alert("The user not exist");
        }
        else {
            for(var i = 0; i < userlist.length; i++) {
                if(userlist[i].email === $("#logi").val() && userlist[i].password === $("#passwor").val()){
                    window.alert("Logging in successful");
                }
                else if (userlist[i].email === $("#logi").val() && userlist[i].password !== $("#passwor").val()){
                    window.alert("Password doesnot match");
                }
                else{
                    window.alert("Email does not exist");
                }
                  
            }
        }
    }
}