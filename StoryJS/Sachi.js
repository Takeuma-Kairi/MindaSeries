var Sachi = `<flag:0>

<item:5>
[0]地図#<img src='Assist/Sachi_assist/map.png'/>
[1]置き手紙#幸へ<br>鱧屋に ものを取りに行って来て下さい<br>鉄鍋と短刀<br><br>取扱注意
[2]荷物#鉄鍋と短刀。<br><br>すこし重いが、とても使いやすい。<br><br>鉄山という名前は飾りじゃない。鉄工芸はここの名物だ。
[3]荷物#ぎっしり野菜が詰まった麻袋。
[4]リードミー#ファイル名：<b>Sachi</b><p><ul><li>此鳥：<hl>Sakuma#load_data(Sakuma)</hl></li></ul></p>1.重要な注意ーーーーーーーーーー<br>省略。注意事項は後述。<br><br>2.あらすじーーーーーーーーーーー<br>流れ者たちの集落、白霧鉄山に住んでいる幸は、師匠である熟に仕え、雑用をする。<br><br>3.登場人物ーーーーーーーーーーー<br>・熟いと<br>白霧鉄山の管轄署員、まとめ役。<br>武術に秀でる。<br><br>・幸<br>熟の弟子<br><br>・鱧屋の疾人<br>鍛鉄場で働く若旦那<br><br>・ゴエイバラ<br>三輪辛夷番の番頭。北海諸島での大寒波で家を失い、大陸に逃げてきた。その際、白霧鉄山にお世話になった<br><br>・此鳥<br>白霧鉄山の連絡員。<br><br>4.注意事項ーーーーーーーーーーー<br>このページデータ内のストーリーはフィクションであり、登場する人物名、団体名等は実在のものではありません。<br>また、書かれている説明が、実際と異なる場合があります。<br>書かれている内容は作者の意見を代弁するものではなく、特定の意見を主張するものでもありません。<br><br>1版2版3版<br>2021.4.　竹馬浬

</item>

<mapimg:Sachi_assist>
<map:33>
[0]
n:<r>白霧鉄山#しろきりてつざん</r>
^レーナス県の南部には険しい山地が広がっているが、その中でも白霧鉄山はひときわ高く急峻だ。
^
^槍のようにとがった山頂、純白の氷河。
^氷河は山を削り、いくつもの谷を作る。
^
^その谷の１つに、小さな家が寄せ集まった集落がある。
^
^
^番号:20_12.7.L.M3.幸
s:次へ#mov(1)

[1]
n:U字谷の集落
^この谷は広く、真ん中に小さな川が流れ、両側はゆるやかな坂になっている。
^
^木は無く、石と砂と雪の大地に生えているのは背の低い草花。
^
^都会から離れたこの集落に住む人は、多くが始めから山の住民だったわけではない。
^
^他の町で行き場を失い、身を隠し、逃げてきた者たちばかりだ。
s:次へ#mov(2)

[2]
n:<r>白霧荘#しろきりそう</r>
^坂に立つ集落のはずれには、<b><r>白霧荘#しろきりそう</r></b>という建物がある。
^ここは集会場であり、外部の旅人の宿泊施設であり、管轄の支署だ。
^そして、ここの女将、<b><r>熟#こなれ</r>　いと</b>は、集落のまとめ役であり、頼れる女将であり、地元に勤務する大陸管轄の職員というわけだ。
^彼女は武術に秀で、特に短刀の扱いは大陸でも屈指のもの。
^初めにこの地に住みついたのは<r>熟#こなれ</r>家であり、以来、短刀の武術について独自の流派を編み出してきた。
s:次へ#geti(0);geti(1);mov(3)

[3]
n:<r>幸#さち</r>
^そんな熟家は多くの弟子をとってきた。
^<r>幸#さち</r>もその一人だ。
^
^慣れた手つきで義足を取り付け、彼女は元気に朝の体操を始める。
^今日も稽古だ。そのまえに雑用を済ませよう。
^師匠の熟は外出しているが、机の上に置き手紙がある。
^
^その内容は、おつかいだ。
s:次へ#mov(4)
m:1

[4]
n:白霧荘の前
^上の通りにある、「<b><r>鱧屋#はもや</r></b>」という鍛冶屋に向かおう。
^
^冷たい風が谷筋にそって、時折強く吹いてくる。
^
^東と西に道が続いている。
^東には広場がある。
^西には十字路があり、坂の上と下に繋がっている。
s:西へ#mov(6)
s:東へ#mov(5)
m:2

[5]
n:広場
^平らにならされた広場。
^
^このあたりは岩や石がごろごろしているが、ここは砂や泥でならされており、歩きやすい。
^
^端の方には岩を積んで作られた池があり、釜や洗濯物が干されている。
^
s:戻る#mov(4)
m:3

[6]
n:十字路
^坂になっている。
^
^北が登り坂、南が下り坂。
^もと来た白霧荘は東で、西には、多くの家屋が密集する地区へと続く道がある。
s:北へ#mov(9)
s:南へ#mov(8)
s:西を見る#mov(7)
m:4

[7]
n:集落の中心
^小さな店や家でごった返している地区。
^
^幸は何年も住んでいるが、未だにここの全貌を把握しきれていない。
^身元不明の住人が、多く出入りしているという。
s:戻る#mov(6)
m:5

[8]
n:下の通り
^氷河から流れる川が、眼下の谷底に見える。
^外から集落に入る者は、ほとんどこの川に沿って谷を登ってくる。
^
^道は整備されていないが、見晴らしは良いので迷うことはないだろう。
^
^今日は、毛むくじゃらでまったりとした顔のリャマを連れた野菜売りが露店を開いている。
s:坂を登る#mov(6)
m:6

[9]
n:上の通り
^いくつもの倉庫があり、そばには石が山のように積まれている。
^通りの先には、目的の鱧屋がある。
^
^南には下り坂がある。
s:鱧屋へ#mov(11)
s:倉庫を見る#mov(10)
s:南へ#mov(6)
m:7

[10]
n:倉庫
^いくつものコンテナや荷車が整然と置いてある。
^
^足元には線路が敷かれ、谷の上のほうまで、遥かに続いている。
s:戻る#mov(9)
m:8

[11]
n:鱧屋
^「<r>鱧屋鍛鉄場#はもや たんてつじょう</r>」と書かれた看板がある。
^
^戸が開いていたので入ると、中から熱風が吹いてきた。
^家の奥には大きな炉があり、今ちょうど製鉄を行っているようだ。
^
^玄関のそばには、椅子に腰掛け、刃物を研いでいる人物が居る。
^ここの若旦那、鱧屋の<r>疾人#はやと</r>さんだ。
s:疾人に話しかける#mov(12)
m:9

[12]
n:疾人
^「あっ！幸様ですか。本日はどういったご用件で。」
^
^「熟から、頼んでいたものを取りに行けと言われたのですが、ありますか？」
^
^「あい、少しお待ちを。」
^
^疾人は大きな袋と小さな木箱を取ってきて、机の上に載せた。
^
^袋の中には、大きな円い鉄鍋が入っていた。
^新品のようにツルツルピカピカだ。
s:次へ#mov(13)
m:9

[13]
n:鉄鍋の修理
^「長いこと、丁寧に使い込んでいらっしゃったようですが、穴やひどいくぼみがありましたので、修繕しました。」
^
^「わぁ、すごい、新品みたいですね。」
^
^「表面も良く洗ってしまいましたんで、使うときはまた手入れをしてください。…それと、これですね。」
^
^疾人は、小さな木箱を開け、幸に差し出した。
^中には、布にくるまれた短刀が入っていた。
s:次へ#geti(2);mov(14)
m:9

[14]
n:短刀
^反りは無く、真っ直ぐな刀身。
^先端はスッキリとした弧を描いている。
^刃は鋭く、鏡のように輝いているが、柄はずいぶんとすり減っている。
^
^「これは熟様がここの管轄署員になられた際、わたしら鱧屋が贈呈した短刀です。どちらかというと、装飾やお守りのように使っていただけるかと思ったのですが…」
^
^どうやら、かなり使い込まれて修繕を依頼されたそうだ。
s:次へ#mov(33)
m:9

[33]
n:短刀
^「いやあ、師匠は、切れなければ意味がないと、よく言っていますから。試し切りでもしたんじゃないでしょうか？」
^
^「何切ったんだと思うくらい、ひどい刃こぼれだったんですよ。研いだ結果、少し使い心地が変わってしまったかもしれません。砥げと言われれば研ぎますし、直せと言われれば直しますが、果たして熟様の要求に沿えたかどうか…。」
s:次へ#mov(15)
m:9

[15]
n:訪問者
^坂を下り、荷物を抱えて白霧荘まで帰ってくると、玄関先に見知らぬ人物が居た。
^体は薄汚れ、靴には泥がついている。どこから来たんだろう。
^
^「熟様に用事があって参りました。<r>煙石#えんせき</r>、<r>三輪辛夷#さんりんこぶし</r>番の連絡係、<r>此鳥#これとり</r>と申します。」
^
^白霧鉄山には多くの情報が集まってくる。各地に派遣した連絡員たちが、情報網を築いているのだ。
^そしてこの此鳥という人は、煙石の連絡員らしい。
^何だろう…。厄介事じゃないといいけど。
s:次へ#mov(16)
m:4

[16]
n:訪問者
^「連絡係の方でしたか。…熟は今不在ですが、ご用件を承りましょうか。」
^
^「重要な連絡事項ですので、熟様に直接申し伝えたいのですが。」
^
^「なるほど。では、家の中でお待ちください。ご案内します。」
^
^「あ、もしよければ、洗い場を貸していただけませんか。ここまで来るのに泥だらけになってしまって。お見苦しいでしょう。」
^
^「わかりました。しかし煙石からだと、相当な長旅ですよね…。」
s:次へ#losi(2);mov(17)
m:4

[17]
n:訪問者
^此鳥を応接室に案内し、幸は熟の部屋に荷物をおろした。
^
^「朝起きたら、もう師匠はいないし、一体全体どこ行ったんだろう。今日中に帰ってくるのかな。」
^
^幸は手持ち無沙汰に短刀を眺め回した。
^とても持ちやすい。重さも長さもちょうどよく、何より刀身が美しい。
^これが白霧鉄山の職人技ね。
^
^ふと、遠くから鐘の音が聞こえた。熟が帰ってきたことを知らせる鐘だ。
s:外に出る#mov(18)
m:1

[18]
n:熟の帰宅
^大きな足、長い指。
^
^ヤクの毛で編まれた笠をかぶって、何やら毛皮のようなものを肩にかけた熟が坂を登ってくる。
^足と指が大きいのはそういう人種だからだ。セイロという人種。
^
^それにもかかわらず熟の動きは俊敏だ。
^持久力と俊敏性。この両立が熟の強みといえる。
^
s:次へ#mov(19)
m:4

[19]
n:熟の帰宅
^「師匠。お帰りなさいませ。煙石の連絡員の者がお待ちです。」
^
^「そうか。とりあえず、こいつを置いてから向かおう。」
^
^熟は、肩にかけた何かを指差した。
^
^「何ですかそれ。毛皮ですか。」
^
^「アルボルだ。危険な種がうろついていると聞き、急いで向かうことになった。それで仕留めたやつが、これだ。…生息分布がまた変わっていたから、あとで地図を改めねば。」
s:次へ#mov(20)
m:4

[20]
n:白霧荘
^熟は身支度を整えると、
^「じゃあ私は、連絡員の話を聞いてくるよ。幸。下の方に野菜売りが来ているから、買い物に行ってきなさい。行けば分かると思うから。」
^
^そう言って、応接室に入っていった。
^
^さて。どうしよう。
s:買い物に行く#mov(24);geti(3)
s:こっそり盗み聞きする#mov(21)
m:1

[21]
n:密談
^幸は気づかれないように、こっそり身をひそめ、壁に耳を当てた。
^
^「…噂には聞いていたが、まさか事実とは。」
^「どのようにするかはそちら次第とのことですが。」
^「そちら次第も何も…。しかし、他に頼れる者は居ないのか。」
^「煙石から大鹿から、あらゆる勢力が１つの目標に向かっています。二本老松番だけが道を外れるのは、目立つのでしょう。」
^「そこで、隠密行動が得意な白霧鉄山に任せようと？」
s:次へ#mov(22)
m:1

[22]
n:密談
^「…おそらく池家は、強行突破しようとしているのでしょう。手段を選ばず、無謀な賭けをしようとしている。」
^「ふぅん。畏れ多いことよ。」
^「三輪辛夷番は二本老松番と一定の距離を置きながらも、従うつもりです。」
^「ゴエイバラも慎重なやつだ。もとは北海諸島で家を失い、都会では食うあてがなく、泣く泣く白霧鉄山に逃げ込んできたが…。」
^「今では歩く者の番頭です。我々、連絡員たちの動向にも理解があります。」
^「今回は、ゴエイバラに世話になることが多くなるはずだ。そのように伝えてくれ。…外が騒がしいな。ちょっと失礼。」
s:次へ#mov(23)
m:1

[23]
n:密談
^「おい、なにやってる。」
^
^熟が部屋から出てきて、静かな口調で幸を叱った。
^「あぁっ。すみません、師匠。」
^「盗み聞きとは、全く…。野菜は買ってきたのか。」
^「ま、まだです。」
^「早く行ってこい。」
^幸はそそくさと準備をして外に飛び出した。
s:次へ#mov(29);geti(3)
m:1

[24]
n:野菜売り
^坂を降りると、野菜売りがいた。
^
^白霧荘の者だと言うと、野菜売りは麻袋に野菜を詰め始めた。
^ここの常連なので、買うものはだいたい同じなのだ。
^
^旬の葉野菜に根菜、小麦粉、油、漬物のビンがどっさり。
^
^その他、不足している塩やカラシを買い、再び坂を登って白霧荘に帰った。
s:次へ#mov(25);losi(3)
m:6

[25]
n:白霧荘
^帰ると、まだ応接室では話が続いていた。
^ふと魔が差し、壁に耳を当てて盗み聞きすることにした。
^
^「…そちらの交渉と働き次第だな。」
^「はい、全力を尽くします。」
^「同日に他の重要な用事が入る。白霧鉄山は、煙石に総力を割くことはできない。…だが、腕が立つ者を何人か派遣しよう。」
^「あまり大人数でも目立ちます。それがよろしいかと。」
s:次へ#mov(26)
m:1

[26]
n:白霧荘
^「それでは頼むぞ。煙石、とくに黒縄の異変は逐一報告せよ。」
^「承知いたしました。」
^
^話が終わったようだ。幸はそそくさと台所に向かって、食料を棚に分けた。
^
^「戻ったようだな、幸。」
^「あ、師匠。色々買ってまいりました。お疲れ様です。」
^「お疲れ。だが、これからはもっと疲れそうだ。」
s:次へ#mov(27)
m:1

[27]
n:白霧荘
^「先程の、連絡員の方の件ですか。」
^「そうだ。煙石の方に…なんと言えばいいかな…護衛に行くんだ。多分私も行く。」
^「なるほど。では、私も同行いたしますか。」
^
^「いや、お前はお留守番だ。」
^「えー。お留守番ですか。」
^
^「嫌な顔をするな。その日は多くの者が出払ってしまう。不測の事態に備え、お前は残るんだ。私はお前を信頼しているんだぞ。」
^「そうですか？そういうことなら、まあ、頑張ります。」
s:次へ#mov(28)
m:1

[28]
n:終わり
^「今回はかなり危険かもしれない。お前に何かあれば、お前の父に顔向けできない。」
^
^「危険なんですか。それは…師匠もお命を大事に、お気をつけてください。」
^「言われんでも分かっているさ。」
^
^お父さんか…。幸は窓の外を眺めた。
^もうずっと会っていない。今どこにいるんだろう。
^
^背の低い雲が日の光を浴びて黄金に輝いている。
^その下を、風は激しく吹き続けている。
^
^
^終わり
m:1


[29]
n:野菜売り
^坂を降りると、野菜売りがいた。
^
^白霧荘の者だと言うと、野菜売りは麻袋に野菜を詰め始めた。
^ここの常連なので、買うものはだいたい同じなのだ。
^
^旬の葉野菜に根菜、小麦粉、油、漬物のビンがどっさり。
^
^その他、不足している塩やカラシを買い、再び坂を登って白霧荘に帰った。
s:次へ#mov(30);losi(3)
m:6



[30]
n:白霧荘
^帰ると、すでに連絡員は居らず、熟は名簿を机に積み上げていた。
^集落に居る者、居た者はすべてこの名簿に記録されているそうだ。
^
^「戻ったようだな、幸。」
^「あ、師匠。色々買ってまいりました。お疲れ様です。」
^「お疲れ。だが、これからはもっと疲れそうだ。」
s:次へ#mov(31)
m:1

[31]
n:白霧荘
^「先程の、連絡員の方の件ですか。」
^「そうだ。煙石の方に…なんと言えばいいかな…護衛に行くんだ。多分私も行く。」
^「なるほど。では、私も同行いたしますか。」
^
^「いや、お前はお留守番だ。」
^「えー。お留守番ですか。」
^
^「嫌な顔をするな。その日は多くの者が出払ってしまう。不測の事態に備え、お前は残るんだ。私はお前を信頼しているんだぞ。」
^「そうですか？そういうことなら、まあ、頑張ります。」
s:次へ#mov(32)
m:1

[32]
n:終わり
^「今回はかなり危険かもしれない。お前に何かあれば、お前の父に顔向けできない。」
^
^「危険なんですか。それは…師匠もお命を大事に、お気をつけてください。」
^「言われんでも分かっているさ。」
^
^お父さんか…。幸は窓の外を眺めた。
^もうずっと会っていない。今どこにいるんだろう。
^
^背の低い雲が日の光を浴びて黄金に輝いている。
^その下を、風は激しく吹き続けている。
^
^
^終わり
m:1



</map>
<end>`;

