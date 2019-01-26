(function(){
    var modules={
        "equipmen-booking-record-data":    	{url:"$A/modules/e/equipmen-booking-record-data.html",Table:"equipmen-booking-record",form_module:"equipmen-booking-record-form",router:1},
        "equipmen-booking-record-form":    	{url:"$A/modules/e/equipmen-booking-record-form.html",Table:"equipmen-booking-record"},
        "equipmen-data":      	  			{url:"$A/modules/e/equipmen-data.html",Table:"equipmen",form_module:"equipmen-form",router:1},
        "equipmen-form":      	  			{url:"$A/modules/e/equipmen-form.html",Table:"equipmen"},
        "equipmen-booking":   			    {url:"$A/modules/e/equipmen-booking.html",Table:"equipmen","booking_form":"equipmen-booking-record-form",router:1},
        "equipmen-booking-calendar": 	    {url:"$A/modules/e/equipmen-booking-calendar.html",Table:"equipmen-booking-record",
                                                "booking":"equipmen-booking","booking_form":"equipmen-booking-record-form",router:1},
        "equipmen-booking-app":   			{url:"$A/apps/e/equipmen-booking/index.html"},
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
