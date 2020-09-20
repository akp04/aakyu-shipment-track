document.getElementById("client_div").style.display="none";

document.getElementById("client_div_output").style.display="none";

document.getElementById("admin_div").style.display = "none";

document.getElementById("admin_div_output").style.display = "none";

document.getElementById("admin_div_output_new_entry").style.display = "none";
document.getElementById("admin_div_output_update").style.display = "none";
document.getElementById("admin_div_output_delete").style.display = "none";

document.getElementById("btn_client").onclick = () => {
    document.getElementById("header1").style.display = "none";
    document.getElementById("client_div").style.display="block";
}

document.getElementById("btn_submit_client").onclick = () => {
    
    var blno = document.getElementById("BLNO").value;
    if(blno.length > 0) {
    var xhttp = new XMLHttpRequest();
        var url = "https://damp-plateau-16882.herokuapp.com/client/blno";
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var jsonArr = JSON.parse(xhttp.responseText);
                if(jsonArr === "n" ) {
                    alert("invalid blno");
                    document.getElementById("client_div_output").style.display="none";

                }
                else{
                    document.getElementById("client_div_output").style.display="block";
                    //console.log(jsonArr);
                    document.getElementById("client_blno_value").innerHTML = jsonArr[0].blno;
                    document.getElementById("client_pkg_value").innerHTML = jsonArr[0].pkg;
                    document.getElementById("client_cno_value").innerHTML = jsonArr[0].cno;
                    document.getElementById("client_shipper_value").innerHTML = jsonArr[0].shipper;
                    document.getElementById("client_port_value").innerHTML = jsonArr[0].port;
                    document.getElementById("client_pkg_value").innerHTML = jsonArr[0].pkg;
                    document.getElementById("client_grosswt_value").innerHTML = jsonArr[0].grosswt;
                    document.getElementById("client_shippingbill_value").innerHTML = jsonArr[0].shippingbill;
                    document.getElementById("client_stuffingdate_value").innerHTML = jsonArr[0].stuffingdate;
                    document.getElementById("client_portofloading_value").innerHTML = jsonArr[0].portofloading;
                    document.getElementById("client_railoutdate_value").innerHTML = jsonArr[0].railoutdate;
                    document.getElementById("client_trainno_value").innerHTML = jsonArr[0].trainno;
                    document.getElementById("client_wagonno_value").innerHTML = jsonArr[0].wagonno;
                    document.getElementById("client_sobdate_value").innerHTML = jsonArr[0].sobdate;
                    document.getElementById("client_vesselname_value").innerHTML = jsonArr[0].vesselname;
                    document.getElementById("client_transvesselname_value").innerHTML = jsonArr[0].transvesselname;
                    document.getElementById("client_transvesseldate_value").innerHTML = jsonArr[0].transvesseldate;
                    document.getElementById("client_eta_value").innerHTML = jsonArr[0].eta;
                    document.getElementById("client_do_value").innerHTML = jsonArr[0].d_o;
                }
            }
        };
        xhttp.open('POST',url,true);
        xhttp.setRequestHeader('Content-Type','application/json;charset=UTF-8');
        xhttp.send(JSON.stringify({
            blno:blno
        }));
    }
    else {
        alert("Enter BLNO.");
        document.getElementById("client_div_output").style.display="none";

    }
}

document.getElementById("btn_admin").onclick = () => {
    document.getElementById("header1").style.display = "none";
    document.getElementById("admin_div").style.display = "block";
}

document.getElementById("btn_submit_admin").onclick = () => {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user.length > 0 && pass.length > 0) {
    //console.log(user, pass);
    var xhttp = new XMLHttpRequest();
        var url = "https://damp-plateau-16882.herokuapp.com/admin/authenticate";
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                // && xhttp.status == 204
                var jsonArr = JSON.parse(xhttp.responseText);
                if(jsonArr === "y" ) {
                    document.getElementById("admin_div").style.display = "none";
                    document.getElementById("admin_div_output").style.display = "block";
                }
                else{
                    alert("invalid user or password");
                }
            }
        };
        xhttp.open('POST',url,true);
        xhttp.setRequestHeader('Content-Type','application/json;charset=UTF-8');
        xhttp.send(JSON.stringify({
            user: user,
            pass: pass
        }));
        
    }
    else {
        alert("invalid user or password");
    }

}

