/***
 * 診断の質問リスト
 * @type {[{subTitle: string, answer: number, description: string, colorCode: string, id: number, title: string, choices: string[][], faultCount: number}]}
 */
export const SECONDQUESTIONS = [
    {
        id:0,
        title:"鴇色",
        subTitle:"明るい紫みの赤",
        colorCode:"#f4b3c2",
        description:"トキの翼の内側や風切羽、尾羽などは明るいピンクをしているが、その色からとられた近世和装で流行した色名。トキの体色は一見すると白だが、飛ぶときにはピンク色が見える。昔は日日本各地に生息していたので、人々はその色も知っていたのだろう。",
        choices:[
            [
                {
                    "name":"鴇色",
                    "colorCode":"#f4b3c2"
                },
                {
                    "name":"オールドローズ",
                    "colorCode":"#c58087"
                },
                {
                    "name":"ローズピンク",
                    "colorCode":"#f29c9f"
                }
            ],
            [
                {
                    "name":"鴇色",
                    "colorCode":"#f4b3c2"
                },
                {
                    "name":"桜色",
                    "colorCode":"#fdeeef"
                },
                {
                    "name":"珊瑚色",
                    "colorCode":"#F3ADA3"
                }
            ],
            [
                {
                    "name":"鴇色",
                    "colorCode":"#f4b3c2"
                },
                {
                    "name":"韓紅色",
                    "colorCode":"#ea0032"
                },
                {
                    "name":"紅梅色",
                    "colorCode":"#f3a7a5"
                }
            ]
        ],
        answer:1,
        toneNumber:['lt24+'],
    },
    {
        id:1,
        title:"韓紅色",
        subTitle:"あざやかな赤",
        colorCode:"#ea0032",
        description:"日本で呉(くれ)と呼んだ中国の地域から渡来した染料という意味で紅花の赤を 「呉藍 (くれない)」と呼んでいたことに由来する。平安時代から使われるようになった伝統的な色名。 王朝貴族に愛された紅の色だった。",
        choices:[
            [
                {
                    "name":"紅梅色",
                    "colorCode":"#f3a7a5"
                },
                {
                    "name":"カーマイン",
                    "colorCode":"#d7003a"
                },
                {
                    "name":"韓紅色",
                    "colorCode":"#ea0032"
                }
            ],
            [
                {
                    "name":"ポピーレッド",
                    "colorCode":"#e9474d"
                },
                {
                    "name":"オールドローズ",
                    "colorCode":"#c58087"
                },
                {
                    "name":"韓紅色",
                    "colorCode":"#ea0032"
                }
            ],
            [
                {
                    "name":"チャイニーズレッド",
                    "colorCode":"#ea5520"
                },
                {
                    "name":"ポピーレッド",
                    "colorCode":"#e9474d"
                },
                {
                    "name":"韓紅色",
                    "colorCode":"#ea0032"
                }
            ]
        ],
        answer:3,
        toneNumber:['v1','v2'],
    },
    {
        id:2,
        title:"蘇芳",
        subTitle:"くすんだ赤",
        colorCode:"#9e3d3e",
        description:"インド・マレー半島などを原産地とするマメ科植物の芯材を原料とし、その煎汁を染料として染めた色の色名。 マレー語のsapangの音に中国人が漢字をあてたのでいろいろな表記があり、この染料は奈良時代にすでに日本に渡来していた。",
        choices:[
            [
                {
                    "name":"弁柄色",
                    "colorCode":"#8f2e14"
                },
                {
                    "name":"鳶色",
                    "colorCode":"#8b4239"
                },
                {
                    "name":"蘇芳",
                    "colorCode":"#9e3d3e"
                }
            ],
            [
                {
                    "name":"海老茶",
                    "colorCode":"#6c2c2f"
                },
                {
                    "name":"煉瓦色",
                    "colorCode":"#a2482b"
                },
                {
                    "name":"蘇芳",
                    "colorCode":"#9e3d3e"
                }
            ],
            [
                {
                    "name":"鳶色",
                    "colorCode":"#8b4239"
                },
                {
                    "name":"海老茶",
                    "colorCode":"#6c2c2f"
                },
                {
                    "name":"蘇芳",
                    "colorCode":"#9e3d3e"
                }
            ]
        ],
        answer:3,
        toneNumber:['d2'],
    },
    {
        id:3,
        title:"鳶色",
        subTitle:"暗い黄みの赤",
        colorCode:"#8b4239",
        description:"トピは「とんび」ともいう鳥のことで、その羽のような色のこと。鳥の羽の色からとられた色名としては色(ひわいろ)に次いで古いが、それでも近世のこと。江戸時代の前期から用いられるようになった茶色染料の色名。",
        choices:[
            [
                {
                    "name":"煉瓦色",
                    "colorCode":"#a2482b"
                },
                {
                    "name":"鳶色",
                    "colorCode":"#8b4239"
                },
                {
                    "name":"栗色",
                    "colorCode":"#762e05"
                }
            ],
            [
                {
                    "name":"海老茶",
                    "colorCode":"#6c2c2f"
                },
                {
                    "name":"鳶色",
                    "colorCode":"#8b4239"
                },
                {
                    "name":"チョコレート",
                    "colorCode":"#612c16"
                }
            ],
            [
                {
                    "name":"弁柄色",
                    "colorCode":"#8f2e14"
                },
                {
                    "name":"鳶色",
                    "colorCode":"#8b4239"
                },
                {
                    "name":"蘇芳",
                    "colorCode":"#9e3d3e"
                }
            ]
        ],
        answer:2,
        toneNumber:['dk4','dk2'],
    },
    {
        id:4,
        title:"弁柄色",
        subTitle:"暗い黄みの赤",
        colorCode:"#8f2e14",
        description:"インド半島北東部のベンガル地方で産出する天然の酸化鉄からつくった赤褐色に由来する。ベンガルのあて字なのでいろいろな表記がある。酸化第二鉄を使った色の一般的な色名として江戸時代には広く用いられるようになった。",
        choices:[
            [
                {
                    "name":"弁柄色",
                    "colorCode":"#8f2e14"
                },
                {
                    "name":"チョコレート",
                    "colorCode":"#612c16"
                },
                {
                    "name":"海老茶",
                    "colorCode":"#6c2c2f"
                }
            ],
            [
                {
                    "name":"弁柄色",
                    "colorCode":"#8f2e14"
                },
                {
                    "name":"蘇芳",
                    "colorCode":"#9e3d3e"
                },
                {
                    "name":"鳶色",
                    "colorCode":"#8b4239"
                }
            ],
            [
                {
                    "name":"弁柄色",
                    "colorCode":"#8f2e14"
                },
                {
                    "name":"チャイニーズレッド",
                    "colorCode":"#ea5520"
                },
                {
                    "name":"煉瓦色",
                    "colorCode":"#a2482b"
                }
            ]
        ],
        answer:1,
        toneNumber:['dk4'],
    },
    {
        id:5,
        title:"海老茶",
        subTitle:"暗い黄みの赤",
        colorCode:"#6c2c2f",
        description:"葡萄(ぶどう)の古名を「えび」といった。平安時代の「えびいる」は山葡萄の果実のような暗い赤紫のこと。近世に葡萄を「えび」とは読まなくなったので、海老の字が当てられて海老茶になった。",
        choices:[
            [
                {
                    "name":"煉瓦色",
                    "colorCode":"#a2482b"
                },
                {
                    "name":"弁柄色",
                    "colorCode":"#8f2e14"
                },
                {
                    "name":"海老茶",
                    "colorCode":"#6c2c2f"
                }
            ],
            [
                {
                    "name":"栗色",
                    "colorCode":"#762e05"
                },
                {
                    "name":"鳶色",
                    "colorCode":"#8b4239"
                },
                {
                    "name":"海老茶",
                    "colorCode":"#6c2c2f"
                }
            ],
            [
                {
                    "name":"蘇芳",
                    "colorCode":"#9e3d3e"
                },
                {
                    "name":"チョコレート",
                    "colorCode":"#612c16"
                },
                {
                    "name":"海老茶",
                    "colorCode":"#6c2c2f"
                }
            ]
        ],
        answer:3,
        toneNumber:['dk4'],
    },
    {
        id:6,
        title:"オールドローズ",
        subTitle:"やわらかい赤",
        colorCode:"#c58087",
        description:"イギリスのヴィクトリア朝でもてはやされた流行色の色名。英語の色名にオールドという形容がつくと、古い、昔の、という連想から、くすんだ色、グレイッシュな色ということになる。つまりややくすんだ灰みのバラ色ということ。",
        choices:[
            [
                {
                    "name":"オールドローズ",
                    "colorCode":"#c58087"
                },
                {
                    "name":"蘇芳",
                    "colorCode":"#9e3d3e"
                },
                {
                    "name":"チャイニーズレッド",
                    "colorCode":"#ea5520"
                },
            ],
            [
                {
                    "name":"オールドローズ",
                    "colorCode":"#c58087"
                },
                {
                    "name":"韓紅色",
                    "colorCode":"#ea0032"
                },
                {
                    "name":"紅梅色",
                    "colorCode":"#f3a7a5"
                }
            ],
            [
                {
                    "name":"オールドローズ",
                    "colorCode":"#c58087"
                },
                {
                    "name":"紅梅色",
                    "colorCode":"#f3a7a5"
                },
                {
                    "name":"鴇色",
                    "colorCode":"#f4b3c2"
                }
            ]
        ],
        answer:1,
        toneNumber:['sf2'],
    },
    {
        id:7,
        title:"ポピーレッド",
        subTitle:"あざやかな赤",
        colorCode:"#e9474d",
        description:"ボビーは日本語ではヒナゲシのこと。イギリスでは畑に自生するありふれた花らしい。花の色には赤、ピンク、白などがあるが、そのうちの赤い花が英語の色名として選ばれた。色名になったのは比較的早く、1705年といわれている。",
        choices:[
            [
                {
                    "name":"韓紅色",
                    "colorCode":"#ea0032"
                },
                {
                    "name":"ポピーレッド",
                    "colorCode":"#e9474d"
                },
                {
                    "name":"チャイニーズレッド",
                    "colorCode":"#ea5520"
                },
            ],
            [
                {
                    "name":"鴇色",
                    "colorCode":"#f4b3c2"
                },
                {
                    "name":"ポピーレッド",
                    "colorCode":"#e9474d"
                },
                {
                    "name":"紅梅色",
                    "colorCode":"#f3a7a5"
                }
            ],
            [
                {
                    "name":"カーマイン",
                    "colorCode":"#d7003a"
                },
                {
                    "name":"ポピーレッド",
                    "colorCode":"#e9474d"
                },
                {
                    "name":"蘇芳",
                    "colorCode":"#9e3d3e"
                }
            ]
        ],
        answer:2,
        toneNumber:['v2'],
    },
    {
        id:8,
        title:"マルーン",
        subTitle:"暗い赤",
        colorCode:"#6a1816",
        description:"スペイン産の大粒の栗の名前がイタリア語でマローネ、フランス語でマロン、さらに英語でマルーンという色名になった。英語には栗の実の表皮の色のような茶色を表すチェスナットブラウン(chestnut brown) があるが、マルーンはそれより赤みのある色をいう。",
        choices:[
            [
                {
                    "name":"蘇芳",
                    "colorCode":"#9e3d3e"
                },
                {
                    "name":"チョコレート",
                    "colorCode":"#612c16"
                },
                {
                    "name":"マルーン",
                    "colorCode":"#6a1816"
                }
            ],
            [
                {
                    "name":"海老茶",
                    "colorCode":"#6c2c2f"
                },
                {
                    "name":"バーガンディー",
                    "colorCode":"#561620"
                },
                {
                    "name":"マルーン",
                    "colorCode":"#6a1816"
                }
            ],
            [
                {
                    "name":"テラコッタ",
                    "colorCode":"#be6d55"
                },
                {
                    "name":"桧皮色",
                    "colorCode":"#895d4f"
                },
                {
                    "name":"マルーン",
                    "colorCode":"#6a1816"
                }
            ]
        ],
        answer:3,
        toneNumber:['dk2'],
    },
    {
        id:9,
        title:"テラコッタ",
        subTitle:"くすんだ黄みの赤",
        colorCode:"#be6d55",
        description:"イタリア語で「焼いた土」の意味だが、 素焼きの陶器などの色のこともいう。 テラコッタは古くから用いられていたが、それが英語の色名に取り入れられたのは19世紀の終わり頃のこと。比較的新しい色名である。",
        choices:[
            [
                {
                    "name":"テラコッタ",
                    "colorCode":"#be6d55"
                },
                {
                    "name":"バーガンディー",
                    "colorCode":"#561620"
                },
                {
                    "name":"桧皮色",
                    "colorCode":"#895d4f"
                }
            ],
            [
                {
                    "name":"テラコッタ",
                    "colorCode":"#be6d55"
                },
                {
                    "name":"琥珀色",
                    "colorCode":"#bf7834"
                },
                {
                    "name":"代赭",
                    "colorCode":"#b66438"
                }
            ],
            [
                {
                    "name":"テラコッタ",
                    "colorCode":"#be6d55"
                },
                {
                    "name":"タン",
                    "colorCode":"#c1813f"
                },
                {
                    "name":"ローシェンナ",
                    "colorCode":"#b5652c"
                }
            ]
        ],
        answer:1,
        toneNumber:['d2','d4'],
    },
    {
        id:10,
        title:"黄丹",
        subTitle:"つよい黄赤",
        colorCode:"#ee7948",
        description:"天然の朱で古来有名なのは中国辰州の硫化水銀の原鉱「辰砂(しんしゃ)」。その名前、シンナバーまたはチャイニーズバーミリオンは14世紀に登場。チャイニーズレッドは、そのイミテーションの色名。19世紀から使われるようになった。",
        choices:[
            [
                {
                    "name":"柑子色",
                    "colorCode":"#f6ad48"
                },
                {
                    "name":"黄丹",
                    "colorCode":"#ee7948"
                },
                {
                    "name":"黄檗色",
                    "colorCode":"#dfd310"
                }
            ],
            [
                {
                    "name":"ゴールデンイエロー",
                    "colorCode":"#f8b856"
                },
                {
                    "name":"黄丹",
                    "colorCode":"#ee7948"
                },
                {
                    "name":"バーミリオン",
                    "colorCode":"#e9514e"
                }
            ],
            [
                {
                    "name":"マリーゴールド",
                    "colorCode":"#f39800"
                },
                {
                    "name":"黄丹",
                    "colorCode":"#ee7948"
                },
                {
                    "name":"柑子色",
                    "colorCode":"#f6ad48"
                }
            ]
        ],
        answer:2,
        toneNumber:['b4','v4','v5'],
    },
    // {
    //     id:11,
    //     title:"桧皮色",
    //     subTitle:"暗い灰みの黄赤",
    //     colorCode:"#895d4f",
    //     description:"桧(ひのき)の樹皮のような茶色の色名。ヒノキの樹皮を染料にしたわけではなく、黒みのある蘇芳の染色の色名といわれている。平安時代以来の伝統的な色名。",
    //     choices:[
    //         [
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             },
    //             {
    //                 "name":"代赭",
    //                 "colorCode":"#b66438"
    //             },
    //             {
    //                 "name":"バーントシェンナ",
    //                 "colorCode":"#b25532"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             },
    //             {
    //                 "name":"蘇芳",
    //                 "colorCode":"#9e3d3e"
    //             },
    //             {
    //                 "name":"マルーン",
    //                 "colorCode":"#6a1816"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"バーントシェンナ",
    //                 "colorCode":"#b25532"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['g4'],
    // },
    // {
    //     id:12,
    //     title:"代赭",
    //     subTitle:"くすんだ黄赤",
    //     colorCode:"#b66438",
    //     description:"天然の土からつくる絵の具の原料として、東洋では中国の山西省代州産の赫土(あかつち)が有名で、その土の酸化鉄を使った絵の具の色を代赫と呼んだ。やがて代謝は一般の酸化鉄を使った絵の具の通称になった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"チャイニーズレッド",
    //                 "colorCode":"#ea5520"
    //             },
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             },
    //             {
    //                 "name":"代赭",
    //                 "colorCode":"#b66438"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"琥珀色",
    //                 "colorCode":"#bf7834"
    //             },
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             },
    //             {
    //                 "name":"代赭",
    //                 "colorCode":"#b66438"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"蘇芳",
    //                 "colorCode":"#9e3d3e"
    //             },
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             },
    //             {
    //                 "name":"代赭",
    //                 "colorCode":"#b66438"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['d4'],
    // },
    // {
    //     id:13,
    //     title:"柑子色",
    //     subTitle:"明るい黄赤",
    //     colorCode:"#f6ad48",
    //     description:"コウジミカンの実のような色を表す平安時代からの伝統的な色名。「こうじ」は「かんじ」の変化した語とのこと。蜜柑色(みかんいろ)、オレンジ色などのルーツ。日本語の黄赤を代表すある古い色名である。",
    //     choices:[
    //         [
    //             {
    //                 "name":"マリーゴールド",
    //                 "colorCode":"#f39800"
    //             },
    //             {
    //                 "name":"黄丹",
    //                 "colorCode":"#ee7948"
    //             },
    //             {
    //                 "name":"柑子色",
    //                 "colorCode":"#f6ad48"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"黄丹",
    //                 "colorCode":"#ee7948"
    //             },
    //             {
    //                 "name":"黄檗色",
    //                 "colorCode":"#dfd310"
    //             },
    //             {
    //                 "name":"柑子色",
    //                 "colorCode":"#f6ad48"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"黄檗色",
    //                 "colorCode":"#dfd310"
    //             },
    //             {
    //                 "name":"マリーゴールド",
    //                 "colorCode":"#f39800"
    //             },
    //             {
    //                 "name":"柑子色",
    //                 "colorCode":"#f6ad48"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['b6','lt6+'],
    // },
    // {
    //     id:14,
    //     title:"チャイニーズレッド",
    //     subTitle:"あざやかな黄赤",
    //     colorCode:"#ea5520",
    //     description:"天然の朱で古来有名なのは中国辰州の硫化水銀の原鉱「辰砂(しんしゃ)」。その名前、シンナバーまたはチャイニーズバーミリオンは14世紀に登場。チャイニーズレッドは、そのイミテーションの色名。19世紀から使われるようになった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"チャイニーズレッド",
    //                 "colorCode":"#ea5520"
    //             },
    //             {
    //                 "name":"黄丹",
    //                 "colorCode":"#ee7948"
    //             },
    //             {
    //                 "name":"バーミリオン",
    //                 "colorCode":"#e9514e"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"チャイニーズレッド",
    //                 "colorCode":"#ea5520"
    //             },
    //             {
    //                 "name":"柑子色",
    //                 "colorCode":"#f6ad48"
    //             },
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"チャイニーズレッド",
    //                 "colorCode":"#ea5520"
    //             },
    //             {
    //                 "name":"マリーゴールド",
    //                 "colorCode":"#f39800"
    //             },
    //             {
    //                 "name":"黄丹",
    //                 "colorCode":"#ee7948"
    //             },
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['v4'],
    // },
    // {
    //     id:15,
    //     title:"バーントシェンナ",
    //     subTitle:"くすんだ黄赤",
    //     colorCode:"#b25532",
    //     description:"イタリアのトスカナ地方は美しい土の採掘場として昔から知られていた。その中心地がシエナで、そこから名付けられたシェンナ土を焼いて赤みのある褐色絵の具にしたものをバーントシェンナと呼び、その絵の具のような色をいう色名。",
    //     choices:[
    //         [
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             },
    //             {
    //                 "name":"バーントシェンナ",
    //                 "colorCode":"#b25532"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             },
    //             {
    //                 "name":"バーントシェンナ",
    //                 "colorCode":"#b25532"
    //             },
    //             {
    //                 "name":"琥珀色",
    //                 "colorCode":"#bf7834"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"バーントシェンナ",
    //                 "colorCode":"#b25532"
    //             },
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['d4'],
    // },
    // {
    //     id:16,
    //     title:"ローシェンナ",
    //     subTitle:"つよい黄赤",
    //     colorCode:"#b5652c",
    //     description:"美しい土の採掘場として昔から有名なイタリアのトスカナ地方。そこの土はその中心都市シェンナの名前で呼ばれ、絵の具の原料として用いられた。フレスコ画には重要な絵の具で、その色名がローシェンナ。ローは「そのまま」という意味。",
    //     choices:[
    //         [
    //             {
    //                 "name":"バーントシェンナ",
    //                 "colorCode":"#b25532"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"琥珀色",
    //                 "colorCode":"#bf7834"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"テラコッタ",
    //                 "colorCode":"#be6d55"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"ローアンバー",
    //                 "colorCode":"#554721"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['dp6'],
    // },
    // {
    //     id:17,
    //     title:"タン",
    //     subTitle:"くすんだ黄赤",
    //     colorCode:"#c1813f",
    //     description:"カシ、ナラなどの樹皮から採取した汁はタンニン酸を含み、獣皮をなめすのに使用された。そのなめし革がタン革であり、その色がタンと呼ばれた。16世紀にはすでに英語の色名として記録されている。",
    //     choices:[
    //         [
    //             {
    //                 "name":"カーキー",
    //                 "colorCode":"#bb9855"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"黄土色",
    //                 "colorCode":"#c39043"
    //             },
    //             {
    //                 "name":"チャイニーズレッド",
    //                 "colorCode":"#ea5520"
    //             },
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ローアンバー",
    //                 "colorCode":"#554721"
    //             },
    //             {
    //                 "name":"アンバー",
    //                 "colorCode":"#c28953"
    //             },
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['d6'],
    // },
    // {
    //     id:18,
    //     title:"琥珀色",
    //     subTitle:"くすんだ赤みの黄",
    //     colorCode:"#bf7834",
    //     description:"琥珀は植物の樹脂が化石になったもので、そのような色を表す。古名は赤玉、または「くはく」といった。日本語の色名に宝石からとられたものは珍しいが、色名として用いられたのは近代のこと。酒類の色を形容するときによく使われる。",
    //     choices:[
    //         [
    //             {
    //                 "name":"チャイニーズレッド",
    //                 "colorCode":"#ea5520"
    //             },
    //             {
    //                 "name":"琥珀色",
    //                 "colorCode":"#bf7834"
    //             },
    //             {
    //                 "name":"鬱金色",
    //                 "colorCode":"#fabf13"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"琥珀色",
    //                 "colorCode":"#bf7834"
    //             },
    //             {
    //                 "name":"代赭",
    //                 "colorCode":"#b66438"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"黄土色",
    //                 "colorCode":"#c39043"
    //             },
    //             {
    //                 "name":"琥珀色",
    //                 "colorCode":"#bf7834"
    //             },
    //             {
    //                 "name":"ローアンバー",
    //                 "colorCode":"#554721"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['d6'],
    // },
    // {
    //     id:19,
    //     title:"朽葉色",
    //     subTitle:"灰みの赤みを帯びた黄",
    //     colorCode:"#917347",
    //     description:"朽ちた落ち葉のような色。この色を中心に、赤みがあれば赤朽葉、黄みは黄朽葉、緑みがあれ青朽葉と呼び分けた。ほかにも朽葉のつく色名がいくつかある。伝統的な色名の中でも特に晩秋の季節感が濃厚な、平安中期からの色名。",
    //     choices:[
    //         [
    //             {
    //                 "name":"朽葉色",
    //                 "colorCode":"#917347"
    //             },
    //             {
    //                 "name":"カーキー",
    //                 "colorCode":"#bb9855"
    //             },
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"朽葉色",
    //                 "colorCode":"#917347"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"朽葉色",
    //                 "colorCode":"#917347"
    //             },
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             },
    //             {
    //                 "name":"代赭",
    //                 "colorCode":"#b66438"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['g6'],
    // },
    // {
    //     id:20,
    //     title:"鬱金色",
    //     subTitle:"つよい黄",
    //     colorCode:"#fabf13",
    //     description:"ショウガ科の植物であるウコンの根で染めた黄の色名。ウコンは原産地の熱帯アジアでは古くから知られていたが、日本では中世紀末から用いられるようになった。今でも漬物のたくあんの着色やカレー粉の原料などに使用されている。",
    //     choices:[
    //         [
    //             {
    //                 "name":"鬱金色",
    //                 "colorCode":"#fabf13"
    //             },
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             },
    //             {
    //                 "name":"ゴールデンイエロー",
    //                 "colorCode":"#f8b856"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"鬱金色",
    //                 "colorCode":"#fabf13"
    //             },
    //             {
    //                 "name":"ネープルスイエロー",
    //                 "colorCode":"#fdd75c"
    //             },
    //             {
    //                 "name":"ジョンブリアン",
    //                 "colorCode":"#ffdc00"
    //             },
    //         ],
    //         [
    //             {
    //                 "name":"鬱金色",
    //                 "colorCode":"#fabf13"
    //             },
    //             {
    //                 "name":"レモンイエロー",
    //                 "colorCode":"#fff33f"
    //             },
    //             {
    //                 "name":"柑子色",
    //                 "colorCode":"#f6ad48"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['v7','v8'],
    // },
    // {
    //     id:21,
    //     title:"刈安色",
    //     subTitle:"うすい緑みの黄",
    //     colorCode:"#f5e56b",
    //     description:"奈良時代から黄の染色に用いられてきたイネ科の刈安草は、刈りやすいからこの名がつけられたという。単独で黄を染めるほか、緑を染めるための藍の下染めによく用いられた。古来の染色技術から生まれた伝統的な色名。",
    //     choices:[
    //         [
    //             {
    //                 "name":"黄檗色",
    //                 "colorCode":"#dfd310"
    //             },
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             },
    //             {
    //                 "name":"柑子色",
    //                 "colorCode":"#f6ad48"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ネープルスイエロー",
    //                 "colorCode":"#fdd75c"
    //             },
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             },
    //             {
    //                 "name":"ゴールデンイエロー",
    //                 "colorCode":"#f8b856"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"レモンイエロー",
    //                 "colorCode":"#fff33f"
    //             },
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             },
    //             {
    //                 "name":"鬱金色",
    //                 "colorCode":"#fabf13"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['lt8+'],
    // },
    // {
    //     id:22,
    //     title:"エクルベイジュ",
    //     subTitle:"うすい赤みの黄",
    //     colorCode:"#f8eacf",
    //     description:"エクルもベージュもフランス語。エクルは「さらしていない」「生の」という意味。ベイジュも未加工の羊毛のような色のことで、二つ合わせても生成りの色ということ。それが19世紀にファッションカラーとなり、流行色の色名になった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ピーチ",
    //                 "colorCode":"#fbd8b5"
    //             },
    //             {
    //                 "name":"ネープルスイエロー",
    //                 "colorCode":"#fdd75c"
    //             },
    //             {
    //                 "name":"エクルベイジュ",
    //                 "colorCode":"#f8eacf"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"生成り色",
    //                 "colorCode":"#f7efe3"
    //             },
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             },
    //             {
    //                 "name":"エクルベイジュ",
    //                 "colorCode":"#f8eacf"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"カナリヤ",
    //                 "colorCode":"#fff262"
    //             },
    //             {
    //                 "name":"生成り色",
    //                 "colorCode":"#f7efe3"
    //             },
    //             {
    //                 "name":"エクルベイジュ",
    //                 "colorCode":"#f8eacf"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['p6+'],
    // },
    // {
    //     id:23,
    //     title:"ゴールデンイエロー",
    //     subTitle:"つよい赤みの黄",
    //     colorCode:"#f8b856",
    //     description:"ルネッサンス初期の絵画では聖人を表す光輪は金粉を使った絵の具で描かれていたが、盛期には黄金の輝きに黄の絵の具が使われた。ゴールドもイエローも語源は同じだが、16世紀頃に金色を感じさせる黄をこの名で呼ぶようになった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             },
    //             {
    //                 "name":"ゴールデンイエロー",
    //                 "colorCode":"#f8b856"
    //             },
    //             {
    //                 "name":"ネープルスイエロー",
    //                 "colorCode":"#fdd75c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ジョンブリアン",
    //                 "colorCode":"#ffdc00"
    //             },
    //             {
    //                 "name":"ゴールデンイエロー",
    //                 "colorCode":"#f8b856"
    //             },
    //             {
    //                 "name":"レモンイエロー",
    //                 "colorCode":"#fff33f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"鬱金色",
    //                 "colorCode":"#fabf13"
    //             },
    //             {
    //                 "name":"ゴールデンイエロー",
    //                 "colorCode":"#f8b856"
    //             },
    //             {
    //                 "name":"柑子色",
    //                 "colorCode":"#f6ad48"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['b6'],
    // },
    // {
    //     id:24,
    //     title:"アンバー",
    //     subTitle:"くすんだ赤みの黄",
    //     colorCode:"#c28953",
    //     description:"アンバー(amber)は琥珀(こはく)のこと。この色が琥珀そのものからつくられたわけではなく、琥珀のような色のことをいう。16世紀末にはすでに英語の色名になっていた。日本の琥珀色より、はるかに古いのは宝石文化の違いである。",
    //     choices:[
    //         [
    //             {
    //                 "name":"アンバー",
    //                 "colorCode":"#c28953"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"柑子色",
    //                 "colorCode":"#f6ad48"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"アンバー",
    //                 "colorCode":"#c28953"
    //             },
    //             {
    //                 "name":"琥珀色",
    //                 "colorCode":"#bf7834"
    //             },
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"アンバー",
    //                 "colorCode":"#c28953"
    //             },
    //             {
    //                 "name":"バーントアンバー",
    //                 "colorCode":"#59442c"
    //             },
    //             {
    //                 "name":"代赭",
    //                 "colorCode":"#b66438"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['d6'],
    // },
    // {
    //     id:25,
    //     title:"バーントアンバー",
    //     subTitle:"ごく暗い赤みの黄",
    //     colorCode:"#59442c",
    //     description:"アンバー(amber)はイタリアのウンブリア地方の英語名といわれる。トスカナと並んでウンブリアの土も色が美しく、天然の顔料として西洋諸国で有名だった。その土を焼いて暗褐色にした絵の具の色で、画家のパレットには欠かせないものだった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"バーントアンバー",
    //                 "colorCode":"#59442c"
    //             },
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             },
    //             {
    //                 "name":"アンバー",
    //                 "colorCode":"#c28953"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"バーントアンバー",
    //                 "colorCode":"#59442c"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"テラコッタ",
    //                 "colorCode":"#be6d55"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"バーントアンバー",
    //                 "colorCode":"#59442c"
    //             },
    //             {
    //                 "name":"琥珀色",
    //                 "colorCode":"#bf7834"
    //             },
    //             {
    //                 "name":"鬱金色",
    //                 "colorCode":"#fabf13"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['dkg6','g6'],
    // },
    // {
    //     id:26,
    //     title:"ローアンバー",
    //     subTitle:"暗い黄",
    //     colorCode:"#554721",
    //     description:"アンバー(amber)は絵の具の原料に使われるイタリアのウンブリア地方の土のこと。ローは「そのまま」という意味。その土の色あいが欧米各国でも好まれるようになり、英語の色名になった。特に英米では家の壁の色によく用いられる。",
    //     choices:[
    //         [
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             },
    //             {
    //                 "name":"ローアンバー",
    //                 "colorCode":"#554721"
    //             },
    //             {
    //                 "name":"鬱金色",
    //                 "colorCode":"#fabf13"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"タン",
    //                 "colorCode":"#c1813f"
    //             },
    //             {
    //                 "name":"ローアンバー",
    //                 "colorCode":"#554721"
    //             },
    //             {
    //                 "name":"エクルベイジュ",
    //                 "colorCode":"#f8eacf"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"ローアンバー",
    //                 "colorCode":"#554721"
    //             },
    //             {
    //                 "name":"アンバー",
    //                 "colorCode":"#c28953"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['dk8'],
    // },
    // {
    //     id:27,
    //     title:"ネープルスイエロー",
    //     subTitle:"つよい黄",
    //     colorCode:"#fdd75c",
    //     description:"「ナポリの黄」という意味。ネープルスはイタリアのナポリの英語名。中世にはナポリで用いられていたというこの黄の絵の具は、ナポリ湾岸のヴェスヴィアス火山の鉱物からつくられたと信じられていたので、この名で知られることになった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             },
    //             {
    //                 "name":"エクルベイジュ",
    //                 "colorCode":"#f8eacf"
    //             },
    //             {
    //                 "name":"ネープルスイエロー",
    //                 "colorCode":"#fdd75c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ジョンブリアン",
    //                 "colorCode":"#ffdc00"
    //             },
    //             {
    //                 "name":"黄檗色",
    //                 "colorCode":"#dfd310"
    //             },
    //             {
    //                 "name":"ネープルスイエロー",
    //                 "colorCode":"#fdd75c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"レモンイエロー",
    //                 "colorCode":"#fff33f"
    //             },
    //             {
    //                 "name":"ゴールデンイエロー",
    //                 "colorCode":"#f8b856"
    //             },
    //             {
    //                 "name":"ネープルスイエロー",
    //                 "colorCode":"#fdd75c"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['lt8+'],
    // },
    // {
    //     id:28,
    //     title:"ジョンブリアン",
    //     subTitle:"あざやかな黄",
    //     colorCode:"#ffdc00",
    //     description:"フランス語で「輝かしい黄色」を意味する色名。中世のナポリの黄として知られていた絵の具に代わって、新しい黄の絵の具がつくられるようになり、それにこの色名が与えられた。今は鮮やかな黄を示す。",
    //     choices:[
    //         [
    //             {
    //                 "name":"カナリヤ",
    //                 "colorCode":"#fff262"
    //             },
    //             {
    //                 "name":"ジョンブリアン",
    //                 "colorCode":"#ffdc00"
    //             },
    //             {
    //                 "name":"鬱金色",
    //                 "colorCode":"#fabf13"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ゴールデンイエロー",
    //                 "colorCode":"#f8b856"
    //             },
    //             {
    //                 "name":"ジョンブリアン",
    //                 "colorCode":"#ffdc00"
    //             },
    //             {
    //                 "name":"ネープルスイエロー",
    //                 "colorCode":"#fdd75c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"レモンイエロー",
    //                 "colorCode":"#fff33f"
    //             },
    //             {
    //                 "name":"ジョンブリアン",
    //                 "colorCode":"#ffdc00"
    //             },
    //             {
    //                 "name":"ゴールデンイエロー",
    //                 "colorCode":"#f8b856"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['v8'],
    // },
    // {
    //     id:29,
    //     title:"黄檗色",
    //     subTitle:"あかるい黄緑",
    //     colorCode:"#dfd310",
    //     description:"ミカン科の樹木キハダの樹皮の内皮の黄色素を染料として染めた色の色名。防虫効果があるところから奈良時代から染め紙に用いられ、藍との重ね染めで緑や藍色の染色にも用いられていた。古来の染色材料を今に記録する伝統的な色名の一つ。",
    //     choices:[
    //         [
    //             {
    //                 "name":"黄檗色",
    //                 "colorCode":"#dfd310"
    //             },
    //             {
    //                 "name":"ゴールデンイエロー",
    //                 "colorCode":"#f8b856"
    //             },
    //             {
    //                 "name":"カナリヤ",
    //                 "colorCode":"#fff262"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"黄檗色",
    //                 "colorCode":"#dfd310"
    //             },
    //             {
    //                 "name":"レモンイエロー",
    //                 "colorCode":"#fff33f"
    //             },
    //             {
    //                 "name":"ネープルスイエロー",
    //                 "colorCode":"#fdd75c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"黄檗色",
    //                 "colorCode":"#dfd310"
    //             },
    //             {
    //                 "name":"柑子色",
    //                 "colorCode":"#f6ad48"
    //             },
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['lt10+'],
    // },
    // {
    //     id:30,
    //     title:"海松色",
    //     subTitle:"暗い灰みの黄緑",
    //     colorCode:"#726d3f",
    //     description:"海藻の一種であるミルは、「万葉集」に海松を詠みこんだ歌が出てくるほど、広く知られていたらしい。現在では一般的になじみがなくなってしまったが、中世以降はオリーブグリーンの色合いを表す、伝統的な色名の代表だった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"鶸色",
    //                 "colorCode":"#c0c14c"
    //             },
    //             {
    //                 "name":"グラスグリーン",
    //                 "colorCode":"#7b8d41"
    //             },
    //             {
    //                 "name":"海松色",
    //                 "colorCode":"#726d3f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"エクルベイジュ",
    //                 "colorCode":"#f8eacf"
    //             },
    //             {
    //                 "name":"グラスグリーン",
    //                 "colorCode":"#7b8d41"
    //             },
    //             {
    //                 "name":"海松色",
    //                 "colorCode":"#726d3f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"オリーブ",
    //                 "colorCode":"#ddb563"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"海松色",
    //                 "colorCode":"#726d3f"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['g10'],
    // },
    // {
    //     id:31,
    //     title:"鶸色",
    //     subTitle:"つよい黄緑",
    //     colorCode:"#c0c14c",
    //     description:"黄緑色をした小鳥のヒワの羽の色から名づけられた色名。鳥の羽毛からとられた色名としては古く、中世の終わりには用いられたとされる。カナリアが渡来する前は唯一の黄色い鳥だったので金翅雀色と書かれている例もある。",
    //     choices:[
    //         [
    //             {
    //                 "name":"鶸色",
    //                 "colorCode":"#c0c14c"
    //             },
    //             {
    //                 "name":"海松色",
    //                 "colorCode":"#726d3f"
    //             },
    //             {
    //                 "name":"エクルベイジュ",
    //                 "colorCode":"#f8eacf"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"鶸色",
    //                 "colorCode":"#c0c14c"
    //             },
    //             {
    //                 "name":"鶯色",
    //                 "colorCode":"#6f6f44"
    //             },
    //             {
    //                 "name":"シャトルーズグリーン",
    //                 "colorCode":"#d9e367"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"鶸色",
    //                 "colorCode":"#c0c14c"
    //             },
    //             {
    //                 "name":"鴇色",
    //                 "colorCode":"#f4b3c2"
    //             },
    //             {
    //                 "name":"鶯色",
    //                 "colorCode":"#6f6f44"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['b10','lt10+'],
    // },
    // {
    //     id:32,
    //     title:"シャトルーズグリーン",
    //     subTitle:"明るい黄緑",
    //     colorCode:"#d9e367",
    //     description:"フランスのシャトルーズ修道院でつくられたリキュールが色名の起源。このリキュールには黄色と緑色のものがあり、その緑色のような色を表す。色名はリキュールができた時代よりも新20世紀初頭の流行色の色名である。",
    //     choices:[
    //         [
    //             {
    //                 "name":"萌黄",
    //                 "colorCode":"#AFD147"
    //             },
    //             {
    //                 "name":"シャトルーズグリーン",
    //                 "colorCode":"#d9e367"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"グラスグリーン",
    //                 "colorCode":"#7b8d41"
    //             },
    //             {
    //                 "name":"シャトルーズグリーン",
    //                 "colorCode":"#d9e367"
    //             },
    //             {
    //                 "name":"リーフグリーン",
    //                 "colorCode":"#9dc04c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             },
    //             {
    //                 "name":"シャトルーズグリーン",
    //                 "colorCode":"#d9e367"
    //             },
    //             {
    //                 "name":"萌黄",
    //                 "colorCode":"#AFD147"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['b10'],
    // },
    // {
    //     id:33,
    //     title:"リーフグリーン",
    //     subTitle:"つよい黄緑",
    //     colorCode:"#9dc04c",
    //     description:"リーフ葉のことで、木の葉の緑という意味の色名。草色のグラスグリーンとともに自然の黄緑色を表すわかりやすい色名の代表的なものである。しかし、草色ほど古くからある色名ではな19世紀の新しい名称とされている。",
    //     choices:[
    //         [
    //             {
    //                 "name":"リーフグリーン",
    //                 "colorCode":"#9dc04c"
    //             },
    //             {
    //                 "name":"シャトルーズグリーン",
    //                 "colorCode":"#d9e367"
    //             },
    //             {
    //                 "name":"グラスグリーン",
    //                 "colorCode":"#7b8d41"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"リーフグリーン",
    //                 "colorCode":"#9dc04c"
    //             },
    //             {
    //                 "name":"鶯色",
    //                 "colorCode":"#6f6f44"
    //             },
    //             {
    //                 "name":"鶸色",
    //                 "colorCode":"#c0c14c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"リーフグリーン",
    //                 "colorCode":"#9dc04c"
    //             },
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             },
    //             {
    //                 "name":"オリーブ",
    //                 "colorCode":"#ddb563"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['d10','lt10+'],
    // },
    // {
    //     id:34,
    //     title:"グラスグリーン",
    //     subTitle:"くすんだ黄緑",
    //     colorCode:"#7b8d41",
    //     description:"英語の色名としては最古のものの一つ。8世紀以前にはすでに知られていたらしい。グラスが草の意味。日本語の草色は雑草の色だが、英語のグラスグリーンはどうやら牧草の色らしい。メドウグリーンなど、よく似た色の色名がほかにもある。",
    //     choices:[
    //         [
    //             {
    //                 "name":"リーフグリーン",
    //                 "colorCode":"#9dc04c"
    //             },
    //             {
    //                 "name":"海松色",
    //                 "colorCode":"#726d3f"
    //             },
    //             {
    //                 "name":"グラスグリーン",
    //                 "colorCode":"#7b8d41"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"鶸色",
    //                 "colorCode":"#c0c14c"
    //             },
    //             {
    //                 "name":"鶯色",
    //                 "colorCode":"#6f6f44"
    //             },
    //             {
    //                 "name":"グラスグリーン",
    //                 "colorCode":"#7b8d41"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"オリーブ",
    //                 "colorCode":"#ddb563"
    //             },
    //             {
    //                 "name":"シャトルーズグリーン",
    //                 "colorCode":"#d9e367"
    //             },
    //             {
    //                 "name":"グラスグリーン",
    //                 "colorCode":"#7b8d41"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['d10'],
    // },
    // {
    //     id:35,
    //     title:"常磐色",
    //     subTitle:"こい緑",
    //     colorCode:"#007c45",
    //     description:"松や杉のような常緑樹の葉のような色を表す色名。常緑樹の葉の色が緑色で年中変わらないところから、永久に変わらない色という美称として用いられた。英語のエバーグリーン(evergreen)の同類である。",
    //     choices:[
    //         [
    //             {
    //                 "name":"常磐色",
    //                 "colorCode":"#007c45"
    //             },
    //             {
    //                 "name":"ボトルグリーン",
    //                 "colorCode":"#005635"
    //             },
    //             {
    //                 "name":"グラスグリーン",
    //                 "colorCode":"#7b8d41"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"常磐色",
    //                 "colorCode":"#007c45"
    //             },
    //             {
    //                 "name":"マラカイトグリーン",
    //                 "colorCode":"#009854"
    //             },
    //             {
    //                 "name":"オリーブ",
    //                 "colorCode":"#ddb563"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"常磐色",
    //                 "colorCode":"#007c45"
    //             },
    //             {
    //                 "name":"海松色",
    //                 "colorCode":"#726d3f"
    //             },
    //             {
    //                 "name":"ボトルグリーン",
    //                 "colorCode":"#005635"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['dp12'],
    // },
    // {
    //     id:36,
    //     title:"緑青色",
    //     subTitle:"くすんだ緑",
    //     colorCode:"#4f8a5d",
    //     description:"石緑(せきりょく)、孔雀(くじゃく)石からつくられる緑色の色名。炭酸銅、水酸化銅などを主成分とする。銅の鍵のような緑色のことでもある。古来、絵画の緑色絵の具の代表的なものとしても知られている。",
    //     choices:[
    //         [
    //             {
    //                 "name":"鶯色",
    //                 "colorCode":"#6f6f44"
    //             },
    //             {
    //                 "name":"緑青色",
    //                 "colorCode":"#4f8a5d"
    //             },
    //             {
    //                 "name":"常磐色",
    //                 "colorCode":"#007c45"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"コバルトグリーン",
    //                 "colorCode":"#3ab483"
    //             },
    //             {
    //                 "name":"緑青色",
    //                 "colorCode":"#4f8a5d"
    //             },
    //             {
    //                 "name":"ミントグリーン",
    //                 "colorCode":"#98ce97"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ピーコックグリーン",
    //                 "colorCode":"#00a496"
    //             },
    //             {
    //                 "name":"緑青色",
    //                 "colorCode":"#4f8a5d"
    //             },
    //             {
    //                 "name":"青磁色",
    //                 "colorCode":"#76ac96"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['d12'],
    // },
    // {
    //     id:37,
    //     title:"アップルグリーン",
    //     subTitle:"やわらかい黄みの緑",
    //     colorCode:"#a2cc89",
    //     description:"日本でリンゴといえば赤だが、英語のアップルはグリーンの色名になっている。この色名が使われ始めた頃は、リンゴといえば緑だったのだろう。アダムとイヴが蛇の誘惑に負けて手にすあるリンゴも、絵画作品では青リンゴになっているものが多い。",
    //     choices:[
    //         [
    //             {
    //                 "name":"コバルトグリーン",
    //                 "colorCode":"#3ab483"
    //             },
    //             {
    //                 "name":"シャトルーズグリーン",
    //                 "colorCode":"#d9e367"
    //             },
    //             {
    //                 "name":"アップルグリーン",
    //                 "colorCode":"#a2cc89"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ピーコックグリーン",
    //                 "colorCode":"#00a496"
    //             },
    //             {
    //                 "name":"ミントグリーン",
    //                 "colorCode":"#98ce97"
    //             },
    //             {
    //                 "name":"アップルグリーン",
    //                 "colorCode":"#a2cc89"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ミントグリーン",
    //                 "colorCode":"#98ce97"
    //             },
    //             {
    //                 "name":"グラスグリーン",
    //                 "colorCode":"#7b8d41"
    //             },
    //             {
    //                 "name":"アップルグリーン",
    //                 "colorCode":"#a2cc89"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['sf12','lt12+'],
    // },
    // {
    //     id:38,
    //     title:"ミントグリーン",
    //     subTitle:"明るい緑",
    //     colorCode:"#98ce97",
    //     description:"ミントとはハッカのこと。この色はハッカの油からつくった酒の色といわれている。西洋ハッ力のペパーミントや緑ハッカのスペアミントといった色名もあるが、どちらも緑色を表す。すべて20世紀初頭の色名で歴史は浅い。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ミントグリーン",
    //                 "colorCode":"#98ce97"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"シャトルーズグリーン",
    //                 "colorCode":"#d9e367"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ミントグリーン",
    //                 "colorCode":"#98ce97"
    //             },
    //             {
    //                 "name":"リーフグリーン",
    //                 "colorCode":"#9dc04c"
    //             },
    //             {
    //                 "name":"ピーコックグリーン",
    //                 "colorCode":"#00a496"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ミントグリーン",
    //                 "colorCode":"#98ce97"
    //             },
    //             {
    //                 "name":"緑青色",
    //                 "colorCode":"#4f8a5d"
    //             },
    //             {
    //                 "name":"アップルグリーン",
    //                 "colorCode":"#a2cc89"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['b12','lt12+'],
    // },
    // {
    //     id:39,
    //     title:"マラカイトグリーン",
    //     subTitle:"こい緑",
    //     colorCode:"#009854",
    //     description:"マラカイト、日本語で孔雀石(くじゃくいし)と呼ばれる鉱石からつくられた緑色の色名。古代エジプトではすでにこの緑色が知られていて、エジプト人が目を守るおまじないにこの緑色を目のまわりに塗ったのがアイラインの始まりだという。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ピーコックグリーン",
    //                 "colorCode":"#00a496"
    //             },
    //             {
    //                 "name":"エメラルドグリーン",
    //                 "colorCode":"#00aa6e"
    //             },
    //             {
    //                 "name":"マラカイトグリーン",
    //                 "colorCode":"#009854"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ピーコックグリーン",
    //                 "colorCode":"#00a496"
    //             },
    //             {
    //                 "name":"コバルトグリーン",
    //                 "colorCode":"#3ab483"
    //             },
    //             {
    //                 "name":"マラカイトグリーン",
    //                 "colorCode":"#009854"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ボトルグリーン",
    //                 "colorCode":"#005635"
    //             },
    //             {
    //                 "name":"常磐色",
    //                 "colorCode":"#007c45"
    //             },
    //             {
    //                 "name":"マラカイトグリーン",
    //                 "colorCode":"#009854"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['dp12'],
    // },
    // {
    //     id:40,
    //     title:"ボトルグリーン",
    //     subTitle:"ごく暗い緑",
    //     colorCode:"#005635",
    //     description:"酒の輸送に使われるのが樽からガラスのボトルとコルク栓に変わったのは17世紀になってから。そのボトルには緑のガラスが使用された。それが薬瓶などにも普及して緑色の瓶の色が色名になったのは19世紀初め。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ボトルグリーン",
    //                 "colorCode":"#005635"
    //             },
    //             {
    //                 "name":"エメラルドグリーン",
    //                 "colorCode":"#00aa6e"
    //             },
    //             {
    //                 "name":"常磐色",
    //                 "colorCode":"#007c45"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ボトルグリーン",
    //                 "colorCode":"#005635"
    //             },
    //             {
    //                 "name":"マラカイトグリーン",
    //                 "colorCode":"#009854"
    //             },
    //             {
    //                 "name":"海松色",
    //                 "colorCode":"#726d3f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ボトルグリーン",
    //                 "colorCode":"#005635"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"鉄色",
    //                 "colorCode":"#005242"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['dkg12','dk12'],
    // },
    // {
    //     id:41,
    //     title:"鉄色",
    //     subTitle:"ごく暗い青緑",
    //     colorCode:"#005242",
    //     description:"焼いた鉄の肌のような暗い緑みの青をなぜか鉄鉄は「くろがね」と通称されるのだ。が、英語で鉄のアイアンはブルーかグレイである。江戸後期には緑みのある青の鉄紺など、鉄のある靴のを修飾語にした染色の色名がよく見られる。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ボトルグリーン",
    //                 "colorCode":"#005635"
    //             },
    //             {
    //                 "name":"鉄色",
    //                 "colorCode":"#005242"
    //             },
    //             {
    //                 "name":"常磐色",
    //                 "colorCode":"#007c45"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"青磁色",
    //                 "colorCode":"#76ac96"
    //             },
    //             {
    //                 "name":"鉄色",
    //                 "colorCode":"#005242"
    //             },
    //             {
    //                 "name":"エメラルドグリーン",
    //                 "colorCode":"#00aa6e"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"常磐色",
    //                 "colorCode":"#007c45"
    //             },
    //             {
    //                 "name":"鉄色",
    //                 "colorCode":"#005242"
    //             },
    //             {
    //                 "name":"海松色",
    //                 "colorCode":"#726d3f"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['dk14','dkg14'],
    // },
    // {
    //     id:42,
    //     title:"ピーコックグリーン",
    //     subTitle:"青緑",
    //     colorCode:"#00a496",
    //     description:"孔雀の羽の緑色のような色の色名。本来、ピーコックはブルーの色名で16世紀の終わりから使用されていた。19世紀にグリーンも色名になったが、どちらで呼ぶのが正しいと決めることはできない。現在はブルーとグリーンの両方が用いられている。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ピーコックグリーン",
    //                 "colorCode":"#00a496"
    //             },
    //             {
    //                 "name":"ナイルブルー",
    //                 "colorCode":"#469298"
    //             },
    //             {
    //                 "name":"浅葱色",
    //                 "colorCode":"#00a1ae"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ピーコックグリーン",
    //                 "colorCode":"#00a496"
    //             },
    //             {
    //                 "name":"新橋色",
    //                 "colorCode":"#64bcc7"
    //             },
    //             {
    //                 "name":"群青色",
    //                 "colorCode":"#4e67b0"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ピーコックグリーン",
    //                 "colorCode":"#00a496"
    //             },
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             },
    //             {
    //                 "name":"サックスブルー",
    //                 "colorCode":"#3a8daa"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['v14','v15'],
    // },
    // {
    //     id:43,
    //     title:"ナイルブルー",
    //     subTitle:"くすんだ青緑",
    //     colorCode:"#469298",
    //     description:"1880年代にナイル川の名前がつく色名に登場した。ナイルブルーが先で、その後、ナイルグリーンが色名になった。ナイルが青や緑の川として美化されて記憶されたのだろう。アメリカの色名辞典ではグリーンのほうが太文字で書かれている。",
    //     choices:[
    //         [
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             },
    //             {
    //                 "name":"青磁色",
    //                 "colorCode":"#76ac96"
    //             },
    //             {
    //                 "name":"ナイルブルー",
    //                 "colorCode":"#469298"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"浅葱色",
    //                 "colorCode":"#00a1ae"
    //             },
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             },
    //             {
    //                 "name":"ナイルブルー",
    //                 "colorCode":"#469298"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"群青色",
    //                 "colorCode":"#4e67b0"
    //             },
    //             {
    //                 "name":"サックスブルー",
    //                 "colorCode":"#3a8daa"
    //             },
    //             {
    //                 "name":"ナイルブルー",
    //                 "colorCode":"#469298"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['sf14'],
    // },
    // {
    //     id:44,
    //     title:"新橋色",
    //     subTitle:"明るい緑みの青",
    //     colorCode:"#64bcc7",
    //     description:"明治末から大正にかけて流行した、東京新橋の芸者衆が好んだ着物の色からの色名。新橋芸者は新しいもの好きで、彼女たちがいち早く化学染料の色を取り入れたため、それが新鮮に見えたのだろう。ローカルな町名が色名になった珍しい例。",
    //     choices:[
    //         [
    //             {
    //                 "name":"空色",
    //                 "colorCode":"#A0D8EF"
    //             },
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             },
    //             {
    //                 "name":"新橋色",
    //                 "colorCode":"#64bcc7"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"浅葱色",
    //                 "colorCode":"#00a1ae"
    //             },
    //             {
    //                 "name":"甕覗",
    //                 "colorCode":"#a2d7dd"
    //             },
    //             {
    //                 "name":"新橋色",
    //                 "colorCode":"#64bcc7"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"甕覗",
    //                 "colorCode":"#a2d7dd"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"新橋色",
    //                 "colorCode":"#64bcc7"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['lt16+','b16'],
    // },
    // {
    //     id:45,
    //     title:"納戸色",
    //     subTitle:"つよい緑みの青",
    //     colorCode:"#007d92",
    //     description:"納戸(物置部屋)の暗がりの色、納戸の幕の色、納戸方の役人の衣服の色など、この色名の説明には諸説あるが、一度にたくさん藍染をしてそれを納戸にしまっておいたから、という説もある。江戸時代の代表的な藍染めの青の色名。「御納戸色」ともいう。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ナイルブルー",
    //                 "colorCode":"#469298"
    //             },
    //             {
    //                 "name":"納戸色",
    //                 "colorCode":"#007d92"
    //             },
    //             {
    //                 "name":"青磁色",
    //                 "colorCode":"#76ac96"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"サックスブルー",
    //                 "colorCode":"#3a8daa"
    //             },
    //             {
    //                 "name":"納戸色",
    //                 "colorCode":"#007d92"
    //             },
    //             {
    //                 "name":"縹色",
    //                 "colorCode":"#2980af"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             },
    //             {
    //                 "name":"納戸色",
    //                 "colorCode":"#007d92"
    //             },
    //             {
    //                 "name":"群青色",
    //                 "colorCode":"#4e67b0"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['d16'],
    // },
    // {
    //     id:46,
    //     title:"甕覗き",
    //     subTitle:"やわらかい緑みの青",
    //     colorCode:"#a2d7dd",
    //     description:"別名「のぞきいろ(覗き色)」。糸や布が藍がめをちょっとのぞいただけという意味。当然、ご薄い藍染めの青になる。中世には薄い藍色を一入染(ひとしおそめ)といった。これは藍がめの中に1回布をくぐらせただけという染色であった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"甕覗",
    //                 "colorCode":"#a2d7dd"
    //             },
    //             {
    //                 "name":"新橋色",
    //                 "colorCode":"#64bcc7"
    //             },
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"甕覗",
    //                 "colorCode":"#a2d7dd"
    //             },
    //             {
    //                 "name":"縹色",
    //                 "colorCode":"#2980af"
    //             },
    //             {
    //                 "name":"新橋色",
    //                 "colorCode":"#64bcc7"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"甕覗",
    //                 "colorCode":"#a2d7dd"
    //             },
    //             {
    //                 "name":"浅葱色",
    //                 "colorCode":"#00a1ae"
    //             },
    //             {
    //                 "name":"青磁色",
    //                 "colorCode":"#76ac96"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['ltg16','p16+'],
    // },
    // {
    //     id:47,
    //     title:"縹色",
    //     subTitle:"つよい青",
    //     colorCode:"#2980af",
    //     description:"藍染めの代表的な青を表す色名。緑は漂から転じた字で籃汁の中に糸がただようことを表していたといわれる。奈良時代からの古い色名だが、中世には花田とも書くようになり、近世には花色になった。この花は露草の青い花のことである。",
    //     choices:[
    //         [
    //             {
    //                 "name":"藍色",
    //                 "colorCode":"#0f5779"
    //             },
    //             {
    //                 "name":"群青色",
    //                 "colorCode":"#4e67b0"
    //             },
    //             {
    //                 "name":"縹色",
    //                 "colorCode":"#2980af"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"納戸色",
    //                 "colorCode":"#007d92"
    //             },
    //             {
    //                 "name":"縹色",
    //                 "colorCode":"#2980af"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"コバルトブルー",
    //                 "colorCode":"#0068b7"
    //             },
    //             {
    //                 "name":"ナイルブルー",
    //                 "colorCode":"#469298"
    //             },
    //             {
    //                 "name":"縹色",
    //                 "colorCode":"#2980af"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['d18','sf18'],
    // },
    // {
    //     id:48,
    //     title:"セルリアンブルー",
    //     subTitle:"あざやかな青",
    //     colorCode:"#008db7",
    //     description:"16世紀に英語の色名になったセルリアンはスカイブルーの一種だった。ところが19世紀に録酸コバルト化合物からつくられた美しい青の絵の具が工場生産されるようになり、その色にセルリアンブルーの色名が与えられた。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ナイルブルー",
    //                 "colorCode":"#469298"
    //             },
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             },
    //             {
    //                 "name":"刈安色",
    //                 "colorCode":"#f5e56b"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"納戸色",
    //                 "colorCode":"#007d92"
    //             },
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             },
    //             {
    //                 "name":"コバルトブルー",
    //                 "colorCode":"#0068b7"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             },
    //             {
    //                 "name":"マリンブルー",
    //                 "colorCode":"#006788"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['v17','b16'],
    // },
    // {
    //     id:49,
    //     title:"ミッドナイトブルー",
    //     subTitle:"ごく暗い紫みの青",
    //     colorCode:"#001d42",
    //     description:"真夜中の青という意味の暗い紺色を表す商業的な色名として成功したものの一つ。20世紀初めに登場した流行色の色名である。それまでよく知られていたネービーブルーよりも暗い紺色の色名として広く用いられるようになった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ミッドナイトブルー",
    //                 "colorCode":"#001d42"
    //             },
    //             {
    //                 "name":"瑠璃色",
    //                 "colorCode":"#1d50a2"
    //             },
    //             {
    //                 "name":"ネービーブルー",
    //                 "colorCode":"#1f2e55"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ミッドナイトブルー",
    //                 "colorCode":"#001d42"
    //             },
    //             {
    //                 "name":"藍色",
    //                 "colorCode":"#0f5779"
    //             },
    //             {
    //                 "name":"縹色",
    //                 "colorCode":"#2980af"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ミッドナイトブルー",
    //                 "colorCode":"#001d42"
    //             },
    //             {
    //                 "name":"ネービーブルー",
    //                 "colorCode":"#1f2e55"
    //             },
    //             {
    //                 "name":"納戸色",
    //                 "colorCode":"#007d92"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['dkg18'],
    // },
    // {
    //     id:50,
    //     title:"藤色",
    //     subTitle:"明るい青紫",
    //     colorCode:"#bbb7da",
    //     description:"藤の花房の色からとられた藤色は、明るい青紫を表す代表的な色名。平安時代から使われていある伝統的な色名で、清少納言の「枕草子」一節にも「めでたきもの」の典型として藤の花が登こも「めでたきもの」の典型として藤の花が登場している。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ライラック",
    //                 "colorCode":"#D2BADA"
    //             },
    //             {
    //                 "name":"バイオレット",
    //                 "colorCode":"#714f9d"
    //             },
    //             {
    //                 "name":"藤色",
    //                 "colorCode":"#bbb7da"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             },
    //             {
    //                 "name":"ラベンダー",
    //                 "colorCode":"#C4B3D3"
    //             },
    //             {
    //                 "name":"藤色",
    //                 "colorCode":"#bbb7da"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ライラック",
    //                 "colorCode":"#D2BADA"
    //             },
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             },
    //             {
    //                 "name":"藤色",
    //                 "colorCode":"#bbb7da"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['lt20+'],
    // },
    // {
    //     id:51,
    //     title:"ウイスタリア",
    //     subTitle:"あざやかな青紫",
    //     colorCode:"#8e8bc2",
    //     description:"ウイスタリアは藤の英語名。19世紀末にこの色の化学染料ができたために出現した色名である。同じ藤の花の色を語源とする色に藤色があるが、藤色は明るい青紫、ウイスタリアは鮮やかな青紫で微妙に違う。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             },
    //             {
    //                 "name":"ライラック",
    //                 "colorCode":"#D2BADA"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"藤色",
    //                 "colorCode":"#bbb7da"
    //             },
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             },
    //             {
    //                 "name":"ライラック",
    //                 "colorCode":"#D2BADA"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"藤色",
    //                 "colorCode":"#bbb7da"
    //             },
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             },
    //             {
    //                 "name":"バイオレット",
    //                 "colorCode":"#714f9d"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:[],
    // },
    // {
    //     id:52,
    //     title:"江戸紫",
    //     subTitle:"こい青みの紫",
    //     colorCode:"#734e95",
    //     description:"紫を染める紫草は武蔵野(現在の東京郊外)でよく知られていた。名物の少ない新興都市江戸では紫色の染色は江戸っ子の自慢の色で、江戸名物を取り上げた蜀山人(しょくさんじん)の歌や川柳にも紫が入っている。伝統的な京紫より青みがあるといわれている。",
    //     choices:[
    //         [
    //             {
    //                 "name":"茄子紺",
    //                 "colorCode":"#321b3a"
    //             },
    //             {
    //                 "name":"ローシェンナ",
    //                 "colorCode":"#b5652c"
    //             },
    //             {
    //                 "name":"江戸紫",
    //                 "colorCode":"#734e95"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"古代紫",
    //                 "colorCode":"#895687"
    //             },
    //             {
    //                 "name":"桔梗色",
    //                 "colorCode":"#5045a4"
    //             },
    //             {
    //                 "name":"江戸紫",
    //                 "colorCode":"#734e95"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"藤色",
    //                 "colorCode":"#bbb7da"
    //             },
    //             {
    //                 "name":"古代紫",
    //                 "colorCode":"#895687"
    //             },
    //             {
    //                 "name":"江戸紫",
    //                 "colorCode":"#734e95"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['d20','dp20'],
    // },
    // {
    //     id:53,
    //     title:"古代紫",
    //     subTitle:"くすんだ紫",
    //     colorCode:"#895687",
    //     description:"江戸紫のような近世の業は今紫(いまむらさき)、それに対して伝統的な昔ながらの紫を古代業と称した。この区別を必要としたのは今業ができたから、ということでこれも近世の色名ということになる。",
    //     choices:[
    //         [
    //             {
    //                 "name":"江戸紫",
    //                 "colorCode":"#734e95"
    //             },
    //             {
    //                 "name":"古代紫",
    //                 "colorCode":"#895687"
    //             },
    //             {
    //                 "name":"藤色",
    //                 "colorCode":"#bbb7da"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"茄子紺",
    //                 "colorCode":"#321b3a"
    //             },
    //             {
    //                 "name":"古代紫",
    //                 "colorCode":"#895687"
    //             },
    //             {
    //                 "name":"バイオレット",
    //                 "colorCode":"#714f9d"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"桔梗色",
    //                 "colorCode":"#5045a4"
    //             },
    //             {
    //                 "name":"古代紫",
    //                 "colorCode":"#895687"
    //             },
    //             {
    //                 "name":"江戸紫",
    //                 "colorCode":"#734e95"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['d22'],
    // },
    // {
    //     id:54,
    //     title:"ライラック",
    //     subTitle:"やわらかい紫",
    //     colorCode:"#D2BADA",
    //     description:"ライラックの花の色からとられた薄紫の色名。英語の色名として定着したのは1775年前後とされているが、この時代は紫や赤紫の化学染料がまだ発見されていない。単にライラックの花のような色という一般的な色名だったと考えられる。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ライラック",
    //                 "colorCode":"#D2BADA"
    //             },
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             },
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ライラック",
    //                 "colorCode":"#D2BADA"
    //             },
    //             {
    //                 "name":"藤色",
    //                 "colorCode":"#bbb7da"
    //             },
    //             {
    //                 "name":"鶸色",
    //                 "colorCode":"#c0c14c"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ライラック",
    //                 "colorCode":"#D2BADA"
    //             },
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             },
    //             {
    //                 "name": "利休鼠",
    //                 "colorCode": "#7b8174"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['lt22+'],
    // },
    // {
    //     id:55,
    //     title:"銀鼠",
    //     subTitle:"明るい灰色",
    //     colorCode:"#afafb0",
    //     description:"銀は「しろがね」と呼ばれ、色の形容としては白の美称でもあったので、白に近い灰色の色名になった。江戸時代の無彩色を代表する色名は灰色ではなく鼠色。昔からグレイがもっていた不吉なイメージを、と呼ぶことで粋な流行色に変えた。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             },
    //             {
    //                 "name":"利休鼠",
    //                 "colorCode":"#7b8174"
    //             },
    //             {
    //                 "name":"銀鼠",
    //                 "colorCode":"#afafb0"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"スレートグレイ",
    //                 "colorCode":"#636062"
    //             },
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             },
    //             {
    //                 "name":"銀鼠",
    //                 "colorCode":"#afafb0"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"利休鼠",
    //                 "colorCode":"#7b8174"
    //             },
    //             {
    //                 "name":"茶鼠",
    //                 "colorCode":"#a99e93"
    //             },
    //             {
    //                 "name":"銀鼠",
    //                 "colorCode":"#afafb0"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['Gy-6.5'],
    // },
    // {
    //     id:56,
    //     title:"茶鼠",
    //     subTitle:"黄赤みの灰色",
    //     colorCode:"#a99e93",
    //     description:"華美を禁じられた江戸時代に、四十八茶百鼠(しじゅうはっちゃひゃくねず)として大流行しまた、粋とされた色の一つ。当時は茶気鼠(ちゃけねず)といわれた。茶色みの灰色のことである色名では黄赤みの灰色となっている。",
    //     choices:[
    //         [
    //             {
    //                 "name":"銀鼠",
    //                 "colorCode":"#afafb0"
    //             },
    //             {
    //                 "name":"茶鼠",
    //                 "colorCode":"#a99e93"
    //             },
    //             {
    //                 "name":"利休鼠",
    //                 "colorCode":"#7b8174"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             },
    //             {
    //                 "name":"茶鼠",
    //                 "colorCode":"#a99e93"
    //             },
    //             {
    //                 "name":"朽葉色",
    //                 "colorCode":"#917347"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"蘇芳",
    //                 "colorCode":"#9e3d3e"
    //             },
    //             {
    //                 "name":"茶鼠",
    //                 "colorCode":"#a99e93"
    //             },
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['ltg6','g6'],
    // },
    // {
    //     id:57,
    //     title:"利休鼠",
    //     subTitle:"緑みの灰色",
    //     colorCode:"#7b8174",
    //     description:"利休色は千利休好みの色とされるが、利休が自ら名づけたわけではない。後世の利休のイメージから生まれた色名。抹茶の連想から、利休は緑みのある色の修飾語となるので、利休とつく色はすべて淡い緑みの色である。",
    //     choices:[
    //         [
    //             {
    //                 "name":"鶯色",
    //                 "colorCode":"#6f6f44"
    //             },
    //             {
    //                 "name":"銀鼠",
    //                 "colorCode":"#afafb0"
    //             },
    //             {
    //                 "name":"利休鼠",
    //                 "colorCode":"#7b8174"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"鶸色",
    //                 "colorCode":"#c0c14c"
    //             },
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             },
    //             {
    //                 "name":"利休鼠",
    //                 "colorCode":"#7b8174"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"茶鼠",
    //                 "colorCode":"#a99e93"
    //             },
    //             {
    //                 "name":"銀鼠",
    //                 "colorCode":"#afafb0"
    //             },
    //             {
    //                 "name":"利休鼠",
    //                 "colorCode":"#7b8174"
    //             }
    //         ]
    //     ],
    //     answer:3,
    //     toneNumber:['g12'],
    // },
    // {
    //     id:58,
    //     title:"煤竹色",
    //     subTitle:"赤みを帯びた黄みの暗い灰色",
    //     colorCode:"#6b5146",
    //     description:"煤けて赤黒くなった竹のような色を表す。昔は煤払いに竹を用いた。この煤払い用の竹が煤竹である。青竹や若竹より煤竹のほうが早く色名になったのは庶民生活の身近にあったからといえる。近世初期にすでにこの色名が登場している。",
    //     choices:[
    //         [
    //             {
    //                 "name":"朽葉色",
    //                 "colorCode":"#917347"
    //             },
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             },
    //             {
    //                 "name":"茶鼠",
    //                 "colorCode":"#a99e93"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"利休鼠",
    //                 "colorCode":"#7b8174"
    //             },
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             },
    //             {
    //                 "name":"スレートグレイ",
    //                 "colorCode":"#636062"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"銀鼠",
    //                 "colorCode":"#afafb0"
    //             },
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             },
    //             {
    //                 "name":"朽葉色",
    //                 "colorCode":"#917347"
    //             }
    //         ]
    //     ],
    //     answer:2,
    //     toneNumber:['dkg6'],
    // },
    // {
    //     id:59,
    //     title:"スレートグレイ",
    //     subTitle:"暗い灰色",
    //     colorCode:"#636062",
    //     description:"西洋諸国で屋根の瓦として使われる、粘板岩の薄板がスレート。この色名はグレイで、暗い灰色を表すが、スレートカラーにはほかにもブルー、ブラック、バイオレット、オリーブ、パープルなどいろんなバリエーションがある。",
    //     choices:[
    //         [
    //             {
    //                 "name":"スレートグレイ",
    //                 "colorCode":"#636062"
    //             },
    //             {
    //                 "name":"チャコールグレイ",
    //                 "colorCode":"#4e4449"
    //             },
    //             {
    //                 "name":"茶鼠",
    //                 "colorCode":"#a99e93"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"スレートグレイ",
    //                 "colorCode":"#636062"
    //             },
    //             {
    //                 "name":"銀鼠",
    //                 "colorCode":"#afafb0"
    //             },
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"スレートグレイ",
    //                 "colorCode":"#636062"
    //             },
    //             {
    //                 "name":"チャコールグレイ",
    //                 "colorCode":"#4e4449"
    //             },
    //             {
    //                 "name":"シルバーグレイ",
    //                 "colorCode":"#afafb0"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['Gy-3.5','g18'],
    // },
    // {
    //     id:60,
    //     title:"ランプブラック",
    //     subTitle:"黒",
    //     colorCode:"#24130d",
    //     description:"人類が発見した真っ黒な黒色絵の具の原料は、炭素そのもののような様(すす)である。ランプブラックはランプの油を燃焼させてできたからとられた黒。炭素の黒のカーボンブラックの同類である。昔からこれに勝る黒はなかなかほかには見つからなかった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ランプブラック",
    //                 "colorCode":"#24130d"
    //             },
    //             {
    //                 "name":"ミッドナイトブルー",
    //                 "colorCode":"#001d42"
    //             },
    //             {
    //                 "name":"スレートグレイ",
    //                 "colorCode":"#636062"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ランプブラック",
    //                 "colorCode":"#24130d"
    //             },
    //             {
    //                 "name":"チャコールグレイ",
    //                 "colorCode":"#4e4449"
    //             },
    //             {
    //                 "name":"ミッドナイトブルー",
    //                 "colorCode":"#001d42"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ランプブラック",
    //                 "colorCode":"#24130d"
    //             },
    //             {
    //                 "name":"煤竹色",
    //                 "colorCode":"#6b5146"
    //             },
    //             {
    //                 "name":"茄子紺",
    //                 "colorCode":"#321b3a"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['Bk'],
    // },
    // {
    //     id:61,
    //     title:"ニコチールレッド",
    //     subTitle:"あざやかなニコチール黄みの赤",
    //     colorCode:"#c82b55",
    //     description:"大航海時代、コロンブスの新大陸発見後、スペイン人のメキシコ征服によって当地のサボテンに寄生するコチニール介殻虫から採取される紅色染料がヨーロッパに伝えられ、それまで用いられていたケルメス介殻虫の赤にとって代わる代表的な真紅の染料になった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ニコチールレッド",
    //                 "colorCode":"#c82b55"
    //             },
    //             {
    //                 "name":"紅梅色",
    //                 "colorCode":"#f3a7a5"
    //             },
    //             {
    //                 "name":"カーマイン",
    //                 "colorCode":"#d7003a"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ニコチールレッド",
    //                 "colorCode":"#c82b55"
    //             },
    //             {
    //                 "name":"カーマイン",
    //                 "colorCode":"#d7003a"
    //             },
    //             {
    //                 "name":"ポピーレッド",
    //                 "colorCode":"#e9474d"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ニコチールレッド",
    //                 "colorCode":"#c82b55"
    //             },
    //             {
    //                 "name":"紅梅色",
    //                 "colorCode":"#f3a7a5"
    //             },
    //             {
    //                 "name":"蘇芳",
    //                 "colorCode":"#9e3d3e"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['v1'],
    // },
    // {
    //     id:62,
    //     title:"サックスブルー",
    //     subTitle:"くすんだ青",
    //     colorCode:"#3a8daa",
    //     description:"サックスはドイツ東邦の州であるザクセンの英語名。「サクソン人の膏」という意味。藍染めの名前として広く一般に用いられるようになり、主に繊維製品のための色名となった。",
    //     choices:[
    //         [
    //             {
    //                 "name":"サックスブルー",
    //                 "colorCode":"#3a8daa"
    //             },
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             },
    //             {
    //                 "name":"浅葱色",
    //                 "colorCode":"#00a1ae"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"サックスブルー",
    //                 "colorCode":"#3a8daa"
    //             },
    //             {
    //                 "name":"セルリアンブルー",
    //                 "colorCode":"#008db7"
    //             },
    //             {
    //                 "name":"ピーコックグリーン",
    //                 "colorCode":"#00a496"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"サックスブルー",
    //                 "colorCode":"#3a8daa"
    //             },
    //             {
    //                 "name":"新橋色",
    //                 "colorCode":"#64bcc7"
    //             },
    //             {
    //                 "name":"群青色",
    //                 "colorCode":"#4e67b0"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['sf18'],
    // },
    // {
    //     id:63,
    //     title:"ローズピンク",
    //     subTitle:"明るい紫みの赤",
    //     colorCode:"#f29c9f",
    //     description:"紫みを帯びたピンク色のバラの花にちなむ色名。ローズという色名は、花の名からとられた英語の色名として最古のものとされ、最初はレッドとピンクの両方を表していた。JISにはローズレッドという色名もある。",
    //     choices:[
    //         [
    //             {
    //                 "name":"ローズピンク",
    //                 "colorCode":"#f29c9f"
    //             },
    //             {
    //                 "name":"桜色",
    //                 "colorCode":"#fdeeef"
    //             },
    //             {
    //                 "name":"ウイスタリア",
    //                 "colorCode":"#8e8bc2"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ローズピンク",
    //                 "colorCode":"#f29c9f"
    //             },
    //             {
    //                 "name":"オールドローズ",
    //                 "colorCode":"#c58087"
    //             },
    //             {
    //                 "name":"鴇色",
    //                 "colorCode":"#f4b3c2"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"ローズピンク",
    //                 "colorCode":"#f29c9f"
    //             },
    //             {
    //                 "name":"ベビーピンク",
    //                 "colorCode":"#fadbda"
    //             },
    //             {
    //                 "name":"オールドローズ",
    //                 "colorCode":"#c58087"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['lt24+'],
    // },
    // {
    //     id:64,
    //     title:"バーガンディー",
    //     subTitle:"ごく暗い紫みの赤",
    //     colorCode:"#561620",
    //     description:"フランスのブルゴーニュ産の赤ワインのような色を表す色名。バーガンディーはブルゴーニュの英語名。色名の誕生は1915年と新しい。",
    //     choices:[
    //         [
    //             {
    //                 "name":"バーガンディー",
    //                 "colorCode":"#561620"
    //             },
    //             {
    //                 "name":"マルーン",
    //                 "colorCode":"#6a1816"
    //             },
    //             {
    //                 "name":"テラコッタ",
    //                 "colorCode":"#be6d55"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"バーガンディー",
    //                 "colorCode":"#561620"
    //             },
    //             {
    //                 "name":"蘇芳",
    //                 "colorCode":"#9e3d3e"
    //             },
    //             {
    //                 "name":"桧皮色",
    //                 "colorCode":"#895d4f"
    //             }
    //         ],
    //         [
    //             {
    //                 "name":"バーガンディー",
    //                 "colorCode":"#561620"
    //             },
    //             {
    //                 "name":"チョコレート",
    //                 "colorCode":"#612c16"
    //             },
    //             {
    //                 "name":"マルーン",
    //                 "colorCode":"#6a1816"
    //             }
    //         ]
    //     ],
    //     answer:1,
    //     toneNumber:['dkg24'],
    // },
];
