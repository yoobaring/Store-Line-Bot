function orderList(e) {
      let card_res = {
              "line": {
              "contents": card_(e),
                "type": "flex",
                "altText": "Flex Message"
              }
            }
  return card_res
}

function card_(el) {
        let card = {
                    "type": "bubble",
                    "body": {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "รายการสั่งซื้อของคุณ",
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
                                  "text": "ยอดชำระ",
                                  "size": "sm",
                                  "color": "#555555"
                                },
                                {
                                  "type": "text",
                                  "text": el[4],
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
                                  "text": "ชื่อผู้รับ",
                                  "size": "sm",
                                  "color": "#555555"
                                },
                                {
                                  "type": "text",
                                  "text": el[5],
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
                                  "text": "เบอร์",
                                  "size": "sm",
                                  "color": "#555555"
                                },
                                {
                                  "type": "text",
                                  "text": el[6],
                                  "size": "sm",
                                  "color": "#111111",
                                  "align": "end"
                                }
                              ]
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ที่อยู่จัดส่ง",
                                  "size": "sm",
                                  "color": "#3580B8FF",
                                  "action": {
                                    "type": "message",
                                    "label": "ที่อยู่จัดส่ง",
                                    "text": el[7]
                                  },
                                  "weight": "regular",
                                  "style": "normal"
                                },
                                {
                                  "type": "text",
                                  "text": el[7],
                                  "size": "sm",
                                  "color": "#696C6DFF",
                                  "align": "end",
                                  "margin": "sm",
                                  "style": "italic",
                                  "offsetStart": "30%"
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
                              "text": el[8],
                              "color": "#aaaaaa",
                              "size": "xs",
                              "align": "end"
                            }
                          ]
                        },
                        {
                          "type": "box",
                          "layout": "horizontal",
                          "margin": "md",
                          "contents": [
                            {
                              "type": "text",
                              "text": "เลขพัสดุ",
                              "size": "xs",
                              "action": {
                                "type": "message",
                                "label": "เลขพัสดุ",
                                "text": el[9]
                              },
                              "color": "#3580B8FF"
                            },
                            {
                              "type": "text",
                              "text": el[9],
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


