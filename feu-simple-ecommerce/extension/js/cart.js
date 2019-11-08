//[category,id,description,title,price,image_path]
var item_list = [
    ["cactus", 1, "The ‘Zebra Plant’ is a hardy, stemless succulent with a variety of vivid green color and white horizontal stripes.<br>Origin: South Africa<br>Size: up to 6”<br>Temperature: Warm coastal climates. Avoid freezing temperatures.", "Attenuata", 30, "plant2.jpg"],
    ["cactus", 2, "Echeveria Agavoides is known for its fleshy green pointed leaves, which are edged with a deep red. <br>Origin: Native to Mexico <br> Size: Up to 12” <br> Temperature: This plant does best in warm dry climates.", "Agavoides", 40, "Agavoides.jpg"],
    ["cactus", 3, "Sempervivum Arachnoideum 'Cob Web' is well known for its spider web-like structure across the face of the rosette.<br>Origin: Alps, Apennines and Carpathians<br>Size: 1-3”<br>Temperature: This plant does best in dry climates. During cold winter months, bring your succulent indoors near a bright sunny window, and keep away from frost.", "Cob Web", 30, "Aloe.jpg"],


    ["plant", 4, "Coveted for it’s delicate blue color and commonly used as a ground cover for ornamental landscape use.<br>Origin: Asia<br>Size: 3-6”<br>Temperature: Warm dry climates. Avoid freezing temperatures.", "Blue Spruce", 40, "Aloe1.jpg"],
    ["plant", 40, "This succulent is a delicate variety that is a vibrant greenish yellow.<br>Origin: Unknown<br>Size: up to 6”<br>Temperature: Warm coastal climates. Avoid freezing temperatures.", "De Oro", 30, "Bear Paw1.jpg"],
    ["plant", 6, "This fleshy Haworthia has a green flower-like shape with light green striping on the leaves of the plant.<br>Origin: Native to South Africa<br>Size: Up to 4”<br>Temperature: This plant does best in warm temperatures", "Magnifica", 30, "Bear Paw1.jpg"],
    ["plant", 7, "Crassula Rupestris ‘Rosary Vine' is known for its tight upright vertical form and unique leaf shape.<br>Origin: South Africa<br>Size: up to 12” long<br>Temperature: This plant does best in warm temperatures.", "Rupestris", 30, "Blazing Glory 1.jpg"],
    ["plant", 8, "The ‘Sea Urchin’ is a succulent that is a light silver green with white edges along the leaves.<br>Origin: Eastern Asia <br>Size: up to 2 feet<br>Temperature: Warm coastal climates. Avoid freezing temperatures.", "Sea Urchin", 30, "Blazing Glory.jpg"],
    ["plant", 9, "The ‘Royal Ruby’ is a deep maroon mounding, frost hardy rosette.<br>Origin: Garden cultivar<br>Size: under 3”<br>Temperature: Cool climates. Avoid freezing temperatures.", "Semp Ruby", 30, "plant3.jpg"],
    ["plant", 10, "'String of Pearls' is prized among many succulent collectors and home.<br>Origin: Southwest Africa<br>Size: Up to 3 ft draping<br>Temperature: This plant does best in warm dry climates.", "Sea Urchin", 30, "plant4.jpg"],

    ["succulents", 11, "Echeveria Agavoides is known for its fleshy green pointed leaves, which are edged with a deep red.<br>Origin: Native to Mexico<br>Plant Type: Succulent<br>Size: Up to 12”<br>Temperature: This plant does best in warm dry climates.", "Sea Urchin", 30, "plant5.jpg"],

    ["succulents", 12, "Graptopetalum Amethystinum is also known as Wedding Almond, Jewel Leaf Plant, Lavender Pebbles, or Wine Coolers.<br>Scientific Name: Graptopetalum Amethystinum<br>Origin: Mexico<br>Plant Type: Succulent<br>Size: 2-4”<br>Temperature: This plant does best in warm climates, keep away from frost.", "Sea Urchin", 30, "plant12.jpg"],

    ["succulents", 13, "Aloe vera is a stemless or very short-stemmed succulent plant.<br>Origin: Africa<br>Plant Type: Cactus<br>Size: Growing to 60–100 cm (24–39 in) tall.<br>Temperature: Grows in a wide variety of warm weather climates and soils.", "Sea Urchin", 30, "plant2.jpg"],

    ["succulents", 14, "Cotyledon Tomentosa 'Bear Paw' is a fleshy paw shaped succulent plant. Bear Paw succulent has fuzzy green leaves, which add a beautiful contrast and unique texture to any garden use of the plant.<br>Origin: Africa<br>Plant Type: Succulent<br>Size: Up to 20”<br>Temperature: This plant does best in warm dry climates.", "Bear Paw", 30, "plant3.jpg"],

    ["succulents", 15, "Echeveria 'Blue Atoll' is known for its highly structured rosette form. This fast growing rosette shaped succulent has long pointed leaves with a deep greenish blue color when exposed to the proper amount of sunlight.<br>Origin: Native to Mexico and Central America<br>Plant Type: Succulent<br>Size: Up to 6”<br>Temperature: This plant does best in warm climates.", "Blue Atoll", 30, "plant4.jpg"],

    ["succulents", 16, "Coveted for it’s delicate blue color and commonly used as a ground cover for ornamental landscape use. This drought tolerant succulent blooms bright yellow flowers during early summer.<br>Origin: Asia<br>Plant Type: Succulent<br>Size: 3-6”<br>Temperature: Warm dry climates.", "Sea Urchin", 30, "plant2.jpg"],

    ["succulents", 17, "The succulent ‘Blue Tears’ is a gorgeous, mounding rosette succulent that is turquoise blue in color, and produces clusters of white star shaped flowers accented with tiny black dots.<br>Origin: Garden cultivar<br>Plant Type: Succulent<br>Size:under 6”<br>Temperature: Warm coastal climates.", "Blue Tears", 30, "plant5.jpg"],

    ["succulents", 18, "This succulent is a sprawling, clumping rosette that is a gorgeous frosted grey green. During the fall and winter, it blooms vivid red-orange disk like flowers.<br>Origin: Unknown<br>Plant Type: Succulent<br>Size: up to 12-18”<br>Temperature: Warm coastal climates.", "Blazing Glory", 30, "plant6.jpg"],

    ["succulents", 19, "Sedum Morganianum ‘Burrito Sedum’ is prized among many succulent collectors and home decorators alike for its beautiful delicate draping form.<br>Origin: Mexico & Hondurus<br>Plant Type: Succulent<br>Size: Up to 3 ft draping<br>Temperature: This plant does best in warm dry climates.", "Burrito", 30, "plant19.jpg"],

    ["succulents", 20, "The ‘Zebra Plant’ is a hardy, stemless succulent with a variety of vivid green color and white horizontal stripes.<br>Origin: South Africa<br>Plant Type: Succulent<br>Size: up to 6”<br>Temperature: Warm coastal climates.", "Sea Urchin", 30, "plant8.jpg"],

    ["succulents", 21, "This succulent has compact rosettes with an orangish pink shade. The colors of the leaves are copper-gold with streaks of yellow, pink, and green overtones.<br>Origin: Garden (nursery-produced cultivar)<br>Plant Type: Succulent<br>Size: 6 to 12”", "Sea Urchin", 30, "plant21.jpg"],

    ["succulents", 22, "Kalanchoe ‘Chocolate Soldier’ sometimes referred to as “Teddy Bear Cactus” is native to Madagascar and is known for its fuzzy brown, ear shaped leaves.<br>Origin: Native to Madagascar<br>Plant Type: Succulent<br>Size: Up to 24”<br>Temperature: This plant does not tolerate frost but can greatly withstand high levels of heat.", "Sea Urchin", 30, "plant9.jpg"],

    ["succulents", 23, "This succulent is famous for its frosty blue green leaves that is lightly tipped with shades of pink when exposed to bright light.<br>Origin: Mexico<br>Plant Type: Succulent<br>Size: 4 to 6”<br>Temperature: This plant does not tolerate frost but can greatly withstand high levels of heat.", "Sea Urchin", 30, "plant23.jpg"],

    ["succulents", 24, "cheveria Colorata is a highly prized cultivar well known for its compact rosette form.<br>Origin: Native to Mexico.<br>Plant Type: Succulent<br>Size: Up to 12”<br>Temperature: This plant does best in warmer temperatures.", "Sea Urchin", 30, "plant10.jpg"],

    ["succulents", 25, "This is an evergreen succulent that for<br>Temperature: This plant does best in warmer temperatures.<br>ms a large rosette. The leaves are olive green to lavender rose in shades and are slight pointed, rounded, and fleshy. The surface is adorned with pink edges.<br>Origin: Garden cultivar<br>Plant Type: Succulent<br>Size: 12”<br>Temperature: This plant greatly appreciates warm temperatures most of the", "Sea Urchin", 30, "plant11.jpg"],

    ["succulents", 26, "This succulent is a delicate variety that is a vibrant greenish yellow. During mid summer, it blooms beautiful bright yellow star shaped flowers.<br>Origin: Unknown<br>Plant Type: Succulent<br>Size: up to 6”<br>Temperature: Warm coastal climates.", "Sea Urchin", 27, "plant12.jpg"],

    ["succulents", 27, "Echeveria 'Domingo' hen and chicks, is a whitish grey rosette shaped succulent with broad fleshy leaves coated in a white powder.<br>Origin: Native to Mexico<br>Plant Type: Succulent<br>Size: Up to 12”<br>Temperature: This plant does best in warm climates.", "Sea Urchin", 28, "plant13.jpg"],

    ["succulents", 28, "This is a slow growing type of shrub that has reddish brown stems and green glossy obovate leaves that can grow up to 0.8 inch longs.<br>Origin: South Africa<br>Plant Type: Succulent<br>Size: 120”<br>Temperature: This can thrive under bright light in a warm and draft-free area.", "Sea Urchin", 30, "plant14.jpg"],

    ["succulents", 29, "Kalanchoe Thyrsiflora 'Flapjacks' is a fleshy succulent with round paddle shaped leaves, stacked like flapjacks, hence the name!<br>Origin: Native to South Africa<br>Plant Type: Succulent<br>Size: Up to 24”<br>Temperature: This plant does best in warm climates.", "Sea Urchin", 30, "plant15.jpg"],

    ["succulents", 30, "The Echeveria Green Goddess is an open rosette with gorgeous frosty blue foliage that has blush red tips in partial sun.<br>Origin: Garden cultivar<br>Plant Type: Succulent<br>Size: under 6”<br>Temperature: Warm, drought tolerant climates. Avoid freezing temperatures.", "Sea Urchin", 30, "plant16.jpg"],

    ["succulents", 31, "Sempervivum Arachnoideum 'Cob Web' is well known for its spider web-like structure across the face of the rosette. This Succulent is beautifully hardy with a delicate look in designs and arrangements.<br>Origin: Alps, Apennines and Carpathians<br>Plant Type: Succulent<br>Size: 1-3”<br>Temperature: This plant does best in dry climates.", "Sea Urchin", 30, "plant17.jpg"],

    ["succulents", 32, "Crassula Ovata 'Jade' is a classical succulent that works great both indoors and outdoors.<br>Origin: South Africa<br>Plant Type: Succulent<br>Size: Up to 3<br>Temperature: This plant does best in warm climates.", "Sea Urchin", 30, "plant19.jpg"],

    ["succulents", 33, "This is the most popular member of the genus Crassula, which contains around two hundred succulent species.<br>Origin: Europe and America<br>Plant Type: Succulent<br>Size: Up to 5 feet tall.<br>Temperature: plants grow slightly cooler temperatures at night and in the winter.", "Sea Urchin", 30, "plant20.jpg"],

    ["succulents", 34, "‘Jelly Bean Sedum,’ commonly referred to as ‘Pork and Beans,’ adds a beautiful texture and unique height to succulent gardens.<br>Scientific Name: Sedum Rubrotinctum<br>Origin: Native to Mexico<br>Plant Type: Succulent<br>Size: Up to 8” or 20 cm<br>Temperature: This plant does best in hot temperatures.", "Sea Urchin", 30, "plant21.jpg"],

];

