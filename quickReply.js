function quickReply(e) {
      console.log(e, 'quickReply')
      let quick_res = {
                          "line": {
                            "quickReply": {
                              "items": e.map(e => e.length > 1? quick_size(e) : quick(e))
                            },
                            "text": "กรุณาเลือกรายการ",
                            "type": "text"
                          }
                       }
        return quick_res
    }
    
    function quick (el) {
                let res = {
                                  "type": "action",
                                  "imageUrl": "https://dl.dropboxusercontent.com/s/ba36sygd9tln0u7/package.gif?q=auto",
                                  "action": {
                                    "type": "message",
                                    "text": el[0],
                                    "label": el[0]
                                  }
                          }
                return res
    }
    
    function quick_size (el) {
                let res = {
                                  "type": "action",
                                  "imageUrl": "https://dl.dropboxusercontent.com/s/ba36sygd9tln0u7/package.gif?q=auto",
                                  "action": {
                                    "type": "message",
                                    "text": `รหัสสินค้า: ${el[2]}, ไซต์: ${el[0]}, จำนวน: ${el[1]}`,
                                    "label": `${el[1]} ตัว`
                                  }
                          }
                return res
    }
    
    
    
    
    