document.getElementById("btn_new_entry").onclick = () => {
    document.getElementById("admin_div_output_new_entry").style.display = "block";
    document.getElementById("admin_div_output").style.display = "none";
}

    document.getElementById("btn_create_intoDb").onclick = () => {
        var blno = document.getElementById("create_blno").value;

        if(blno.length > 0) {

        var email = document.getElementById("create_email").value;
        var cno = document.getElementById("create_cno").value;
        var shipper = document.getElementById("create_shipper").value;
        var port = document.getElementById("create_port").value;
        var pkg = document.getElementById("create_pkg").value;
        var grosswt = document.getElementById("create_grosswt").value;
        var shippingbill = document.getElementById("create_shippingbill").value;
        var stuffdate = document.getElementById("create_stuffdate").value;
        var portofloading = document.getElementById("create_portofloading").value;
        var railoutdate = document.getElementById("create_railoutdate").value;
        var traino = document.getElementById("create_traino").value;
        var wagono = document.getElementById("create_wagono").value;
        var sobdate = document.getElementById("create_sobdate").value;
        var vesselname = document.getElementById("create_vesselname").value;
        var transhippmentvesselname = document.getElementById("create_transhippmentvesselname").value;
        var transhippmentvesseldate = document.getElementById("create_transhippmentvesseldate").value;
        var eta = document.getElementById("create_eta").value;
        var d_o = document.getElementById("create_do").value;

        var xhttp = new XMLHttpRequest();
        var url = "https://damp-plateau-16882.herokuapp.com/admin/create_entry";
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                var jsonArr = JSON.parse(xhttp.responseText);
                if(jsonArr === "y" ) {
                    alert("Entry created and mail sent successfully");
                    location.reload();
                }
                else {
                    alert("somehting went wrong");
                }
            }
        };
        xhttp.open('POST',url,true);
        xhttp.setRequestHeader('Content-Type','application/json;charset=UTF-8');
       
        xhttp.send(JSON.stringify({
            blno: blno,
            email:email,
            cno:cno,
            shipper:shipper,
            port:port,
            pkg:pkg,
            grosswt:grosswt,
            shippingbill:shippingbill,
            stuffdate:stuffdate,
            portofloading:portofloading,
            railoutdate:railoutdate,
            traino:traino,
            wagono:wagono,
            sobdate:sobdate,
            vesselname:vesselname,
            transhippmentvesselname:transhippmentvesselname,
            transhippmentvesseldate:transhippmentvesseldate,
            eta:eta,
            d_o:d_o

        }));
    }
    else {
        alert("BLNO. cannot be empty");
    }
        //console.log(blno, eta,cno, d_o);
}


document.getElementById("btn_update_entry").onclick = () => {
    document.getElementById("admin_div_output_update").style.display = "block"
    document.getElementById("appear_update_details").style.display = "none";
    document.getElementById("show_static_blno_div").style.display = "none";
    document.getElementById("admin_div_output").style.display = "none";

}
document.getElementById("btn_ask_for_update").onclick = () => {
    var blno = document.getElementById("input_admin_update_blno").value;
    if(blno.length > 0) {
    var xhttp = new XMLHttpRequest();
        var url = "https://damp-plateau-16882.herokuapp.com/admin/ask_for_update";
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4) {
                var jsonArr = JSON.parse(xhttp.responseText);
                if(jsonArr === "y" ) {
                    document.getElementById("input_blno_div").style.display = "none";
                    document.getElementById("show_static_blno_div").style.display = "block";
                    document.getElementById("appear_update_details").style.display = "block";
                    document.getElementById("show_static_blno_span").innerHTML = blno;
                    fill_update_values(blno);
                }
                else{
                    alert("invalid credentials");
                }
            }
        };
        xhttp.open('POST',url,true);
        xhttp.setRequestHeader('Content-Type','application/json;charset=UTF-8');
        xhttp.send(JSON.stringify({
           blno:blno
        }));
    }
    else {
        alert("Invalid BLNO.")
    }

}

