var flgarr = [];  //フラグ
var itearr = [];  //アイテム[nam:名前, exp:説明, hav:true/falseで所有]
var fiearr = [];  //フィールド[nam:名前, exp:説明, sel:[選択肢名, 実行文章]]
var fie = 0;      //フィールド番号
var numarr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  //番号配列（フラグの補助的）

var if_down_showable = false;

    //gotoタブを実装
var tabnamearr = {};
    //ーーーーー

var ifAuthor = false;

var breadcrumbs = []; //セーブデータの配列。パンくず。


//通常モード、前ページ閲覧モードの文章
const ToTSUJO= "→通常モード";
const ToZENPAGE="→全ページ閲覧モード";

//ページ選択テーブルのソート======================================================
function sort_page_sel_table(){
		var way = document.getElementById("way_sel").value; //降順？昇順？
		var category = document.getElementById("category_sel").value; //どのカテゴリーでソート？
		var table = document.getElementById("page_sel_table"); //表

    //定数欄=====================
		const sub_name_clm = 0;
    const file_name_clm = 1;
		const series_clm = 2;
		const made_clm = 3;
		const history_clm = 4;
    //==========================
		if(way == "ascend"){
			way = 1;
		}else{
			way = -1;
		}

		switch (category){
			case "made":
				category = made_clm;break;
			case "series":
				category = series_clm;break;
			case "history":
				category = history_clm;break;
			default:
				break;
		}

    //新しい表の順番を記録する配列
		var jun=[];
    //[ rowのクリック時処理, [innerHTML、innerText] ]
  
		for (i = 1; i < table.rows.length; i++) {
			temp_jun = [table.rows[i].onclick];
			for(j = 0; j<table.rows[i].cells.length; j++){
				temp_jun.push(
				[table.rows[i].cells[j].innerHTML,
				table.rows[i].cells[j].innerText]);
			}
			jun.push(temp_jun);
		}

		jun.sort(function(a, b) {
			if (parseInt(a[category+1][1]) > parseInt(b[category+1][1])) {
				return 1*way;
			} else {
				return -1*way;
			}
		});


		for (i = 1; i < table.rows.length; i++) {
      table.rows[i].onclick = jun[i-1][0];
			for(j = 0; j < table.rows[i].cells.length; j++){
				table.rows[i].cells[j].innerHTML = jun[i-1][j+1][0];
			}
		}
	}
//=タブを閉じる================================================================
	function tab_close(){
		var tab_close= document.getElementById("tab_close_button");
		var header= document.getElementById("header");
		var ran_select = document.getElementById("ran_select");
		var ran_setting = document.getElementById("ran_setting");
		var ran_page = document.getElementById("ran_page");
		/* var tab_yajirushi = document.getElementById("tab_yajirushi"); */

		if(header.style.display == "none"){
			tab_close.innerHTML = "タブ非表示";
			/* tab_yajirushi.className="yajirushi_close"; */
			header.style.display = "block";

			ran_select.className= "ran";
			ran_setting.className= "ran";
			ran_page.className = "ran";
		}else{
			tab_close.innerHTML = "タブ 表示";
			/* tab_close.className = "tool_button tab_open"; */
			/* tab_yajirushi.className="yajirushi_open"; */
			header.style.display = "none";

			ran_select.className= "ran ran_without_header";
			ran_setting.className= "ran ran_without_header";
			ran_page.className = "ran ran_without_header";
		}

	}
//ヘッダータブの変更=========================================================
	function change_li(selected_li){
		var li_setting = document.getElementById("li_setting");
		var li_select = document.getElementById("li_select");
		var li_page = document.getElementById("li_page");
		var li_summary = document.getElementById("li_summary");
    
		var ran_setting = document.getElementById("ran_setting");
		var ran_select = document.getElementById("ran_select");
		var ran_page = document.getElementById("ran_page");
		var ran_summary = document.getElementById("ran_summary");

		var li_arr = [li_setting, li_select, li_page, li_summary];
		var ran_arr = [ran_setting, ran_select, ran_page, ran_summary];

		for(var i = 0; i < li_arr.length; i++){
			if(i==selected_li){
				li_arr[i].className = "active-li";
				ran_arr[i].style.display="block";
			}else{
				li_arr[i].className = "non-active_li";
				ran_arr[i].style.display="none";
			}
		}
	}

