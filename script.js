var flagArr = [];  //フラグ
var itemArr = [];  //アイテム[nam:名前, exp:説明, hav:true/falseで所有]
var pageArr = [];  //フィールド[nam:名前, exp:説明, sel:[選択肢名, 実行文章]]
var page_number = 0;      //フィールド番号
var numArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  //番号配列（フラグの補助的）

//---------------
var map_src = "";
var local_mapArr =[];
//----------------

var if_under_writable = false;

    //gotoタブを実装
var tabnamearr = {};
    //ーーーーー

var ifAuthor = false;

var breadcrumbs = []; //セーブデータの配列。パンくず。


//通常モード、前ページ閲覧モードの文章
const ToTSUJO= "→通常モード";
const ToZENPAGE="→全ページ閲覧モード";

//ページ選択テーブルのソート======================================================
function sort_story_select_table(){
		var way = document.getElementById("way_sel").value; //降順？昇順？
		var category = document.getElementById("category_sel").value; //どのカテゴリーでソート？
		var table = document.getElementById("story_select_table"); //表

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
		var tabDiv_select = document.getElementById("tabDiv_select");
		var tabDiv_setting = document.getElementById("tabDiv_setting");
		var tabDiv_page = document.getElementById("tabDiv_page");
		
		if(header.style.display == "none"){
			tab_close.innerHTML = "↑非表示";
			header.style.display = "block";

			tabDiv_select.className= "tabDiv";
			tabDiv_setting.className= "tabDiv";
			tabDiv_page.className = "tabDiv";
		}else{
			tab_close.innerHTML = "↑ 表示";
			header.style.display = "none";

			tabDiv_select.className= "tabDiv tabDiv_without_header";
			tabDiv_setting.className= "tabDiv tabDiv_without_header";
			tabDiv_page.className = "tabDiv tabDiv_without_header";
		}

	}
