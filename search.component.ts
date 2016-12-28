import {Component} from "@angular/core";
// 传递参数
import {Http, Response, URLSearchParams, ResponseOptions} from "@angular/http";

@Component({
  selector: "my-search",
  templateUrl: "./about.html"
})
export class SearchComponent {
  data:Array<Object>;
  inputVal:string;
  searchVal:string;

  constructor(public http:Http) {
    this.inputVal = "";
    this.searchVal = "";
  }

  changeVal(event:any) {
    console.log(event.target.value);
    this.inputVal = event.target.value;


    let params = new URLSearchParams();
    params.set("name", this.inputVal);
    params.set("password", "heping");
    console.log(params.toString());

    this.http.get("../data/list.json", {search: params.toString()}).subscribe((res:Response) => {
      this.data = res.json();
      console.log(res.json());
    });
  }

  // 单机赋值
  changeText(name) {
    console.log(name);
    this.searchVal = name;

    // 也可以不用搜索按钮, 如果选中提示问题直接搜索
    let params = "name=" + name;
    this.http.get("../data/list.json", {search: params}).subscribe((res: Response) => {
      console.log(res.json());
    });

    // 选中时候让列表为空
    this.data = [];
  }
}