//ページを左揃えにする--================================================================
  function change_align_center(){
    var chb_align_center = document.getElementById("chb_align_center");
    var desc_and_item = document.getElementById("desc_and_item");

    if(chb_align_center.checked){
      desc_and_item.style.textAlign = "center";
    }else{
      desc_and_item.style.textAlign = "left";
    }
  }


//フォントサイズの変更==========================================================
function change_fontsize(p = "18"){
	const MAX = "30";
	const VALUE = "18";
	const MIN = "12";

	var parseInt_result = parseInt(p);
	if (isNaN(parseInt_result)){
		p = VALUE;
	}else{
		if(parseInt_result < 12){
			p = MIN;
		}else if (parseInt_result > 30){
			p = MAX;
		}
	}

	var fontsize_range = document.getElementById("fontsize_range");
	var fontsize_number = document.getElementById("fontsize_number");
	var ran_page = document.getElementById("ran_page");
	var reibun = document.getElementById("reibun");

	// スクロールバーなどに反映し直す
	ran_page.style.fontSize = p + "px";
	reibun.style.fontSize = p + "px";

	fontsize_range.value = p;
	fontsize_number.value = p;

}

//画面(ran)横幅の変更==========================================================
function change_ranwidth(p="60"){

	var parseInt_result = parseInt(p);

	if (isNaN(parseInt_result)){
		p = "60";
	}else{
		if(parseInt_result < 0){
			p = "0";
		}else if (parseInt_result > 100){
			p = "100";
		}
	}

	// スクロールバーなどに反映し直す
	var ran_width_range = document.getElementById("ran_width_range");
	var ran_width_number = document.getElementById("ran_width_number");

	ran_width_range.value = p;
	ran_width_number.value = p;

	//各ranクラスのものに横幅を設定していく
	var ran_select = document.getElementById("ran_select");
	var ran_setting = document.getElementById("ran_setting");
	var ran_page = document.getElementById("ran_page");
	var ran_arr = [ran_select, ran_setting, ran_page];


	for(var i=0; i<ran_arr.length; i++){
		ran_arr[i].style.width = p + "%";
	}
}

//設定のリセット(横幅、左揃え、フォントサイズ)==========================================================
function reset_setting(){
 	var chb_yokohaba = document.getElementById("chb_yokohaba");
	var chb_align_center = document.getElementById("chb_align_center");

	chb_align_center.checked = false;

	change_align_center();
	change_fontsize();
	change_ranwidth();
}
//アイテム欄の表示・非表示(3関数で1セット)==========================================================
function hide_item(){
	var d_item = document.getElementById("d_item");
  var button_openitem = document.getElementById("button_openitem");

	d_item.style.display = "none";
  button_openitem.innerHTML = "↓アイテムを表示";
}

function unvail_item(){
	var d_item = document.getElementById("d_item");
  var button_openitem = document.getElementById("button_openitem");

	d_item.style.display = "inline-block";
  button_openitem.innerHTML = "↑アイテムを非表示";
}

  function show_item(){
    var d_item = document.getElementById("d_item");
    var button_openitem = document.getElementById("button_openitem");

		geti_alert(false);


	  if(d_item.style.display == "none"){
      unvail_item();
    }else{
      hide_item();
    }
  }
//カラースキームの変更==========================================================
function change_colorscheme(colorscheme_name) {
	var colorscheme = document.getElementById("colorscheme");
	colorscheme.href = "Colors/" + colorscheme_name + ".css";
}


window.addEventListener('DOMContentLoaded', function() {
  sort_page_sel_table();
});

//開発者モード==================================================================
function password_insert(){
	var password = prompt("パスワード？");
	if(password == "mmm"){
		ifAuthor= true;

		//全ページ閲覧モード
		document.getElementById("all_page_mode").textContent= ToZENPAGE;
		alert(document.getElementById("all_page_mode").textContent);
		all_page_mode_change();

	}else{
		alert("パスワードが違います");
	}
}

//全ページモードで、セレクトリストで選んだ時================================================
function all_page_mov(tow){
  tow = parseInt(tow);
  mov(tow);
}