var cart_items = [];




function generateTemplateContents(id, description, title, price, image_path) {
    return "<li><div class='container h-100'><a href='' target='_blank'> <img src='extension/img/ALL/" + image_path + "'></a>" +
        "<div class='overlay'>" +
        "<div class='text'> " + description + "</div>" +
        " </div> <br>" +
        " <span class='text-primary pt-4'>" + title + " | " + price + "<br></span>" +
        " <button class='btn btn-primary add-item' item='" + id + "'>Add to cart <span class='badge badge-danger'></span></button>" +
        " <button class='btn btn-danger remove-item d-none' item='" + id + "'>Remove</button>" +
        "</div>" +
        " </li>"

}

function populateItems(type) {


    for (var i = 0; i < item_list.length; i++) {
        if (type != null) {
            if (type != item_list[i][0]) {
                continue;
            }
        }
        console.log(item_list[i]);
        $("#ulpics").append(
            generateTemplateContents(
                item_list[i][1],
                item_list[i][2],
                item_list[i][3],
                item_list[i][4],
                item_list[i][5]

            )
        );
    }
}

function searchItem(search) {


    for (var i = 0; i < item_list.length; i++) {
            if (item_list[i][3].toLowerCase().indexOf(search.toLowerCase()) > -1) {
                $("#ulpics").append(
                    generateTemplateContents(
                        item_list[i][1],
                        item_list[i][2],
                        item_list[i][3],
                        item_list[i][4],
                        item_list[i][5]

                    )
                );
        }
        console.log(item_list[i]);

    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }

    return "";
};

