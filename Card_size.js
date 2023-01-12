function cardSize(el) {
      let card_res = {
                "line": {
                "type": "flex",
                "altText": "Flex Message",
                "contents": {
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "align": "center",
                        "contents": [],
                        "type": "text",
                        "size": "lg",
                        "wrap": true,
                        "text": "กรุณาเลือกไซต์ที่ต้องการ"
                      }
                    ]
                  },
                  "type": "bubble",
                  "footer": {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": el.map(e => bnt(e))
                  },
                    "direction": "ltr"
                  }
                }
              }
    return card_res
  }
  
  
  function bnt(e){
    let res = {
                "type": "button",
                "action": {
                  "type": "message",
                  "label": e[0],
                  "text": `${e[0]} ${e[3]} ${e[4]}`
                },
                "color": e[2],
                "margin": "xs",
                "height": "sm",
                "style": e[1]
              }
        return res
  }
  
  // function num(e){
  //   let res = {
  //                     "type": "text",
  //                     "text": e[3],
  //                     "weight": "bold",
  //                     "align": "center"
  //             }
  //   return res
  // }
  