//全ページモードで、←、→ボタンで選んだ時=======================================
function all_page_step(step){
  var all_page_sel = document.getElementById("all_page_sel");
  tow_temp=fie+step;

  //選択ページ番号がオーバーフローしないか
  if(tow_temp >=0 && tow_temp<fiearr.length){
    mov(tow_temp);
  }
}

//セレクト リストのリセットと書き直し=====================================================
function all_page_sel_clean(){
  var all_page_sel = document.getElementById("all_page_sel");

  all_page_sel.length = 0;

  for(var i=0; i<fiearr.length;i++){
    let op = document.createElement('option');
    op.text=i;
    op.value=i;
    all_page_sel.appendChild(op);
  }

  mov(0);
  all_page_sel.selectedIndex=0;
}


//通常モード、前ページ閲覧モードの入れ替え=================================================
function all_page_mode_change(){


  var all_page_mode = document.getElementById("all_page_mode");
  var all_page_sel = document.getElementById("all_page_sel");
  var all_page_view = document.getElementById("all_page_view");

  //全ページ閲覧モードへの移行
  if (all_page_mode.textContent== ToZENPAGE){
    all_page_mode.textContent= ToTSUJO;
    all_page_view.style.display ="inline-block";

    //ページがロードされているならば、いったんリセットしてセレクト リストを書き直す。さもなくば何もしない
    if(fiearr.length != 0){
      all_page_sel_clean();
    }

  //通常モードへの移行
  }else{
    all_page_mode.textContent= ToZENPAGE;
    all_page_view.style.display ="none";
  }
}


//================
//セーブデータの書き出し
function write_savefile(){
    try{
      var savedata = makesave();
      var t_savedata = document.getElementById("t_savedata")

      t_savedata.innerHTML = "";
      t_savedata.innerHTML = savedata;
      alert("セーブデータを下に書き出しました。\nセーブファイルにペーストして上書きしてください。");
      t_savedata.select();
      document.execCommand("copy");

    }catch{
      alert("エラーあり。")
    }
  }