function getItemListTemplate(id,name,qty,total){
    return "<tr>"+
        "<td>"+name+"</td>" + 
        "<td>"+qty+"</td>" +
        "<td>"+total+"</td>"+
        "</tr>";
}



$(document).ready(function () {
    var type = getUrlParameter("type");
    var search = getUrlParameter("search");
    console.log(search);
    if (type == "") {
         searchItem(search);
        
    } else {
        populateItems(type);
    }

    $(".btn-search").click(function () {
        var search = $("#input-search").val();
        if(search == ""){
            document.location.search = "";
        }else {
             insertParam("search",search);
        }
       
    });
    
    $(document).on("click",".add-item",function(){
         var cart_items = getCartItems();
         var id = $(this).attr("item");
         var item_index = itemAlreadyExist(id) ;
         if(item_index > -1){
             cart_items[item_index][1] += 1;
             $(this).find("span").text(cart_items[item_index][1]);
         }else {
             cart_items.push([id,1]);
             $(this).find("span").text(1);
         }
         $(".remove-item[item='"+id+"']").removeClass("d-none");
         
        
        
         updateCartItems(cart_items);
         console.log(cart_items);
         
    });
    
    $(document).on("click",".remove-item",function(){
         var cart_items = getCartItems();
         var id = $(this).attr("item");
         var item_index = itemAlreadyExist(id) ;
         if(cart_items[item_index][1] > 0){
             cart_items[item_index][1] -= 1;
             if(cart_items[item_index][1] == 0){
                 $(this).addClass("d-none");
                 
             }
         }
        
         var qty = cart_items[item_index][1];
         $(".add-item[item='"+id+"']").find("span").text(qty == 0 ? "" : qty );
         updateCartItems(cart_items);
         console.log(cart_items);
    })
    
    $(".show-cart").click(function(){
        $("#background").removeClass("d-none");
        $("#my-cart").removeClass("d-none");
        var items =  getCartItems();
        $(".item-list").html("");
        var total_amount = getCartTotalAmount();
        $(".total-amount").text(total_amount);
        for(var i =0;i < items.length; i++){
            var item = getItemById(items[i][0]);
            if(items[i][1] == 0){
                continue;
            }
            $(".item-list").append(getItemListTemplate(items[i][0],item[3],items[i][1],item[4] * items[i][1]));
        }
        
        
        
        
        
    });
    
    $(".order").click(function(){
        if(getTotalItemCount() == 0){
            alert("your cart is empty");
            
        } else {
            window.location.href = "thankyou.html";
        }
    });
    
    $(".close-cart").click(function(){
         $("#background").addClass("d-none");
        $("#my-cart").addClass("d-none");
    })
    
    $("#payment-type").change(function(){
       if($(this).val() == "dc"){
           $(".debit-form").removeClass("d-none");
       } else {
           $(".debit-form").addClass("d-none");
       }
    });
});