//ヘッダータブの変更=========================================================
	function change_tab(selected_tab){
		var li_setting = document.getElementById("li_setting");
		var li_select = document.getElementById("li_select");
		var li_page = document.getElementById("li_page");
		var li_summary = document.getElementById("li_summary");
    
		var tabDiv_setting = document.getElementById("tabDiv_setting");
		var tabDiv_select = document.getElementById("tabDiv_select");
		var tabDiv_page = document.getElementById("tabDiv_page");
		var tabDiv_summary = document.getElementById("tabDiv_summary");

		var li_arr = [li_setting, li_select, li_page, li_summary];
		var tabDiv_arr = [tabDiv_setting, tabDiv_select, tabDiv_page, tabDiv_summary];

		//選ばれたタブに当たるli要素と、それ以外の要素の見た目を変更する
		//また、選ばれたタブを表示し、それ以外は非表示にする
		for(var i = 0; i < li_arr.length; i++){
			if(i==selected_tab){
				li_arr[i].className = "active-li";
				tabDiv_arr[i].style.display="block";
			}else{
				li_arr[i].className = "non-active_li";
				tabDiv_arr[i].style.display="none";
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
	var tabDiv_page = document.getElementById("tabDiv_page");
	var reibun = document.getElementById("reibun");

	// スクロールバーなどに反映し直す
	tabDiv_page.style.fontSize = p + "px";
	reibun.style.fontSize = p + "px";

	fontsize_range.value = p;
	fontsize_number.value = p;

}

//画面(tabDiv)横幅の変更==========================================================
function change_tabDivwidth(p="60"){

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
	var tabDiv_width_range = document.getElementById("tabDiv_width_range");
	var tabDiv_width_number = document.getElementById("tabDiv_width_number");

	tabDiv_width_range.value = p;
	tabDiv_width_number.value = p;

	//各tabDivクラスのものに横幅を設定していく
	var tabDiv_select = document.getElementById("tabDiv_select");
	var tabDiv_setting = document.getElementById("tabDiv_setting");
	var tabDiv_page = document.getElementById("tabDiv_page");
	var tabDiv_arr = [tabDiv_select, tabDiv_setting, tabDiv_page];


	for(var i=0; i<tabDiv_arr.length; i++){
		tabDiv_arr[i].style.width = p + "%";
	}
}

//設定のリセット(横幅、左揃え、フォントサイズ)==========================================================
function reset_setting(){
 	var chb_yokohaba = document.getElementById("chb_yokohaba");
	var chb_align_center = document.getElementById("chb_align_center");

	chb_align_center.checked = false;

	change_align_center();
	change_fontsize();
	change_tabDivwidth();
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

		get_item_alert(false);

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
  sort_story_select_table();
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
  tow_temp=page_number+step;

  //選択ページ番号がオーバーフローしないか
  if(tow_temp >=0 && tow_temp<pageArr.length){
    mov(tow_temp);
  }
}

//セレクト リストのリセットと書き直し=====================================================
function all_page_sel_clean(){
  var all_page_sel = document.getElementById("all_page_sel");

  all_page_sel.length = 0;

  for(var i=0; i<pageArr.length;i++){
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
    if(pageArr.length != 0){
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
            flagArr[j] = false;
          }else{
            flagArr[j] = true;
          }
        }

      }else if(arr[i].match(/ite:(.*)/)){       //道具
        for(var j = 0; j < RegExp.$1.length; j++){
          if(RegExp.$1.charAt(j) == "f"){
            //itemArr[j]["hav"] = false;
            losi(j);
          }else{
            itemArr[j]["hav"] = true;
            geti(j);
          }
        }
      }else if(arr[i].match(/fie:(.*)/)){       //ページ名
        page_number = parseInt(RegExp.$1);
      }else if(arr[i].match(/num:(.*)/)){       //ページ名
        numArr = RegExp.$1.split(",");
      }
    }
    ite_reflesh();
    mov(page_number);
    alert("ロードされました。");
  }



  //セーブデータ書き込み=========================================================
  function makesave(){
    var ans = "flg:";    //フラグ
    for(var i=0;i<flagArr.length;i++){
      if(flagArr[i]){
        ans += "t";
      }else{
        ans += "f";
      }
    }

    ans += "\nite:";     //アイテム
    for(var i=0;i<itemArr.length;i++){
      if(itemArr[i]["hav"]){
        ans += "t";
      }else{
        ans += "f";
      }
    }

    ans += "\nfie:" + page_number + "";  //ページ番号

    ans += "\nnum:" + numArr[0];     //番号
    for(var i = 1;i < numArr.length; i++){
      ans += "," + numArr[i];
    }

    return(ans);
  }


  //=======================================
  //ページデータを整形して得る
  function load_data(scr, temp_if_under_writable=false){
    
    /* 下に積み上げて表示するか(するならtrue) */
    if_under_writable = temp_if_under_writable;

    //最初からボタンを表示（この前後で、straight_movで非表示になる可能性がある）
    document.getElementById("fromScratch").style.display="inline-block";

    
    scr = scr.replace(/\r\n/g,'\n'); //改行コードの統一
    scr = scr.replace(/\r/g, '\n');	 //改行コードの統一
    
    document.getElementById("map_button").style.display="none"; //「マップ」ボタンは基本的に出さない
    var arr = scr.split("\n");
    var myRE = new RegExp("flag:(.+)>");

		flagArr = [];
		itemArr = [];
		pageArr = [];
		numArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    map_src="";
    local_mapArr= [];
    
		breadcrumbs = [];

    //gotoタブを実装
    tabnamearr = {};
    //ーーーーー

		page_number = 0;

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
          flagArr = new Array(parseInt(RegExp.$1));
          for(var j=0;j<flagArr.length;j++){
            flagArr[j]=false;   //flagarrの初期化
          }
          i++;
        }
        //「アイテム」タグ
        if(arr[i].match(/item:(.+)>/)){
          itemArr = new Array(parseInt(RegExp.$1));

          for(;i<arr.length;i++){     //タグの終わりまでforを続行する
            if(arr[i].match(/<\/item>/)){  //タグの終わり
              break;
            }else{
              //アイテムタグを、名前と説明に分ける
              if(arr[i].match(/\[(.+?)\](.+?)#(.+)/)){
                itemArr[parseInt(RegExp.$1)] =
									{nam: OpenInlineTag(RegExp.$2),
									exp: OpenInlineTag(RegExp.$3),
									hav:false};
									//名前、説明文、所持しているか(初期値はfalse)
              }
            }
          }
          i++;
        }
        
        if(arr[i].match(/mapimg:(.+)>/)){//マップがあるとき、「マップ」ボタンを出し、表示させる
          document.getElementById("map_button").style.display="inline-block";
          map_src = "Assist/" + RegExp.$1 + "/map/";
          
        }
        
        if(arr[i].match(/BFmap:([0-9]+)>/)){
            arr = BFtoBTAP(arr, i);
				}

				//「マップ(フィールド)」タグ
				if(arr[i].match(/map:([0-9]+)>/)){
					pageArr = new Array(parseInt(RegExp.$1));
					var temp_map=0;

					for(;i<arr.length;i++){    //タグの終わりまでforを続行する
						if(arr[i] == "</map>"){  //タグの終わり
							break;
						}else{

							if(arr[i].match(/\[(.+?)\]/)){  //フィールド番号
								temp_map=parseInt(RegExp.$1);
								pageArr[temp_map]={nam: "", exp:"", sel:[]};

              //Gotoタブ実装==第0ページの上(<map>タグ直下)には、タブをおかない！tob()しても第「1」ページに飛んでしまう！
              }else if(arr[i].match(/===(.+)===/)){
                tabnamearr[RegExp.$1] = temp_map + 1;

              //======================================================
							}else if(arr[i].match(/n:(.+)/)) {  //名前
								pageArr[temp_map]["nam"] = OpenInlineTag(RegExp.$1);

							}else if(arr[i].match(/e:(.+)/)) {  //説明文
								pageArr[temp_map]["exp"] = OpenInlineTag(RegExp.$1);

							}else if(arr[i].match(/\^\^(.*)$/)){  //改行を簡潔にした説明文
								pageArr[temp_map]["exp"] += OpenInlineTag(RegExp.$1);

							}else if(arr[i].match(/\^(.*)$/)){  //改行を簡潔にした説明文
								pageArr[temp_map]["exp"] += OpenInlineTag(RegExp.$1) + "<br>";

							}else if(arr[i].match(/v:(.*)$/)){  //v要素（道具の内容を描写タブ部にかく）
								pageArr[temp_map]["exp"] += itemArr[parseInt(RegExp.$1)]["exp"] + "<br>";

							}else if(arr[i].match(/s:(.+)#(.+)/)) { //選択肢
								pageArr[temp_map]["sel"].push(new Array(RegExp.$1, RegExp.$2));
                
							}else if(arr[i].match(/m:(.+)m(.+)/)) { //マップのレイヤー
								local_mapArr.push(new Array(temp_map, RegExp.$1, parseInt(RegExp.$2)));
							}else if(arr[i].match(/m:(.+)/)) { //マップのレイヤー
								local_mapArr.push(new Array(temp_map, RegExp.$1, 1));
							}
						}
					}
				}
			}


      //pageArrとitemArrの内容を、＊JSON形式で＊、d_descに表示するには…
      /*var jstr = JSON.stringify({"fie": pageArr,"ite":itemArr});
      document.getElementById("d_desc").innerText = jstr;
      break; */
			document.getElementById("button_redo_and_skip").style.display="inline-block";

      var all_page_mode = document.getElementById("all_page_mode");

      if(all_page_mode.textContent==ToZENPAGE){
        show_introduction();
      }else{
        all_page_sel_clean();
      }
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
    }else if((ifpage == 1) &&
            !(arr[i].match(/s:/)) &&
            !(arr[i].match(/v:/)) &&
            !(arr[i].match(/m:/))){ //e要素に「^」を追加
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
					+ pageArr[page_number]["nam"]
					+ "</span></p><div>"
                    + pageArr[page_number]["exp"]
					+ '</div><div style="display:inline-block;text-align:left"><ul>';
		}else{
			exp_for_textarea = pageArr[page_number]["exp"];
			exp_for_textarea = exp_for_textarea.replace(/<br>/g,'\n');
			exp_for_textarea = exp_for_textarea.replace(/<\/?ruby>/g,'');
			exp_for_textarea = exp_for_textarea.replace(/<\/?rt>/g,'');
			exp_for_textarea = exp_for_textarea.replace(/<\/?rp>/g,'');
			exp_for_textarea = exp_for_textarea.replace(/<\/?b>/g,'**');
			//exp_for_textarea = exp_for_textarea.replace("<br>","\n");
			var ans = '<button style="font-size:150%" onclick="copy_textarea_memo()">コピー</button>'
          +'<button style="font-size:150%" onclick="delete_textarea_memo()">クリア</button>'
          +'<textarea id="title_textarea" style="font-size:36px;font-weight:bold;width:368px;border-radius:0px;border:gray solid 1px;padding:0px;" rows="1">'
					+ pageArr[page_number]["nam"]
					+ '</textarea><textarea id="desc_textarea" style="width:368px;font-size:18px;border-radius:0px;border:gray solid 1px;padding:0px;" rows="20">'
                    + exp_for_textarea
					+ '</textarea>';


		}
    //ページの選択肢
    for(var i=0;i<pageArr[page_number]["sel"].length;i++){
      ans += '<li class="li_sel" onclick="' + pageArr[page_number]["sel"][i][1] + '">'
                        + pageArr[page_number]["sel"][i][0] + "</li>";
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
  function fie_title_write(page_number){
    var temp = 
          '<p class="page-title"><span style="font-size:200%;font-weight:bold;">'
            + pageArr[page_number]["nam"]
            + "</span></p>";
    return(temp);
  }
  //=============================================================================
  function fie_exp_write(page_number){
    var temp = "<div>" 
          + pageArr[page_number]["exp"]
          + '</div>';
    return(temp);
  }
  
  //===========================================================================
  function straight_mov(){  //movという名前だが、下に積み上げ式のfie表示
    page_number = 0;
    
    //下に積み上げて表示するなら、「最初から」ボタンは表示しないで良い
    document.getElementById("fromScratch").style.display="none";
    
    var page=document.getElementById("d_desc"); 
    var ans ="";  //最終表示内容
    
    
    //====[ 表示する内容 ]=====
    //0ページ目、および、前のページとタイトルが違うページ： タイトル(nam) & 内容(exp)
    //                               それ以外： 内容(exp)のみ
    //
    //全ページをforで走査して、ansに表示事項を積み上げる。
    
    for(var each_page_number=0; each_page_number< pageArr.length; each_page_number++){
      if(each_page_number != 0){ 
        if(pageArr[each_page_number-1]["nam"] == pageArr[each_page_number]["nam"]){ 
          ans += "<br>" + fie_exp_write(each_page_number)+ "<br><hr>"; //0ページ目ではなく、名前は前と同じな場合
        }else{
          ans += fie_title_write(each_page_number) +  fie_exp_write(each_page_number) + "<br><hr>"; //0ページ目ではなく、名前は前と違う場合
        }
      }else{
        ans += fie_title_write(each_page_number) +  fie_exp_write(each_page_number) + "<br><hr>"; //0ページの場合
      }
    }
    
    page.innerHTML = ans; //表示
    
  }

	//========================================================================
	//イントロダクションのモーダルメニューを閉じる
function close_modal() {
  document.getElementById("modalDiv").style.display = "none";
}

function open_map(){
  document.getElementById("modalDiv").style.display = "block";
}

	//ローカルマップ============================================================
function mapping(mokuji){
  var page=document.getElementById("abst_desc");
  
  var map = "";
  var ifmapappoint = false; //m:タグでマップが指定されている？されていなければ1に。
  
  if(map_src==""){
    map = "このページではマップが用意されておりません。";
  }else{
    for(var i=0;i<local_mapArr.length; i++){
      if(local_mapArr[i][0]==mokuji){
        map += '<img src="' + map_src + local_mapArr[i][1] + '.png" style="position:absolute; width:80%; left:10%;z-index:2"/>';
        map += '<img src="' +  map_src  + 'map' + local_mapArr[i][2] + '.png" style="position:absolute;  width:80%; left:10%;z-index:1"/>';
        ifmapappoint = true;
        break;
      }
    }
   
    if(!ifmapappoint){
      map+= '<img src="' +  map_src  + 'map1.png" style="position:absolute;  width:80%; left:10%;z-index:1"/>';
    }
  }
    page.innerHTML = map;
}

	//========================================================================

	//イントロダクションを表示
	function show_introduction(){
    var page=document.getElementById("abst_desc");
    document.getElementById("modalDiv").style.display="inline-block";
    
		var abst = '<p><span style="font-size:200%;font-weight:bold;">' + pageArr[page_number]["nam"] + "</span></p>";

		abst += '<div style="display:inline-block;text-align:left;"><ul><li class="li_sel" onclick="close_modal();change_tab(2);scrollTo(0,0);mov(0);">始める</li>';
    
    //===========================
    
    if(if_under_writable){
      abst += '<li class="li_sel" onclick="close_modal();change_tab(2);scrollTo(0,0);straight_mov();">下に積み上げて表示</li>';
    }
    
    //===========================
    abst += '</ul></div>';                          

		//ページ数
		abst += "<p>[ ページ数 : " + pageArr.length + " ]</p>";

		//リードミー
		abst += "<p>[ リードミー ]<br>" + itemArr[itemArr.length-1]["exp"] + "</p>";

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

    for(var i=0;i<itemArr.length;i++){
      if(itemArr[i]["hav"]){
        //「もちもの」タブにラジオボタンを追加する。
        item_sel.innerHTML += '<label><input type="radio" name="item" onclick="' +
                                'document.getElementById(&quot;d_item_exp&quot;).innerHTML=&quot;' +
                                itemArr[i]["exp"] + '&quot;"/>' +
                                itemArr[i]["nam"] + "</label><br>";
      }
    }
  }
  //新アイテム獲得！アラートを発する==============================
  function get_item_alert(ifalert){
		var button_openitem = document.getElementById("button_openitem");

		button_openitem.style.display="inline-block";

		if(ifalert){
			button_openitem.className="tool_button openitem get_item_alert";
		}else{
			button_openitem.className="tool_button openitem";
		}
	}


  //アイテム欄をリフレッシュする。戻るなど==============================
  function ite_reflesh(){
    var if_hav_any_item = false;  
    //アイテムが存在していないなら、「アイテムを表示」ボタンは表示させないための判定
    for(var i=0; i< itemArr.length;i++){
      if(itemArr[i]["hav"]){
        geti(i);
        if_hav_any_item = true;
      }
    } 

    hide_item();
    
    var button_openitem = document.getElementById("button_openitem");
		button_openitem.className="tool_button openitem";
    
    //アイテムが存在していないなら、「アイテムを表示」ボタンは表示させない
    if(!if_hav_any_item){
      button_openitem.style.display="none";    
    }
  } 

  //もとに戻す==================================
  function remov(){
    if (breadcrumbs.length <= 1){ //セーブパンくずがない場合（初期値）
      alert("戻せません");
    }else{
      breadcrumbs.shift();
      load_savefile(breadcrumbs.shift());//セーブパンくずの最初の要素が１つ前のセーブデータ
	  
	  /*　やっていることは何か
	  　breadcrumbs(これまで進んできたページのパンくずリスト)には、セーブデータの文字列が入っている。
	  　仮にＡページ→Ｂページ→Cページの順に移動する場合を考える。
	  それぞれのページにいるときのセーブデータ文字列をa, b, cとすると
		
	  　1. Aページにいるとき			breadcrumbs=[a]
	  　2. Bページに移動したあと		breadcrumbs=[b,a]
	  　3. Cページに移動したあと		breadcrumbs=[c,b,a]
		↑
		3.でremov()実行時	① まずbreadcrumbs.shift()→ [b,a]だけ残る
							② つぎにload_savefile(breadcrumbs.shift()) ←load_savefile(b)と同じ
								shiftによりbreadcrumbsは一時的に[a]のみ残る。
							③ load_savefile(b)によりBページに移動
							④ movによりbreadcrumbsの先頭にbがunshiftされる
							⑤ 結果としてBページに移動したうえでbreadcrumbs=[b,a]。上のリストでいうところの2.に移動する
	  */
    }
  }

  //選択肢スキップ==============================
  function pageskip(){

		if(pageArr.length == 0){ //まだページが選択されていない
			alert("スキップできません");
		}else if(pageArr[page_number]["sel"].length == 0){
			alert("現在のページでおわりです。");
		}else if(pageArr[page_number]["sel"].length != 1){
			alert("現在のページには選択肢が複数あるため、スキップできません。");
		}else{
			var ifskip = window.confirm("次に来る、選択肢が複数あるページまでスキップしますか？（この先にそのようなページがない場合は、最後のページまでスキップされます）");

			if(ifskip){
				while(1){
					if (pageArr[page_number]["sel"].length == 1){  //選択肢数が1の時、その先へ
						eval(pageArr[page_number]["sel"][0][1]);
					}else{
						//alert("スキップしました");  //複数選択肢があるページ、もしくはページの終わり(選択肢0)までスキップ
						break;
					}
				}
			}
		}
  }

  //選択肢スキップ==============================
  function fromScratch(){
    var ifscratch = window.confirm("進捗を最初に戻しますか？この操作は取り消せません。");
    breadcrumbs = [];
    if(ifscratch){
      //load_data(scr, if_under_writable);
      var temp_save= "flg:";
      
      for(var i = 0; i<flagArr.length;i++){
        temp_save +="f";
      }
      
      temp_save +="\nite:";
      
      for(var j = 0; j<itemArr.length;j++){
        temp_save +="f";
      }
      
      temp_save += "\nfie:0\nnum:0"
      for(var k = 0; k<numArr.length-1;k++){
        temp_save +=",0";
      }
      
      load_savefile(temp_save);
    }
  }

	//テキスト形式のストーリーファイル読み込み
	function load_txt_data(){
		try{
		  var myFile = document.getElementById("myfile").files[0];
		  
		  var reader = new FileReader();
		  
		  reader.onload = function (evt){
			var txt = evt.target.result;
			load_data(txt);   //load_dataへとテキストを送る
		  }
		  
		  reader.readAsText(myFile, "utf-8");
		  document.getElementById("form_page").reset();
		  
		}catch{
		  alert("ファイル選択にエラーがあります。");
		}
	}
	
  //スクリプトでかける関数=========================================================-
  //マップ移動
  function mov(tow) {
    page_number = tow;
    var temp  =makesave();
    breadcrumbs.unshift(temp);  //セーブを追加、パンくずを追加する
    
    //========-
    mapping(tow);
    //=========
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
		if(!itemArr[n]["hav"]){
			get_item_alert(true);
		}

    itemArr[n]["hav"]=true;
    display_ite();
  }

  //アイテムをなくす
  function losi(n){
    itemArr[n]["hav"]=false;
    ite_reflesh();
    display_ite();
  }

  //フラグtrueに
  function onflg(n){
    flagArr[n]=true;
  }

  //フラグfalseに
  function offlg(n){
    flagArr[n]=false;
  }

  //フラグがtrueか
  function iflg(n){
    return(flagArr[n]);
  }

  //道具を持っているか
  function hav(n){
    return(itemArr[n]["hav"]);
  }

  //document.getElementById(id).innerHTML = str の糖衣
  function gebi(id, str){
    document.getElementById(id).innerHTML = str;
  }

  //番号の書き込み
  function wnum(i, num){
    numArr[i] = num;
  }

  //番号の読み込み
  function rnum(i){
    return(numArr[i]);
  }

  //numArrの引き算(numArr要素からnumArr要素を引く)
  function nminn(n1, n2){
    numArr[n1] -= numArr[n2];
  }

  //numArrの引き算(numArr要素から実際に数字を引く)
  function nminx(n, x){
    numArr[n] -= x;
  }


  //numArrの足し算(numArr要素にnumArr要素を足す)
  function naddn(n1, n2){
    numArr[n1] += numArr[n2];
  }

  //numArrの足し算(numArr要素に実際に数字を足す)
  function naddx(n, x){
    numArr[n] += x;
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
