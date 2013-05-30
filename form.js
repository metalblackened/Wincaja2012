    document.write("    <!-- Web Form Generator 2.0 -->    
    <form method=\"post\" action=\"http://www.aweber.com/scripts/addlead.pl\" target=\"_new\">
        <input type=\"hidden\" name=\"meta_web_form_id\" value=\"653954\">    
        <input type=\"hidden\" name=\"meta_split_id\" value=\"\">    
        <input type=\"hidden\" name=\"unit\" value=\"wincaja\">
        <input type=\"hidden\" name=\"redirect\" value=\"http://www.wincaja.com.mx/aviso.htm\" id=\"redirect_b390a4aaa622cd532bc3c967d36ed037\">  
        <input type=\"hidden\" name=\"meta_redirect_onlist\" value=\"http://www.wincaja.com.mx/demo.htm\">  
        <input type=\"hidden\" name=\"meta_adtracking\" value=\"\">
        <input type=\"hidden\" name=\"meta_message\" value=\"1\">    
        <input type=\"hidden\" name=\"meta_required\" value=\"name,from\">    
        <input type=\"hidden\" name=\"meta_forward_vars\" value=\"0\">    
        Name:
        <input type=\"text\" name=\"name\" value=\"*\" size=\"20\">
        Email:<input type=\"text\" name=\"from\" value=\"\" size=\"20\">
        Giro de la empresa:<input type=\"text\" name=\"custom Giro de la empresa\" value=\"\" size=\"20\">
        Direccion:<input type=\"text\" name=\"custom Direccion\" value=\"\" size=\"20\">
        Colonia:<input type=\"text\" name=\"custom Colonio\" value=\"\" size=\"20\">
        Codigo Postal:<input type=\"text\" name=\"custom Codigo Postal\" value=\"\" size=\"20\">
        Ciudad:<input type=\"text\" name=\"custom Ciudad\" value=\"\" size=\"20\">
        Pais:<input type=\"text\" name=\"custom Pais\" value=\"\" size=\"20\">
        Telefonos:<input type=\"text\" name=\"custom Comentarios\" value=\"*\" size=\"20\">
        Comentarios:<textarea name=\"custom Colonia\" rows=\"10\" cols=\"30\"></textarea>
        <input type=\"submit\" name=\"submit\" value=\"Submit\"></td></tr> </form>");

        function setCookie(name, value, expires, path, domain, secure) {
        var curCookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
        document.cookie = curCookie;
    }

    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
        } else
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
    if (end == -1)
        end = dc.length;
        return unescape(dc.substring(begin + prefix.length, end));
    }


            unique_track = new Image();
        unique_track.src = "http://forms.aweber.com/form/displays.htm?id=bKzMnKws";