function getTotalItemCount(){
    var total_item_count = 0;
    for(var i =0; i < cart_items.length; i++){
        total_item_count += cart_items[i][1];
    }
    return total_item_count;
}

function getCartItems(){
    return cart_items;
}

function updateCartItems(items){
    cart_items = items;
}

function itemAlreadyExist(id){
    var items = getCartItems();
    for(var i = 0; i < items.length; i++){
        if(id == items[i][0]){
            return i;
        }
    }
    return -1;
}

function getItemById(id){
    for(var i =0; i< item_list.length; i++){
        if(id == item_list[i][1]){
            return item_list[i];
        }
    }
    return null;
}

function getCartTotalAmount(){
    var total = 0;
    for(var i =0; i < cart_items.length; i++){
        var item = getItemById(cart_items[i][0]);
        total += item[4] * cart_items[i][1];
    }
    return total;
}

function insertParam(key, value)
{
    key = encodeURI(key); value = encodeURI(value);

    var kvp = document.location.search.substr(1).split('&');

    var i=kvp.length; var x; while(i--) 
    {
        x = kvp[i].split('=');

        if (x[0]==key)
        {
            x[1] = value;
            kvp[i] = x.join('=');
            break;
        }
    }

    if(i<0) {kvp[kvp.length] = [key,value].join('=');}

    //this will reload the page, it's likely better to store this until finished
    document.location.search = kvp.join('&'); 
}

function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        rtn = rtn + "?" + params_arr.join("&");
    }
    return rtn;
}


