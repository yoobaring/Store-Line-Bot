function card_Pro (el) {
  
      let card_res = {
          "line": {
            "contents": {
              "type": "carousel",
              "contents": el.map((e, i) => i != el.length-1 ? card(e) : card_all('เพิ่มเติม'))
            },
            "altText": "Flex Message",
            "type": "flex"
          }
      }
      return card_res
    }
    
    function card(e) {
      let res = {
                  "size": "kilo",
                  "type": "bubble",
                  "hero": {
                    "aspectMode": "cover",
                    "size": "full",
                    "url": e[14],
                    "type": "image",
                    "aspectRatio": "20:13"
                  },
                  "body": {
                    "type": "box",
                    "contents": [
                      {
                        "wrap": true,
                        "weight": "bold",
                        "type": "text",
                        "text": e[6],
                        "size": "xl"
                      },
                      {
                        "text": e[7],
                        "type": "text"
                      },
                      {
                        "layout": "baseline",
                        "contents": [
                          {
                            "wrap": true,
                            "type": "text",
                            "size": "xl",
                            "text": e[13]+'฿',
                            "weight": "bold"
                          }
                        ],
                        "type": "box"
                      },
                      {
                        "style": "primary",
                        "color": "#52B92DFF",
                        "offsetTop": "sm",
                        "action": {
                          "text": e[0],
                          "label": "กดสั่งซื้อ",
                          "type": "message"
                        },
                        "type": "button"
                      }
                    ],
                    "spacing": "sm",
                    "layout": "vertical"
                  }
               }
      return res
    }
    
    
    function card_all(e){
      let card_all = {
              "type": "bubble",
              "size": "kilo",
              "body": {
                "type": "box",
                "layout": "horizontal",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": e,
                      "text": e
                    },
                    "gravity": "center"
                  }
                ]
              },
              "styles": {
                "body": {
                  "backgroundColor": "#FFFFFFFF",
                  "separatorColor": "#FFFFFFFF"
                }
              }
            }
    return card_all
    }
    
    