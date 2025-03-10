var Minda2 = `<flag:5>

<item:6>
[0]赤い魚#からだの中から赤いガラス質の鉱石が突き破っている。身はほとんどなく、かわりに鉱石が体の中にぎっしり結晶している。
[1]ノート：かんたんな地図#<img src='Assist/minda2_assist/enseki1.png' style='width:330px;height:220px'/>
[2]白い花#春のはじめごろに咲く、大きく白い花。とても甘い香りがする。
[3]香る水#花の香りを抽出した、甘い香りがする水。霧吹きに入っている。
[4]ノート：煙石市の案内#<r>煙石#えんせき</r>市は煙石半島の先端に位置する港湾都市です。<br>周囲を囲む石壁は<r>律山国#りつざんこく</r>統治時代に建造されたもので、煙石市は防衛の拠点として機能しました。<br>市街地の南部にある煙石山には、現在もその名残である「煙石自警団」が組織されています。
[5]ノート：煙石市の地図#<img src='Assist/minda2_assist/enseki2.png' style='width:330px;height:220px'/>
[6]リードミー#ファイル名： <b>Minda2</b><p><ul><li>きっかけ：<hl>Minda#load_data(Minda)</hl></li><li>すいほうん：<hl>Suihoun#load_data(Suihoun)</hl></li><li>ウァルバ：<hl>Fumi#load_data(Fumi)</hl></li><li>池家さくま：<hl>Sakuma#load_data(Sakuma)</hl></li><li>その後：<hl>Minda3#load_data(Minda3)</hl></li></ul></p>＝＝＝　1.重要な注意　＝＝＝<br>省略。注意事項は後述。<br><br>＝＝＝　2.あらすじ　＝＝＝<br>ミンダは赤い鉱石が体を食い破っている魚を見つける。ひたみは、さくまと共に、煙石市の猪目医院に向かわせる。<br><br>＝＝＝　3.登場人物　＝＝＝<br>・ミンダ<br>好奇心旺盛で活発な少女。結晶に押しつぶされる夢を何度も見ている。<br><br>・池家さくま<br>ミンダの友達。<br><br>・池家ひたみ<br>二本老松番の番頭。さくまの父。<br><br>・ウァルバ<br>香料の奥深さを伝えるため、各地を回る香料師<br><br>・すいほうん<br>四枝白樫番にいる地質学者<br><br>・猪目遥音<br>煙石市の町医者。<br><br>＝＝＝　4.注意事項　＝＝＝<br>このページデータ内のストーリーはフィクションであり、登場する人物名、団体名等は実在のものではありません。<br>また、書かれている説明が、実際と異なる場合があります。<br>書かれている内容は作者の意見を代弁するものではなく、特定の意見を主張するものでもありません。<br><br>1版2版3版<br>2021.4.　竹馬浬
</item>

<mapimg:minda2_assist>
<map:65>
[0]
n:ミンダと赤い魚
e:小さな港町、黒縄町にミンダという少女が住んでいる。ミンダは学校を修了し、今は親の漁の手伝いをしている。<br><br>ある日、ひとりで小舟をくりだして釣りをしていると、不思議な魚を釣り上げた。<br>その魚のからだのところどころに、鮮やかな、赤いガラス質のきらめきがある。<br><br>奇妙に思ってさばいてみると、なんとその身や内臓はほとんどなく、かわりにぎっしりと赤い鉱石のかたまりが詰め込まれ、ところどころ体を突き破っていたのだった。<br>20_10.3.L.M3.み
s:次へ#geti(0);mov(1)

[1]
n:黒縄港
e:ミンダは港に戻り、釣り上げた不思議な魚を両親に見せたが、こんな魚は見たことがないという。<br>どうしたものかと頭を悩ませていると、そこに友達のさくま君がやってきた。<br>さくま君は山の管理の仕事についているらしい。たまにうちに野菜を持ってきてくれて、今日もそれでやってきたそうだ。<br><br>ミンダが事の次第を話すと、<br>「もしかすると、<r>老松番#おいまつばん</r>に知っている人がいるかも」<br>と言った。老松番とは、さくま君が働いているところだ。
s:老松番に向かう#mov(2)
m:1

[2]
n:魚通り
e:黒縄町の多くの漁師の人たちが、この通り沿いに住んでいる。<br><br>知り合いの漁師、バルルさんの魚屋は閉まっていた。冬の終わりのこの時期は、はるばる大陸の東の方まで漁に行っているらしい。<br>今年も大物をたくさん釣ってくるのだろう。
s:老松番に向かう#mov(3)
m:2

[3]
n:中央広場
e:十字路になっている小さな広場。<br>まわりには<r>管轄署#かんかつしょ</r>や学校が建てられていて、魚通り、<r>堂前#どうまえ</r>通りが通じている。<br>町を囲む石壁と門があり、門の向こう側には山につながる県道がある。
s:老松番に向かう#mov(4)
s:堂前通りに折れる#mov(5)
m:3

[4]
n:県道ー黒縄線
e:隣町、<r>煙石#えんせき</r>市へと続く、広い山道。<br><br>途中の分かれ道を折れてちょっと進むと、老松番の広場に辿りつく。
s:老松番へ向かう#if(iflg(0)){mov(22);}else{mov(9)}
m:4

[5]
n:堂前通り
e:通りの両側に民家が立ち並ぶ、広い道。<br><br>さくま君は昔は堂前通りに住んでいたけれど、いまは老松番に引っ越している。<br><br>通りの突き当りには、小さなお堂がある。
s:お堂を見る#if(iflg(0)){if(iflg(1)){mov(6);}else{geti(2);onflg(1);mov(7);}}else{mov(8);}
m:5

[6]
n:お堂
e:古い小屋に、「黒縄さま」と呼ばれている、真っ黒な像が立っている。<br>子供の頃から見ているけれど、相変わらず不気味だ。<br><br>お堂の裏にはヤブがあって、そこにたくさんの黄色い花が咲いている。<br><br>この甘い匂いが春を感じさせる。
s:中央広場へ#mov(3)
m:6

[7]
n:お堂
e:古い小屋に、「黒縄さま」と呼ばれている、真っ黒な像が立っている。<br>子供の頃から見ているけれど、相変わらず不気味だ。<br><br>ふと、強く、甘い香りが漂っていることに気づいた。お堂の裏にはヤブがあって、そこにたくさんの黄色い花が咲いてる。<br><br>春の風物詩だ。とてもいい香りなので、いくつか摘んで袋に入れた。
s:中央広場へ#mov(3)
m:6

[8]
n:お堂
e:古い小屋に、「黒縄さま」と呼ばれている、真っ黒な像が立っている。<br>子供の頃から見ているけれど、相変わらず不気味だ。<br><br>ふと、ほんのり甘い香りが漂っていることに気づいた。お堂の裏にはヤブがあって、そこにたくさんつぼみがついている。<br><br>この花は春の風物詩だ。つぼみはどれも大きく、あとちょっとで咲くだろう。
s:中央広場へ#if(iflg(0)){mov(22);}else{mov(3)}
m:6

[9]
n:<r>二本老松番#にほんおいまつばん</r>
e:「二本老松番」とかかれた門をくぐると、木の柵で囲われた広場に出た。何棟か木製の小屋が立っている。<br><br>はじの方にはテントが建っていて、ガラス管やビンが周りにおいてある。<br>広場の奥の木陰に、たくさんの丸太が積み上がっている。<br>さくま君のお父さんは、広場を囲う柵に木の板を打ち付けている。
s:さくま君のお父さんに話しかける#mov(15)
s:テントを見る#if(iflg(2)){mov(12);}else if(iflg(1)){onflg(2);geti(3);losi(2);mov(11);}else{mov(10);}
s:丸太を見る#if(iflg(0)){mov(13);}else{mov(14)}
m:7

[10]
n:さすらいの香料師
e:テントの中では、見知らぬ人が本を読んでいたが、ミンダたちに気づくと挨拶をした。<br><br>「僕はウァルバ。各地を回って、香料の奥深さを伝えているんだ。」<br><br>表に干してあるのは、香り成分を抽出するための器具らしい。<br><br>「もし花とか果物とかを持ってきてくれたら、それで『香り』を作ってプレゼントするよ。一部は僕がもらうけどね。」
s:テントを出る#if(iflg(0)){mov(22);}else{mov(9)}
m:7

[11]
n:さすらいの香料師
e:テントの中では、香料師のウァルバさんという人が本を読んでいたが、ミンダが摘んできた花の香りにすぐ気づいた。<br>「よっしゃ、ちょっと待っててな」<br>と言って、器具を組み、花を煮始めた。<br>しばらくしてウァルバさんは湯を小瓶にとり、香りをかいだり、他の香料をポタポタ加えたりした。<br><br>「よし、ちょっとブレンドしてみたよ。」<br>確かに、すっきりとした優しい甘さで、とてもいい香りだ。<br>「香りが弱いから香水には使えないだろうけれど、小さな霧吹きもおまけにつけよう。楽しんでね！」
s:テントを出る#mov(22)
m:7

[12]
n:さすらいの香料師
e:テントの中にはウァルバさんがいる。<br>「ほんのちょっぴりの配合の変化で、無限に表情を変える。香りの世界は奥が深いんだ。気に入ってくれたらうれしいな。」
s:テントを出る#mov(22)
m:7

[13]
n:丸太置き場
e:丸太がごろごろと積み上がっている。あたりには誰もいない。
s:戻る#mov(22)
m:7

[14]
n:丸太置き場
e:丸太がごろごろと積み上がっている。その上に黒傘さんが座っている。<br><br>どうやら、さくま君のお父さんと協力して、この広場をもっと広く整備するため、周辺の木を少しずつ伐り倒しているそうだ。
s:戻る#mov(9)
m:7

[15]
n:柵
e:さくま君のお父さんは、金槌を振るって、柵に木を打ち付けている。<br><br>「最近は色んな人達がここに来るようになったから、いろいろと設備を整えないといけないんだ。」<br><br>ミンダたちが事の次第を話すと、小屋の中に招き入れた。
s:次へ#losi(0);mov(16)
m:7

[16]
n:赤い魚の正体
e:「…これはびっくりだな」<br>赤い鉱石を観察しながら、さくま君のお父さんは、驚きとも戸惑いとも分からない顔をして言った。<br><br>「これは…おそらく、生き物の体に広がる鉱物だ。血や肉をガラス質に結晶させながら、成長していく…めったにお目にかかれない、珍しい鉱物だ。<br>…ミンダ。これで体を切ったり、舐めたりしてないね？」<br><br>まさか、これが体の中に入ったら…
s:次へ#mov(17)
m:7

[17]
n:赤い魚の正体
e:「安心してくれ。この鉱物は、人間じゃない生き物に生じたものを飲み込んでも、人間の体内では成長しないという話だから。」<br><br>もしそうなったらと思うと恐ろしい。体がだんだん鉱物に侵食されていき、やがて皮膚を食い破って、最後には人の形をした石の塊に…なんて想像するだけでゾワッとする。<br><br>「だけど、この鉱物には弱い毒性があるんだ。あまり持ってていいものじゃない。」<br><br>なんてものを釣り上げてしまったんだ、とミンダは後悔した。
s:次へ#mov(18)
m:7

[18]
n:赤い魚の正体
e:「一応病院で見てもらったほうがいいと思う。それと、この鉱物は、研究者の人に見てもらうべきだ。」<br><br>勢いよく展開していく衝撃的な話に、ミンダは頭痛がしてきた。<br><br>「ミンダ、大丈夫かい。顔色が悪いぞ。まあ、こんな話をされたら気分悪くなるよな…。<br>…実は、こういうことに詳しい医者が隣町にいるんだ。診てもらうなら、案内するが…」
s:不安なので受診する#mov(23)
s:一度帰って落ち着きたい#onflg(0);mov(19)
m:7

[19]
n:ミンダの家
e:ミンダは不安なまま家に戻って、そのまま眠りについた。<br><br>その夜、奇妙な夢を見た。<br>ミンダは洞窟の中に入っていて、そこは足元も天井も壁も、きらきらと輝く大きな水晶で埋め尽くされていた。しばらく見とれていると、壁がだんだん近づいてくることに気づいた。<br><br>脱出しようと歩き回ったが、ついには四方八方を水晶の輝きで塞がれてしまった。卵の中のヒナってこんな感じなのかな。だなんて考えるほどに不思議と冷静だったが、水晶はどんどん近づいてくる。<br>皮膚を突き破り、頭蓋に穴を開け…
s:次へ#mov(20)
m:8

[20]
n:ミンダの家
e:そして目が覚めた。<br>なんとも奇妙な夢だ。過去にも何回か同じような夢を見たことがあるけれど、一番恐怖を覚えた。おそらくあの魚のせいで、変な暗示がかかってしまったんだろう。<br><br>やっぱり、さくま君のお父さんの言うとおり、自分のからだを診てもらおうと思った。今後もあの魚に翻弄されるよりは。<br><br>親も心配してくれたが、隣町には何度も行ったことがあるし、これ以上変な心配も掛けたくなかったので、ついてこなくていいよと断った。
s:家を出る#mov(21)
m:8

[21]
n:黒縄港
e:静かな波が寄せる、小さな港。<br>桟橋にはいくつかの小舟がつけられている。<br>海風が爽やかだ。
s:先へ#mov(2)
m:1

[22]
n:<r>二本老松番#にほんおいまつばん</r>
e:「二本老松番」とかかれた門をくぐると、木の柵で囲われた広場に出た。何棟か木製の小屋が立っている。<br>はじの方にはテントが建っていて、ガラス管やビンが周りにおいてある。<br>広場の奥の木陰に、たくさんの丸太が積み上がっている。<br>さくま君と、さくま君のお父さんは身軽そうな旅装で、小屋の前に腰掛けている。
s:さくま君のお父さんに話しかける#mov(23)
s:テントを見る#if(iflg(2)){mov(12);}else if(iflg(1)){onflg(2);geti(3);losi(2);mov(11);}else{mov(10);}
s:丸太を見る#if(iflg(0)){mov(13);}else{mov(14)}
m:7

[23]
n:県道ー黒縄線
e:ミンダとさくま君、それとさくま君のお父さんは老松番を出て、県道に出た。<br>隣町へと続く、広い山道だ。<br><br>医者にかかるお金は、大した額じゃないからと、さくま君のお父さんが出してくれるそうだ、でもここまで助けてくれるというのは申し訳ない。そう言うと<br><br>「なに、気にすることじゃない。昔から、もちつもたれつの関係だったじゃないか…。<br>…でもね。あの魚を釣り上げたことは、やたらに言いふらすことはしないって約束してくれないか。」
s:次へ#mov(24)

[24]
n:県道ー黒縄線
e:「あの鉱物はすごく希少なんだ。そして、いろいろな人が、あの鉱物に対して異常な情熱を捧げている。うっかりにでもあれのことを喋ったら…<br>君だけでなく、君に近しい人たちや、黒縄町全体を巻き込んでしまうかもしれない。<br>不安になるだろうと思って言わなかったんだが、それほど危険なものなんだ。分かってくれるね？」<br><br>
s:先へ#mov(25)

[25]
n:大池
e:県道を進んでいくと、大きな池のほとりに差し掛かった。<br>ひんやりとした風が、水面にさざなみをたてている。<br><br>さらに先に進むと、森が開けて大きな岩山が見えてきた。<br>「あの山…<r>煙石山#えんせきやま</r>には自分の仕事仲間がいるんだ。今日はあそこにも用事がある。」<br>とさくま君のお父さんが言った。
s:先へ#if(iflg(0)){mov(27);}else{mov(26);}

[26]
n:<r>煙石#えんせき</r>市の門
e:さらに県道を進むと、高い石壁と門が見えてきた。煙石市は、石壁に囲まれた港町だ。<br>門は開いていたので、ミンダたちはそのまま通り抜けた。
s:次へ#geti(1);mov(28)
m:9m2

[27]
n:<r>煙石#えんせき</r>市の門
e:さらに県道を進むと、高い石壁と門が見えてきた。煙石市は、石壁に囲まれた港町だ。<br>門は閉じられ、左右に番人がいる。<br>さくま君のお父さんは番人に話しかけた。「老松の<r>番頭#ばんとう</r>の池家です。<r>白樫#しらかし</r>からの報告を聞き、参りました。」<br>「わかりました。白樺の者が待っております、お通りください。そちらの方々は？」<br>「自分の連れです。…よし。さくま、ミンダ。行こう。」<br><br>ミンダたちは門を通り抜けた。
s:次へ#geti(1);mov(28)
m:9m2

[28]
n:市街地の入り口
e:「じゃあお医者のところに案内しよう。地図を渡すよ、かんたんな地図だけど。<br><br>今いるのが、『黒縄線』の場所だな。煙石町は、中心から主要な通りが5本伸びていて、一から五番までの数字が振られている。<br><br>いまから行くのが、<b>右側の赤丸</b>の部分。だけど、自分は用事で、煙石山に出向かなければならない。診断が終わったら、<b>左の赤丸</b>の部分に来てくれ。<br>さくまが道をよく知ってるから、迷うことはないだろう。」<br><br>とさくま君のお父さんが説明した。
s:次へ#mov(29)
m:9m2

[29]
n:<r>猪目#いのめ</r>内科医院
e:いくつか角を曲がると、小さなレンガ造りの建物に到着した。「猪目内科医院」という看板が立っている。明るく清潔な内装だ。<br>掲示には先生の肩書が書いてある。<br>ミンダが問診票を書いている間に、さくま君のお父さんは医院の人としばらく話をして、<br>「じゃあ、ふたりとも、山に行っているからね。」と言い残し医院の外に出ていった。<br>しばらくしてミンダは診察室に呼ばれた。
s:掲示を読む#mov(30)
s:次へ#mov(31)
m:10m2

[30]
n:<r>猪目#いのめ</r>内科医院
e:院長：<r>猪目#イノメ</r> <r>遥音#ハルネ</r><br>救急医・内科医<br><br>大陸内科学会認定医<br>大陸血液学会認定医<br>大陸管轄認定医<br>生物無機化学会員
s:次へ#mov(29)
m:10m2

[31]
n:<r>猪目#いのめ</r>内科医院
e:猪目先生は普通の診療と同じように、問診をしたり、心臓の音を聞いたりしてから、ミンダの血を採った。<br>「それにしても運がいいねぇ。『<r>竜軸#りゅうじく</r>の血』に遭遇するなんて…あれは、そうとう探しても見つからないんだよねぇ。骨とか胆石とかとはわけが違って、あいつは変わり種なのよ。」
s:次へ#mov(32)
m:10m2

[32]
n:<r>猪目#いのめ</r>内科医院
e:「毒がどうとかって言われたんですが…」<br>とミンダが尋ねると、<br><br>「まあまあ、池家さんは良く知ってらっしゃる…まあ、老松の番頭さんだから当然か。そうね。あの鉱物には…神経毒があるんだよ。<br>しだいに、いろいろなことを考えられなくなっていくんだ。何かに取り憑かれたように、同じことをし続ける…。それが何かは個人によるけどさ。」
s:次へ#mov(33)
m:10m2

[33]
n:<r>猪目#いのめ</r>内科医院
e:猪目先生はしばらく奥のほうで器具をガチャガチャやっていた。<br><br>「一応、検査の結果が出たんだけけれど、ミンダさんは問題ありません。ただ、簡易的な診断法なので、正確性に欠けています。正確な検査には時間がかかるので、結果が出たら郵便で送りますよ。」<br><br>ひとまず安心だけど、ちょっぴりの不安を抱いて病院を出た。
s:先へ#mov(34)
m:10m2

[34]
n:県道ー煙石線入り口
e:海側と山側、まちの中心部へ続く「二番通り」、そして町の外に続く、県道ー煙石線が接続している。<br><br>海側の通りは住宅地で、猪目内科医院もそこにある。山側の道に行けば、煙石山にたどり着くだろう。<br><br>近くに市場があり、食べ物を売る露店が所狭しと並んでいる。
s:山側へ#mov(35)
s:二番通りへ#mov(36)
s:海側へ#mov(37)
m:11m2

[35]
n:登山口
e:正面に、煙石山の上へとつづく広い石段がある。この上が目的地だろう。<br><br>左は、私達が来た黒縄町の方向。右には市場がある。<br>また、まちの中心部に向かう「一番通り」も続いている。
s:山を登る#mov(51)
s:左へ#mov(46)
s:右へ#mov(34)
s:一番通りへ#mov(42)
m:12m2

[36]
n:二番通り
e:二番通りは市場と住宅地の間を通っている。<br>二番通りは山側、まちの中心部へ繋がっていて、隣の通りへと続く路地裏も通っている。<br><br>市場では服や靴などが売られていて、にぎやかだ。
s:山側へ#mov(34)
s:まちの中心へ#mov(39)
s:路地裏へ#mov(38)
m:15m2

[37]
n:造船倉庫前
e:山側、そしてまちの中心部へ続く「三番通り」がある。<br>近くにはレンガで作られた大きな倉庫があり、看板には「煙石造船倉庫」と書かれている。大きめの船を作ったり、整備するための建物らしい。
s:山側へ#mov(34)
s:三番通りへ#mov(38)
m:29m2

[38]
n:三番通り
e:三番通りは海側、まちの中心部へと繋がっていて、隣の「二番通り」「四番通り」へと続く路地裏も通っている。<br>山へは、まちの中心部に向かえばいいそうだ。<br>角のところに「<r>緑樹</r>の教会」という木造の建物があり、いくつかの掲示がある。
s:まちの中心部へ#mov(39)
s:海側へ#mov(37)
s:二番通りへ#mov(36)
s:四番通りへ#mov(40)
s:掲示を見てみる#mov(41)
m:26m2

[39]
n:中央広場
e:一番通り、二番通り、三番通り、四番通り、五番通りと、ここからいくつかの通りが放射状に伸びている。<br>近くには管轄署がある。
s:一番通りへ#mov(42)
s:二番通りへ#mov(36)
s:三番通りへ#mov(38)
s:四番通りへ#mov(40)
s:五番通りへ#mov(44)
s:管轄署へ#mov(47)
m:16m2

[40]
n:四番通り
e:四番通りはまちの中心部、海側に続いている。また、「三番通り」、「五番通り」へと続く路地裏がある。<br>山へは、まちの中心部に向かえばいいそうだ。<br>近くに、管轄署、造船倉庫、学校が建ててある。管轄署は中央広場から入れるようだ。
s:まちの中心へ#mov(39)
s:海側へ#mov(43)
s:三番通りへ#mov(38)
s:五番通りへ#mov(44)
m:24m2

[41]
n:「緑樹の教会」
e:私達はみな、社会の中で生きています。<br>社会がより明るくなれば、その中にいる私達の人生も、より良いものとなるのです。<br>そのためにはまず、この世界にたった一人しかいない、あなた自身の本質を知ることです。あなたが、本当のあなたの宿命を自覚することから、全てが始まります。<br>他人との違い、自分の骨格となっている風土を理解することで、敬いや感謝の心が生まれるのです。<br>あなたを形作る、あなたのまわりにいる人や、今の世を作った偉大なる先人たちに感謝しながら、明るい社会を作っていきましょう。
s:次へ#mov(38)
m:27m2

[42]
n:一番通り
e:一番通りは山側とまちの中心部に続いている。また、「五番通り」へと続く路地裏がある。
s:山側へ#mov(35)
s:まちの中心へ#mov(39)
s:五番通りへ#mov(44)
m:17m2

[43]
n:学校前
e:海沿いの道、まちの中心部に続く「四番通り」がある。山へは、まちの中心部の方に行けばいいそうだ。<br>近くには木造の学校があって、黒縄町にある学校よりもずっと大きい。
s:海沿いを通る#mov(45)
s:四番通りへ#mov(40)
m:23m2

[44]
n:五番通り
e:五番通りは海側と、まちの中心部に続いている。「一番通り」と「四番通り」に続く路地裏がある。山へは「五番通り」の方に行けばいいそうだ。<br><br>近くには管轄署と、「<r>馬蹄#ばてい</r>の教会」という建物がある。管轄署へは、中央広場から入れるようだ。「馬蹄の教会」の前に掲示が貼ってある。
s:まちの中心へ#mov(39)
s:海側へ#mov(45)
s:一番通りへ#mov(42)
s:四番通りへ#mov(40)
s:掲示を見る#mov(49)
m:18m2

[45]
n:図書館前
e:道は山側と海側、そしてまちの中心部に続く「五番通り」がある。<br>近くには図書館と大きな体育館がある。<br><br>体育館では実業団バレーボールの試合が行われているそうで、時折大きな歓声が湧き上がっている。
s:山側へ#mov(46)
s:海側へ#mov(43)
s:五番通りへ#mov(44)
s:図書館へ#mov(50)
m:20m2

[46]
n:県道ー黒縄線入り口
e:ミンダたちはここから煙石市に入った。道は山側と海側に続いている。<br><br>近くにはレンガ造りの大きな「煙石市立病院」があり、べつにここで受診してもよかったんじゃないかな…とミンダは思った。
s:山側へ#mov(35)
s:海側へ#mov(45)
m:22m2

[47]
n:管轄署
e:管轄署は総務部、整備部、福祉部、情報部…といろいろな部署があって、黒縄町のものよりも規模が大きい。というのも、黒縄町の管轄署はここの「支署」だからだそうだ。<br>壁には、煙石市の説明をする掲示がある。
s:管轄書を出る#mov(39)
s:掲示を見る#geti(4);geti(5);mov(48)
m:25m2

[48]
n:管轄署
e:ミンダは掲示を書き写した。
s:次へ#mov(47)
m:25m2

[49]
n:「<r>馬蹄#ばてい</r>の教会」
e:人類は木を伐り、森を焼いて、安寧の土地を得た。役に立つ動物は手なずけ、害になる動物は遠ざけ、今の文明を築き上げた。<br>時折私達は、私達自身も動物であるということを忘れ、むやみやたらに文明を発展させようとする。<br>当然、自然は移ろうものだ。しかし、どうせ破壊されるのだから、今破壊しても問題ないというわけでは全くもって無い。<br>この大陸を取り巻く自然の息吹に耳を傾け、今こそ、これまで進んできた道を振り返るべきなのだ。これからの新しい道を作るために。
s:次へ#mov(44)
m:19m2

[50]
n:図書館
e:たくさんの本棚がある市立図書館。
s:地球科学の棚を見る#mov(62)
s:歴史の棚を見る#mov(63)
s:動物学の棚を見る#mov(64)
s:図書館を出る#mov(45)
m:21m2

[51]
n:煙石山の山門
e:石段を登っていくとまわりから木々がなくなっていき、ごつごつとした岩が足元に見え始めた。<br><br>分かれ道があり、その先に目的地があるようだ。石段はさらに山の上に伸びているが、大きな木造の門があって上には進めない。<br>長い槍を持った番兵が門の両脇に立って守っている。
s:分かれ道へ#if(iflg(0)){mov(58);}else{mov(52);}
m:13m2

[52]
n:<r>四枝白樫番#よつえだしらかしばん</r>
e:木製の柵で囲われた広場に出た。入り口の看板には<r>四枝白樫番#よつえだしらかしばん</r>と書いてある。<br><br>広場の中には大きな木造の平屋がある。<br><br>近くに剣術の稽古をしているひとがいたので、池家さんはどこにいるのかと尋ねると、稽古の手を休めてミンダたちを平屋に案内してくれた。<br><br>部屋の中では、さくま君のお父さんともう一人、腕に翼を生やした人が話をしていた。
s:次へ#mov(53)
m:14m2

[53]
n:<r>四枝白樫番#よつえだしらかしばん</r>
e:ミンダは初めて見たので驚いたが、そういう「ハンボ」という人種があるのだという。名前は「すいほうん」というそうだ。地質学者で、その道では有名な人だという。<br><br>「あなたがミンダさんか。ずいぶんとすばらしい発見をしたね。わたしもお初にお目にかかった。」
s:次へ#mov(54)
m:14m2

[54]
n:<r>四枝白樫番#よつえだしらかしばん</r>
e:「ただ１つ、残念なことを言わないといけない。あなたが釣り上げた鉱物は、個人が持つことが制限されている。<br><r>大鉱機#だいこうき</r>…<r>大陸鉱産資源機構#たいりくこうさんしげんきこう</r>という組織が、異常に危険性のある鉱物を管理するようになっているんだ。惜しいことだが、あの鉱物は大鉱機に提供しなければならない…。」
s:次へ#mov(55)
m:14m2

[55]
n:<r>四枝白樫番#よつえだしらかしばん</r>
e:そして、すいほうん先生は急にあらたまって<br>「そして、どうか今日のできことは他言無用でお願いします。」<br>とミンダたちに頼んだ。<br><br>結局あれがどう危険なのかは全く明かされなかった。しかしミンダは、あの鉱物の正体をいつか暴いてみせると密かに心に決めた。
s:次へ#if(hav(3)){mov(57);}else{mov(56);}
m:14m2

[56]
n:終わり
e:さくま君のお父さんとすいほうん先生は話が長くなるようで、ミンダとさくまは二人で帰路についた。<br><br>ふと、さくま君が口を開いた。<br><br>「僕は、父の後をついで老松の番頭になろうと思うんだ。それを話したら、父にこう言われた…『老松の番頭になるには、たとえ神をあざむいてでも、黒縄町の未来を守る覚悟が必要』って…そんな覚悟、僕にできるのかな。」<br><br>ミンダはありきたりな言葉を並べて、さくま君を励ますことしかできなかった。<br><br>おわり

[57]
n:終わり
e:さくま君のお父さんとすいほうん先生は話が長くなるようで、ミンダとさくまは二人で帰路についた。<br>ふと、さくま君が口を開いた。<br><br>「僕は、父の後をついで老松の番頭になろうと思うんだ。それを話したら、父にこう言われた…『老松の番頭になるには、たとえ神をあざむいてでも、黒縄町の未来を守る覚悟が必要』って…そんな覚悟、僕にできるのかな。」<br>ミンダは励ます言葉が見つからなかった。そのかわりに、さくま君に霧吹きで香りを吹いた。春の香りが、せめてもの後押しになるようにと祈りながら。<br><br>おわり

[58]
n:<r>四枝白樫番#よつえだしらかしばん</r>
e:木製の柵で囲われた広場に出た。入り口の看板には<r>四枝白樫番#よつえだしらかしばん</r>と書いてある。<br><br>広場の中には大きな木造の平屋があり、剣や槍を持った人が警備している。<br><br>ここに来た理由を尋ねられたので池家さんに会いに来たものです、と答えると、ミンダたちを平屋に案内してくれた。<br><br>部屋の中では、さくま君のお父さんともう一人、腕に翼を生やした人が話をしていた。
s:次へ#mov(59)
m:14m2

[59]
n:<r>四枝白樫番#よつえだしらかしばん</r>
e:ミンダは初めて見たので驚いたが、そういう「ハンボ」という人種があるのだという。名前は「すいほうん」というそうだ。地質学者で、その道では有名な人だという。<br>翼の生えた腕と、羽毛に包まれた尻尾に包帯を巻いている。<br><br>「あなたがミンダさんか。ずいぶんとすばらしい発見をしたね。わたしもお初にお目にかかった。」
s:次へ#mov(60)
m:14m2

[60]
n:<r>四枝白樫番#よつえだしらかしばん</r>
e:「ただ１つ、残念なことを言わないといけない。あなたが釣り上げた鉱物は、個人が持つことが制限されている。<br><r>大鉱機#だいこうき</r>…<r>大陸鉱産資源機構#たいりくこうさんしげんきこう</r>という組織が、異常に危険性のある鉱物を管理するようになっているんだ。惜しいことだが、あの鉱物は大鉱機に提供しなければならない。」
s:次へ#mov(61)
m:14m2

[61]
n:<r>四枝白樫番#よつえだしらかしばん</r>
e:「実はつい昨日、石を受取ったのだが、その晩、盗賊の襲撃にあったんだ。わたしも応戦したが、取り逃してしまった。ほんとうに面目ない…。やつらめ、どこから情報を仕入れたのかはわからないが、あの鉱物がここにあることを知っていたようだ。それで…あの鉱物はもみくちゃになった拍子に割れてしまったのだが、やつらはその小さいかけらを持ち去った。…小さいかけらですら価値があるということだ。あれがどれほど影響力を持っているか、分かってくれるか。」
s:次へ#mov(55)
m:14m2

[62]
n:地球科学の棚
e:ひととおり鉱物辞典をめくってみたけれど、どの辞典にも、動物の身を食い破る鉱物の記述は見当たらなかった。
s:次へ#mov(50)
m:21m2

[63]
n:歴史の棚
e:煙石の歴史が書かれている。<br>かつて、大陸は２つの勢力に分かれていたそうだ。それが、コルフォン帝国と<r>律山国#りつざんこく</r>。<br>煙石は、律山国の領地だったそうだ。<br>ある時、コルフォン帝国は領土を拡大するため、律山国に攻め込んだ。煙石は防衛施設を整え、帝国の猛攻をしのいだ。しかししばらくして、コルフォン帝国と律山国の双方が崩壊。煙石はあたらしい政府組織、大陸管轄の傘下に入った。
s:次へ#mov(50)
m:21m2

[64]
n:動物学の棚
e:この大陸上の「人間」にはヒトの他にもいろいろな人種があるらしい。鳥のように翼を生やしたハンボ、猫のような耳と長いひげをもったシャリなど…。ミンダはヒト以外を見たことがないので、ほかの人種がどんな姿をしているのかわからないが、いつか出会ってみたいと思った。
s:次へ#mov(50)
m:21m2

</map>
<end>`;
