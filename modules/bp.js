(function(){
    var modules={
        "panel-modules":	  		{url:"$A/modules/p/panel-modules.html",router:1},
        "panel-apps":	  			{url:"$A/modules/p/panel-apps.html",router:1},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