//================
//セーブデータのロード
  function load_savefile(txt){
    document.getElementById("t_savedata").textContent = txt;

  txt = txt.replace(/\r\n/g,'\n'); //改行コードの統一
  txt = txt.replace(/\r/g, '\n');	 //改行コードの統一

    var arr = txt.split("\n");
    for(var i = 0;i < arr.length;i++){
      if(arr[i].match(/flg:(.*)/)){             //フラグ
        for(var j = 0;j < RegExp.$1.length;j++){
          if(RegExp.$1.charAt(j) == "f"){
            flgarr[j] = false;
          }else{
            flgarr[j] = true;
          }
        }

      }else if(arr[i].match(/ite:(.*)/)){       //道具
        for(var j = 0; j < RegExp.$1.length; j++){
          if(RegExp.$1.charAt(j) == "f"){
            itearr[j]["hav"] = false;
          }else{
            itearr[j]["hav"] = true;
          }
        }
      }else if(arr[i].match(/fie:(.*)/)){       //ページ名
        fie = parseInt(RegExp.$1);
      }else if(arr[i].match(/num:(.*)/)){       //ページ名
        numarr = RegExp.$1.split(",");
      }
    }

    show_page();
    alert("ロードされました。")
  }



  //セーブデータ書き込み=========================================================
  function makesave(){
    var ans = "flg:";    //フラグ
    for(var i=0;i<flgarr.length;i++){
      if(flgarr[i]){
        ans += "t";
      }else{
        ans += "f";
      }
    }

    ans += "\nite:";     //アイテム
    for(var i=0;i<itearr.length;i++){
      if(itearr[i]["hav"]){
        ans += "t";
      }else{
        ans += "f";
      }
    }

    ans += "\nfie:" + fie + "";  //ページ番号

    ans += "\nnum:" + numarr[0];     //番号
    for(var i = 1;i < numarr.length; i++){
      ans += "," + numarr[i];
    }

    return(ans);
  }


  //=======================================
  //ページデータを整形して得る
  function load_data(scr, temp_if_down_showable=false){
    
    /* 下に積み上げて表示するか(するならtrue) */
    if_down_showable = temp_if_down_showable;
    
    scr = scr.replace(/\r\n/g,'\n'); //改行コードの統一
    scr = scr.replace(/\r/g, '\n');	 //改行コードの統一

    var arr = scr.split("\n");
    var myRE = new RegExp("flag:(.+)>");

		flgarr = [];
		itearr = [];
		fiearr = [];
		numarr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		breadcrumbs = [];

    //gotoタブを実装
    tabnamearr = {};
    //ーーーーー

		fie = 0;

		//アイテム欄の非表示
		hide_item();
		document.getElementById("button_openitem").style.display="none";

    if(!arr[0].match(/flag:(.+)>/)){
      alert("ページデータとして不適なものが選択されました。");
    }else{

      //走査する
      for(i=0;i<arr.length;i++){
        //「フラグ」タグ
        if(arr[i].match(/flag:(.+)>/)){
          flgarr = new Array(parseInt(RegExp.$1));
          for(var j=0;j<flgarr.length;j++){
            flgarr[j]=false;   //flagarrの初期化
          }
          i++;
        }
        //「アイテム」タグ
        if(arr[i].match(/item:(.+)>/)){
          itearr = new Array(parseInt(RegExp.$1));

          for(;i<arr.length;i++){     //タグの終わりまでforを続行する
            if(arr[i].match(/<\/item>/)){  //タグの終わり
              break;
            }else{
              //アイテムタグを、名前と説明に分ける
              if(arr[i].match(/\[(.+?)\](.+?)#(.+)/)){
                itearr[parseInt(RegExp.$1)] =
									{nam: OpenInlineTag(RegExp.$2),
									exp: OpenInlineTag(RegExp.$3),
									hav:false};
									//名前、説明文、所持しているか(初期値はfalse)
              }
            }
          }
          i++;
        }
        if(arr[i].match(/BFmap:([0-9]+)>/)){
            arr = BFtoBTAP(arr, i);
				}

				//「マップ(フィールド)」タグ
				if(arr[i].match(/map:([0-9]+)>/)){
					fiearr = new Array(parseInt(RegExp.$1));
					var temp_map=0;

					for(;i<arr.length;i++){    //タグの終わりまでforを続行する
						if(arr[i] == "</map>"){  //タグの終わり
							break;
						}else{

							if(arr[i].match(/\[(.+?)\]/)){  //フィールド番号
								temp_map=parseInt(RegExp.$1);
								fiearr[temp_map]={nam: "", exp:"", sel:[]};

              //Gotoタブ実装==第0ページの上(<map>タグ直下)には、タブをおかない！tob()しても第「1」ページに飛んでしまう！
              }else if(arr[i].match(/===(.+)===/)){
                tabnamearr[RegExp.$1] = temp_map + 1;

              //======================================================
							}else if(arr[i].match(/n:(.+)/)) {  //名前
								fiearr[temp_map]["nam"] = OpenInlineTag(RegExp.$1);

							}else if(arr[i].match(/e:(.+)/)) {  //説明文
								fiearr[temp_map]["exp"] = OpenInlineTag(RegExp.$1);

							}else if(arr[i].match(/\^\^(.*)$/)){  //改行を簡潔にした説明文
								fiearr[temp_map]["exp"] += OpenInlineTag(RegExp.$1);

							}else if(arr[i].match(/\^(.*)$/)){  //改行を簡潔にした説明文
								fiearr[temp_map]["exp"] += OpenInlineTag(RegExp.$1) + "<br>";

							}else if(arr[i].match(/v:(.*)$/)){  //v要素（道具の内容を描写タブ部にかく）
								fiearr[temp_map]["exp"] += itearr[parseInt(RegExp.$1)]["exp"] + "<br>";

							}else if(arr[i].match(/s:(.+)#(.+)/)) { //選択肢
								fiearr[temp_map]["sel"].push(new Array(RegExp.$1, RegExp.$2));
							}
						}
					}
				}
			}


      //fiearrとitearrの内容を、＊JSON形式で＊、d_descに表示するには…
      /*var jstr = JSON.stringify({"fie": fiearr,"ite":itearr});
      document.getElementById("d_desc").innerText = jstr;
      break; */
			document.getElementById("button_redo_and_skip").style.display="inline-block";

      var all_page_mode = document.getElementById("all_page_mode");

      if(all_page_mode.textContent==ToZENPAGE){
        show_introduction();
      }else{
        all_page_sel_clean();
      }

      //ここていい！？
			//change_li(2);
			//scrollTo(0,0);
		}
	}

  //BFstyle to BTAP=========================================================
  function BFtoBTAP(arr,n){
  var ifpage = 0; //ページ編集中？（空白文字が改行かページ区切りかの判別に）
  var temp_num = -1;
  var back_num = temp_num-1;
  var front_num = temp_num+1;

  for(var i = n; i< arr.length;i++){
    if(arr[n].match(/BFmap:([0-9]+)/)){  //改行を簡潔にした説明文
      arr[n].replace(/BFmap:([0-9]+)/g, "map:($1)");
    }

    //map部おわり
    if(arr[i] == "</map>"){
      break;
    }

    //ページ開始
    if(arr[i].match(/\[(.+)/)){
      temp_num++;
      back_num = temp_num - 1;
      front_num = temp_num + 1;
      arr[i] = "[" + temp_num + "]" ;
      arr.splice(i+1, 0, "n:" + RegExp.$1); //"n:" + RegExp.$1);//n要素の追加
      i++;
      ifpage = 1;

    }else if(arr[i].match(/\]/)){
      if(arr[i].match(/bf/)){//前後に壁
        arr[i] = "";
      }else if(arr[i].match(/b\]/)){//後ろに壁
        arr[i] = "s:次へ#mov(" + front_num + ")";
      }else if(arr[i].match(/f\]/)){//後ろに壁
        arr[i] = "s:戻る#mov(" + back_num + ")";
      }else{//前後に壁無し
        arr.splice(i,1,"s:次へ#mov(" + front_num +")", "s:戻る#mov(" + back_num +")");
      }
      ifpage = 0;
    }else if((ifpage == 1) && !(arr[i].match(/s:/)) && !(arr[i].match(/v:/)))　{ //e要素に「^」を追加
      arr[i] = "^" + arr[i];
    }
  }

  return(arr);
  }

