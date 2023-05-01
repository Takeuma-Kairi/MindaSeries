/* 数値
0:こちらの体力
1:こちらの攻撃力
2:こちらの脅威度
3:あいての体力
4:あいての攻撃力
5:相手の脅威
6:倒した敵の数

 */

var Shoba_enemy_arr = [[2,10,20,[0.5, 0, 1,0]]];
var Shoba_enemy_i = 0;

function Shoba_show_parameter(){
	gebi('HP',rnum(0));
	gebi('AP',rnum(1));
	gebi('TP',rnum(2));
	gebi('EHP',rnum(3));
	gebi('EAP',rnum(4));
	gebi('ETP',rnum(5));
}
/* Shoba_enemy_arr[Shoba_enemy_i][0])
Shoba_enemy_arr[Shoba_enemy_i][1])
Shoba_enemy_arr[Shoba_enemy_i][2]) */


function Shoba_turn_result(n){
	var ans = "";
	
	switch(n){
		case 0:
			ans = "おどかした！";
			nminx(5, rnum(1));
			if(rnum(5) <= 0){
				ans += "相手は逃げていった。";
			}else{
				ans += "相手は何もしていない。";
			}
			break;
		case 1:
			ans = "攻撃した！";
			break;
		case 2:
			ans = "身構えた！";
			break;
	}
	gebi("EXPLAIN", ans);
}

var Shoba = `<flag:0>
<item:1>
[0]リードミー#しょばしょばしょば1.重要な注意ーーーーーーーーーー<br>省略。注意事項は後述。<br><br>2.あらすじーーーーーーーーーーー<br>大鹿山の五黒家が、異教の長である、根の教会の指導者ちょけに会いに行く。<br><br>3.登場人物ーーーーーーーーーーー<br>・黒頭富美<br>二面岩鏡番の番頭。馬蹄の教会の教徒。<br><br>・黒羽みお<br>ぼやき癖がある。臆病。<br><br>・黒菜善十<br>しっかりもの。<br><br>・ちょけ<br>冠の隠者と呼ばれる。根の教会の指導者。人間の見た目を保ったまま、大陸の一部となっている。<br><br>・カルズ<br>根の教会の教徒。外部の人間との交渉役。大鹿山の地理に詳しい<br><br>・リーファス<br>無口。根の教会のもとで五黒家を護衛する<br><br>4.注意事項ーーーーーーーーーーー<br>このページデータ内のストーリーはフィクションであり、登場する人物名、団体名等は実在のものではありません。<br>また、書かれている説明が、実際と異なる場合があります。<br>書かれている内容は作者の意見を代弁するものではなく、特定の意見を主張するものでもありません。<br><br>1版2版3版<br>2021.4.　竹馬浬
</item>

<map:3>
[0]
n:しょうば
^おきたよ
^
^ 
^番号：ーーー
s:次へ#wnum(0, 5);wnum(1, 10);wnum(2, 30);wnum(3, 2);wnum(4, 10);wnum(5, 20);wnum(6, 0);mov(1);

[1]
n:戦いの前に
^
s:次へ#mov(2);Shoba_show_parameter()

[2]
n:闘いの記録
^～～自分たち～～
^攻撃力：<span id="AP"></span>　　怖さ：<span id="TP"></span>　　体力：<span id="HP"></span>
^
^～～相手～～
^体力：<span id="EHP"></span>　　攻撃力：<span id="EAP"></span>　　脅威度：<span id="ETP"></span>
s:おどかす#mov(3);Shoba_turn_result(0)
s:攻撃する#mov(4);Shoba_turn_result(1)
s:身構える#mov(5);Shoba_turn_result(2)


[3]
n:おどかした！
^<span id="EXPLAIN"></span>
^
s:次へ#mov(2);Shoba_show_parameter()

[4]
n:攻撃した！
^
s:次へ#mov(2);Shoba_show_parameter()

[5]
n:身構えた！
^
s:次へ#mov(2);Shoba_show_parameter()
`;

