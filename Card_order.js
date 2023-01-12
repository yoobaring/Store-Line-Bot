function cardOrder(e) {
      console.log(e, 'nnmnnn')
   let card_res = {
           "line": {
           "contents": order(e),
             "type": "flex",
             "altText": "Flex Message"
           }
         }
return card_res
}


function order(el) { 
    console.log(el)
     let card = {
                   "type": "bubble",
                   "body": {
                     "type": "box",
                     "layout": "vertical",
                     "contents": [
                       {
                         "type": "text",
                         "text": "คำสั่งซื้อ",
                         "weight": "bold",
                         "color": "#1DB446",
                         "size": "sm"
                       },
                       {
                         "type": "text",
                         "text": "ร้าน เสื้อผ้าเด็ก",
                         "weight": "bold",
                         "size": "xxl",
                         "margin": "md"
                       },
                       {
                         "type": "text",
                         "size": "xs",
                         "color": "#aaaaaa",
                         "wrap": true,
                         "text": "By Sabeela (แม่ค้า)"
                       },
                       {
                         "type": "separator",
                         "margin": "xxl"
                       },
                       {
                         "type": "box",
                         "layout": "vertical",
                         "margin": "xxl",
                         "spacing": "sm",
                         "contents": [
                           {
                             "type": "box",
                             "layout": "horizontal",
                             "contents": [
                               {
                                 "type": "text",
                                 "size": "sm",
                                 "color": "#555555",
                                 "text": "รหัสออเดอร์",
                                 "weight": "bold"
                               },
                               {
                                 "type": "text",
                                 "text": "สินค้า",
                                 "size": "sm",
                                 "color": "#111111",
                                 "align": "center",
                                 "weight": "bold"
                               },
                               {
                                 "type": "text",
                                 "text": "จำนวน",
                                 "size": "sm",
                                 "color": "#111111",
                                 "align": "center",
                                 "weight": "bold"
                               },
                               {
                                 "type": "text",
                                 "text": "ราคา",
                                 "size": "sm",
                                 "color": "#111111",
                                 "align": "end",
                                 "weight": "bold"
                               }
                             ]
                           },
                           {
                             "type": "box",
                             "layout": "horizontal",
                             "contents": [
                               {
                                 "type": "text",
                                 "size": "sm",
                                 "color": "#555555",
                                 "text": el[0],
                                 "align": "start"
                               },
                               {
                                 "type": "text",
                                 "text": el[1],
                                 "size": "sm",
                                 "color": "#111111",
                                 "align": "center"
                               },
                               {
                                 "type": "text",
                                 "size": "sm",
                                 "color": "#555555",
                                 "text": el[2],
                                 "align": "center"
                               },
                               {
                                 "type": "text",
                                 "size": "sm",
                                 "color": "#555555",
                                 "text": el[3],
                                 "align": "end"
                               }
                             ]
                           },
                           {
                             "type": "separator",
                             "margin": "xxl"
                           },
                           {
                             "type": "box",
                             "layout": "horizontal",
                             "margin": "xxl",
                             "contents": [
                               {
                                 "type": "text",
                                 "text": "จำนวนทั้งหมด",
                                 "size": "sm",
                                 "color": "#555555"
                               },
                               {
                                 "type": "text",
                                 "text": el[2],
                                 "size": "sm",
                                 "color": "#111111",
                                 "align": "end"
                               }
                             ]
                           },
                           {
                             "type": "box",
                             "layout": "horizontal",
                             "contents": [
                               {
                                 "type": "text",
                                 "size": "sm",
                                 "color": "#555555",
                                 "text": "ยอดรวมทั้งหมด"
                               },
                               {
                                 "type": "text",
                                 "text": `#${el[4]}`,
                                 "size": "sm",
                                 "color": "#111111",
                                 "align": "end"
                               }
                             ]
                           },
                           {
                             "type": "box",
                             "layout": "horizontal",
                             "contents": [
                               {
                                 "type": "text",
                                 "text": "ยอดที่ต้องชำระ",
                                 "size": "sm",
                                 "color": "#000000",
                                 "weight": "bold"
                               },
                               {
                                 "type": "text",
                                 "text": `#${el[4]}`,
                                 "size": "sm",
                                 "color": "#111111",
                                 "align": "end"
                               }
                             ]
                           }
                         ]
                       },
                       {
                         "type": "separator",
                         "margin": "xxl"
                       },
                       {
                         "type": "box",
                         "layout": "horizontal",
                         "margin": "md",
                         "contents": [
                           {
                             "type": "text",
                             "text": "หมายเลขสั่งซื้อ",
                             "size": "xs",
                             "color": "#aaaaaa"
                           },
                           {
                             "type": "text",
                             "text": `#${el[5]}`,
                             "color": "#aaaaaa",
                             "size": "xs",
                             "align": "end"
                           }
                         ]
                       }
                     ]
                   },
                   "styles": {
                     "footer": {
                       "separator": true
                     }
                   }
                 }

   return card
}