//ルビやハイパーリンクなどのBTAPタブをHTMLになおす。==============================

	function OpenInlineTag(scr){
		var ans = scr;

		//ルビの設定<r> => <ruby>
		ans = ans.replace(/<r>(.+?)#(.+?)<\/r>/g, "<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>");

		//ハイパーリンクの設定 <hl> => <span>
		ans = ans.replace(/<hl>(.+?)#(.+?)<\/hl>/g, "<span onclick=\"$2\" class=\"hl-border\">$1</span>");

		return(ans);
	}

  //==============================================================================
  //「ページ」タブの表示
  function show_page(){
    var page=document.getElementById("d_desc");
    //ページ名＆ページ説明div

		if(!ifAuthor){
			var ans = '<p class="page-title"><span style="font-size:200%;font-weight:bold;">'
					+ fiearr[fie]["nam"]
					+ "</span></p><div>"
                    + fiearr[fie]["exp"]
					+ '</div><div style="display:inline-block;text-align:left"><ul>';
		}else{
			exp_for_textarea = fiearr[fie]["exp"];
			exp_for_textarea = exp_for_textarea.replace(/<br>/g,'\n');
			exp_for_textarea = exp_for_textarea.replace(/<\/?ruby>/g,'');
			exp_for_textarea = exp_for_textarea.replace(/<\/?rt>/g,'');
			exp_for_textarea = exp_for_textarea.replace(/<\/?rp>/g,'');
			exp_for_textarea = exp_for_textarea.replace(/<\/?b>/g,'**');
			//exp_for_textarea = exp_for_textarea.replace("<br>","\n");
			var ans = '<button style="font-size:150%" onclick="copy_textarea_memo()">コピー</button>'
          +'<button style="font-size:150%" onclick="delete_textarea_memo()">クリア</button>'
          +'<textarea id="title_textarea" style="font-size:36px;font-weight:bold;width:368px;border-radius:0px;border:gray solid 1px;padding:0px;" rows="1">'
					+ fiearr[fie]["nam"]
					+ '</textarea><textarea id="desc_textarea" style="width:368px;font-size:18px;border-radius:0px;border:gray solid 1px;padding:0px;" rows="20">'
                    + exp_for_textarea
					+ '</textarea>';


		}
    //ページの選択肢
    for(var i=0;i<fiearr[fie]["sel"].length;i++){
      ans += '<li class="li_sel" onclick="' + fiearr[fie]["sel"][i][1] + '">'
                        + fiearr[fie]["sel"][i][0] + "</li>";
    }
    ans += "</ul></div>";

    page.innerHTML = ans;


  }

//クリップボードにコピー==================================================================
function copy_textarea_memo() {

  var titl = document.getElementById("title_textarea");
  var desc = document.getElementById("desc_textarea");

  var ans = "[" 
    + titl.value
    + "\n"
    + desc.value
    + "\nb]\n";
    
  navigator.clipboard.writeText(ans)
}
//================================================================================
function delete_textarea_memo() {

  var desc = document.getElementById("desc_textarea");

  desc.innerHTML = "";
}
  //=============================================================================
  function fie_title_write(fie){
    var temp = 
          '<p class="page-title"><span style="font-size:200%;font-weight:bold;">'
            + fiearr[fie]["nam"]
            + "</span></p>";
    return(temp);
  }
  //=============================================================================
  function fie_exp_write(fie){
    var temp = "<div>" 
          + fiearr[fie]["exp"]
          + '</div>';
    return(temp);
  }
  
  //===========================================================================
  function straight_mov(){  //movという名前だが、下に積み上げ式のfie表示
    fie = 0;
    
     
    var page=document.getElementById("d_desc"); 
    var ans ="";  //最終表示内容
    
    
    //====[ 表示する内容 ]=====
    //0ページ目、および、前のページとタイトルが違うページ： タイトル(nam) & 内容(exp)
    //                               それ以外： 内容(exp)のみ
    //
    //全ページをforで走査して、ansに表示事項を積み上げる。
    
    for(var eachfie=0; eachfie< fiearr.length; eachfie++){
      if(eachfie != 0){ 
        if(fiearr[eachfie-1]["nam"] == fiearr[eachfie]["nam"]){ 
          ans += "<br>" + fie_exp_write(eachfie)+ "<br><hr>"; //0ページ目ではなく、名前は前と同じな場合
        }else{
          ans += fie_title_write(eachfie) +  fie_exp_write(eachfie) + "<br><hr>"; //0ページ目ではなく、名前は前と違う場合
        }
      }else{
        ans += fie_title_write(eachfie) +  fie_exp_write(eachfie) + "<br><hr>"; //0ページの場合
      }
    }
    
    page.innerHTML = ans; //表示
    
  }

	//========================================================================
	//イントロダクションのモーダルメニューを閉じる
function close_modal() {
  document.getElementById("modal_abst").style.display = "none";
}





	//イントロダクションを表示
	function show_introduction(){
    var page=document.getElementById("abst_desc");
    document.getElementById("modal_abst").style.display="inline-block";
    
		var abst = '<p><span style="font-size:200%;font-weight:bold;">' + fiearr[fie]["nam"] + "</span></p>";

		abst += '<div style="display:inline-block;text-align:left;"><ul><li class="li_sel" onclick="close_modal();change_li(2);scrollTo(0,0);mov(0);">始める</li>';
    
    //===========================
    
    if(if_down_showable){
      abst += '<li class="li_sel" onclick="close_modal();change_li(2);scrollTo(0,0);straight_mov();">下に積み上げて表示</li>';
    }
    
    //===========================
    abst += '</ul></div>';                          

		//ページ数
		abst += "<p>[ ページ数 : " + fiearr.length + " ]</p>";

		//リードミー
		abst += "<p>[ リードミー ]<br>" + itearr[itearr.length-1]["exp"] + "</p>";

    //スマホでの見切れ対策。空白入れる。
    abst += "<br><br><br>";
    
		page.innerHTML = abst;
	}



  //アイテムの有無でオプションボタンを変える===========================================
  function display_ite(){
    var item_sel = document.getElementById("d_item_sel");
    var item_exp = document.getElementById("d_item_exp");
    item_exp.innerHTML="";
    item_sel.innerHTML="";

    for(var i=0;i<itearr.length;i++){
      if(itearr[i]["hav"]){
        //「もちもの」タブにラジオボタンを追加する。
        item_sel.innerHTML += '<label><input type="radio" name="item" onclick="' +
                                'document.getElementById(&quot;d_item_exp&quot;).innerHTML=&quot;' +
                                itearr[i]["exp"] + '&quot;"/>' +
                                itearr[i]["nam"] + "</label><br>";
      }
    }
  }
  //新アイテム獲得！アラートを発する==============================
  function geti_alert(ifalert){
		var button_openitem = document.getElementById("button_openitem");

		button_openitem.style.display="inline-block";

		if(ifalert){
			button_openitem.className="tool_button openitem geti_alert";
		}else{
			button_openitem.className="tool_button openitem";
		}
	}



  //もとに戻す==================================
  function remov(){
    if (breadcrumbs.length <= 1){ //セーブパンくずがない場合（初期値）
      alert("戻せません");
    }else{
      breadcrumbs.shift();
      load_savefile(breadcrumbs[0]);//セーブパンくずの最初の要素が１つ前のセーブデータ
    }
  }

  //選択肢スキップ==============================
  function pageskip(){

		if(fiearr.length == 0){ //まだページが選択されていない
			alert("スキップできません");
		}else if(fiearr[fie]["sel"].length == 0){
			alert("現在のページでおわりです。");
		}else if(fiearr[fie]["sel"].length != 1){
			alert("現在のページには選択肢が複数あるため、スキップできません。");
		}else{
			var ifskip = window.confirm("次に来る、選択肢が複数あるページまでスキップしますか？（この先にそのようなページがない場合は、最後のページまでスキップされます）");

			if(ifskip){
				while(1){
					if (fiearr[fie]["sel"].length == 1){  //選択肢数が1の時、その先へ
						eval(fiearr[fie]["sel"][0][1]);
					}else{
						//alert("スキップしました");  //複数選択肢があるページ、もしくはページの終わり(選択肢0)までスキップ
						break;
					}
				}
			}
		}
  }



  //スクリプトでかける関数=========================================================-
  //マップ移動
  function mov(tow) {
    fie = tow;
    breadcrumbs.unshift(makesave());  //セーブを追加、パンくずを追加する

    //全ページ閲覧モードなら、セレクト リストに反映する
    var all_page_mode = document.getElementById("all_page_mode");
    if(all_page_mode.textContent == ToTSUJO){
      all_page_sel.selectedIndex=tow;
    }

    show_page();
  }

  //タブGoto実装-=-----------------------------------------------------------------
  function tob(tow){
    mov(tabnamearr[tow]);
  }
  //===========================================================================
  //アイテム獲得
  function geti(n){
		if(!itearr[n]["hav"]){
			geti_alert(true);
		}

    itearr[n]["hav"]=true;
    display_ite();
  }

  //アイテムをなくす
  function losi(n){
    itearr[n]["hav"]=false;
    display_ite();
  }

  //フラグtrueに
  function onflg(n){
    flgarr[n]=true;
  }

  //フラグfalseに
  function offlg(n){
    flgarr[n]=false;
  }

  //フラグがtrueか
  function iflg(n){
    return(flgarr[n]);
  }

  //道具を持っているか
  function hav(n){
    return(itearr[n]["hav"]);
  }

  //document.getElementById(id).innerHTML = str の糖衣
  function gebi(id, str){
    document.getElementById(id).innerHTML = str;
  }

  //番号の書き込み
  function wnum(i, num){
    numarr[i] = num;
  }

  //番号の読み込み
  function rnum(i){
    return(numarr[i]);
  }

  //numarrの引き算(numarr要素からnumarr要素を引く)
  function nminn(n1, n2){
    numarr[n1] -= numarr[n2];
  }

  //numarrの引き算(numarr要素から実際に数字を引く)
  function nminx(n, x){
    numarr[n] -= x;
  }


  //numarrの足し算(numarr要素にnumarr要素を足す)
  function naddn(n1, n2){
    numarr[n1] += numarr[n2];
  }

  //numarrの足し算(numarr要素に実際に数字を足す)
  function naddx(n, x){
    numarr[n] += x;
  }

  //Math.randomの糖衣
  function rand(){
    return(Math.random());
  }

  //Math.floorの糖衣
  function flor(x){
    return(Math.floor(x));
  }

  //Math.ceilの糖衣
  function ceil(x){
    return(Math.ceil(x));
  }
