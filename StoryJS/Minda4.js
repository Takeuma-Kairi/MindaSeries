var Minda4 = `<flag:0>

<item:3>
[0]地図#<img src='Assist/Minda4_assist/reinas.png' style='width:330px;height:220px'/>
[1]管轄の地図#<img src='Assist/Minda4_assist/reinas2.png' style='width:330px;height:220px'/>
[2]リードミー#ファイル名：<b>Minda4</b><p><ul><li>その後：<hl>Minda5_1#load_data(Minda5_1)</hl></li></ul></p>1.重要な注意ーーーーーーーーーー<br>省略。注意事項は後述。<br><br>2.あらすじーーーーーーーーーーー<br>ミンダは黒傘に連れられてレーナスへ向かう。二鳥は木本山へ入る。ゴエイバラは白霧鉄山の暗躍に加担する。さくまはミンダの後を追う。<br><br>3.登場人物ーーーーーーーーーーー<br>・黒傘花陽<br>竜軸の儀式に関わる。大鹿山の五黒家の一員。<br><br>・ミンダ<br>漁師の娘。黒縄さまに攻撃され、その命ずるままに行動する。<br><br>・二鳥ふぉのくーく<br>アルボル研究所の一員。<br><br>・ゴエイバラ<br>三輪辛夷番の番頭。<br><br>・此鳥<br>白霧鉄山からの連絡員。<br><br>・池家さくま<br>二本老松番の者。ミンダの幼い頃からの友人。<br><br>・池家ひたみ<br>二本老松番の番頭。<br><br>4.注意事項ーーーーーーーーーーー<br>このページデータ内のストーリーはフィクションであり、登場する人物名、団体名等は実在のものではありません。<br>また、書かれている説明が、実際と異なる場合があります。<br>書かれている内容は作者の意見を代弁するものではなく、特定の意見を主張するものでもありません。<br><br>Minda4.txt　1版<br>2021.5.　竹馬浬
</item>

<mapimg:Minda4_assist>
<map:10>
[0]
n:光の足音と背後
^<r>黒傘#くろかさ</r> <r>花陽#はなはる</r>とミンダは黒縄町から出発し、レーナス市に上陸した。
^
^ミンダを大鹿に送り届けるためだ。
^
^
^船の上からミンダの親御さんが振り返りながら、こちらも名残惜しそうに手をふり返す。
^
^港には格式ばった服装をした、二面岩鏡番の歩く者が数人、迎えに来ている。
^
^
^番号：21_5.18.M4.傘ふぉゴさ
s:次へ#mov(1)


[1]
n:レーナス市
^レーナス県いちの中枢都市がこのレーナス市だ。
^
^街の規模も人口も、港の広さも、黒縄町に比べものにならないほどの都会っぷり。
^
^ミンダは初めて来る港に驚いているのか、面白いとおもっているのか、あたりをきょろきょろしている。
^
s:次へ#mov(2);geti(0);
m:1

[2]
n:レーナス港
^市内の馬蹄の教会まで移動し、詳しい事情説明と、ミンダへの問答を行うことにするそうだ。
^
^さて、現在地はレーナス港。
^近くには鮮魚店や缶詰工場などがあり、水産業がさかんなようだ。
^
^馬蹄の教会はずっと西の方向にある。
^西、東、南の方向に道が続いている。
s:西へ#mov(3)
s:東へ#mov(9)
s:南へ#mov(13)
m:1

[3]
n:東岸の河口
^レッドナリー川の河口部。
^
^幅広く、穏やかな水面のレッドナリー川は、大鹿山を源流としている。
^
^河岸には小さな河川港の桟橋が無数に見え、船がせわしなく行き来している。
^
^目的地は西岸の方にある。川を渡るための橋は、南方にある。
^
^南、東に道が続いている。
s:南へ#mov(4)
s:東へ#mov(2)
m:2

[4]
n:東岸
^すぐそばには、レッドナリー川が漫々と水をたたえている。
^大鹿山を源流としているこの大河は、付近の住民にとっても、水運業者にも無くてはならないものだろう。
^
^周囲には住居や運輸倉庫が並んでいる。
^
^目的地は西岸の方にある。川を渡るための橋は、南方にある。
^
^南、東、北に道が続いている。
s:南へ#mov(5)
s:東へ#mov(13)
s:北へ#mov(3)
m:3

[5]
n:東岸の橋
^市内を流れるレッドナリー川にはいくつか大きな橋がかかっている。
^
^埃っぽい橋の下を船が行き交い、目を上げれば遠くに工場の煙がたなびいている。
^
^目的地は西岸にある。この橋を渡ろう。
^
^南には住宅地があり、
^東、北に道が続いている。
s:橋を西へ#mov(6)
s:東へ#mov(12)
s:北へ#mov(4)
m:4

[6]
n:西岸の橋
^レッドナリー川の西岸。
^東岸へ続く橋がある。
^
^食料や衣服、薬品など、さまざまな会社の倉庫が軒を連ねている。
^また、ここは市場の一角のようで、家具や、暖房用の炭燃料、大陸南部の珍味、魔法器具を売る店がひしめきあっている。
^
^北、西、南へ続く道がある。
s:北へ#mov(7)
s:橋を東へ#mov(5)
s:西へ#mov(16)
s:南へ#mov(14)
m:5

[7]
n:西岸の河口
^東を見れば河川港が並び、小さな漁船が並んで浮かんでいる。
^
^北を見れば砂浜が広がっており、静かな波の音が聞こえる。
^
^西と南に道が続いている。
^西に馬蹄の教会がある。
s:西へ#mov(8)
s:南へ#mov(6)
m:6


[8]
n:馬蹄の教会
^北には砂浜、南には商店街が通っている。
^
^西には、街の中にぽつんと残った緑地があり、この奥に、馬蹄の教会がある。
^
^南、東に道が続いている。
s:馬蹄の教会へ#mov(20)
s:南へ#mov(16)
s:東へ#mov(7)
m:7

[9]
n:北岸
^近くには造船工場がある。
^東には海浜公園がある。
^
^西には、レーナス港がある。
^
^西、南に道が続いている。
s:西へ#mov(2)
s:南へ#mov(10)
m:8

[10]
n:街の中心へ
^整備された図書館や体育館、海浜公園とともに、古い釣具店が細々と店を開けている。
^
^東には延々と街路が続いている。
^
^西、南、北に道が続いている。
s:西へ#mov(13)
s:南へ#mov(11)
s:北へ#mov(9)
m:9

[11]
n:管轄署前
^図書館や体育館、学校がある。
^そして、レーナス市の管轄署もある。
^
^東には街路が、南には、レーナス県管轄の官公区があるそうだ。
^
^西、北へ道が続いている。
s:管轄署へ#mov(17)
s:西へ#mov(12)
s:北へ#mov(10)
m:10

[17]
n:管轄署へ
^管轄署
^管轄署は大きく、何人もの署員が事務作業をしている。
^
^掲示には地図がはりつけてある。
s:地図を書き写す#mov(18);geti(1);
s:道案内してもらう#mov(19)
s:退出する#mov(11)
m:11

[12]
n:街中の住宅
^南には住宅地、東には管轄署や学校、体育館などがある。
^
^西には橋が見える。
^
^西、東、北に道が続いている。
s:西へ#mov(5)
s:東へ#mov(11)
s:北へ#mov(13)
m:12

[13]
n:十字路
^料理店、宝石店、銀行など、色々な店が軒を連ねている。
^
^宝石店には、金や銀の、きらびやかな装飾品が飾られているが、わざとらしすぎて、そこまで美しいようには見えない。
^
^西、南、東、北に道が続いている。
s:西へ#mov(4)
s:南へ#mov(12)
s:東へ#mov(10)
s:北へ#mov(2)
m:13

[14]
n:水路際の家並み
^レッドナリー川には、いくつか水路が街に引かれていて、水路に沿って住居が連なっている。
^
^ジメっぽいが、川のそばで暮らすのも、悪くないのかもしれない。
^
^北、西に道が続いている。
s:北へ#mov(6)
s:西へ#mov(15)
m:14

[15]
n:住宅と商店街
^水路に沿って住居が連なっている。
^商店街には駄菓子屋や文具屋がある。
^
^南には住宅地がある。
^
^東、北に道が続いている。
s:東へ#mov(14)
s:北へ#mov(16)
m:15

[16]
n:商店街と市場
^肉や野菜の市場、大衆食堂、金物屋が軒を連ねている。
^
^いかにも古そうな店もあるが、商店街は活気に溢れて賑やかだ。
^
^北、南、東に道が続いている。
^馬蹄の教会は北にある。
s:北へ#mov(8)
s:南へ#mov(15)
s:東へ#mov(6)
m:16

[18]
n:管轄署
^掲示を書き写した。
s:戻る#mov(17)
m:11

[19]
n:管轄署
^道案内を頼むと、管轄署員の方は快く引き受けてくれた。
^
^市内を流れるレッドナリー川を渡り、何回か道を曲がると、無事、馬蹄の教会の前に到着した。
s:次へ#mov(8)

[20]
n:馬蹄の教会
^木々の間の、静かな区画。
^小さく、飾り気がない木造の教会だ。
^
^教会の中には、二面岩鏡番の番頭、<r>黒頭#くろがしら</r>が待っていた。
^
^この後、周辺地域の情勢と、ミンダの状態を慎重に判断しつつ、大鹿山に向かうこととなる。しばらくは馬蹄の教徒たちが護送の役目を担う。
^
^大鹿山への道は、いよいよミンダに開かれた。
s:一方その頃…#mov(21);losi(0);losi(1)
m:17

[21]
n:<r>木本#きもと</r>山
^一方その頃、アルボル研究所の<r>二鳥#にとり</r> ふぉのくーくは、木本山の細い山道を、息を切らして登っていた。
^
^木本山は、大鹿山の東にある小高い岩山で、大陸管轄の軍事拠点でもある。
^
^大鹿山系には険しい山々が連なっており、その中で、歩く者たちの文化も栄えてきたという。
^
^そして、大陸管轄に敵対的な、根の教会の宗教圏も有る。
s:次へ#mov(22)
m:18m2

[22]
n:木本山
^大鹿山ににらみを利かせ、即時対応するために、距離が近く、身を隠すのも容易なこの山に軍事基地を築いたということだ。
^
^何気ない岩山に見えるが、拠点は幾重にも塀で囲われ、木々の緑に砲台が隠れている。
^
^山をくりぬいて作られた洞穴の中に、居住施設や武器倉庫がある。
^
^すべての施設が地形の影に隠れ、自然の景色に溶け込んでいるため、それらが突然視界に入る度に、すこしギョッとさせられる。
s:次へ#mov(23)
m:18m2

[23]
n:木本山
^人々は慌ただしく動いている。
^
^管轄の軍人や交渉官たちは、地図を見つつ策略をねっている。
^
^大鉱機の部隊は、火薬の安全と、部隊の安否を確認しながら、業務の振り分け作業を行っている。
^
^建物のかげに、妙にみすぼらしい格好をした者たちが、集まって武器の調整をしている。歩く者の戦士だろうか？
s:次へ#mov(24)
m:18m2

[24]
n:木本山
^さて、自分は、アルボル研究所員として、ここで観測に分析、設備の保守をしなければいけない。
^活発なひとだから、猪目さんも来ると思ったんだが、あの人はあの人で煙石でやることがあるそうだ。
^
^身支度を整え、精神を落ち着ける。
^技術をみとめられてここに呼ばれたということは、最善を尽くしてその期待に応えなければ。
^細かな注意を抜かり無く。少しの異常にも敏感であれ。失敗は許されない…
^
^二鳥は静かに自分を鼓舞する。
s:一方その頃…#mov(25)
m:18m2

[25]
n:三輪辛夷番
^一方、煙石半島の付け根に位置する歩く者の番、<r>三輪辛夷#さんりんこぶし</r>番では、いくつもの人影がうろついていた。
^番頭のゴエイバラは、白霧鉄山の連絡員、<r>此鳥#これとり</r>と情報を共有していた。
^
^「此鳥、進展はあったか。」
^
^「黒縄が大鹿に向けて動き出した。管轄は根の教会への警戒を強めている。」
^
^「…煙石では将軍が防御態勢を指示し、緑樹の教徒の戦意が高揚している。この雰囲気が、大陸全土に広がらなければよいが。」
s:次へ#mov(26)
m:19m2

[26]
n:三輪辛夷番
^「<r>熟#こなれ</r>様が、ゴエイバラの立ち位置を知りたいと言っていた。"黒縄さま"に対する思いは、崇敬か憎悪か。」
^
^「宗教や信条について特に悪いことを言うつもりは無いが、心の中では、憎悪だ…あれに私の故郷は滅ぼされたからな。」
^
^「なるほど。熟様もその考えは支持してくれよう。時に、今、白霧鉄山のものを多く匿っているが、番の護衛は万全か。」
^
^「ああ。招かれざる厄介事や、管轄の官吏に怪しまれないよう、全ての来訪者を監視し、疑わしき者は排除している。」
s:次へ#mov(27)
m:19m2

[27]
n:三輪辛夷番
^すると小屋の物陰から不気味な声がした。
^
^「おいおい、とんだザル警備じゃないか。この程度でごまかせると思っているのかね。」
^
^不気味な笑顔とともに、<r>利目佐#ききめすけ</r>が暗がりから姿を現した。
^
^ゴエイバラは笑って出迎えた。
^「これはこれは、恐縮です。しかし、あなたさま、強大な暗黒の魔導師の前には、いかなる警備も意味をなしますまい。」
^
^利目佐はひきつった笑顔で答えた。
s:次へ#mov(28)
m:19m2

[28]
n:三輪辛夷番
^「ともかく、しばらく厄介になるので、よろしくお願いいたします、番頭。」
^
^「承知致しました。わざわざ参上して下さり、たいへん心強く感じております…」
^
^熟も、すさまじい者たちを派遣するものだとゴエイバラは思った。
^
^黒縄の光を制圧するため、暗黒の反逆者たちは、もうすぐそこまで来ている。
^暗黒は絶えず、絶対の光に立ち向かい続けるだろう。
^この争いは、勝とうが負けようが、その力を世界に知らしめることになるのだ。
s:一方その頃…#mov(29)
m:19m2

[29]
n:二本老松番
^一方、黒縄町の二本老松番にて、池家さくまは、不思議な喪失感に襲われていた。
^
^さくまの幼いころからの友人、ミンダは、昔から好奇心旺盛だった。
^
^新しい知識を手に入れるとミンダは、とても喜びながら、嬉しそうにそのことを解説したり、議論をしたものだ。
^
^さくまは、そんなミンダが好きで、頼まれてはこっそりと、二本老松番で資料を探して集めてきたものだ。
s:次へ#mov(30)
m:20m2

[30]
n:二本老松番
^だがそれが結果として、ミンダの心をひどく変えてしまった。
^
^はじめの頃の無邪気な好奇心は、いつからか、熱狂的な知識欲に変わってしまった。
^
^ミンダの話しぶりも、かなり興奮を帯びたものになっていった。
^
^さくまは違和感を覚えたが、ミンダの熱意に押され、さらに詳しい資料を探すようになっていった。
s:次へ#mov(31)
m:20m2

[31]
n:二本老松番
^ミンダは、知識欲だけでなく、あらゆる欲望で黒縄さまや大鹿さまを求めていた。
^
^そして今、とどまることを知らない欲望に身を任せ、ミンダは旅立ってしまった。
^
^さくまの知るミンダはすでに死んだ。
^さくまが、よかれと思ってやったことで。
^
^だが時折ミンダが見せる笑顔は、さくまに、「これでいい。」と確信させた。
^
^それでも一体、これまで何のために、ミンダの手助けをやってきたんだろう。
s:次へ#mov(32)
m:20m2

[32]
n:二本老松番
^「どうした、さくま。元気ないな。」
^
^さくまの顔に出た憂いを見て、父のひたみが話しかけた。
^
^「あ、父さん…。何でも無いですよ。」
^
^「何でも無い、ねえ。…もしかして、ミンダのことで悩んでいるのかい。」
^
^やっぱり、悩みというのは顔に出てしまうようだ。
s:次へ#mov(33)
m:20m2

[33]
n:二本老松番
^さくまは、今自分が憂いでいることを正直に白状した。
^
^ひたみは、深く頷きながら、さくまの言うことに耳を傾けた。
^
^「そうか。自分を責めているのか。」
^
^「いまさらどうなるとも思えない。でも、これでよかったとも思えないんだ。」
^
^「それでいいさ。自分の中で終わらない問いを続けながら、呪いを掛けながら、生きていく他に道はない。」
s:次へ#mov(34)
m:20m2

[34]
n:二本老松番
^ひたみに心の不安を打ち明け、さくまは少し気が楽になった。
^
^父もそうやって生きてきたのだと知って
^勇気づけられるとともに、しかし、解決方法も何もないのだ、と、つきつけられた気がした。
^
^しょうがないことなんだ。
^
^もしも過去に戻れたとしたら自分は、ミンダの頼みを強く断れるだろうか。
^きっとできない。
^これは、もう、納得するしかないことなんだ。
s:次へ#mov(35)
m:20m2

[35]
n:二本老松番
^ひたみは、しばらくさくまの悲しそうな笑顔を見つめた後、唐突に明るく話しはじめた。
^
^「そういえば、さっき棚を掃除していたら、こんなものが見つかってね。」
^
^ひたみが差し出したものは、
^
^煙石市とレーナス市を結ぶ連絡船の乗船券だ。一枚だけの片道切符。
^
^さくまは驚いたようにひたみを見た。
s:次へ#mov(36)
m:20m2

[36]
n:二本老松番
^「黒傘が言うには、ミンダが大鹿山に入るまでには、まだ時間がかかるらしいぞ。」
^
^さくまの胸はざわめいた。
^
^「それは…つまりそれって…。」
^
^ひたみは、さくまの問いかけを無視して
^畳み掛けた。
^
^「番における宗教圏は暗記しているだろう。どの経路を通るか適切に選び、移動するんだ。知っているだろうが三輪辛夷番の動向が不明だから、そこを通らずにレーナス市に直接向かえ。」
s:次へ#mov(37)
m:20m2

[37]
n:おわり
^さくまは立ち上がった。
^
^「しばらくは老松番に戻ってくるなよ。
^一大事が起きたなんて聞いても、絶対に、情勢が安定するまでは帰ってくるな。」
^
^ひたみは、淡々とさくまに指示を出した。
^
^慌ただしく老松番から遠ざかっていく足音を聞きながら、
^
^ひたみは空を見上げる。
^
^
^おわり
m:20m2
</map>
<end>`;

