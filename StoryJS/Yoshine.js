var Yoshine = `<flag:0>
<item:4>
[0]南煙石町の地図#<img src='Assist/Yoshine_assist/simple_map.png' style='width:330px;height:220px'/>
[1]管轄の南煙石町の地図#<img src='Assist/Yoshine_assist/minamikemuriishi.png' style='width:330px;height:220px'/>
[2]南煙石町の案内#<r>南煙石町は煙石半島の西海岸側に位置する町です。<br>昔から硝石の採掘と火薬の製造が行われており、ここで作られた火薬が、大砲や銃などの武器に使われた時代があります。<br>今では、採掘用や花火用に火薬が用いられています。
[3]リードミー#ファイル名：<b>Yoshine</b><br>1.重要な注意ーーーーーーーーーー<br>省略。注意事項は後述。<br><br>2.あらすじーーーーーーーーーーー<br>みと率いる大鉱機”青い野良猫”部隊が南煙石町で”緑の鍵”部隊と合流する。隊員の芦音と湖青は火薬工場に挨拶に向かう。<br><br>3.登場人物ーーーーーーーーーーー<br>・みと<br>“青い野良猫”部隊長。部下からの信頼が厚い。他人をしっかりと評価する。<br><br>・芦音<br>優秀だが落ち着きがない。<br><br>・湖青<br>無口だが、真面目で頼りがいがある。<br><br>・一風<br>大鹿山と大鉱機の連絡役。根の教会より追われている。<br><br>・トルタ<br>慎重で、外堀を埋める性格。<br><br>・ベミ<br>人を見る目があり、適切に人に頼ることができる。<br><br>・ウァルバ<br>香料の奥深さを伝えるため、各地を回る香料師。<br><br>4.注意事項ーーーーーーーーーーー<br>このページデータ内のストーリーはフィクションであり、登場する人物名、団体名等は実在のものではありません。<br>また、書かれている説明が、実際と異なる場合があります。<br>書かれている内容は作者の意見を代弁するものではなく、特定の意見を主張するものでもありません。<br><br>1版2版<br>2021.4.　竹馬浬
</item>

<mapimg:Yoshine_assist>
<map:58>
[0]
n:爆薬運搬任務
^レーナス県北部にある<r>煙石#えんせき</r>半島。
^その西海岸部に、<r>南煙石#みなみえんせき</r>町がある。
^
^昔から火薬産業が盛んで、ここで作られた製品は、県内外に輸出されている。
^
^そんな南煙石町に、大陸鉱産資源機構の採鉱部隊、<b>"青い野良猫"</b>部隊が向かっていた。
^目的は砕石用爆薬の運搬だ。
^
^
^番号：21_3.11.M4.L.芦
s:次へ#mov(1)

[1]
n:青い野良猫
^「もうしばらくで南煙石町に到着するな。」
^隊長の<b>みと</b>は、地図を見ながら淡々と話し始めた。
^
^「それでは、今後の動きを確認する。我々は、"緑の鍵"部隊の輸送船と合流し、爆薬の搬入、荷物の積み降ろしを行う。」
^
^県道・煙石線は幅が広いが、ところどころ整地されていないようで、車の揺れがひどい。
^車といっても荷車に幌をつけて魔力原動機をとりつけた程度の、不格好なものだ。
^みとは揺れる車内の中でもほとんど動じずに話し続ける。
s:次へ#mov(2)

[2]
n:青い野良猫
^"青い野良猫"部隊はエルフォノ支部に所属しているが、わざわざ県をまたいでレーナスにきているのは理由がある。
^
^「今回は通常の運搬計画とは異なり、運搬経路を、第三者になるべく悟られないよう行う。当然、エルフォノ、レーナス両支部と管轄署に運搬の届け出はしてあるが、運搬経路はかなり煩雑だ。」
^
^その情報は隊員の<b><r>芦音#よしね</r></b>も把握している。
^出発地点は南煙石、終着地点は大鹿。
^レーナス県内の移動にもかかわらず、わざわざ隣接するエルフォノ県を経由しているのだ。
s:次へ#mov(3)

[3]
n:青い野良猫
^「なぜこのように、非効率的な運搬方法をとるのでしょうか。経路を曖昧にするためとはいえ。」
^
^芦音は思わず質問した。
^
^「我々だけではない。他のいくつかの部隊も、大鹿に向かって別々の経路で運搬している。不慮の事故により、爆薬が必要量届かない危険性を最大限減らすのが目的だろう。」
^
^用心するのは大事だが、大鹿山ごと吹き飛ばすつもりなのだろうか。だがいざとなればそれを決行するのもやむなしか。
s:次へ#mov(4)

[4]
n:複雑な運搬
^そんなことを思っている間に、南煙石の入り口についたようだ。
^
^車を降り、県道から分かれた、ひとけのない木々の中に続く道を指し、隊長は指示を出した。
^
^「この向こうに火薬倉庫がある。緑の鍵部隊も近辺に着岸するため、準備をしよう。」
^
s:次へ#mov(5);geti(0);
m:1

[5]
n:複雑な運搬
^そして、芦音の方を向いた。
^
^「製造元の煙石火薬さんのほうには、すでに連絡してある。もう職員の方が、倉庫で我々を待ってくれているそうだ。そこで、私たちはその仕事をするから、芦音と<r>湖青#うみあお</r>の二人は本隊から分かれ、煙石火薬さんの事務所に出向いて、ご挨拶に行ってくれ。」
^
^芦音と、同部隊員の湖青は顔を見合わせた。
^
^みとたちは芦音と湖青に地図を手渡して、火薬倉庫の方に行ってしまった。
^
s:次へ#mov(6)
m:1

[6]
n:ご挨拶伺い
^「よし、じゃあいこう、湖青。」
^「はい。」
^
^湖青は無口なやつだが、まじめで頼りがいがある。対して芦音は優秀だが落ち着きがないやつだから、二人を組ませよう…と隊長が考えているのかな、と芦音は勝手に考えている。
^
^実際、ふたりの相性は抜群だと芦音は思っている。湖青もそう思ってくれてるといいな。
^
^ともかく先に進もう。
s:先に進む#mov(7)
m:1

[7]
n:大学前
^道が分かれており、分かれ道の奥には、大きな建物がある。
^「カッター理科大学　煙石校舎」と看板がついている。
^
^化学部に地学部。それと魔力学部。
^ここは神秘的な魔法というよりは、
^魔"力学"なんだから、物理学的な側面からの研究をやっているんだろう。
^
^とくに用事はない。
s:先に進む#mov(9)
m:2

[9]
n:海辺の通り
^坂を下ると、海が見えた。なんとも穏やかだ。
^魚屋や運送業者、船の倉庫に釣具屋など、いろいろな店が軒を連ねている。
^通りからちょっと足を踏み出せば、砂浜だ。
^
^「遊びに来た訳じゃないんですよ。」と言わんばかりに、湖青がチラチラにらんでくる。
^
^道は、東と南に分岐している。どちらにいっても煙石火薬にたどり着けるだろう。
^南は町中へとつづく道、東は県道の先だ。
s:南へ#mov(10)
s:東へ#mov(41)
m:3

[10]
n:小さな商店街
^道の左右には、八百屋や服屋などが軒を連ねている。
^
^小さな商店街だ。
^
^ふとジュウジュウと、いい匂いが漂ってきた。肉屋の店先で腸詰めを焼いて売っている。
^
^色もさまざま、いろいろと種類があるようだ。
^ふと芦音は小腹が空いてきた
s:次へ#mov(11)
m:11

[11]
n:腸詰め
^早く仕事を…と急かす湖青をまあまあとなだめていたら、いつの間にか二本の腸詰めを手に持っていた。
^
^想像より一回りも二回りもぶっとい。湖青と半分こだ。
^
^くず肉や内臓も腸詰めに詰め込まれている。
^
^腸詰めのいいところは、その手軽さと、濃厚な脂、深い煙の風味、そして肉を無駄にしない精神だ。
s:次へ#mov(12)
m:11

[12]
n:食べ歩き
^今にもはじけそうな腸詰めに、思い切り、ぱりっと音をたててかぶりつく。口の中に、燻製の甘さと、さわやかな香草の風味が広がって大変おいしい。
^
^もう一本は、酸味のある木の実と、魚肉や貝の肉が豚肉と組み合わされたものだ。
^湖青も黙々と食べている。
^おいしいものを食べた二人は満足し、いつも以上に和やかな雰囲気になった。
^
^その後、味付けや風味の談義をしながら先へ進んだ。
s:先へ#mov(13)
m:11

[13]
n:さっき食べたもの
^学校があるようで、子供たちのはしゃぐ声が聞こえる。
^
^その向こうには、畑地が広がっている。
^見たところ、麦畑のようだ。そして、手前の畑には豚が飼われている。
^
^どろんこのなかを転がりまわっているやんちゃさんから、見知らぬ二人に興味津々の、かわいい鼻の子も、いろいろいる。
s:次へ#mov(14)
m:12

[14]
n:さっき食べたもの
^人懐こいのが柵の近くまでやってきて、鼻をクンクンしている。
^
^「やあやあ、ぶうぶうちゃん、かわいいねえ。一杯遊んで、おいしくなるんだよ。」
^
^「あの。芦音さん。」
^
^「どうしたん。」
^
^「いや…"かわいい"と"食べたい"って両立するもんでしょうかね。」
s:次へ#mov(15)
m:12

[15]
n:さっき食べたもの
^「なにを言っているの。かわいい且つおいしい、でしょう。この豚ちゃんたちが元気一杯に育って、そうやって育った命を、頂くんでしょうよ。二つに境界は無くて、一直線なんだから、おいしいに決まっているでしょう。」
^
^「はあ、まあそうですね。」
^
^まったく、食いしん坊な人だと湖青は思った。
^だが、それは湖青も、ある程度は同意見だ。
s:次へ#mov(16)
m:12

[16]
n:空腹の時代
^かつて、エルフォノ県の奥地に住む冠の隠者の暴動により、広範囲の農作物に毒が混じったことがある。
^
^そもそも、冠の隠者は、毒そのものなのだ。
^人間にとって住みやすい環境をつくるための文明は、それ以前の原始的な自然の多くを、毒に分類した。
^
^冠の隠者はある一種の、大陸の預言者であった。やがて根の教会が大陸管轄と仲違いをして後、大陸管轄は、その人智を越えた力も、毒と同類に扱ったのである。
s:次へ#mov(17)
m:12

[17]
n:空腹の時代
^その年は、どの果樹でも、太い枝がしなるほど、ずっしりと実った。
^
^芦音と湖青は、生まれは違うが、どちらもこの時期に、食べられないそれを指をくわえて見ていた。
^
^はじめのうちは、大規模な害獣駆除にもなって、むしろ都合いいだろうと楽観視する声も聞かれた。
^確かに野性動物の多くが毒素に倒れたらしいが、それ以上に、腹いっぱいに食えることは生きる活力を与えたようだ。
s:次へ#mov(18)
m:12

[18]
n:空腹の時代
^農地から毒素が消え去り、再び耕作を始めるころには、そこにあったのは栄養豊富な土と、数を増し、味をしめた害獣だった。
^
^結局、この期間に割を食ったのは、人間だった。
^ひもじさや悔しさや空しさや、あらゆる感情が渦巻く中で、芦音と湖青がとった行動は、
^
^まずとにかく食べること。
^そして食べたものに感謝すること。
^最後に冠の隠者に怒りの矛先を向けることだった。
s:次へ#mov(19)
m:12

[19]
n:空腹の時代
^だからいま、二人は大鉱機にいるのだ。
^冠の隠者に最も敵対している機関、それが大鉱機だ。
^
^採鉱部隊という立場ではあるが、機会があればいつでもその怒りがよみがえる。
^
^「さあ、早いところいきましょう芦音さん。」
^
^「はいよ。じゃあねー、ぶうぶうちゃん。」
s:先に進む#mov(20)
m:12

[20]
n:鉱山の入り口
^橋を渡ると、道が分かれていた。
^
^北に工場が見える。あそこが目的地だ。
^南には、山に通じる道が続いており、重厚な錠前がかけられた門がある。
s:門を見る#mov(21)
s:北へ#mov(22)
m:13

[21]
n:鉱山の入り口
^門には看板がある。
^「えーっと、南煙石鉱山。この裏の山が鉱山かい。」
^「そのようですね。採掘されるのは、主に硝石とのことです。」
^湖青が手帳をめくりながら言った。
^
^「そうか、ここから、あすこの工場に送られて、火薬が作られるんだ。なるほどなあ。」
^「あとは、昔はここに粘土の採掘所があり、煉瓦の一大生産地でもあったらしいです。」
^「煉瓦か、じゃあこのあたりの煉瓦は、南煙石産というわけだな。」
s:戻る#mov(20)
m:14

[22]
n:煙石火薬
^煙石火薬の工場棟は、歴史を感じさせる煉瓦建築でできている。
^何度か改築と増築を行ったようで、事務所棟は新しめだ。
^周りとは色や積み方が違う煉瓦だが、きっちりと壁をなしている。
^
^事務所棟に入り、
^「失礼します。いつもお世話になっております、大鉱機です。」
^
^と挨拶すると、奥の事務机から何人かが立ち上がる音がした。
s:次へ#mov(23)
m:10

[23]
n:煙石火薬
^職員の方は、結構丁寧に対応してくれた。
^「ああ、どうも、お世話様です。わざわざお越しいただきありがとうございます。」
^
^「いえいえ、火薬の運搬をはじめさせていただいたので、ご挨拶に…」
^
^「さようでしたか。えーと、いろいろと書類がありますので、目を通していただいてもよろしいでしょうか。あ、いまお茶お淹れしますね。」
^
^「お、おきになさらず…」
s:次へ#mov(24)
m:10

[24]
n:煙石火薬
^職員の人は行ってしまった。ちょっとあわただしい人だね、と湖青に言うと、そんなこと言うもんじゃないですよ。とたしなめられた。
^
^外から見たように、結構新しめの建物なのだろう。木で作られた床板も清潔で、掃除が行き届いているようだ。
^
^周りを見渡すと、広い下駄箱の上に、掛け軸が掛けてあるのに気がついた。
^紙が変色しており、古い絵なのだろうと思われるが、破けた所もなくきれいに掛けられている。
s:次へ#mov(25)
m:10

[25]
n:不思議な掛け軸
^薄い色使いで、水辺を歩く鹿が描かれている。
^ただ、鹿の角の部分には、角ではなく枝分かれした木が生えていて、枝の先は、蛇の顔になっている。奇妙な絵だ。
^
^「お待たせいたしました、こちらが領収書と、今回のお取引についての注意事項でございます。」
^
^「はい。…芦音さん、なに見ているの。」
^
^「いや、こちらの掛け軸、なんというか、…非常に素敵ですね！」
s:次へ#mov(26)
m:10

[26]
n:不思議な掛け軸
^「ありがとうございます。こちらはですね、古い絵なのですが、昔から、縁起物として飾ってきたのですよ。」
^
^「縁起物なのですか。蛇と鹿という取り合わせには、確かにすごい、力を感じます。」
^
^「そうでしょう。恥ずかしながら、具体的にどんないわれがあるのかは存じ上げないのですが…。」
^
^「なるほど。…おっと、ああ、書類でしたね、確認させていただきます。」
^湖青の冷ややかな目線にせっつかれて芦音は作業に入った。
s:次へ#mov(27)
m:10

[27]
n:火薬倉庫へ
^作業と挨拶をすませた二人は、もと来た道を戻り、火薬倉庫に向かった。
^
^火薬倉庫は町のはずれ、民家から離れた林の中にある。
^この林は海辺に近く、船が接岸するちいさな港と道でつながっている。
^
^あらかた搬入は終わり、ほかの人たちは輸送船に入っているらしい。
s:次へ#mov(28)
m:15

[28]
n:報告
^みと隊長は、甲板でひとり海を眺めていた。
^
^「ただいま帰りました」
^と挨拶をすると、みとは二人を見た。
^
^「帰ったか。報告することは何かあるか。」
^
^「はい。煙石火薬より、書類を預かってきました。今回の取引に関する書類です。」
^
^「そうか。預かろう。」
s:次へ#mov(29)
m:15

[29]
n:報告
^芦音はあの奇妙な絵がふと気になり、みとに話してみることにした。
^みとは多弁ではないが、どうでもいい細かいことでも相談に乗ってくれる。それが芦音たちが、みとを信頼して慕っている大きな理由だ。
^
^「鹿に蛇か。おもしろ。でも知らないな。」
^
^「このあたりの伝承か何かだと思うんですが…」
^
^「そうか。じゃあ詳しい人に聞こう。」
s:次へ#mov(30)
m:15

[30]
n:ベミとトルタ
^そういうと、みとはあたりを見渡すと、緑色の作業服を着ている、護衛部門の人に声をかけた。
^「"緑の鍵"のベミさん、ちょっと聞きたいことがあるんだが。」
^
^「あ？ああ、お疲れさまです、みと隊長。」
^ベミはだるそうにみとの方を向いた。
^
^「このあたりの伝承について詳しい人、知ってるか？」
^
^「えー…"赤い秋雨"のひとたち…は行っちまったけど…、トルタなら知っているかもしんねえな。ちょっと呼んできます。」
s:次へ#mov(31)
m:15

[31]
n:ベミとトルタ
^ベミは特に突出したところはないが、自分が不得意な分野をよく分かっていて、それが得意な人もよく知っている。人に適切に頼ることができるのも才能だと、みとは評した。
^
^そしてベミが連れてきたのは、とにかく周辺知識を調べまくる、輪をかけて慎重なトルタさんであった。
^
^「鹿に蛇ですか。その他には何かありましたか。」
^
^「あとは足下に水面と、あと、蛇の体は木みたいでした。」
s:次へ#mov(32)
m:15

[32]
n:ベミとトルタ
^「木の種類は分かりますか、杉とか松とか。」
^
^「いや、今思えばあれは松ですね。蛇の鱗みたいな模様でした。」
^
^「じゃあ、まさに黒縄って感じですね。」
^
^芦音は、なぜゆえそう言えるのか全くわからず、きょとんとした。
^
^「ええっと、そうなんですか？ところで、黒縄って町の名前ですよね。」
^
s:次へ#mov(33)
m:15

[33]
n:ベミとトルタ
^「それはそうですが、黒縄は、縄という字から連想できるように、蛇のこと、一種の蛇神のことです。半島の東海岸側にある、黒縄町は、この神の名前をそのまま町の名前にしたわけですね。」
^
^「へえー。足下の水面は、じゃあ、海ってことですかね。」
^
^「多分そうでしょう。ちなみに、鹿は大鹿山…これも、大鹿という神のいる山ですが、それだと思います。黒縄の起源はそこ、と言われているので、一緒に描いたのかと。」
^
^物知りな人だなあ、と芦音は舌を巻いた。
s:次へ#mov(8)
m:15

[8]
n:ベミとトルタ
^「なるほど。では、大鹿から松を介して黒縄が生まれた、と言う様子を描いているわけですか。」
^
^「いや、おそらく、松そのものが蛇なんだと思います。黒縄町には二本老松番という、歩く者たちの番があるんですが、そこを中心として、老松番のまわりの"人間"と、黒縄という"神"が一緒に暮らしていた歴史があるようです。二つは分けられないという意味かと。」
^
^「へえ…ところで、しょうもないことを言うようですが、ほ乳類とは虫類と植物って、この取り合わせは別に問題ないんですか。」
s:次へ#mov(34)
m:15

[34]
n:ベミとトルタ
^「うーん。でも、鹿は角が生え替わり、蛇は脱皮で古い皮を脱ぎ捨て、松は一年を通してずっと青葉をはやしているように、すべて、生命力のある縁起物、不死の象徴という共通点はあると思います。」
^
^「へえ」
^
^「それと、この絵においては、松は、鹿と蛇の間をうまくつなぐ役割もあるんじゃないでしょうか。」
^
^もはや連射砲のごときトルタの話しぶりに
^「へえ」
^としか反応できない。
s:次へ#mov(35)
m:15

[35]
n:トルタの推理
^「鹿の角は昔から、木と同一視されていたそうです。木は上へ上へと伸び、その様は蛇にも見立てられていた…特に松は、その皮が蛇の鱗によく似ており、蛇との関係は遠からぬものだったでしょう。となれば、鹿、松、蛇の順番は自然でしょう。」
^
^「うーむ。さすがの推理です。」
^
^「滅相もない。この考えがあっているかどうか分からないですし…。」
^
^ベミさんもトルタさんも、さすがだなと芦音たちは頷いた。
s:次へ#mov(36)
m:15

[36]
n:トルタの推理
^トルタは、自分の意見を他人と共有するのが好きなので、同部隊の<r>一風#いっぷう</r>にも聞いてもらうことにした。
^大鹿についての知識は、一風の受け売りの知識なので、合っているか少し不安でもあった。
^
^「…どうだい、この推理は。」
^
^「興味深いですね。黒縄への信仰は、半島をまたいで西海岸でも広がっていたと。」
^
^「おそらく、コルフォン帝国との争いについて、戦いの神としての信仰があったのではないかと思う。」
s:次へ#mov(37)

[37]
n:トルタの推理
^「煙石火薬はあの時代、銃火器を製造していたようですから、戦いの神の絵を飾るのは自然ですね。」
^
^「それと一つ、さっき思いついたんだが、それなら蛇だけでよくないか。本体は鹿ということはつまり…。」
^
^「大鹿山の、根の教会への信仰も現れているんでしょうか？」
^
^「そうだ。つまり、煙石と根の教会は、やはり無縁ではないんだ。」
^
^「なるほど。」
s:次へ#mov(38)

[38]
n:トルタの推理
^ふと、一風と根の教会の間にある深い因縁を思い出し、きまずい雰囲気が流れた。
^
^「…いや、でも古い話だから、いまも信仰が残っているとは…思わないが。」
^
^「…まあ、うーん。」
^
^「すまないな。なんだか無駄な心配事を増やしてしまったようで…」
^
^「いや、自分としては問題ないです。問題ないですが…爆薬は大丈夫でしょうかね。」
^
^「煙石火薬さんは十分信頼できると思うがなあ。品質試験が行われるから、そこで明らかになると思うが…」
s:次へ#mov(39)

[39]
n:品質試験
^品質試験は、エルフォノ支部の採石場で行われた。
^
^運搬した火薬は筒状に成形されており、岩に小孔をあけてそこに刺す。
^期待する爆発力は得られるのかと関係者が見守る中、
^大岩に見事な穴を穿ち威力抜群！安全性と保存性ともに合格。
^
^「これぞ爆発力…」と全員がため息を吐き、胸をなでおろした。
s:次へ#mov(40)

[40]
n:おわり
^トルタと一風の心配は杞憂に終わり、かくして、爆薬運搬任務は本格的に始動した。
^
^だが、一風は心の中に小さな疑念を持っていた。
^
^近く、大鹿が目覚めれば、その角も新たに生え替わるだろう。そして黒縄もまた目覚めるだろう。
^だが、老いた松はどうなる。
^生まれ変わることになるのか。
^これからも老い続けるのか。蛇にその身を食い破られるのか。それとも…その逆か。
^
^
^おわり

[41]
n:南煙石の港
^波の音が聞こえる。
^港には船がいくつかとまっている。
^
^この港にはとまっていないが、大鉱機の輸送船もここから見える。
^
^ふと、
^「こんにちは。ちょっと、すいません。」
^と、大きな鞄を背負った人が、こちらを見て話しかけてきた
s:次へ#mov(42)
m:4

[42]
n:謎の人物
^鞄の中は荷物で一杯だ。体を揺らす度に、小さなものがぶつかる音がする。
^「あれ、何の船なんでしょうか。」
^
^指さす先には輸送船がある。
^
^ふだんあそこに停泊する船はないだろうし、見慣れない船だろうから、疑問に思うのも無理はない。
^
^「あれは、大鉱機の輸送船です。」
s:次へ#mov(43)
m:4

[43]
n:謎の人物
^「大鉱機の…。え、じゃあやっぱり、お二人は大鉱機の方なんですね。」
^
^「はい。そうですが。やっぱりというのは？」
^
^「いや、服に大鉱機の紋章がついているから、もしかしたらと思って。いやあ、そうですか、お仕事も大変でしょう。大鹿山とかの情勢も不安定ですもんね。」
^
^湖青と芦音は顔を見合わせた。
^大鹿山の情勢を何で知っているんだ？もしかして、今回の爆薬運搬任務を知っているのか？
s:次へ#mov(44)
m:4

[44]
n:ウァルバ
^きつねにつままれたような顔の二人をみて、その人は笑顔で話し始めた。
^
^「申し遅れました、僕は香料師の、ウァルバといいます。よく大鹿に出向いて香料の取引をやっていまして、大鹿の事情を知っているのは、そういうことです。」
^
^なるほど。いろいろな場所を歩き、香料の奥深さを広めているらしい。
^諜報員かなにかというわけではないようだ。安心。
s:次へ#mov(45)
m:4

[45]
n:ウァルバ
^だけれど、どこまでウァルバは知っているんだろう。芦音は聞いてみた。
^「さようでしたか。しかし、大鉱機から大鹿山へすぐ連想するというのは、なかなかの情報通ですね。」
^
^「いやいや、とんでもない…いずれ大鉱機が大鹿山を制圧しにくると、みんな噂していまして、僕もそれを聞いて飛び出してきただけなんです。」
^「制圧…ですか。」
^
^実際そのとおりなのかもしれない。
^いま運搬している火薬は大鹿で採鉱を行うためのものだが、その標的はずばり、<b><r>竜軸#りゅうじく</r></b>だ。
s:次へ#mov(46)
m:4

[46]
n:竜軸
^竜軸の行動には鉱物が絡む。
^"竜軸の血"などが代表例だが、いずれにせよ竜軸が動かなくては作られない。
^そのため量が少なく、研究が進んでいないのが現状だ。
^
^今回の採鉱作戦は、出現したばかりの竜軸の組織を入手すること。
^
^だがそのためには、竜軸の儀式をとりおこなう、冠の隠者らとの交戦は避けられない。
^結果として、無関係の人にも戦火がふりかかるかもしれない。
s:次へ#mov(47)
m:4

[47]
n:いいにおい
^二人はなんだか申し訳ない気持ちになった。現に、目の前にいるウァルバさんの仕事にも影響しているのだから。
^
^「ああ、そうだ。実はかなりの上物を手に入れましてね。ぜひお二人もこの香りをかいでほしいのです。」
^しんみりした雰囲気は、ウァルバの笑い声で打ち消された。
^
^「まあ。どのような香りなのですか。」
^
^「こちらです。」
^そういって、ウァルバは、背中の鞄から瓶を取り出した。
s:次へ#mov(48)
m:4

[48]
n:いいにおい
^瓶の中には、薄い茶色の液体が入っていた。
^
^ウァルバにすすめられるままに香りをかぐと、濃厚な、甘い花の香りがした。
^なるほど。これはたしかに素晴らしい香りだ。
^
^「結構強い、甘い香りですね。これは一体、何の花ですか」
^
^「いいえ。花ではなく、シベットといわれる、動物性の香料です。」
^
^動物からとれたのか。それにしては、嫌な獣臭さとはかけ離れた良い香りだ。
s:次へ#mov(49)
m:4

[49]
n:いいにおい
^二人の驚く表情を見て、ウァルバはいたずらっぽく笑いながら言った。
^
^「驚くのはまだ早いですよ。…これに、糞便のにおいが混じっていると聞いたら、信じられますか。」
^
^「はああ、それはないでしょう。これほどいい香りと、糞便のにおいは、さすがに区別が付きますよ。」
^
^「可笑しいですよね。でもそうなんです。この香りは、かなり薄めたものなんです。もともとの濃さでは、鼻が曲がるほど、ひどいにおいなんですよ。」
s:次へ#mov(50)
m:4

//「糞便の匂い」とは、インドールのことです。(「動物性香料の未熟なもの、特にシベットなどはインドールが強く臭って、決して貴重な香料と思われないものである。」東海大学出版会　食品と香料（諸江辰男 著）p33より)

[50]
n:いいにおい
^信じられない…とまだ二人は疑っていたが、ウァルバはほほえみながら続けた。
^
^「ええ、そして逆に、主成分だけを抽出してかいだとしても、それは不十分なんです。それとは無関係の、無数の香りが一緒にいることで、"深み"や"幅"が出てくるんです。
^
^だから、わかりますか。この世は、どれかひとつの正義だけじゃ、あまりにもつまらない。いろんな、一見じゃまにみえるものでも、それはこの世界の調和に一役買ってるんです。」
s:次へ#mov(51)
m:4

[51]
n:いいにおい
^そんなものかなあ。ウァルバの説得力に気圧されて、二人はしばらくうんうん頷きながら聞いていた。
^
^ウァルバは、香料の奥深さを饒舌に語った後、
^「今は、平穏な土地を求めて旅をしているところです。」
^と言い残して、再び鞄を背負って、あてのない旅に出た。
^
^ウァルバの鼻腔が、調和のとれた香りで満たされる日は来るのだろうか。
^そう思いながら、二人も道を先に進んだ。
s:道を先に進む#mov(52)
m:4

[52]
n:交差点
^南に曲がれば目指す煙石火薬がある。
^このまま県道・煙石線を直進すると、半島の先端、煙石市にたどり着く。
^
^海辺には公園が見え、角には管轄署がある。
s:公園へ#mov(53)
s:管轄署へ#mov(55);geti(1);geti(2);
s:南へ#mov(56)
m:5

[53]
n:公園
^公園がある。
^花壇、長椅子、ぶらんこ、鉄棒、滑り台
^…古い大砲。
^
^「ねえ湖青。何であんなところに大砲があるんだろう。」
^
^「史跡か何かじゃないですか。ほら、説明してくれる看板がありますよ。」
s:看板を見る#mov(54)
m:6

[54]
n:看板
^「煙石の大砲
^
^かつてこの煙石半島をめぐる戦いが起こった際、この町では火薬を製造し、兵器として周辺の町や砦に配備しました。
^この大砲は、むかし実際に使われていたものです。」
^
^
^…なるほど。すっかり土埃をかぶっており、まさに鉄の筒というべき無骨さがあるが、たしかな歴史を感じる。
s:戻る#mov(52)
m:6

[55]
n:管轄署
^特に用事はない。
^
^地図と、南煙石町についての説明文が貼ってあったので、ノートに書き写した。
s:戻る#mov(52)
m:7

[56]
n:工場の近く
^コンテナが大量に置いてある広場が道の横にあり、何本か運搬用の線路が敷かれている。
^この土地も、煙石火薬の土地だろう。
^
^奥には煙石火薬の建物が見える。
^道の反対側には、小さな大衆食堂がある。
s:大衆食堂を見る#mov(57)
s:煙石火薬へ#mov(22)
m:8

[57]
n:大衆食堂
^「準備中」の札がかかっている。
^
^安心感のある大衆食堂だ。
^店内にも食べる場所があるのだろうが、店先にも長椅子と机がおいてあり、そこで食べることもできるようだ。
^
^店の壁にあるお品書きには…
^ニシンのベーコン巻き、塩漬けニシンの揚げびたし、燻製ニシンとジャガイモのサラダ
^…ニシンがいっぱいだ！
s:戻る#mov(56)
m:9

</map>
<end>`;