document.getElementById("btn_update_fromDb").onclick = () => {
    
    var blno =  document.getElementById("show_static_blno_span").innerHTML;

    var email = document.getElementById("update_email").value;
    var cno = document.getElementById("update_cno").value;
    var shipper = document.getElementById("update_shipper").value;
    var port = document.getElementById("update_port").value;
    var pkg = document.getElementById("update_pkg").value;
    var grosswt = document.getElementById("update_grosswt").value;
    var shippingbill = document.getElementById("update_shippingbill").value;
    var stuffdate = document.getElementById("update_stuffdate").value;
    var portofloading = document.getElementById("update_portofloading").value;
    var railoutdate = document.getElementById("update_railout").value;
    var traino = document.getElementById("update_train_no").value;
    var wagono = document.getElementById("update_wagon_no").value;
    var sobdate = document.getElementById("update_sob_date").value;
    var vesselname = document.getElementById("update_vessel_name").value;
    var transhippmentvesselname = document.getElementById("update_transhippment_name").value;
    var transhippmentvesseldate = document.getElementById("update_transhippment_date").value;
    var eta = document.getElementById("update_eta").value;
    var d_o = document.getElementById("update_do").value;

    //console.log(eta);
    
    var xhttp = new XMLHttpRequest();
        var url = "https://damp-plateau-16882.herokuapp.com/admin/update_entry";
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 ) {
                var jsonArr = JSON.parse(xhttp.responseText);
                if(jsonArr === "y" ) {
                    alert("Entry updated and mail sent successfully");
                    location.reload();
                }
                else {
                    alert("somehting went wrong");
                }
            }
        };
        xhttp.open('POST',url,true);
        xhttp.setRequestHeader('Content-Type','application/json;charset=UTF-8');
       
        xhttp.send(JSON.stringify({
            blno: blno,
            email:email,
            cno:cno,
            shipper:shipper,
            port:port,
            pkg:pkg,
            grosswt:grosswt,
            shippingbill:shippingbill,
            stuffdate:stuffdate,
            portofloading:portofloading,
            railoutdate:railoutdate,
            traino:traino,
            wagono:wagono,
            sobdate:sobdate,
            vesselname:vesselname,
            transhippmentvesselname:transhippmentvesselname,
            transhippmentvesseldate:transhippmentvesseldate,
            eta:eta,
            d_o:d_o

        }));

}

const fill_update_values = (blno) => {
        var xhttp = new XMLHttpRequest();
        var url = "https://damp-plateau-16882.herokuapp.com/admin/ask_for_update_fill";
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 ) {
                var jsonArr = JSON.parse(xhttp.responseText);
                if(jsonArr === "n" ) {
                    alert("something went wrong");
                }
                else{
    document.getElementById("update_email").value = jsonArr[0].email;
    document.getElementById("update_cno").value = jsonArr[0].cno;
    document.getElementById("update_shipper").value = jsonArr[0].shipper;
    document.getElementById("update_port").value = jsonArr[0].port;
    document.getElementById("update_pkg").value = jsonArr[0].pkg;
    document.getElementById("update_grosswt").value = jsonArr[0].grosswt;
    document.getElementById("update_shippingbill").value = jsonArr[0].shippingbill;
    document.getElementById("update_stuffdate").value = jsonArr[0].stuffingdate;
    document.getElementById("update_portofloading").value = jsonArr[0].portofloading;
    document.getElementById("update_railout").value = jsonArr[0].railoutdate;
    document.getElementById("update_train_no").value = jsonArr[0].trainno;
    document.getElementById("update_wagon_no").value = jsonArr[0].wagonno;
    document.getElementById("update_sob_date").value = jsonArr[0].sobdate;
    document.getElementById("update_vessel_name").value = jsonArr[0].vesselname;
    document.getElementById("update_transhippment_name").value = jsonArr[0].transvesselname;
    document.getElementById("update_transhippment_date").value = jsonArr[0].transvesseldate;
    document.getElementById("update_eta").value = jsonArr[0].eta;
    document.getElementById("update_do").value = jsonArr[0].d_o;
                }
            }
        };
        xhttp.open('POST',url,true);
        xhttp.setRequestHeader('Content-Type','application/json;charset=UTF-8');
        xhttp.send(JSON.stringify({
           blno:blno
        }));
}

document.getElementById("btn_delete_entry").onclick = () => {
    document.getElementById("admin_div_output_delete").style.display = "block";
    document.getElementById("admin_div_output").style.display = "none";
}


document.getElementById("btn_delete_fromDb").onclick = () => {
        
        var blno = document.getElementById("input_admin_del_blno").value;
        if(blno.length > 0) {
        var xhttp = new XMLHttpRequest();
        var url = "https://damp-plateau-16882.herokuapp.com/admin/delete_entry";
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 ) {
                var jsonArr = JSON.parse(xhttp.responseText);
                if (jsonArr === "y" ) {
                    alert("Entry deleted");
                    location.reload();
                }
                else if(jsonArr === "n"){
                    alert("invalid blno.");
                }
            }
        };
        xhttp.open('POST',url,true);
        xhttp.setRequestHeader('Content-Type','application/json;charset=UTF-8');
        xhttp.send(JSON.stringify({
            blno:blno
        }));
    }
    else {
        alert("invalid BLNO.");
    }
}
