//========================================
//# セーブデータ #########################

//セーブデータの文字列を作る==============
function makesave(){
  let ans = "flg:";    //フラグ
  for(let i=0;i<flagArr.length;i++){
    if(flagArr[i]){
      ans += "t";
    }else{
      ans += "f";
    }
  }

  ans += "\nite:";     //アイテム
  for(let i=0;i<itemArr.length;i++){
    if(itemArr[i]["hav"]){
      ans += "t";
    }else{
      ans += "f";
    }
  }

  ans += "\nfie:" + page_number + "";  //ページ番号

  ans += "\nnum:" + numArr[0];     //番号
  for(let i = 1;i < numArr.length; i++){
    ans += "," + numArr[i];
  }

  return(ans);
}

//セーブデータのフォームへの書き出し ===============
function write_savefile(){
    try{
      let savedata = makesave();
      let t_savedata = document.getElementById("t_savedata")

      t_savedata.innerHTML = "";
      t_savedata.innerHTML = savedata;
      alert("セーブデータを下に書き出しました。\nセーブファイルにペーストして上書きしてください。");
      t_savedata.select();
      document.execCommand("copy");

    }catch{
      alert("エラーあり。")
    }
  }

//セーブデータのロード================
  function load_savefile(txt){
    document.getElementById("t_savedata").textContent = txt;

  txt = txt.replace(/\r\n/g,'\n'); //改行コードの統一
  txt = txt.replace(/\r/g, '\n');	 //改行コードの統一

    let Arr = txt.split("\n");
    for(let i = 0;i < Arr.length;i++){
      if(Arr[i].match(/flg:(.*)/)){  //フラグ
        for(let j = 0;j < RegExp.$1.length;j++){
          if(RegExp.$1.charAt(j) == "f"){
            flagArr[j] = false;
          }else{
            flagArr[j] = true;
          }
        }

      }else if(Arr[i].match(/ite:(.*)/)){       //道具
        for(let j = 0; j < RegExp.$1.length; j++){
          if(RegExp.$1.charAt(j) == "f"){
            //itemArr[j]["hav"] = false;
            losi(j);
          }else{
            itemArr[j]["hav"] = true;
            geti(j);
          }
        }
      }else if(Arr[i].match(/fie:(.*)/)){       //ページ名
        page_number = parseInt(RegExp.$1);
      }else if(Arr[i].match(/num:(.*)/)){       //ページ名
        numArr = RegExp.$1.split(",");
      }
    }
    ite_reflesh();
    mov(page_number);
    alert("ロードされました。");
  }



  //もとに戻す==================================
  function remov(){
    if (save_data_breadcrumbArr.length <= 1){ //セーブパンくずがない場合（初期値）
      alert("戻せません");
    }else{
      save_data_breadcrumbArr.shift();
      load_savefile(save_data_breadcrumbArr.shift());//セーブパンくずの最初の要素が１つ前のセーブデータ
	  
	  /* やっていることは何か?
	  save_data_breadcrumbArr(これまで進んできたページのパンくずリスト)には、セーブデータの文字列が入っている。
	  仮にＡページ→Ｂページ→Cページの順に移動する場合を考える。
	  それぞれのページにいるときのセーブデータ文字列をa, b, cとすると以下のように処理が行われる。
		
    1. Aページにいるとき			save_data_breadcrumbArr=[a]
    2. Bページに移動したあと		save_data_breadcrumbArr=[b,a]
    3. Cページに移動したあと		save_data_breadcrumbArr=[c,b,a]
		↑
		3.でremov()実行時、
      ① まずsave_data_breadcrumbArr.shift()→ [b,a]だけ残る
			② つぎにload_savefile(save_data_breadcrumbArr.shift()) ←load_savefile(b)と同じことをしている
        shiftによりsave_data_breadcrumbArrは一時的に[a]のみ残る。
      ③ load_savefile(b)によりBページに移動
			④ movによりsave_data_breadcrumbArrの先頭にbがunshiftされる
			⑤ 結果としてBページに移動したうえでsave_data_breadcrumbArr=[b,a]。上のリストでいうところの2.に移動する
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
			let ifskip = window.confirm("次に来る、選択肢が複数あるページまでスキップしますか？（この先にそのようなページがない場合は、最後のページまでスキップされます）");

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

  //「最初から」==============================
  function fromScratch(){
    let ifscratch = window.confirm("進捗を最初に戻しますか？この操作は取り消せません。");
    save_data_breadcrumbArr = [];
    if(ifscratch){
      let temp_save= "flg:";
      
      for(let i = 0; i<flagArr.length;i++){
        temp_save +="f";
      }
      
      temp_save +="\nite:";
      
      for(let j = 0; j<itemArr.length;j++){
        temp_save +="f";
      }
      
      temp_save += "\nfie:0\nnum:0"
      for(let k = 0; k<numArr.length-1;k++){
        temp_save +=",0";
      }
      
      load_savefile(temp_save);
    }
  }
